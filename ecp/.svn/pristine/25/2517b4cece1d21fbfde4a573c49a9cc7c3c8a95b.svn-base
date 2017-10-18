package com.wap.member.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbShop;
import com.hontek.member.service.ShopService;


/**
 * <p>Title: 卖家店铺控制器类</p>
 * <p>Description: 卖家店铺</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("wap/shop")
public class WapShopController extends BaseController{

	
	private ShopService shopService;
	
	@Autowired
	public void setShopService(ShopService shopService) {
		this.shopService = shopService;
	}

	
	/**
	 * 添加
	 * @param shop
	 * @param response
	 */
	@RequestMapping("add")
	public void addShop(TbShop shop,HttpServletResponse response,HttpSession session){
		writeJson2View(shopService.addShop(shop,session), response);
	}
	
	/**
	 * 审核
	 * @param ids
	 * @param type
	 * @param response
	 */
	@RequestMapping("auditSts")
	public void auditSts(String ids,String type,HttpServletResponse response){
		writeJson2View(shopService.auditSts(ids,type), response);
	}
	

	/**
	 * 修改
	 * @param shop
	 * @param response
	 */
	@RequestMapping("update")
	public void updateShop(TbShop shop,HttpServletResponse response){
		writeJson2View(shopService.updateShop(shop), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteShop(String ids,HttpServletResponse response){
		writeJson2View(shopService.deleteShop(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = shopService.findShopList(pageUtil);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 根据shopid获取店铺部分信息
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("ns/getshop")
	@ResponseBody
	public TbShop getShopById(Integer shopId){
		return shopService.getShopById(shopId);
	}

	
}
