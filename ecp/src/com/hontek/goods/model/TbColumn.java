package com.hontek.goods.model;
/**
 * 
* <p>Title: 商品栏目实体类</p>
* <p>Description: 商品栏目</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public class TbColumn {
	private Integer columnId;
	private Integer parentId;
	private String columnImg;
	private String columnNo;
	private String columnName;
	private Integer orderby;
	private String crttime;
	
	private String parentName;
	
	public TbColumn(Integer columnId, Integer parentId, String columnImg,
			String columnNo, String columnName, Integer orderby, String crttime, String parentName) {
		super();
		this.columnId = columnId;
		this.parentId = parentId;
		this.columnImg = columnImg;
		this.columnNo = columnNo;
		this.columnName = columnName;
		this.orderby = orderby;
		this.crttime = crttime;
		this.parentName = parentName;
	}
	public TbColumn() {
		super();
	}
	public Integer getColumnId() {
		return columnId;
	}
	public void setColumnId(Integer columnId) {
		this.columnId = columnId;
	}
	public Integer getParentId() {
		return parentId;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public String getColumnImg() {
		return columnImg;
	}
	public void setColumnImg(String columnImg) {
		this.columnImg = columnImg;
	}
	public String getColumnNo() {
		return columnNo;
	}
	public void setColumnNo(String columnNo) {
		this.columnNo = columnNo;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public Integer getOrderby() {
		return orderby;
	}
	public void setOrderby(Integer orderby) {
		this.orderby = orderby;
	}
	public String getCrttime() {
		return crttime;
	}
	public void setCrttime(String crttime) {
		this.crttime = crttime;
	}
	public String getParentName() {
		return parentName;
	}
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	
}
