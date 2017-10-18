package com.hontek.sys.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.util.DateUtil;
import com.hontek.sys.model.TsEnterprise;
import com.hontek.sys.model.TsLog;
import com.hontek.sys.model.TsSysCol;
import com.hontek.sys.model.TsUser;
import com.hontek.sys.service.EnterpriseService;
import com.hontek.sys.service.LogService;
import com.hontek.sys.service.RoleService;
import com.hontek.sys.service.UserService;

/**
 * <p>Title: 用户登录控制器类</p>
 * <p>Description: 系统用户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("login")
public class LoginController extends BaseController{
	
	@Autowired
	private EnterpriseService enterpriseService;
	@Autowired
	private UserService userService;
	@Autowired
	private RoleService roleService;
	@Autowired
	private LogService logService;
	
	
	private String msg;	
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}

	/**
	 * 用户登录
	 * @param user
	 * @param response
	 */
	@RequestMapping(value="login")
	public void userLogin(TsUser user,HttpServletResponse response,HttpServletRequest request){	
		String returnUrl = "success";
		try {
			String userName = user.getUserName();
			String password = user.getPassword();		
			String account = user.getAccount();
			
			HttpSession session = request.getSession();
			Object loginUser = session.getAttribute("loginUser");
			if(loginUser==null){
				List<TsSysCol> list = null;
				TsUser u = null;
				TsUser param = null;
				if("administrator".equals(userName)){
					param = new TsUser();
					param.setUserName(userName);
					param.setPassword(password);
					u = userService.findUser(param);
					if(u==null){
						//用户名或密码错误
						returnUrl = "usererror";
						msg="密码错误!";
					}else{
						returnUrl = "success";
						list = roleService.findLoginUserCol("");
						System.out.println("adminstrator.sysColList=="+list.size());
					}
				}else{					
					TsEnterprise enterprise = enterpriseService.findEnterpriseByAccount(account);				
					if(enterprise==null){
						//用户名或密码错误
						returnUrl = "usererror";
						msg="机构号错误!";
					}else{
						param = new TsUser();
						param.setUserName(userName);
						param.setPassword(password);
						param.setEntId(enterprise.getEntId());
						u = userService.findUser(param);		
						if(u==null){
							//用户名或密码错误
							returnUrl = "usererror";
							msg="用户或者密码错误!";
						}else{
							list = roleService.findLoginUserCol(u.getUserId());												
						}
					}		
					session.setAttribute("loginEnt",enterprise);
				}
				if(u!=null){
					//System.out.println("u.getUserId()==="+u.getUserId());
					TsLog tsLog = new TsLog( 0,"用户登录", "5",u.getUserName(), u.getUserId(), u.getEntId(), DateUtil.formatDateTime(), request.getRemoteAddr());
					logService.addLog(tsLog);
					session.setAttribute("loginUser",u);
					session.setAttribute("UserCols",list);
				}												
			}		
		} catch (Exception e) {
			e.printStackTrace();
		}
		writeJson2View(returnUrl, response); 
	}
	
	/**
	 * 用户退出
	 * @param request
	 */
	@RequestMapping("index")
	public String userIndex(HttpServletRequest request){							
		return "jsp/admin/index";
	}
	
	/**
	 * 用户退出
	 * @param request
	 */
	@RequestMapping("logout")
	public String userLogout(HttpServletRequest request){	
		HttpSession session = request.getSession();	
		
		Object loginUser = session.getAttribute("loginUser");
		if(loginUser!=null){
			TsUser u = (TsUser)loginUser;
			TsLog tsLog = new TsLog( 0,"用户退出", "6",u.getUserName(), u.getUserId(), u.getEntId(), DateUtil.formatDateTime(), request.getRemoteAddr());
			logService.addLog(tsLog);
		}
		
		session.removeAttribute("UserCols");
		session.removeAttribute("loginUser");							
		return "jsp/login/login";
	}
}
