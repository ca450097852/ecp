package com.hontek.member.model;

public class TbMemberAddr {
    private Integer memberId;

    private Integer addrId;

    private String addrArea;

    private String addr;

    private String telephone;

    private String mobile;

    private String postCode;
    
    private String recipient ;//收件人

    private String memberName;//会员名称
    
    //非表字段；
    private String addrDefault;
    
    public TbMemberAddr() {
		super();
	}
    
	public TbMemberAddr(Integer memberId) {
		super();
		this.memberId = memberId;
	}

	public TbMemberAddr(Integer addrId, String addrDefault) {
		super();
		this.addrId = addrId;
		this.addrDefault = addrDefault;
	}

	public TbMemberAddr(Integer memberId, Integer addrId, String addrArea,
			String addr, String telephone, String mobile, String postCode,
			String recipient, String memberName, String addrDefault) {
		super();
		this.memberId = memberId;
		this.addrId = addrId;
		this.addrArea = addrArea;
		this.addr = addr;
		this.telephone = telephone;
		this.mobile = mobile;
		this.postCode = postCode;
		this.recipient = recipient;
		this.memberName = memberName;
		this.addrDefault = addrDefault;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public Integer getMemberId() {
        return memberId;
    }

    public void setMemberId(Integer memberId) {
        this.memberId = memberId;
    }

    public Integer getAddrId() {
        return addrId;
    }

    public void setAddrId(Integer addrId) {
        this.addrId = addrId;
    }

    public String getAddrArea() {
        return addrArea;
    }

    public void setAddrArea(String addrArea) {
        this.addrArea = addrArea == null ? null : addrArea.trim();
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr == null ? null : addr.trim();
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone == null ? null : telephone.trim();
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode == null ? null : postCode.trim();
    }

    public String getAddrDefault() {
        return addrDefault;
    }

    public void setAddrDefault(String addrDefault) {
        this.addrDefault = addrDefault == null ? null : addrDefault.trim();
    }

	public String getMemberName() {
		return memberName;
	}

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
}