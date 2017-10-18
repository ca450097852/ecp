package com.hontek.order.domain;

import java.util.List;

import com.hontek.order.model.TbOrderDetail;
import com.hontek.order.model.TbRefund;

/**
*
* <p>Title: 退款包含商品信息类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public class TbRefundTDO extends TbRefund{
	private TbRefund tbRefund ;
	
	private List<TbOrderDetail> tbOrderDetailList ;
	
	public TbRefundTDO() {
		super();
	}

	public TbRefundTDO(TbRefund tbRefund, List<TbOrderDetail> tbOrderDetailList) {
		super();
		this.tbRefund = tbRefund;
		this.tbOrderDetailList = tbOrderDetailList;
	}

	public TbRefund getTbRefund() {
		return tbRefund;
	}

	public void setTbRefund(TbRefund tbRefund) {
		this.tbRefund = tbRefund;
	}

	public List<TbOrderDetail> getTbOrderDetailList() {
		return tbOrderDetailList;
	}

	public void setTbOrderDetailList(List<TbOrderDetail> tbOrderDetailList) {
		this.tbOrderDetailList = tbOrderDetailList;
	}
	
	
}
