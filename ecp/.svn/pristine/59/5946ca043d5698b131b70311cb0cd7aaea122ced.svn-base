package com.hontek.comm.base;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.hontek.comm.model.Combo;

/**
 * <p>Title: </p>
 * <p>Description: Service 实现类基类</p>
 * <p>Copyright: Copyright (c) 2014</p>
 * <p>Company: **公司</p>
 * @author ZH
 * @version 1.0
 */
public class BaseServiceImpl {
    
    /**
     * 验证手机号码是否正确
     * @param mobile
     * @return
     */
    public boolean matchMobile(String mobile){  	
    	Pattern p = Pattern.compile("^[1][34578]\\d{9}$");
        Matcher m = p.matcher(mobile);
        return m.matches();
    }
    
    /**
     * 字符集转换
     * @param str
     * @return
     * @throws UnsupportedEncodingException
     */
    public String convertString(String str) throws UnsupportedEncodingException{
    	if(str==null||"".equals(str)){
    		return "";
    	}else{
    		return new String(str.toString().getBytes("GBK"),"iso8859-1");
    	}
    }
    
    
    /**
     * 下拉转换
     * @param list
     * @return
     */
    public String getSelectOptions(List<Combo> list){
    	StringBuffer buffer = new StringBuffer("");
    	for (Combo treeVo : list) {
    		buffer.append("<option value='");
    		buffer.append(treeVo.getValue());
    		buffer.append("'>");
    		buffer.append(treeVo.getText());
    		buffer.append("</option>");
		}
    	return buffer.toString();
    }
}
