package com.hontek.order.domain;

import java.util.List;

import com.hontek.member.model.TbShop;

public class TbShoppingcartGroupByShopIdTDO {

	private Integer shopId ;
	
	private TbShop tbShop ;
	
	private List<TbShoppingcartTDO> list ;

	public TbShop getTbShop() {
		return tbShop;
	}

	public void setTbShop(TbShop tbShop) {
		this.tbShop = tbShop;
	}

	public Integer getShopId() {
		return shopId;
	}

	public void setShopId(Integer shopId) {
		this.shopId = shopId;
	}

	public List<TbShoppingcartTDO> getList() {
		return list;
	}

	public void setList(List<TbShoppingcartTDO> list) {
		this.list = list;
	}
	
	
}
