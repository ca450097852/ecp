package com.hontek.info.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.info.modelDO.InfoVO;

/**
*
* <p>Title: 资讯内容接口类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
public interface InfoService {
	
	String addInfo(InfoVO infoVO);
	
	String deleteInfo(String ids);
	
	String updateInfo(InfoVO infoVO);
	
	Grid listInfo(SearchPageUtil page);
	
	List findInfoByInfoId(Integer infoId);

	public Grid findADInfoList(SearchPageUtil page,InfoVO info);
	
}
