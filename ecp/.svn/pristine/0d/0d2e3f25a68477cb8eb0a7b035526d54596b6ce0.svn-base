package com.wap.member.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.MeberLevelDao;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbShop;
import com.hontek.member.service.MemberLevelService;
import com.hontek.member.service.ShopService;


/**
 * <p>Title:会员积分控制器类</p>
 * <p>Description: 会员积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
@Controller
@RequestMapping("wap/integral")
public class WapMemberLevelController extends BaseController{

	
	private MemberLevelService memberLevelService;
	
	@Autowired
	public void setMemberLevelService(MemberLevelService memberLevelService) {
		this.memberLevelService = memberLevelService;
	}
	
	/**
	 * 根据id获取登记列表
	 * @param levelId
	 * @param response
	 */
	@RequestMapping("level")
	public void findLevelList(HttpServletResponse response,int id){
		TbMemberLevel memberLevel = memberLevelService.getMemberLevelByLevelId(id);
		writeJson2View(memberLevel, response);
	}

	
}
