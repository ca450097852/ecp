package com.hontek.comm.kdniao;

import java.util.List;

/**
*
* <p>Title: 快递鸟物流查询返回结果参数类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public class ResponseData {
	
	private String EBusinessID ;	//电商用户ID
	private String OrderCode ; //订单编号
	private String ShipperCode ; //快递公司编码
	private String LogisticCode ; //物流运单号
	private String CallBack ; //用户标识
	private boolean Success ; //成功与否
	private String Reason ; //失败原因
	private String State ; //物流状态: 0-无轨迹 2-在途中，3-签收,4-问题件
	private List<Trace> Traces ;	//物流轨迹详情
	
	public String getEBusinessID() {
		return EBusinessID;
	}
	public void setEBusinessID(String eBusinessID) {
		EBusinessID = eBusinessID;
	}
	public String getOrderCode() {
		return OrderCode;
	}
	public void setOrderCode(String orderCode) {
		OrderCode = orderCode;
	}
	public String getShipperCode() {
		return ShipperCode;
	}
	public void setShipperCode(String shipperCode) {
		ShipperCode = shipperCode;
	}
	public String getLogisticCode() {
		return LogisticCode;
	}
	public void setLogisticCode(String logisticCode) {
		LogisticCode = logisticCode;
	}
	public String getCallBack() {
		return CallBack;
	}
	public void setCallBack(String callBack) {
		CallBack = callBack;
	}
	public boolean isSuccess() {
		return Success;
	}
	public void setSuccess(boolean success) {
		Success = success;
	}
	public String getReason() {
		return Reason;
	}
	public void setReason(String reason) {
		Reason = reason;
	}
	public String getState() {
		return State;
	}
	public void setState(String state) {
		State = state;
	}
	public List<Trace> getTraces() {
		return Traces;
	}
	public void setTraces(List<Trace> traces) {
		Traces = traces;
	}
	
	
	
}
