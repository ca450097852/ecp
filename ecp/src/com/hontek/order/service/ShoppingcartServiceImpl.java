package com.hontek.order.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.ShopDao;
import com.hontek.member.model.TbShop;
import com.hontek.order.dao.ShoppingcartDao;
import com.hontek.order.domain.TbShoppingcartGroupByShopIdTDO;
import com.hontek.order.domain.TbShoppingcartTDO;
import com.hontek.order.model.TbShoppingcart;
import com.hontek.sys.service.SequenceService;
/**
 * 
 * @ClassName: ShoppingcartServiceImpl
 * @Description: TODO(购物车表 serviceImpl)
 * @date 2015-6-26 下午04:38:01
 * @author qql
 * @version 1.0
 */
@Service("shoppingcartService")
public class ShoppingcartServiceImpl implements ShoppingcartService {

	@Autowired
	private ShoppingcartDao shoppingcartDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	@Autowired
	private ShopDao shopDao ;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findShoppingcartList(SearchPageUtil page) {
		
		
		int tatol = shoppingcartDao.getCount(page.getParams());


		List<TbShoppingcart> list = shoppingcartDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	/**
	 * 分页查询22
	 */
	public Grid findShoppingcartList2(SearchPageUtil page) {
		
		int tatol = shoppingcartDao.getCount2(page);
		List<TbShoppingcart> list = shoppingcartDao.findPageList2(page);
		
		Grid dataGrid = new Grid(tatol, list);
		try {
			System.out.println(new ObjectMapper().writeValueAsString(dataGrid));
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dataGrid;
	}
	
	@Override
	public List<TbShoppingcartGroupByShopIdTDO> findShoppingcartList(TbShoppingcartTDO tbShoppingcartTDO) {
		// TODO Auto-generated method stub
		List<TbShoppingcartGroupByShopIdTDO> tbShoppingcartGroupByShopODTDOList= new ArrayList<TbShoppingcartGroupByShopIdTDO>();
		List<TbShoppingcartTDO> shoppingcartList = shoppingcartDao.findShoppingcartList(tbShoppingcartTDO);
		//把TbShoppingcartTDO 封装成 TbShoppingcartGroupShopIdTDO
		for(TbShoppingcartTDO tbShoppingcartTDO1 : shoppingcartList){
			Integer shopId = tbShoppingcartTDO1.getTbGoods().getShopId();
			TbShop tbShop = shopDao.findById(shopId);
			//如果他是空的 ， 根据shopId新建一个item  
			if(tbShoppingcartGroupByShopODTDOList.isEmpty()){
				TbShoppingcartGroupByShopIdTDO tbShoppingcartGroupByShopODTDO = new TbShoppingcartGroupByShopIdTDO();
				tbShoppingcartGroupByShopODTDO.setShopId(shopId);
				List<TbShoppingcartTDO> list = new ArrayList<TbShoppingcartTDO>();
				list.add(tbShoppingcartTDO1);
				tbShoppingcartGroupByShopODTDO.setList(list);
				tbShoppingcartGroupByShopODTDO.setTbShop(tbShop);
				tbShoppingcartGroupByShopODTDOList.add(tbShoppingcartGroupByShopODTDO);
				//如果已经有shopId的item ， 加在这个item 里面  
			}else if(shopIdInlist(shopId,tbShoppingcartGroupByShopODTDOList)){
				for(TbShoppingcartGroupByShopIdTDO tbShoppingcartGroupByShopODTDO : tbShoppingcartGroupByShopODTDOList){
					if(shopId == tbShoppingcartGroupByShopODTDO.getShopId()){
						tbShoppingcartGroupByShopODTDO.getList().add(tbShoppingcartTDO1);
					}
				}
			}else {//如果没有 ， 根据shopId新建一个item  
				TbShoppingcartGroupByShopIdTDO tbShoppingcartGroupByShopODTDO = new TbShoppingcartGroupByShopIdTDO();
				tbShoppingcartGroupByShopODTDO.setShopId(shopId);
				List<TbShoppingcartTDO> list = new ArrayList<TbShoppingcartTDO>();
				list.add(tbShoppingcartTDO1);
				tbShoppingcartGroupByShopODTDO.setList(list);
				tbShoppingcartGroupByShopODTDO.setTbShop(tbShop);
				tbShoppingcartGroupByShopODTDOList.add(tbShoppingcartGroupByShopODTDO);
			}
		}
		return tbShoppingcartGroupByShopODTDOList;
	}
	
	public Boolean shopIdInlist(Integer shopId ,List<TbShoppingcartGroupByShopIdTDO> tbShoppingcartGroupByShopODTDOList){
		for(TbShoppingcartGroupByShopIdTDO tbShoppingcartGroupByShopODTDO : tbShoppingcartGroupByShopODTDOList){
			if(shopId == tbShoppingcartGroupByShopODTDO.getShopId()){
				return true ;
			}
		}
		return false ;
	}
	
	
	
	public String addShoppingcart(TbShoppingcart shoppingcart) {
		String message = "添加购物车成功!";
		try {
			SearchPageUtil page = new SearchPageUtil();
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("goodsId", shoppingcart.getGoodsId());
			//params.put("modelId", shoppingcart.getModelId());
			params.put("memberId", shoppingcart.getMemberId());
			page.setParams(params);
			List<TbShoppingcart> list = shoppingcartDao.findPageList(page);
			
			if(list.size()>0){//存在，源数量+新购买数量
				TbShoppingcart pamacart = list.get(0);
				pamacart.setGoodsCount(pamacart.getGoodsCount()+shoppingcart.getGoodsCount());
				shoppingcartDao.update(pamacart);
			}else{//不存在，添加
				shoppingcart.setCartId(sequenceService.getSequence("tb_shoppingcart"));
				shoppingcart.setPutTime(DateUtil.formatDateTime());
				shoppingcartDao.add(shoppingcart);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加购物车失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteShoppingcart(String ids) {
		int count = 0;
		String message = "删除购物车成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						shoppingcartDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除购物车失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	public String deleteShoppingcart2(String shopId,int memberId) {
		int count = 0;
		String message = "删除购物车成功!";
		try {
			SearchPageUtil page = new SearchPageUtil();
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("memberId", memberId);
			params.put("shopId", shopId);
			page.setParams(params);
			count= shoppingcartDao.deleteByShop(page);
			System.out.println(count);
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除购物车失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	public String updateShoppingcart(TbShoppingcart shoppingcart) {
		String message = "修改购物车成功!";
		try {
			SearchPageUtil page = new SearchPageUtil();
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("goodsId", shoppingcart.getGoodsId());
			//params.put("modelId", shoppingcart.getModelId());
			params.put("memberId", shoppingcart.getMemberId());
			page.setParams(params);
			List<TbShoppingcart> list = shoppingcartDao.findPageList(page);
			
			if(list.size()>0){//存在，源数量+新购买数量
				TbShoppingcart pamacart = list.get(0);
				pamacart.setGoodsCount(shoppingcart.getGoodsCount());
				shoppingcartDao.update(pamacart);
			}else{//不存在，添加
				shoppingcart.setCartId(sequenceService.getSequence("tb_shoppingcart"));
				shoppingcart.setPutTime(DateUtil.formatDateTime());
				shoppingcartDao.add(shoppingcart);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改购物车失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 修改（购物车）商品数量
	 */
	public void updateGoodsCount(TbShoppingcart shoppingcart){
		try {
			shoppingcartDao.updateGoodsCount(shoppingcart);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 根据cartIds 查询列表 ， 并根据 shopid 进行分类
	 */
	@Override
	public List<TbShoppingcartGroupByShopIdTDO> findShoppingcartList(
			List<Integer> ids) {
		// TODO Auto-generated method stub
		List<TbShoppingcartGroupByShopIdTDO> tbShoppingcartGroupByShopODTDOList= new ArrayList<TbShoppingcartGroupByShopIdTDO>();
		List<TbShoppingcartTDO> shoppingcartList = shoppingcartDao.findShoppingcartListByIds(ids);
		//把TbShoppingcartTDO 封装成 TbShoppingcartGroupShopIdTDO
		for(TbShoppingcartTDO tbShoppingcartTDO1 : shoppingcartList){
			Integer shopId = tbShoppingcartTDO1.getTbGoods().getShopId();
			TbShop tbShop = shopDao.findById(shopId);
			if(tbShoppingcartGroupByShopODTDOList.isEmpty()){
				TbShoppingcartGroupByShopIdTDO tbShoppingcartGroupByShopODTDO = new TbShoppingcartGroupByShopIdTDO();
				tbShoppingcartGroupByShopODTDO.setShopId(shopId);
				List<TbShoppingcartTDO> list = new ArrayList<TbShoppingcartTDO>();
				list.add(tbShoppingcartTDO1);
				tbShoppingcartGroupByShopODTDO.setList(list);
				tbShoppingcartGroupByShopODTDO.setTbShop(tbShop);
				tbShoppingcartGroupByShopODTDOList.add(tbShoppingcartGroupByShopODTDO);
			}else if(shopIdInlist(shopId,tbShoppingcartGroupByShopODTDOList)){
				for(TbShoppingcartGroupByShopIdTDO tbShoppingcartGroupByShopODTDO : tbShoppingcartGroupByShopODTDOList){
					if(shopId == tbShoppingcartGroupByShopODTDO.getShopId()){
						tbShoppingcartGroupByShopODTDO.getList().add(tbShoppingcartTDO1);
					}
				}
			}else {
				TbShoppingcartGroupByShopIdTDO tbShoppingcartGroupByShopODTDO = new TbShoppingcartGroupByShopIdTDO();
				tbShoppingcartGroupByShopODTDO.setShopId(shopId);
				List<TbShoppingcartTDO> list = new ArrayList<TbShoppingcartTDO>();
				list.add(tbShoppingcartTDO1);
				tbShoppingcartGroupByShopODTDO.setList(list);
				tbShoppingcartGroupByShopODTDO.setTbShop(tbShop);
				tbShoppingcartGroupByShopODTDOList.add(tbShoppingcartGroupByShopODTDO);
			}
		}
		return tbShoppingcartGroupByShopODTDOList;
	}
	
	@Override
	public List<TbShoppingcartTDO> findShoppingcartListByIds(List<Integer> ids) throws RuntimeException {
		List<TbShoppingcartTDO> shoppingcartList = shoppingcartDao.findShoppingcartListByIds(ids);
		return shoppingcartList;
	}
	

	
}
