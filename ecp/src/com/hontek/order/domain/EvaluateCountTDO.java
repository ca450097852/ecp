package com.hontek.order.domain;

/**
*
* <p>Title: 商品评价统计类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public class EvaluateCountTDO {

	private String praiseRate = "100";	//好评率
	private String totalEvaluate ="0";	//全部评价数量
	private String goodEvaluate = "0";	//好评数量
	private String commonEvaluate = "0";	//中评数量
	private String badEvaluate = "0";	//差评数量
	
	public String getPraiseRate() {
		return praiseRate;
	}
	public void setPraiseRate(String praiseRate) {
		this.praiseRate = praiseRate;
	}
	public String getTotalEvaluate() {
		return totalEvaluate;
	}
	public void setTotalEvaluate(String totalEvaluate) {
		this.totalEvaluate = totalEvaluate;
	}
	public String getGoodEvaluate() {
		return goodEvaluate;
	}
	public void setGoodEvaluate(String goodEvaluate) {
		this.goodEvaluate = goodEvaluate;
	}
	public String getCommonEvaluate() {
		return commonEvaluate;
	}
	public void setCommonEvaluate(String commonEvaluate) {
		this.commonEvaluate = commonEvaluate;
	}
	public String getBadEvaluate() {
		return badEvaluate;
	}
	public void setBadEvaluate(String badEvaluate) {
		this.badEvaluate = badEvaluate;
	}
	
}
