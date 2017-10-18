package com.hontek.order.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.LogisDao;
import com.hontek.order.model.TbLogis;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: LogisServiceImpl
 * @Description: TODO(发货物流信息表  ServiceImpl)
 * @date 2015-6-26 下午04:51:08
 * @author qql
 * @version 1.0
 */
@Service("logisService")
public class LogisServiceImpl implements LogisService {

	@Autowired
	private LogisDao logisDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findLogisList(SearchPageUtil page) {
		
		
		int tatol = logisDao.getCount(page.getParams());


		List<TbLogis> list = logisDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	@Override
	public TbLogis findTbLogisByParam(SearchMapUtil map) {
		// TODO Auto-generated method stub
		return logisDao.findTbLogisByParam(map);
	}
	@Override
	public TbLogis findTbLogisById(Integer logisId) {
		// TODO Auto-generated method stub
		return logisDao.findTbLogisById(logisId);
	}



	public String addLogis(TbLogis logis) {
		String message = "添加发货物流信息成功!";
		try {
			logis.setLogisId(sequenceService.getSequence("tb_logis"));
			logisDao.add(logis);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加发货物流信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteLogis(String ids) {
		int count = 0;
		String message = "删除发货物流信息成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						logisDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除发货物流信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateLogis(TbLogis logis) {
		String message = "修改发货物流信息成功!";
		try {
			logisDao.update(logis);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改发货物流信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	public String modifyLogis(TbLogis logis) {
		String message = "1";
		try {
			logisDao.update(logis);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改发货物流信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public TbLogis findByOrderId(String orderId) {
		// TODO Auto-generated method stub
		SearchMapUtil sMapUtil = new SearchMapUtil();
		Map<String,Object> logisParams= new HashMap<>();
		logisParams.put("orderId", orderId);	

		sMapUtil.setParams(logisParams);
		TbLogis logis = findTbLogisByParam(sMapUtil);
		return logis;
	}
	
}
