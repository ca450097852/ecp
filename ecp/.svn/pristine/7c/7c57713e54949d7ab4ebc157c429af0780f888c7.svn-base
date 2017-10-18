package com.web.evaluate.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.domain.EvaluateCountTDO;
import com.hontek.order.domain.TbShoppingcartGroupByShopIdTDO;
import com.hontek.order.domain.TbShoppingcartTDO;
import com.hontek.order.model.TbShoppingcart;
import com.hontek.order.service.ShoppingcartService;
import com.web.evaluate.service.WebEvaluateService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml", "classpath:spring-mybatis.xml" })
public class WebEvaluateTest extends BaseController{
		
	@Autowired
	private WebEvaluateService webEvaluateService ;
	
	/**
	 * 分页查询
	 */
	@Test
	public void findEvaluateList(){
		
		SearchPageUtil page = new SearchPageUtil();
		//page.getParams().put("memberId", 3);
		page.getParams().put("evalSide", 1);
		page.getParams().put("hadimg", 1);
		try {
			Grid grid = webEvaluateService.findEvaluateList(page);
			System.out.println(JSON.toJSONString(grid));
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	/**
	 * 分页查询(包含卖家回复)
	 */
	/*@Test
	public void findProtalEvaluateList(){
		
		SearchPageUtil page = new SearchPageUtil();
		page.getParams().put("goodsId", 12);
		page.getParams().put("evalSide", 1);
		try {
			Grid grid = webEvaluateService.findProtalEvaluateList(page);
			System.out.println(JSON.toJSONString(grid));
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}*/
	
	/**
	 * 评价统计
	 */
	/*@Test
	public void getEvaluateCount(){
		EvaluateCountTDO countTDO = webEvaluateService.getEvaluateCount(12);
		System.out.println(JSON.toJSONString(countTDO));
	}*/
	
	
}
