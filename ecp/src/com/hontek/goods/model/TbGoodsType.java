package com.hontek.goods.model;
/**
 * 商品分类表
 * @author lzk
 *
 */
public class TbGoodsType {
	private Integer typeId;
	private Integer upcateId;
	private String typeNo;
	private String typeName;
	private int entId;
	private int sts; //1启用； 2停用
	private String typeImg;
	
	private Integer _parentId ; //easyUI 树形字段
	private String upcateName;
	
	public String getTypeImg() {
		return typeImg;
	}
	public void setTypeImg(String typeImg) {
		this.typeImg = typeImg;
	}
	public Integer get_parentId() {
		return _parentId;
	}
	public void set_parentId(Integer _parentId) {
		this._parentId = _parentId;
	}
	public Integer getTypeId() {
		return typeId;
	}
	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}
	public Integer getUpcateId() {
		return upcateId;
	}
	public void setUpcateId(Integer upcateId) {
		this.upcateId = upcateId;
	}
	public String getTypeNo() {
		return typeNo;
	}
	public void setTypeNo(String typeNo) {
		this.typeNo = typeNo;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public int getEntId() {
		return entId;
	}
	public void setEntId(int entId) {
		this.entId = entId;
	}
	public int getSts() {
		return sts;
	}
	public void setSts(int sts) {
		this.sts = sts;
	}
	public String getUpcateName() {
		return upcateName;
	}
	public void setUpcateName(String upcateName) {
		this.upcateName = upcateName;
	}
	
	
}
