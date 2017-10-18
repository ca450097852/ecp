package com.hontek.goods.test;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbShelf;
import com.hontek.goods.service.ShelfService;
import com.hontek.order.domain.TbShoppingcartGroupByShopIdTDO;
import com.hontek.order.domain.TbShoppingcartTDO;
import com.hontek.order.service.ShoppingcartService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml", "classpath:spring-mybatis.xml" })
public class ShelfTest extends BaseController{
	
	@Autowired
	private ShelfService shelfService;
	
	@Autowired
	private ShoppingcartService shoppingcartService ;
	
/*	@Test
	public void testAdd(){
		TbShelf shelf = new TbShelf();
		shelf.setGoodsId(90);
		shelf.setMemberId(33);
		shelf.setShopId(22);
		shelf.setGoodsCount(33);
		shelf.setShelfTime(DateUtil.formatDateTime());
		shelf.setShelfType("1");
		
		String str = shelfService.addShelf(shelf);
		
		System.out.println(str);
	}
	
	@Test
	public void testSelect(){
		Grid grid = shelfService.findPageList(new SearchPageUtil());
		System.out.println(grid.getTotal());
	}*/
	
	@Test
	public void testlist(){
		TbShoppingcartTDO tbShoppingcartTDO = new TbShoppingcartTDO();
		tbShoppingcartTDO.setMemberId(3);
		List<TbShoppingcartGroupByShopIdTDO> list = shoppingcartService.findShoppingcartList(tbShoppingcartTDO);
		System.out.println(JSONObject.toJSONString(list));
	}

}
