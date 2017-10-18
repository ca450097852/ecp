package com.hontek.order.model;
/**
 * @ClassName: TbOrder
 * @Description: TODO(订单表)
 * @date 2015-6-26 下午04:58:49
 * @author qql
 * @version 1.0
 */
public class TbOrder {
    private Integer orderId;

    private Integer memberIdSale;

    private Integer memberIdBuy;

    private String orderType;

    private String orderTime;

    private String payTime;

    private String sendTime;

    private String finishTime;

    private String orderAmount;

    private Integer shipFree;

    private Integer preferAmount;

    private String invoiceType;

    private String invoiceTop;

    private Integer taxInvoice;

    private String invoiceContent;

    private Integer discount;

    private Integer discountMoney;

    private Integer totalAmount;

    private String orderState;

    private String payState;

    private String sendState;

    private Integer payId;

    private String deliverType;

    private Integer logisId;

    private String buyRemark;
    
    private String evaluateState;
    
    private String recommend;
    
    private String memberIdSaleName ; //关联查询，卖家名
    private String memberIdBuyName ;	//关联查询，买家名
    private String shopName ;	//关联查询，买家名
    
    
    public TbOrder() {
		super();
	}
    
	public TbOrder(Integer orderId, String payTime, String orderState,
			String payState) {
		super();
		this.orderId = orderId;
		this.payTime = payTime;
		this.orderState = orderState;
		this.payState = payState;
	}

	public TbOrder(Integer orderId, String orderAmount, Integer shipFree) {
		super();
		this.orderId = orderId;
		this.orderAmount = orderAmount;
		this.shipFree = shipFree;
	}

	public TbOrder(Integer orderId, Integer memberIdSale, Integer memberIdBuy,
			String orderTime ,
			String orderState, String payState, String sendState,
			String buyRemark, String evaluateState) {
		super();
		this.orderId = orderId;
		this.memberIdSale = memberIdSale;
		this.memberIdBuy = memberIdBuy;
		this.orderTime = orderTime;
		this.orderState = orderState;
		this.payState = payState;
		this.sendState = sendState;
		this.buyRemark = buyRemark;
		this.evaluateState = evaluateState;
	}

	public TbOrder(Integer orderId, Integer memberIdSale, Integer memberIdBuy,
			String orderType, String orderTime, String payTime,
			String sendTime, String finishTime, String orderAmount,
			Integer shipFree, Integer preferAmount, String invoiceType,
			String invoiceTop, Integer taxInvoice, String invoiceContent,
			Integer discount, Integer discountMoney, Integer totalAmount,
			String orderState, String payState, String sendState,
			Integer payId, String deliverType, Integer logisId,
			String buyRemark, String evaluateState, String memberIdSaleName,
			String memberIdBuyName) {
		super();
		this.orderId = orderId;
		this.memberIdSale = memberIdSale;
		this.memberIdBuy = memberIdBuy;
		this.orderType = orderType;
		this.orderTime = orderTime;
		this.payTime = payTime;
		this.sendTime = sendTime;
		this.finishTime = finishTime;
		this.orderAmount = orderAmount;
		this.shipFree = shipFree;
		this.preferAmount = preferAmount;
		this.invoiceType = invoiceType;
		this.invoiceTop = invoiceTop;
		this.taxInvoice = taxInvoice;
		this.invoiceContent = invoiceContent;
		this.discount = discount;
		this.discountMoney = discountMoney;
		this.totalAmount = totalAmount;
		this.orderState = orderState;
		this.payState = payState;
		this.sendState = sendState;
		this.payId = payId;
		this.deliverType = deliverType;
		this.logisId = logisId;
		this.buyRemark = buyRemark;
		this.evaluateState = evaluateState;
		this.memberIdSaleName = memberIdSaleName;
		this.memberIdBuyName = memberIdBuyName;
	}

	public String getMemberIdSaleName() {
		return memberIdSaleName;
	}

	public void setMemberIdSaleName(String memberIdSaleName) {
		this.memberIdSaleName = memberIdSaleName;
	}

	public String getEvaluateState() {
		return evaluateState;
	}

	public void setEvaluateState(String evaluateState) {
		this.evaluateState = evaluateState;
	}

	public String getMemberIdBuyName() {
		return memberIdBuyName;
	}

	public void setMemberIdBuyName(String memberIdBuyName) {
		this.memberIdBuyName = memberIdBuyName;
	}

	public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
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

	public String getOrderType() {
        return orderType;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType == null ? null : orderType.trim();
    }

    public String getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(String orderTime) {
        this.orderTime = orderTime == null ? null : orderTime.trim();
    }

    public String getPayTime() {
        return payTime;
    }

    public void setPayTime(String payTime) {
        this.payTime = payTime == null ? null : payTime.trim();
    }

    public String getSendTime() {
        return sendTime;
    }

    public void setSendTime(String sendTime) {
        this.sendTime = sendTime == null ? null : sendTime.trim();
    }

    public String getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(String finishTime) {
        this.finishTime = finishTime == null ? null : finishTime.trim();
    }

    public String getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(String orderAmount) {
        this.orderAmount = orderAmount == null ? null : orderAmount.trim();
    }

    public Integer getShipFree() {
        return shipFree;
    }

    public void setShipFree(Integer shipFree) {
        this.shipFree = shipFree;
    }

    public Integer getPreferAmount() {
        return preferAmount;
    }

    public void setPreferAmount(Integer preferAmount) {
        this.preferAmount = preferAmount;
    }

    public String getInvoiceType() {
        return invoiceType;
    }

    public void setInvoiceType(String invoiceType) {
        this.invoiceType = invoiceType == null ? null : invoiceType.trim();
    }

    public String getInvoiceTop() {
        return invoiceTop;
    }

    public void setInvoiceTop(String invoiceTop) {
        this.invoiceTop = invoiceTop == null ? null : invoiceTop.trim();
    }

    public Integer getTaxInvoice() {
        return taxInvoice;
    }

    public void setTaxInvoice(Integer taxInvoice) {
        this.taxInvoice = taxInvoice;
    }

    public String getInvoiceContent() {
        return invoiceContent;
    }

    public void setInvoiceContent(String invoiceContent) {
        this.invoiceContent = invoiceContent == null ? null : invoiceContent.trim();
    }

    public Integer getDiscount() {
        return discount;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public Integer getDiscountMoney() {
        return discountMoney;
    }

    public void setDiscountMoney(Integer discountMoney) {
        this.discountMoney = discountMoney;
    }

    public Integer getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getOrderState() {
        return orderState;
    }

    public void setOrderState(String orderState) {
        this.orderState = orderState == null ? null : orderState.trim();
    }

    public String getPayState() {
        return payState;
    }

    public void setPayState(String payState) {
        this.payState = payState == null ? null : payState.trim();
    }

    public String getSendState() {
        return sendState;
    }

    public void setSendState(String sendState) {
        this.sendState = sendState == null ? null : sendState.trim();
    }

    public Integer getPayId() {
        return payId;
    }

    public void setPayId(Integer payId) {
        this.payId = payId;
    }

    public String getDeliverType() {
        return deliverType;
    }

    public void setDeliverType(String deliverType) {
        this.deliverType = deliverType == null ? null : deliverType.trim();
    }

    public Integer getLogisId() {
        return logisId;
    }

    public void setLogisId(Integer logisId) {
        this.logisId = logisId;
    }

    public String getBuyRemark() {
        return buyRemark;
    }

    public void setBuyRemark(String buyRemark) {
        this.buyRemark = buyRemark == null ? null : buyRemark.trim();
    }

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getRecommend() {
		return recommend;
	}

	public void setRecommend(String recommend) {
		this.recommend = recommend;
	}
    
	
}