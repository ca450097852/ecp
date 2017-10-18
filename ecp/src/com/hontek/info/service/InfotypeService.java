package com.hontek.info.service;

import java.util.List;

import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.info.modelDO.InfotypeVO;
import com.hontek.info.modelVO.TreeInfoType;

/**
*
* <p>Title: 资讯分类接口类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public interface InfotypeService {

	String addInfotype(InfotypeVO infotypeVO);
	
	String deleteInfotype(String ids);
	
	String updateInfotype(InfotypeVO infotypeVO);
	
	List<InfotypeVO> listInfotypeVO(SearchPageUtil page);
	
	List<TreeInfoType> treeInfotype(InfotypeVO infotypeVO);
	
	List<Tree> comboTreeInfotype(Integer rootId);
}
