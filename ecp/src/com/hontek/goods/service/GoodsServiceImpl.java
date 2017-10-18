package com.hontek.goods.service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.JsonMsg;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.member.model.TbMember;
import com.hontek.sys.service.SequenceService;
import com.hontek.goods.dao.GoodsDao;
import com.hontek.goods.dao.InventoryDao;
import com.hontek.goods.dao.ShelfDao;
import com.hontek.goods.model.TbGoods;
import com.hontek.goods.model.TbGoodsModel;
import com.hontek.goods.model.TbInventory;
import com.hontek.goods.model.TbShelf;

/**
* 
* <p>Title: 商品Service接口实现类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Service("GoodsService")
public class GoodsServiceImpl implements GoodsService {

	private Logger logger = Logger.getLogger(ShelfServiceImpl.class);
	@Autowired
	private SequenceService sequenceService;
	@Autowired
	private GoodsDao goodsDao;
	@Autowired
	private GoodsModelService goodsModelService;
	@Autowired
	private ShelfDao shelfDao;
	@Autowired
	private InventoryDao inventoryDao;

	@Override
	public Grid findPageList(SearchPageUtil page) {
		List<TbGoods> rows = goodsDao.findPageList(page);
		int total = goodsDao.getCount(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}
	
	
	@Override
	public Grid findPageList1(SearchPageUtil page) {
		List<TbGoods> rows = goodsDao.findPageList1(page);
		int total = goodsDao.getCount(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}
	
	@Override
	public Grid findPageList2(SearchPageUtil page) {
		List<TbGoods> rows = goodsDao.findPageList2(page);
		int total = goodsDao.getCount(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}

	/**
	 * 获取店铺热推
	 */
	@Override
	public List<TbGoods> ListShopHot(Integer shopId, Integer number) {
		// TODO Auto-generated method stub
		List<TbGoods> listShopHot = null ;
		try {
			
				SearchPageUtil page = new SearchPageUtil();
				page.setLimit(number);
				Map<String, Object> params = page.getParams();
				params.put("shopId", shopId);
				params.put("recommend", "1");
				params.put("state", "2");
				
				listShopHot = goodsDao.findPageList3(page);
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("获取店铺热推失败"+e.getMessage());
		}
		return listShopHot;
	}
	
	/**
	 * 获取店铺全部商品
	 */
	@Override
	public List<TbGoods> ListShopGoods(Integer shopId) {
		List<TbGoods> listShopGoods = null ;
		try {
			listShopGoods = goodsDao.ListShopGoods(shopId);
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("获取店铺热推失败"+e.getMessage());
		}
		return listShopGoods;
	}
	
	@Override
	public String updateSelective(TbGoods tbGoods) {
		// TODO Auto-generated method stub
		String msg ="修改推荐商品成功!" ;
		try {
			goodsDao.updateSelective(tbGoods);
		} catch (Exception e) {
			// TODO: handle exception
			msg = "修改推荐商品失败!" ;
			logger.error(tbGoods.getGoodsId() + "修改推荐商品失败:"+e.getMessage());
		}
		return msg;
	}
	
	@Override
	public JsonMsg addGoods(TbGoods goods,String modelStr) {
		
		JsonMsg msg = new JsonMsg();
		msg.setMessage("添加成功!");
		try {
			goods.setGoodsId(sequenceService.getSequence("TB_GOODS"));
			goods.setState("0");//默认设置为待审状态
			goods.setGoodSeq(0);//默认排序0
			goods.setSaledNum(0);//销售数量
			goods.setRecommend("2");//设置默认推荐，2不推荐
			goods.setCreateTime(DateUtil.formatDateTime());
			goods.setUpdateTime(goods.getCreateTime());
			goodsDao.add(goods);
			
			//添加规格
			if(modelStr!=null&&!"".equals(modelStr)){
				ObjectMapper objectMapper = new ObjectMapper();
				List<TbGoodsModel> modelList = objectMapper.readValue(modelStr,
						objectMapper.getTypeFactory().constructCollectionType(List.class, TbGoodsModel.class));
				
				for(TbGoodsModel model:modelList){
					model.setGoodsId(goods.getGoodsId());
					goodsModelService.addGoodsModel(model);
				}
				
			}
		} catch (Exception e) {
			e.printStackTrace();
			msg.setSuccesful("false");
			msg.setMessage("添加失败!");
			logger.error(e.getMessage());
		}
		return msg;
	}
	
	@Override
	public JsonMsg updateGoods(TbGoods goods) {
		JsonMsg msg = new JsonMsg();
		msg.setMessage("修改成功!");
		try {
			goodsDao.update(goods);
		} catch (Exception e) {
			e.printStackTrace();
			msg.setSuccesful("false");
			msg.setMessage(e.getMessage());
			logger.error(e.getMessage());
		}
		return msg;
	}


	@Override
	public String deleteGoods(String ids) {
		String message = "删除成功!";
		try {
			goodsDao.delete(ids);
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public TbGoods getGoodsById(String goodsId) {
		TbGoods goods = goodsDao.getGoodsById(goodsId);
		return goods;
	}
	
	@Override
	public Grid getGoodsByTypeIds(String page,String rows,String typeIds,String orderBy,String brandId,String priceSql,String goodsName,String shopId) {
		String orderby ="";
		if("orderBySaledNum".equals(orderBy)){
			orderby=" order by saled_num ";
		}else if("orderBySaledNumDesc".equals(orderBy)){
			orderby=" order by saled_num desc";
		}else if("orderBySaledPrice".equals(orderBy)){
			orderby=" order by saled_price ";
		}else if("orderBySaledPriceDesc".equals(orderBy)){
			orderby=" order by saled_price desc";
		}
		Integer offset = (Integer.parseInt(page)-1)*Integer.parseInt(rows);  
		
		List<TbGoods> goods = goodsDao.getGoodsByTypeIds(String.valueOf(offset),rows,typeIds,orderby,brandId,priceSql,goodsName,shopId);
		int total = goodsDao.getGoodsByTypeIdsCount(typeIds,orderby,brandId,goodsName,shopId);
		Grid grid = new Grid(total,goods);
		return grid;
	}
	
	@Override
	public List<TbGoods> getGoodsByGoodsIds(String goodsIds,String orderBy) {
		String orderby ="";
		if("orderBySaledNum".equals(orderBy)){
			orderby=" order by saled_num ";
		}else if("orderBySaledNumDesc".equals(orderBy)){
			orderby=" order by saled_num desc";
		}else if("orderBySaledPrice".equals(orderBy)){
			orderby=" order by saled_price ";
		}else if("orderBySaledPriceDesc".equals(orderBy)){
			orderby=" order by saled_price desc";
		}
		List<TbGoods> goods = goodsDao.getGoodsByGoodsIds(goodsIds,orderby);
		return goods;
	}


	@Override
	public String auditGoods(String ids, String state) {
		String message = "审核成功!";
		try {
			goodsDao.auditGoods(ids,state);
		} catch (Exception e) {
			e.printStackTrace();
			message = "审核失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public String updateGoodsforupperLower(String type, String ids,TbMember member) {
		String message = "操作成功!";
		try {
			String state = "2".equals(type)?"4":type;
			goodsDao.auditGoods(ids,state);//修改商品状态
			
			String[] arr = ids.split(",");
			for(String id:arr){
				TbGoods goods = goodsDao.getGoodsById(id);
				TbShelf shelf = new TbShelf();
				shelf.setShelfId(sequenceService.getSequence("TB_SHELF"));
				shelf.setGoodsId(Integer.parseInt(id));
				shelf.setMemberId(member.getMemberId());
				shelf.setShopId(goods.getShopId());
				shelf.setGoodsCount(goods.getInventory());
				shelf.setShelfTime(DateUtil.formatDateTime());
				shelf.setShelfType(type);
				shelfDao.add(shelf);
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "操作失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	@Override
	public String updateGoodsforInventory(Integer inventory, String ids,TbMember member) {
		String message = "操作成功!";
		try {
			TbGoods goods = goodsDao.getGoodsById(ids);
			TbInventory tbInventory = new TbInventory();
			tbInventory.setChangeCause("卖家设置");
			tbInventory.setChangeTime(DateUtil.formatDateTime());
			tbInventory.setMemberId(member.getMemberId());
			tbInventory.setRecordId(sequenceService.getSequence("TB_INVENTORY"));
			tbInventory.setGoodsId(Integer.parseInt(ids));
			tbInventory.setShopId(goods.getShopId());
			tbInventory.setOldCount(goods.getInventory());
			tbInventory.setChangeCount(inventory);
			if(goods.getInventory()-inventory<0){
				tbInventory.setChangeType("1");
			}else{
				tbInventory.setChangeType("2");
			}
			inventoryDao.add(tbInventory);
			
			goodsDao.upGoods(ids,inventory);//修改商品状态
			
		} catch (Exception e) {
			e.printStackTrace();
			message = "操作失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	@Override
	public Grid findListOrderBy(SearchPageUtil page) {
		List<TbGoods> rows = goodsDao.findListOrderBy(page);
		int total = goodsDao.getCountOrderBy(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}
	
	public List<Tree> findForTree(int typeId,int themeId) {
		return goodsDao.findForTree(typeId,themeId);
	}


	@Override
	public List<TbGoods> ListShopGoodsByTypeId(Integer shopId, Integer typeId) {
		// TODO Auto-generated method stub
		return goodsDao.ListShopGoodsByTypeId(shopId,typeId);
	}	

	
	
	
	
	
	
}