package com.hontek.comm.interceptor;

import java.util.Properties;

import org.apache.ibatis.executor.statement.RoutingStatementHandler;
import org.apache.ibatis.executor.statement.StatementHandler;
import java.sql.Connection; 

import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;

import com.hontek.comm.util.ReflectUtil;
import com.hontek.comm.util.SearchPageUtil;

/**
 *分页拦截器，自动进行分页查询 
 *支持EasyUI表格排序
 */
@Intercepts({@Signature(method="prepare",type=StatementHandler.class,args={Connection.class})})
public class PageInterceptor implements Interceptor{
	 private String databaseType;// 数据库类型，不同的数据库有不同的分页方法 
	@Override
	public Object intercept(Invocation invocation) throws Throwable {
		 final RoutingStatementHandler handler = (RoutingStatementHandler) invocation.getTarget();  
		 final StatementHandler delegate = (StatementHandler) ReflectUtil.getFieldValue(handler, "delegate");  
		 final BoundSql boundSql = delegate.getBoundSql();  
		 final Object obj = boundSql.getParameterObject();  
		 
		 if(obj instanceof SearchPageUtil){
			 String sql = boundSql.getSql();
			 
			 if(sql.indexOf("count(*)")!=-1||sql.indexOf("COUNT(*)")!=-1){//统计跳过
				 return invocation.proceed();
			 }
			 //查询加上分页和排序
			 if(sql.startsWith("select")||sql.startsWith("SELECT")){			 
				 SearchPageUtil page = (SearchPageUtil) obj;				 
				 //添加排序
				 String order = page.getOrder();
				 String sort = page.getSort();
				 String s = sortCondtion(sort, order);
				 if (s != null && !"".equals(s)) {
					 sql += s;
				 }			 
				 String pageSql = this.getPageSql(page, sql);  
		            // 利用反射设置当前BoundSql对应的sql属性为我们建立好的分页Sql语句  
		         ReflectUtil.setFieldValue(boundSql, "sql", pageSql);  
			 }
		 }
		 
		return invocation.proceed();
	}

	@Override
	public Object plugin(Object target) {
		// TODO Auto-generated method stub
		return Plugin.wrap(target, this);
	}

	@Override
	public void setProperties(Properties properties) {
		this.databaseType = properties.getProperty("databaseType");  
	}
	
	
	
	public void setDatabaseType(String databaseType) {
		this.databaseType = databaseType;
	}

	/** 
     * 根据page对象获取对应的分页查询Sql语句，这里只做了两种数据库类型，Mysql和Oracle 其它的数据库都 没有进行分页 
     *  
     * @param page 
     *            分页对象 
     * @param sql 
     *            原sql语句 
     * @return 
     */  
    private String getPageSql(SearchPageUtil page, String sql) {  
        final StringBuffer sqlBuffer = new StringBuffer(sql);  
        if ("mysql".equalsIgnoreCase(databaseType)) {  
            return getMysqlPageSql(page, sqlBuffer);  
        } else if ("oracle".equalsIgnoreCase(databaseType)) {  
            return getOraclePageSql(page, sqlBuffer);  
        }  
        return sqlBuffer.toString();  
    }  
	
	/** 
     * 获取Mysql数据库的分页查询语句 
     *  
     * @param page 
     *            分页对象 
     * @param sqlBuffer 
     *            包含原sql语句的StringBuffer对象 
     * @return Mysql数据库分页语句 
     */  
    private String getMysqlPageSql(SearchPageUtil page, StringBuffer sqlBuffer) {  
        // 计算第一条记录的位置，Mysql中记录的位置是从0开始的。  
        int offset = page.getOffset();
		if(offset==0){
	        offset = (page.getPage()-1)*page.getRows();  
		}
        sqlBuffer.append(" limit ").append(offset).append(",").append(page.getRows());  
        return sqlBuffer.toString();  
    }  

    /** 
     * 获取Oracle数据库的分页查询语句 
     *  
     * @param page 
     *            分页对象 
     * @param sqlBuffer 
     *            包含原sql语句的StringBuffer对象 
     * @return Oracle数据库的分页查询语句 
     */  
    private String getOraclePageSql(SearchPageUtil page, StringBuffer sqlBuffer) {  
        // 计算第一条记录的位置，Oracle分页是通过rownum进行的，而rownum是从1开始的  
        int offset = (page.getPage()) * page.getRows() + 1;  
        sqlBuffer.insert(0, "select u.*, rownum r from (").append(") u where rownum < ")  
                .append(offset + page.getRows());  
        sqlBuffer.insert(0, "select * from (").append(") where r >= ").append(offset);  
        // 上面的Sql语句拼接之后大概是这个样子：  
        // select * from (select u.*, rownum r from (select * from t_user) u  
        // where rownum < 31) where r >= 16  
        return sqlBuffer.toString();  
    } 
    
    
    /**
	 * 将排序条件封装
	 * @param sort
	 * @param order
	 * @return
	 */
	public String sortCondtion(String sort,String order){
		StringBuffer condition = new StringBuffer(""); 
		//注意sort和order的顺序
		if(sort!=null&&!"".equals(sort)&&order!=null&&!"".equals(order)){
			condition.append(" order by ");
			String [] sortArray = sort.split(",");
			String [] orderArray = order.split(",");
			for (int i = 0; i < orderArray.length; i++) {
				condition.append(sortArray[i]);
				condition.append(" ");
				condition.append(orderArray[i]);
				if(i<orderArray.length-1){
					condition.append(", ");
				}
			}			
		}
		return condition.toString();
	}
	
	/**
	 * 将排序条件封装
	 * @param sort
	 * @param order
	 * @param defalutSort 默认排序
	 * @return
	 */
	public String sortCondtion(String sort,String order,String defalutSort){
		StringBuffer condition = new StringBuffer(" order by "); 
		//注意sort和order的顺序
		if(sort!=null&&!"".equals(sort)&&order!=null&&!"".equals(order)){
			String [] sortArray = sort.split(",");
			String [] orderArray = order.split(",");
			for (int i = 0; i < orderArray.length; i++) {
				condition.append(sortArray[i]);
				condition.append(" ");
				condition.append(orderArray[i]);
				if(i<orderArray.length-1){
					condition.append(", ");
				}
			}			
		}else{
			condition.append(defalutSort);
		}
		return condition.toString();
	}
}
