package com.hontek.sys.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hontek.sys.model.TsRole;
import com.hontek.sys.service.RoleService;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;

@Controller
@RequestMapping("role")
public class RoleController extends BaseController{
	@Autowired
	private RoleService roleService;
	
	@RequestMapping("add")
	public void add(TsRole role,HttpServletResponse response){
		try {
			writeJson2View(roleService.addRole(role), response);
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		} 
	}
	
	
	@RequestMapping("delete")
	public void delete(String ids,HttpServletResponse response){
		try {
			writeJson2View(roleService.deleteRole(ids), response);
		} catch (Exception e) {
			e.printStackTrace();
		} 
	}
	
	
	@RequestMapping("update")
	public void update(TsRole role,HttpServletResponse response){
		try {			
			writeJson2View(roleService.updateRole(role), response);
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		} 
	}
	
	/**
	 * 查询全部
	 * @param role
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findAll(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = roleService.findRoleList(page);
		writeJson2View(dataGrid, response);
	}
	
	
	/**
	 * 读取用户未拥有角色
	 * @param entId
	 * @param userId
	 * @param response
	 */
	@RequestMapping("entRoleCombo")
	public void getEntRoleCombo(Integer entId,String userId,HttpServletResponse response){
		writeJson2View(roleService.getEntRoleCombo(entId,userId), response);
	}
	
	
	/**
	 * 读取用户已拥有角色
	 * @param userId
	 * @param response
	 */
	@RequestMapping("userRoleCombo")
	public void getUserRoleCombo(String userId,HttpServletResponse response){
		writeJson2View(roleService.getUserRoleCombo(userId), response);
	}
	
	/**
	 * 保存用户角色
	 * @param roloIds
	 * @param userId
	 * @param response
	 */
	@RequestMapping("userRoleAdd")
	public void addUserRole(String roleIds,String userId,HttpServletResponse response){
		writeJson2View(roleService.addRoleUser(roleIds,userId), response);
	}
	

	/**
	 * 读取用户已拥有权限
	 * @param userId
	 * @param response
	 */
	@RequestMapping("rolePurvTree")
	public void findRolePurvTree(Integer roleId,HttpServletResponse response,HttpSession session){
		System.out.println("roleId=="+roleId);
		writeJson2View(roleService.findRolePurvTree(getLoginUserId(session),roleId,isAdmin(session)), response);
	}
	
	/**
	 * 保存权限
	 * @param roleId
	 * @param entId
	 * @param colIds
	 * @param response
	 */
	@RequestMapping("addRolePurv")
	public void addRolePurv(Integer roleId,Integer entId, String colIds,HttpServletResponse response){
		writeJson2View(roleService.addRolePurv( roleId, entId, colIds), response);
	}
	
	/**
	 * 读取默认权限
	 * @param userId
	 * @param response
	 */
	@RequestMapping("rolePurvDefTree")
	public void findRolePurvDefTree(Integer typeId,HttpServletResponse response){		
		writeJson2View(roleService.findRolePurvDefTree(typeId), response);
	}
	
	/**
	 * 保存默认权限
	 * @param roleId
	 * @param entId
	 * @param colIds
	 * @param response
	 */
	@RequestMapping("addRolePurvDef")
	public void addRolePurvDef(Integer typeId,String colIds,HttpServletResponse response){
		writeJson2View(roleService.addRolePurvDef( typeId, colIds), response);
	}
}
