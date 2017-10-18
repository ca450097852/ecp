package com.wap.goods.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.RecommendGoods;
import com.hontek.goods.service.RecommendGoodsService;
import com.hontek.member.model.TbMember;
/**
* <p>Title: 商品推荐控制器类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author 
* @version 1.0
 */
@Controller
@RequestMapping("wap/recommendGoods")
public class WapRecommendGoodsController extends BaseController{
	
	@Autowired
	private RecommendGoodsService recommendGoodsService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response,HttpSession session){
		if(page!=null){
			TbMember member = getLoginWebUser(session);
			page.getParams().put("menberId", member.getMemberId());
		}
		Grid grid = recommendGoodsService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	
	@RequestMapping("ns/list")
	public void findList(SearchPageUtil page,HttpServletResponse response,HttpSession session){		
		List<RecommendGoods> grid = recommendGoodsService.findList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addRecommendGoods(RecommendGoods rg,HttpServletResponse response,HttpSession session){
		TbMember member = getLoginWebUser(session);
		rg.setMenberId(member.getMemberId());
		rg.setMemberName(member.getMemberName());		
		writeJson2View(recommendGoodsService.addRecommendGoods(rg), response);
	}
	
	@RequestMapping("update")
	public void updateRecommendGoods(RecommendGoods rg,HttpServletResponse response){
		writeJson2View(recommendGoodsService.updateRecommendGoods(rg), response);
	}
	
	@RequestMapping("delete")
	public void deleteRecommendGoods(String ids,HttpServletResponse response){
		writeJson2View(recommendGoodsService.deleteRecommendGoods(ids), response);
	}
	
	
	
	/**
	 * 会员销售信息
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("info")
	public void recommend(HttpServletResponse response,HttpSession session){
		try {
			Object object = session.getAttribute("member");
			TbMember member = null;
			if(object!=null){
				 member = (TbMember)object;
			}		
			writeJson2View(recommendGoodsService.getRecommend(member.getMemberId()), response);
		} catch (Exception e) {
			e.getStackTrace();
		}
	
	}
}
