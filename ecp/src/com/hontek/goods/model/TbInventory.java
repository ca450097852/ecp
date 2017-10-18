package com.hontek.goods.model;


/**
* 
* <p>Title: 商品库存变化记录实体类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public class TbInventory {
	private Integer recordId;
	private Integer goodsId;
	private Integer memberId;
	private Integer shopId;
	private Integer oldCount;
	private Integer changeCount;
	private String changeTime;
	private String changeType;
	private String changeCause;
	
	private String goodsName ; //关联查询 ， 商品名称
	private String memberName ;  //关联插叙，卖家名称
	private String shopName ;	//关联查询，店铺名称

	public String getGoodsName() {
		return goodsName;
	}
	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public Integer getRecordId(){
		return recordId;
	}
	public void setRecordId(Integer recordId){
		this.recordId = recordId;
	}
	public Integer getGoodsId(){
		return goodsId;
	}
	public void setGoodsId(Integer goodsId){
		this.goodsId = goodsId;
	}
	public Integer getMemberId(){
		return memberId;
	}
	public void setMemberId(Integer memberId){
		this.memberId = memberId;
	}
	public Integer getShopId(){
		return shopId;
	}
	public void setShopId(Integer shopId){
		this.shopId = shopId;
	}
	public Integer getOldCount(){
		return oldCount;
	}
	public void setOldCount(Integer oldCount){
		this.oldCount = oldCount;
	}
	public Integer getChangeCount(){
		return changeCount;
	}
	public void setChangeCount(Integer changeCount){
		this.changeCount = changeCount;
	}
	public String getChangeTime(){
		return changeTime;
	}
	public void setChangeTime(String changeTime){
		this.changeTime = changeTime;
	}
	public String getChangeType(){
		return changeType;
	}
	public void setChangeType(String changeType){
		this.changeType = changeType;
	}
	public String getChangeCause(){
		return changeCause;
	}
	public void setChangeCause(String changeCause){
		this.changeCause = changeCause;
	}
}