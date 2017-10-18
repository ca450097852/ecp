package com.hontek.sys.service;


import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.model.TsEnterprise;
import com.hontek.sys.model.TsLog;
/**
 * @ClassName: LogService
 * @Description: TODO(系统日志，service 接口)
 * @date 2015-6-30 下午04:17:31
 * @author qql
 * @version 1.0
 */
public interface LogService {
	/**
	 * 添加
	 */
	public String addLog(TsLog log);
	
	public Grid findList (SearchPageUtil pageUtil);
	
	
	/**
	 * 分页查询
	 */
	public Grid findPageList(SearchPageUtil page);
}
