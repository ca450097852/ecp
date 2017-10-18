package com.hontek.theme.service;


import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.theme.model.TbTheme;
/**
 * <p>Title: 主题管理Service类</p>
 * <p>Description: 主题管理</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author ca
 * @version 1.0
 */
public interface TbThemeService {

	public String addTbTheme(TbTheme tbTheme,HttpSession session);
	
	public String updateTbTheme(TbTheme tbTheme);
		
	public String deleteTbTheme(String ids);
	
	public Grid findTbThemeList(SearchPageUtil pageUtil);
	
	public TbTheme findTbThemeList(Integer tbThemeId);
	
	public TbTheme getTbThemeById(Integer tbThemeId);
	
	public String auditSts(String ids,String type);
	
	List<Tree> findForTree();

	
	
}
