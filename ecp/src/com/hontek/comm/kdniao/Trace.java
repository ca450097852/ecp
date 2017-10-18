package com.hontek.comm.kdniao;

/**
*
* <p>Title: 物流轨迹详情类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public class Trace {

	private String AcceptTime ;	//时间
	private String AcceptStation ;	//描述
	private String Remark ;		//备注
	
	public String getAcceptTime() {
		return AcceptTime;
	}
	public void setAcceptTime(String acceptTime) {
		AcceptTime = acceptTime;
	}
	public String getAcceptStation() {
		return AcceptStation;
	}
	public void setAcceptStation(String acceptStation) {
		AcceptStation = acceptStation;
	}
	public String getRemark() {
		return Remark;
	}
	public void setRemark(String remark) {
		Remark = remark;
	}
	
	
}
