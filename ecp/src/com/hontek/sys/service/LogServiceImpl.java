package com.hontek.sys.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.dao.LogDao;
import com.hontek.sys.model.TsLog;
/**
 * @ClassName: LogServiceImpl
 * @Description: TODO(系统日志，serviceImpl实现类)
 * @date 2015-6-30 下午04:17:58
 * @author qql
 * @version 1.0
 */
@Service("logService")
public class LogServiceImpl extends BaseServiceImpl implements LogService{
	
	@Autowired
	private LogDao logDao;
	@Autowired
	private SequenceService sequenceService;
	Logger logger = Logger.getLogger(this.getClass());
	
	@Override
	public Grid findList(SearchPageUtil pageUtil) {
		Grid grid = new Grid();
		List<TsLog> list = logDao.findList(pageUtil);
		grid.setRows(list);
		grid.setTotal(14);
		return grid;
	}
	
	
	/**
	 * 分页查询
	 */
	public Grid findPageList(SearchPageUtil page) {		
		
		
		int tatol = logDao.getCount(page.getParams());


		List<TsLog> list = logDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	/**
	 * 添加
	 */
	public String addLog(TsLog log) {
		String message = "添加成功!";
		try {
			log.setLogId(this.sequenceService.getSequence("ts_log"));
			logDao.add(log);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	/**
	 * 删除
	 */
	public String deleteLog(String ids) {
		String message = "删除成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					logDao.delete(idArray[i]);
				}
				message = "删除成功!";
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

}
