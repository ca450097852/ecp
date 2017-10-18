package com.hontek.order.domain;

import com.hontek.goods.model.TbGoods;
import com.hontek.goods.model.TbGoodsModel;

/**
 * 
*
* <p>Title: 未分组购物车类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public class TbShoppingcartTDO {
	
	 private Integer cartId;//购物车id
	 private Integer goodsId;//商品id
	 private Integer goodsCount;//商品数量
	 private String putTime;//添加时间
	 private Integer memberId;//会员id
	 private Integer modelId ;//规格id
	 private String modelName ; //规格名
	 
	 private TbGoods tbGoods ;
	 private TbGoodsModel tbGoodsModel ;

	public Integer getCartId() {
		return cartId;
	}

	public void setCartId(Integer cartId) {
		this.cartId = cartId;
	}
	
	public TbGoodsModel getTbGoodsModel() {
		return tbGoodsModel;
	}

	public void setTbGoodsModel(TbGoodsModel tbGoodsModel) {
		this.tbGoodsModel = tbGoodsModel;
	}

	public Integer getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(Integer goodsId) {
		this.goodsId = goodsId;
	}

	public Integer getGoodsCount() {
		return goodsCount;
	}

	public void setGoodsCount(Integer goodsCount) {
		this.goodsCount = goodsCount;
	}

	public String getPutTime() {
		return putTime;
	}

	public void setPutTime(String putTime) {
		this.putTime = putTime;
	}

	public Integer getMemberId() {
		return memberId;
	}

	public void setMemberId(Integer memberId) {
		this.memberId = memberId;
	}

	public Integer getModelId() {
		return modelId;
	}

	public void setModelId(Integer modelId) {
		this.modelId = modelId;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public TbGoods getTbGoods() {
		return tbGoods;
	}

	public void setTbGoods(TbGoods tbGoods) {
		this.tbGoods = tbGoods;
	}
	 
	 
	 
}
