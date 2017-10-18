package com.hontek.theme.dao;

import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.model.Tree;
import com.hontek.theme.model.TbTheme;


public interface TbThemeDao extends BaseDao<TbTheme> {
	public int delete(Integer t);
	
	List<Tree> findForTree();
}