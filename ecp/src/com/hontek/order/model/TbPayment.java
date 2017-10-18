package com.hontek.order.model;
/**
 * @ClassName: TbPayment
 * @Description: TODO(订单支付信息表)
 * @date 2015-6-26 下午04:59:40
 * @author qql
 * @version 1.0
 */
public class TbPayment {
    private Integer orderId;

    private Integer payId;

    private Integer memberIdSale;

    private Integer memberIdBuy;

    private String orderAmount;

    private Integer orderState;

    private String payWay;

    private String payAccount;

    private String payTime;

    private String payNo;

    private String receiverAccount;

    private String receiver;
    
    public TbPayment() {
		super();
	}

	public TbPayment(Integer orderId, Integer payId, Integer memberIdSale,
			Integer memberIdBuy, String orderAmount, Integer orderState,
			String payWay, String payAccount, String payTime, String payNo,
			String receiverAccount, String receiver) {
		super();
		this.orderId = orderId;
		this.payId = payId;
		this.memberIdSale = memberIdSale;
		this.memberIdBuy = memberIdBuy;
		this.orderAmount = orderAmount;
		this.orderState = orderState;
		this.payWay = payWay;
		this.payAccount = payAccount;
		this.payTime = payTime;
		this.payNo = payNo;
		this.receiverAccount = receiverAccount;
		this.receiver = receiver;
	}

	public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getPayId() {
        return payId;
    }

    public void setPayId(Integer payId) {
        this.payId = payId;
    }

    public Integer getMemberIdSale() {
		return memberIdSale;
	}

	public void setMemberIdSale(Integer memberIdSale) {
		this.memberIdSale = memberIdSale;
	}

	public Integer getMemberIdBuy() {
		return memberIdBuy;
	}

	public void setMemberIdBuy(Integer memberIdBuy) {
		this.memberIdBuy = memberIdBuy;
	}

	public String getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(String orderAmount) {
        this.orderAmount = orderAmount == null ? null : orderAmount.trim();
    }

    public Integer getOrderState() {
        return orderState;
    }

    public void setOrderState(Integer orderState) {
        this.orderState = orderState;
    }

    public String getPayWay() {
        return payWay;
    }

    public void setPayWay(String payWay) {
        this.payWay = payWay == null ? null : payWay.trim();
    }

    public String getPayAccount() {
        return payAccount;
    }

    public void setPayAccount(String payAccount) {
        this.payAccount = payAccount == null ? null : payAccount.trim();
    }

    public String getPayTime() {
        return payTime;
    }

    public void setPayTime(String payTime) {
        this.payTime = payTime == null ? null : payTime.trim();
    }

    public String getPayNo() {
        return payNo;
    }

    public void setPayNo(String payNo) {
        this.payNo = payNo == null ? null : payNo.trim();
    }

    public String getReceiverAccount() {
        return receiverAccount;
    }

    public void setReceiverAccount(String receiverAccount) {
        this.receiverAccount = receiverAccount == null ? null : receiverAccount.trim();
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver == null ? null : receiver.trim();
    }
}