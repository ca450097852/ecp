package com.hontek.order.domain;

import java.util.List;

import com.hontek.order.model.TbOrderDetail;

/**
 * 
*
* <p>Title: 接收前台生成订单参数类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public class BuildOrdersTDO {

	private Integer shopId ; //店铺id
	private Integer addressId ;	//收货地址id
	private String orderAmount ;//订单金额
	private Integer shipFree ;//运费
	private String buyRemark ; //买家留言
	private String logisName ; //物流公司
	private Integer memberIdBuy ; //买家ID
	private String orderType = "1" ; //下单方式 ，1网页订单 ， 2 app端订单 ， 默认1
	
	private List<TbOrderDetail> list; //商品列表（商品id，规格id,数量，单价）

	public Integer getMemberIdBuy() {
		return memberIdBuy;
	}

	public void setMemberIdBuy(Integer memberIdBuy) {
		this.memberIdBuy = memberIdBuy;
	}

	public Integer getShopId() {
		return shopId;
	}

	public void setShopId(Integer shopId) {
		this.shopId = shopId;
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}

	public String getOrderAmount() {
		return orderAmount;
	}

	public void setOrderAmount(String orderAmount) {
		this.orderAmount = orderAmount;
	}

	public Integer getShipFree() {
		return shipFree;
	}

	public void setShipFree(Integer shipFree) {
		this.shipFree = shipFree;
	}

	public String getBuyRemark() {
		return buyRemark;
	}

	public void setBuyRemark(String buyRemark) {
		this.buyRemark = buyRemark;
	}

	public String getLogisName() {
		return logisName;
	}

	public void setLogisName(String logisName) {
		this.logisName = logisName;
	}

	public List<TbOrderDetail> getList() {
		return list;
	}

	public void setList(List<TbOrderDetail> list) {
		this.list = list;
	}

	public String getOrderType() {
		return orderType;
	}

	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}
	
	
	
}
