package com.hontek.sys.model;
/**
 * @ClassName: TsRole
 * @Description: TODO(角色表)
 * @date 2015-6-30 下午04:16:25
 * @author qql
 * @version 1.0
 */
public class TsRole {
    private Integer roleId;

    private Integer entId;

    private String roleName;

    private String roleDesc;

    private Integer roleLevel;

    private String sts;
    
    
  //参数属性
	private String in_roleIds;
	private String out_roleIds;
	

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public Integer getEntId() {
        return entId;
    }

    public void setEntId(Integer entId) {
        this.entId = entId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName == null ? null : roleName.trim();
    }

    public String getRoleDesc() {
        return roleDesc;
    }

    public void setRoleDesc(String roleDesc) {
        this.roleDesc = roleDesc == null ? null : roleDesc.trim();
    }

    public Integer getRoleLevel() {
        return roleLevel;
    }

    public void setRoleLevel(Integer roleLevel) {
        this.roleLevel = roleLevel;
    }

    public String getSts() {
        return sts;
    }

    public void setSts(String sts) {
        this.sts = sts == null ? null : sts.trim();
    }

	public String getIn_roleIds() {
		return in_roleIds;
	}

	public void setIn_roleIds(String inRoleIds) {
		in_roleIds = inRoleIds;
	}

	public String getOut_roleIds() {
		return out_roleIds;
	}

	public void setOut_roleIds(String outRoleIds) {
		out_roleIds = outRoleIds;
	}
}