package com.hontek.recommend.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbMemberLevel2;
import com.hontek.member.service.MemberLevel2Service;
import com.hontek.recommend.model.TbMemberRecommend;
import com.hontek.recommend.service.MemberRecommendService;



/**
 * <p>Title:推荐记录控制器类</p>
 * <p>Description: 推荐记录</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
@Controller
@RequestMapping("memberRecommend")
public class MemberRecommendController extends BaseController{

	
	private MemberRecommendService recommendService;
	
	@Autowired
	public void setMemberLevelService(MemberRecommendService recommendService) {
		this.recommendService = recommendService;
	}

	
	/**
	 * 添加
	 * @param MemberRecommend
	 * @param response
	 */
	@RequestMapping("add")
	public void addMemberLevel(TbMemberRecommend recommend,HttpServletResponse response,HttpSession session){
		writeJson2View(recommendService.addMemberRecommend(recommend, session),response);
	}
	
	
	
	/**
	 * 修改
	 * @param MemberRecommend
	 * @param response
	 */
	@RequestMapping("update")
	public void updateShop(TbMemberRecommend recommend,HttpServletResponse response){
		writeJson2View(recommendService.updateMemberRecommend(recommend), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	/*
	@RequestMapping("delete")
	public void deleteShop(String ids,HttpServletResponse response){
		writeJson2View(recommendService.deleteMemberRecommend(ids), response);
	}
	*/
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = recommendService.findMemberRecommendList(pageUtil);
		writeJson2View(dataGrid, response);
		
	}

	
}
