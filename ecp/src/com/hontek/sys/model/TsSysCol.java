package com.hontek.sys.model;

import java.util.List;

/**
 * <p>Title: 栏目菜单实体类</p>
 * <p>Description: 栏目菜单</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */

public class TsSysCol {

	private Integer colId;
	
	private String colName;
	
	private Integer _parentId;
	
	private String remarks;
	
	private String colUrl;
	
	private Integer colLevel;
	
	private Integer seq;
	
	private String iconUrl;

	//非数据库字段
	private Integer roleId;
	private List<TsSysCol> clildrenList;

	
	public TsSysCol() {
		super();
	}

	public TsSysCol(Integer _parentId) {
		super();
		this._parentId = _parentId;
	}
	
	/**
	 * @param id
	 * @param colName
	 * @param parentId
	 * @param remarks
	 * @param colUrl
	 * @param colLevel
	 * @param seq
	 * @param iconUrl
	 */
	public TsSysCol(Integer id, String colName, Integer _parentId, String remarks,
			String colUrl, Integer colLevel, Integer seq, String iconUrl) {
		super();
		this.colId = id;
		this.colName = colName;
		this._parentId = _parentId;
		this.remarks = remarks;
		this.colUrl = colUrl;
		this.colLevel = colLevel;
		this.seq = seq;
		this.iconUrl = iconUrl;
	}

	public Integer getColId() {
		return colId;
	}

	public void setColId(Integer colId) {
		this.colId = colId;
	}

	public String getColName() {
		return colName;
	}

	public void setColName(String colName) {
		this.colName = colName;
	}

	public Integer get_parentId() {
		return _parentId;
	}

	public void set_parentId(Integer _parentId) {
		this._parentId = _parentId;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getColUrl() {
		return colUrl;
	}

	public void setColUrl(String colUrl) {
		this.colUrl = colUrl;
	}

	public Integer getColLevel() {
		return colLevel;
	}

	public void setColLevel(Integer colLevel) {
		this.colLevel = colLevel;
	}

	public Integer getSeq() {
		return seq;
	}

	public void setSeq(Integer seq) {
		this.seq = seq;
	}

	public String getIconUrl() {
		return iconUrl;
	}

	public void setIconUrl(String iconUrl) {
		this.iconUrl = iconUrl;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public List<TsSysCol> getClildrenList() {
		return clildrenList;
	}

	public void setClildrenList(List<TsSysCol> clildrenList) {
		this.clildrenList = clildrenList;
	}

	@Override
	public String toString() {
		return "TsSysCol [_parentId=" + _parentId + ", colId=" + colId
				+ ", colLevel=" + colLevel + ", colName=" + colName
				+ ", colUrl=" + colUrl + ", iconUrl=" + iconUrl + ", remarks="
				+ remarks + ", seq=" + seq + "]";
	}
	
	
}
