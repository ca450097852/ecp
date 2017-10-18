package com.hontek.sys.model;
/**
 * @ClassName: TsRoleUser
 * @Description: TODO(用户角色关系)
 * @date 2015-6-30 下午04:15:40
 * @author qql
 * @version 1.0
 */
public class TsRoleUser {
    private Integer ruId;

    private Integer roleId;

    private String userId;
    
    public TsRoleUser(){
    	super();
    }
    
    public TsRoleUser(Integer roleId,String userId){
    	super();
    	this.roleId = roleId;
    	this.userId = userId;
    	
    }

    public Integer getRuId() {
        return ruId;
    }

    public void setRuId(Integer ruId) {
        this.ruId = ruId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }
}