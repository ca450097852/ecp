package com.wap.member.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberUser;
import com.hontek.member.service.MemberUserService;


/**
 * <p>Title: 会员用户控制器类</p>
 * <p>Description: 会员用户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("wap/memberUser")
public class WapMemberUserController extends BaseController{
	
	private MemberUserService memberUserService;
	
	@Autowired
	public void setMemberUserService(MemberUserService memberUserService) {
		this.memberUserService = memberUserService;
	}
	
	/**
	 * 添加
	 * @param memberUser
	 * @param response
	 */
	@RequestMapping("add")
	public void addMemberUser(TbMemberUser memberUser,HttpServletResponse response){
		writeJson2View(memberUserService.addMemberUser(memberUser), response);
	}
	
	/**
	 * 审核
	 * @param ids
	 * @param type
	 * @param response
	 */
	@RequestMapping("auditSts")
	public void auditSts(String ids,String type,HttpServletResponse response){
		writeJson2View(memberUserService.auditSts(ids,type), response);
	}
	

	/**
	 * 修改
	 * @param memberUser
	 * @param response
	 */
	@RequestMapping("update")
	public void updateMemberUser(TbMemberUser memberUser,HttpServletResponse response,HttpSession session){
		String flag=memberUserService.updateMemberUser(memberUser);
		if(flag.equals("修改会员用户成功!")){
			session.setAttribute("memberUser", memberUser);
		}
		writeJson2View(flag, response);
	}
	
	/**
	 * 修改密码
	 * @param memberUser
	 * @param response
	 */
	@RequestMapping("ns/updatePsd")
	public void updateMemberPsd(String psd,String account,String flag,HttpServletResponse response,HttpSession session){
			if(flag.equals("1")){
				TbMemberUser tbMemberUser=memberUserService.findMemberUserByAccount(account);
				if(tbMemberUser!=null){
					tbMemberUser.setPassword(psd);
					writeJson2View(memberUserService.updateMemberUser(tbMemberUser), response);
				}else{
					writeJson2View("flase", response);	
				}
			}else{
				TbMemberUser tbMemberUser = (TbMemberUser)session.getAttribute("memberUser");
				tbMemberUser.setPassword(psd);
				writeJson2View(memberUserService.updateMemberUser(tbMemberUser), response);
			}
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteMemberUser(String ids,HttpServletResponse response){
		writeJson2View(memberUserService.deleteMemberUser(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = memberUserService.findMemberUserList(pageUtil);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 登录用户查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("findMemberUser")
	public void findMemberUser(HttpServletResponse response,Integer memberId,HttpSession session){
		try {
			if(memberId==null){
				memberId = ((TbMember)session.getAttribute("member")).getMemberId();
			}
			TbMemberUser memberUser = memberUserService.findMemberUser(memberId);
			writeJson2View(memberUser, response);
		} catch (Exception e) {
			e.getStackTrace();
		}
	
	}
	/**
	 * 上传shop图片
	 * @param uploadify
	 * @param response
	 * @param request
	 */
	@RequestMapping("ns/upload")
	public void uploadFile(@RequestParam MultipartFile uploadify,HttpServletResponse response,HttpServletRequest request){
		
		String path = request.getRealPath("");
		path = path.substring(0,path.lastIndexOf(File.separator)+1);
		path +="ecpFiles"+File.separator;//创建一级目录：ecpFiles
		File tmpFile = new File(path);
		if(!tmpFile.exists()){
			tmpFile.mkdir();
		}
		
		path +="member"+File.separator;//创建二级目录：goods 即：ecpFiles/member
		File tmpFile2 = new File(path);
		if(!tmpFile2.exists()){
			tmpFile2.mkdir();
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String fileName = sdf.format(new Date())+uploadify.getOriginalFilename().substring(uploadify.getOriginalFilename().indexOf("."));
		
		try {
			FileUtils.copyInputStreamToFile(uploadify.getInputStream(), new File(path,fileName));
			String url = "/ecpFiles/member/"+fileName;//返回图片路径
			writeJson2View(url, response);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 获取验证码
	 * @param response
	 */
	@RequestMapping("ns/code")
	public void getCode(HttpServletResponse response){
		int code = (int)(Math.random()*(9999-1000+1))+1000;
		writeJson2View(code, response);
	}
	
	/**
	 * 头像上传
	 * @param file
	 */
	@RequestMapping(value = "upload2")  
    public ModelAndView upload(@RequestParam(value = "file", required = false) MultipartFile file, HttpServletRequest request,HttpServletResponse response,HttpSession session) {  
  
		String path = request.getRealPath("");
		path = path.substring(0,path.lastIndexOf(File.separator)+1);
		path +="ecpFiles"+File.separator;//创建一级目录：ecpFiles
		File tmpFile = new File(path);
		if(!tmpFile.exists()){
			tmpFile.mkdir();
		}
		
		path +="member"+File.separator;//创建二级目录：goods 即：ecpFiles/member
		File tmpFile2 = new File(path);
		if(!tmpFile2.exists()){
			tmpFile2.mkdir();
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String fileName = sdf.format(new Date())+file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
		
		try {
			FileUtils.copyInputStreamToFile(file.getInputStream(), new File(path,fileName));
			String url = "/ecpFiles/member/"+fileName;//返回图片路径
			TbMemberUser tbMemberUser=(TbMemberUser)session.getAttribute("memberUser");
			tbMemberUser.setHeadPhoto(url);
			String update=memberUserService.updateMemberUser(tbMemberUser);
			if(update.equals("修改会员用户成功!")){
				session.setAttribute("memberUser", tbMemberUser);
				return new ModelAndView(new RedirectView( request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/wap/memberInfo.jsp"));
			}
			writeJson2View(url, response);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
    }  
	
}
