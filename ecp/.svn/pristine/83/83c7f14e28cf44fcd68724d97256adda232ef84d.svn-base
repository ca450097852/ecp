package com.hontek.sys.controller;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hontek.sys.model.TsUser;
import com.hontek.sys.service.UserService;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;

@Controller
@RequestMapping("user")
public class UserController extends BaseController{
	@Autowired
	private UserService userService;
	
	@RequestMapping("add")
	public void add(TsUser user,HttpServletResponse response){
		try {
			writeJson2View(userService.addUser(user), response);
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		} 
	}
	
	@RequestMapping("delete")
	public void delete(String ids,HttpServletResponse response){
		try {
			writeJson2View(userService.deleteUser(ids), response);
		} catch (Exception e) {
			e.printStackTrace();
		} 
	}
	
	
	@RequestMapping("update")
	public void update(TsUser user,HttpServletResponse response){
		try {			
			writeJson2View(userService.updateUser(user), response);
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		} 
	}
	
	
	/**
	 * 分页查询
	 * @param SearchPageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findAll(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = userService.findUserList(page);
		writeJson2View(dataGrid, response);
	}
}
