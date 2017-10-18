package com.web.member.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.util.DateUtil;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberUser;
import com.hontek.member.model.TbShop;
import com.hontek.member.service.MemberService;
import com.hontek.member.service.MemberUserService;
import com.hontek.sys.model.TsLog;
import com.hontek.sys.model.TsUser;


/**
 * <p>Title: 会员控制器类</p>
 * <p>Description: 会员管理</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("web/member")
public class WebMemberController extends BaseController{

	@Autowired
	private MemberService memberService;
	@Autowired
	private MemberUserService memberUserService;
	
	/**
	 * 会员注册
	 * @param member
	 * @param response
	 */
	@RequestMapping("ns/register")
	public void addMember(TbMember member,TbMemberUser memberUser,HttpServletResponse response){
		
		
		writeJson2View(memberService.registerMember(member,memberUser), response);
	}
	
	
	/**
	 * APP会员注册
	 * @param member
	 * @param response
	 */
	@RequestMapping("registerNoSession")
	public void addMember2(TbMember member,TbMemberUser memberUser,HttpServletResponse response){
		writeJson2View(memberService.registerMember(member,memberUser), response);
	}
	
	/**
	 * APP会员登录
	 * @param member
	 * @param response
	 */
	@RequestMapping("loginNoSession")
	public void  loginMember2(TbMemberUser memberUser,HttpServletResponse response,HttpServletRequest request, HttpSession session){
		String message = "";
		String flag = "";
		Map<String, String> map = new HashMap<String, String>();
		
		Object loginUser = session.getAttribute("memberUser");		
		if(loginUser==null){
			if(memberUser.getAccount()==null||"".equals(memberUser.getAccount())){
				message = "请填写登录账号!";				
				flag = "false";
			}else if(memberUser.getPassword()==null||"".equals(memberUser.getPassword())){
				message = "请填写登录密码!";			
				flag = "false";
			}else{
				TbMemberUser loginMemberUser = memberUserService.loginMemberUser(memberUser);
				if(loginMemberUser==null){
					message = "登录账号或者密码错误!";
					flag = "false";
				}else{					
					TbMember member = memberService.findMember(loginMemberUser.getMemberId());					
					session.setAttribute("member", member);
					session.setAttribute("memberUser", loginMemberUser);
					message = "登录成功!";
					flag = "true";
				}
			}	
		}
		map.put("msg", message);
		map.put("flag", flag);		
		writeJson2View(map, response);
	}
	
	/**
	 * 会员登录
	 * @param member
	 * @param response
	 */
	@RequestMapping("login")
	public ModelAndView  loginMember(TbMemberUser memberUser,HttpServletResponse response,HttpServletRequest request, HttpSession session){
		String message = "";
		String url = "login.jsp";
		Object loginUser = session.getAttribute("memberUser");		
		if(loginUser==null){
			if(memberUser.getAccount()==null||"".equals(memberUser.getAccount())){
				message = "请填写登录账号!";
				
			}else if(memberUser.getPassword()==null||"".equals(memberUser.getPassword())){
				message = "请填写登录密码!";
				
			}else{
				TbMemberUser loginMemberUser = memberUserService.loginMemberUser(memberUser);
				if(loginMemberUser==null){
					message = "登录账号或者密码错误!";
				}else{
					
					TbMember member = memberService.findMember(loginMemberUser.getMemberId());
					
					session.setAttribute("member", member);
					session.setAttribute("memberUser", loginMemberUser);
					//System.out.println(loginMemberUser.getAccount());
					message = "登录成功!";
					url = "../index.jsp";
				}
			}	
		}else{
			url = "../index.jsp";
		} 
		return new ModelAndView("redirect:"+url);
	}
	@RequestMapping("ns/LayerLogin")
	public void  loginMemberLayer(String account,String password,HttpServletResponse response,HttpServletRequest request, HttpSession session){
		String message = "";
		if(account==null||"".equals(account)){
			message = "请填写登录账号!";
		}else if(password==null||"".equals(password)){
			message = "请填写登录密码!";
		}else{
			TbMemberUser memberUser = new TbMemberUser();
			memberUser.setAccount(account);
			memberUser.setPassword(password);
			TbMemberUser loginMemberUser = memberUserService.loginMemberUser(memberUser);
			if(loginMemberUser==null){
				message = "登录账号或者密码错误!";
			}else{
				TbMember member = memberService.findMember(loginMemberUser.getMemberId());
				session.setAttribute("member", member);
				session.setAttribute("memberUser", loginMemberUser);
				message = "登录成功!";
			}
		}	
		writeJson2View(message, response);
	}
	
	/**
	 * 用户退出
	 * @param request
	 */
	@RequestMapping("logout")
	public void memberLogout(HttpServletRequest request,HttpServletResponse response){	
		String message = "";
		HttpSession session = request.getSession();	
		Object loginUser = session.getAttribute("memberUser");
		if(loginUser!=null){
			session.removeAttribute("memberUser");
			session.removeAttribute("member");
			message = "退出成功!";
		}
		writeJson2View(message, response);
	}

	/**
	 * 修改
	 * @param member
	 * @param response
	 */
	@RequestMapping("update")
	public void updateMember(TbMember member,Integer _parentId,HttpServletResponse response){
		writeJson2View(memberService.updateMember(member), response);
	}
	
	/**
	 * 登录用户查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("findMemberById")
	public void findMemberById(HttpServletResponse response,Integer memberId,HttpSession session){
		try {
			if(memberId==null){
				memberId = ((TbMember)session.getAttribute("member")).getMemberId();
			}
			TbMember member = memberService.findMember(memberId);
			writeJson2View(member, response);
		} catch (Exception e) {
			e.getStackTrace();
		}
	
	}
	

	
}
