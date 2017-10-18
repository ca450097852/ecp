package com.hontek.sys.model;

/**
 * <p>Title: 机构类别实体类</p>
 * <p>Description: 机构类别</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public class TsEntType{
	
	private Integer typeId;
	
	private String typeName;

	private String remarks;

	
	public TsEntType() {
		super();
	}

	public TsEntType(Integer typeId, String typeName, String remarks) {
		super();
		this.typeId = typeId;
		this.typeName = typeName;
		this.remarks = remarks;
	}

	public Integer getTypeId() {
		return typeId;
	}

	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "EntType [typeId=" + typeId + ", typeName=" + typeName
				+ ", remarks=" + remarks + "]";
	}

	
}
