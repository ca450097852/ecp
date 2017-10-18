package com.hontek.order.model;

import java.util.Map;

/**
 * @ClassName: TbLogis
 * @Description: TODO(发货物流信息表 )
 * @date 2015-6-26 下午04:58:29
 * @author qql
 * @version 1.0
 */
public class TbLogis {
    private Integer logisId;

    private Integer orderId;

    private String addrId;

    private String logisWay;

    private String logisName;

    private String logisNo;

    private String leaveWord;

    private String logisTime;

    private String receiveTime;

    private String receiveUser;
    
    
    
    //关联查询
    private String addrArea;
    private String addr;
    private String telephone;
    private String mobile;
    private String postCode;
    private String recipient ;
    
    public TbLogis(Integer orderId, String addrId, String logisName,
			String leaveWord) {
		super();
		this.orderId = orderId;
		this.addrId = addrId;
		this.logisName = logisName;
		this.leaveWord = leaveWord;
	}

	public TbLogis() {
		super();
	}

	public TbLogis(Integer logisId, Integer orderId, String addrId,
			String logisWay, String logisName, String logisNo,
			String leaveWord, String logisTime, String receiveTime,
			String receiveUser, String addrArea, String addr, String telephone,
			String mobile, String postCode, String recipient) {
		super();
		this.logisId = logisId;
		this.orderId = orderId;
		this.addrId = addrId;
		this.logisWay = logisWay;
		this.logisName = logisName;
		this.logisNo = logisNo;
		this.leaveWord = leaveWord;
		this.logisTime = logisTime;
		this.receiveTime = receiveTime;
		this.receiveUser = receiveUser;
		this.addrArea = addrArea;
		this.addr = addr;
		this.telephone = telephone;
		this.mobile = mobile;
		this.postCode = postCode;
		this.recipient = recipient;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getAddrArea() {
		return addrArea;
	}

	public void setAddrArea(String addrArea) {
		this.addrArea = addrArea;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public Integer getLogisId() {
        return logisId;
    }

    public void setLogisId(Integer logisId) {
        this.logisId = logisId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getAddrId() {
        return addrId;
    }

    public void setAddrId(String addrId) {
        this.addrId = addrId == null ? null : addrId.trim();
    }

    public String getLogisWay() {
        return logisWay;
    }

    public void setLogisWay(String logisWay) {
        this.logisWay = logisWay == null ? null : logisWay.trim();
    }

    public String getLogisName() {
        return logisName;
    }

    public void setLogisName(String logisName) {
        this.logisName = logisName == null ? null : logisName.trim();
    }

    public String getLogisNo() {
        return logisNo;
    }

    public void setLogisNo(String logisNo) {
        this.logisNo = logisNo == null ? null : logisNo.trim();
    }

    public String getLeaveWord() {
        return leaveWord;
    }

    public void setLeaveWord(String leaveWord) {
        this.leaveWord = leaveWord == null ? null : leaveWord.trim();
    }

    public String getLogisTime() {
        return logisTime;
    }

    public void setLogisTime(String logisTime) {
        this.logisTime = logisTime == null ? null : logisTime.trim();
    }

    public String getReceiveTime() {
        return receiveTime;
    }

    public void setReceiveTime(String receiveTime) {
        this.receiveTime = receiveTime == null ? null : receiveTime.trim();
    }

    public String getReceiveUser() {
        return receiveUser;
    }

    public void setReceiveUser(String receiveUser) {
        this.receiveUser = receiveUser == null ? null : receiveUser.trim();
    }
}