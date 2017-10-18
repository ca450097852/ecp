package com.hontek.goods.model;


/**
* 
* <p>Title: 栏目商品关系实体类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public class TbColumnGoods {
	private int cgId;
	private int goodsId;
	private int columnId;


	public int getCgId(){
		return cgId;
	}
	public void setCgId(int cgId){
		this.cgId = cgId;
	}
	public int getGoodsId(){
		return goodsId;
	}
	public void setGoodsId(int goodsId){
		this.goodsId = goodsId;
	}
	public int getColumnId(){
		return columnId;
	}
	public void setColumnId(int columnId){
		this.columnId = columnId;
	}
}