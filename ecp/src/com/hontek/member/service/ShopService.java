package com.hontek.member.service;


import javax.servlet.http.HttpSession;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbShop;
/**
 * <p>Title: 卖家店铺Service类</p>
 * <p>Description: 卖家店铺</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface ShopService {

	public String addShop(TbShop shop,HttpSession session);
	
	public String updateShop(TbShop shop);
		
	public String deleteShop(String ids);
		
	public Grid findShopList(SearchPageUtil pageUtil);
	
	public TbShop findShopList(Integer memberId);

	public String auditSts(String ids,String type);
	
	public TbShop getShopById(Integer shopId);
	
}
