package com.hontek.theme.service;


import javax.servlet.http.HttpSession;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.theme.model.TbTheme;
import com.hontek.theme.model.ThemeGoods;
/**
 * <p>Title: 主题管理Service类</p>
 * <p>Description: 主题管理</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author ca
 * @version 1.0
 */
public interface ThemeGoodsService {

	public String addThemeGoods(ThemeGoods themeGoods,String goodsId,HttpSession session);
	
	public String updateThemeGoods(ThemeGoods themeGoods);
		
	public String deleteThemeGoods(String ids);
	
	public Grid findThemeGoodsList(SearchPageUtil pageUtil);
	
	public TbTheme findThemeGoodsList(Integer themeGoodsId);

	public Object deleteThemeGoods2(String ids);
	
	
	
	
}
