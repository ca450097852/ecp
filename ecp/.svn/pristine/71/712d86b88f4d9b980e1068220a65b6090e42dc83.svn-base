package com.hontek.info.modelVO;

import com.hontek.info.modelDO.InfotypeVO;

/**
*
* <p>Title: 树形资讯分类类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public class TreeInfoType {

    private Integer typeId;

    private Integer parentId;

    private String typeName;

    private String crttime;

    private String userId;

    private String remark;
    
    private Integer id ;
    
    private Integer _parentId  ; //easyUI树形字段
    
	public TreeInfoType() {
		super();
	}
	
	public TreeInfoType(InfotypeVO infotypeVO) {
		super();
		this.id = infotypeVO.getTypeId();
		this.typeId = infotypeVO.getTypeId();
		this.parentId = infotypeVO.getParentId();
		this.typeName = infotypeVO.getTypeName();
		this.crttime = infotypeVO.getCrttime();
		this.userId = infotypeVO.getUserId();
		this.remark = infotypeVO.getRemark();
		this._parentId = infotypeVO.getParentId();
	}

	public TreeInfoType(Integer typeId, Integer parentId, String typeName,
			String crttime, String userId, String remark, Integer _parentId) {
		super();
		this.typeId = typeId;
		this.parentId = parentId;
		this.typeName = typeName;
		this.crttime = crttime;
		this.userId = userId;
		this.remark = remark;
		this._parentId = _parentId;
	}

	public Integer getTypeId() {
		return typeId;
	}

	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}

	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getCrttime() {
		return crttime;
	}

	public void setCrttime(String crttime) {
		this.crttime = crttime;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Integer get_parentId() {
		return _parentId;
	}

	public void set_parentId(Integer _parentId) {
		this._parentId = _parentId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
    
}
