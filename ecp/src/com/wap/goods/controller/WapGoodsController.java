package com.wap.goods.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoods;
import com.hontek.goods.model.TbGoodsModel;
import com.hontek.goods.service.GoodsModelService;
import com.hontek.goods.service.GoodsService;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbShop;
import com.hontek.member.service.ShopService;

/**
 * 
* <p>Title: WAP商品控制器</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Controller
@RequestMapping("wap/Goods")
public class WapGoodsController extends BaseController{
	
	@Autowired
	private GoodsService goodsService;
	@Autowired
	private GoodsModelService goodsModelService;
	@Autowired
	private ShopService shopService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response,HttpSession session){
		if(page!=null){
			TbMember member = getLoginWebUser(session);
			page.getParams().put("memberId", member.getMemberId());
		}
		Grid grid = goodsService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("page1")
	public void findPageList1(SearchPageUtil page,HttpServletResponse response,HttpSession session){
		if(page!=null){
			TbMember member = getLoginWebUser(session);
			page.getParams().put("memberId", member.getMemberId());
		}
		
		Grid grid = goodsService.findPageList1(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("ns/page")
	public void findList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = goodsService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	/**
	 * 根据shopId 获取商铺推荐商品
	 * @param shopId	
	 * @param number	推荐数
	 * @return
	 */
	@RequestMapping("ns/shopHot")
	@ResponseBody
	public List<TbGoods> ListShopHot(Integer shopId , Integer number){
		return goodsService.ListShopHot(shopId, number) ;
	}
	
	/**
	 * 根据shopId 获取商铺全部商品
	 * @param shopId	
	 * @return
	 */
	@RequestMapping("ns/shopGoods")
	@ResponseBody
	public List<TbGoods> ListShopGoods(Integer shopId ){
		return goodsService.ListShopGoods(shopId) ;
	}
	
	/**
	 * 根据shopId,typeId 获取商品
	 * @param shopId	
	 * @return
	 */
	@RequestMapping("ns/shopGoodsType")
	@ResponseBody
	public List<TbGoods> ListShopGoodsByTypeId(Integer shopId,Integer typeId ){
		return goodsService.ListShopGoodsByTypeId(shopId,typeId) ;
	}
	
	/**
	 * 
	 * @param goods
	 * @param modelStr	规格型号数据 格式为json
	 * @param response
	 */
	@RequestMapping("add")
	public void addGoods(TbGoods goods,String modelStr,HttpServletResponse response,HttpSession session){
		
		Integer memberId = ((TbMember)session.getAttribute("member")).getMemberId();
		TbShop shop = shopService.findShopList(memberId);
		goods.setShopId(shop.getShopId());
		goods.setMemberId(memberId);
		writeJson2View(goodsService.addGoods(goods,modelStr), response);
	}
	
	@RequestMapping("update")
	public void updateGoods(TbGoods goods,HttpServletResponse response,HttpSession session){
		if(goods!=null){
			TbMember member = getLoginWebUser(session);
			TbGoods newgoods = goodsService.getGoodsById(goods.getGoodsId().toString());
			goods.setMemberId(member.getMemberId());//设置修改用户
			goods.setUpdateTime(DateUtil.formatDateTime());
			
			goods.setState(newgoods.getState());//默认设置为待审状态
			goods.setGoodSeq(newgoods.getGoodSeq());//默认排序0
			goods.setSaledNum(newgoods.getSaledNum());//销售数量
			goods.setRecommend(newgoods.getRecommend());//设置默认推荐，2不推荐
			goods.setCreateTime(newgoods.getCreateTime());
			
			writeJson2View(goodsService.updateGoods(goods), response);
		}
	}
	
	@RequestMapping("delete")
	public void deleteGoods(String ids,HttpServletResponse response){
		writeJson2View(goodsService.deleteGoods(ids), response);
	}
	
	/**
	 * 根据goodsId获取商品信息
	 * @param goodsId
	 * @param response
	 */
	@RequestMapping("getGoods")
	public void getGoodsById(String goodsId,HttpServletResponse response){
		writeJson2View(goodsService.getGoodsById(goodsId), response);
	}
	
	/**
	 * 根据goodsId获取商品信息
	 * @param goodsId
	 * @param response
	 */
	@RequestMapping("ns/getGoods")
	public void getGoodsById2(String goodsId,HttpServletResponse response){
		writeJson2View(goodsService.getGoodsById(goodsId), response);
	}
	/**
	 * 根据typeIds获取商品信息
	 * @param typeIds
	 * @param response
	 */
	@RequestMapping("ns/getGoodsByTypeIds")
	public void getGoodsByTypeIds(String page,String rows,String typeIds,String orderBy,String brandId,String priceSql,
			String goodsName,String shopId,HttpServletResponse response){
		writeJson2View(goodsService.getGoodsByTypeIds(page,rows,typeIds,orderBy,brandId,priceSql,goodsName,shopId), response);
	}
	/**
	 * 根据goodsIds获取商品信息
	 * @param goodsId
	 * @param response
	 */
	@RequestMapping("ns/getGoodsByGoodsIds")
	public void getGoodsByGoodsIds(String goodsIds,String orderBy,HttpServletResponse response){
		writeJson2View(goodsService.getGoodsByGoodsIds(goodsIds,orderBy), response);
	}
	
	
	/**
	 * 获取商品详细页面
	 * @param goodsId
	 * @param response
	 */
	@RequestMapping("ns/goodsDetail")
	public void goodsDetail(String goodsId,HttpServletResponse response){
		
		List<String> imgList = new ArrayList<String>();		
		//商品基本信息
		TbGoods goods = goodsService.getGoodsById(goodsId);
		if(goods!=null&&goods.getGoodsImg()!=null&&!"".equals(goods.getGoodsImg())){
			imgList.add(goods.getGoodsImg());
		}
		//商品规格//存放商品图片
		List<TbGoodsModel> modelList = goodsModelService.findModelList(goodsId);
		for (TbGoodsModel tbGoodsModel : modelList) {
			imgList.add(tbGoodsModel.getModelImg());
		}
		
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("goods", goods);
		jsonObject.put("goodsImg", imgList);
		
		writeJson2View(jsonObject, response);

	}
	
	@RequestMapping("ns/pageOrderBy")
	public void findListOrderBy(SearchPageUtil page,HttpServletResponse response){
	 	String ordey = page.getOrder();
		if(ordey.equals("recommend")){
			page.setOrder(" order by create_time desc ");
		}else if(ordey.equals("saledNum")){
			page.setOrder(" order by saled_num desc ");
		}else if(ordey.equals("createTime")){
			page.setOrder(" order by create_time desc ");
		}
		Grid grid = goodsService.findListOrderBy(page);
		writeJson2View(grid, response);
	}
	
	
	
	
	
	
	
	
}
