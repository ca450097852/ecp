package com.hontek.order.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.RespondDao;
import com.hontek.order.model.TbRespond;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: RespondServiceImpl
 * @Description: TODO(评论回复信息，serviceImpl实现类)
 * @date 2015-6-29 下午02:19:18
 * @author qql
 * @version 1.0
 */
@Service
public class RespondServiceImpl implements RespondService {

	@Autowired
	private RespondDao respondDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findRespondList(SearchPageUtil page) {
		
		
		int tatol = respondDao.getCount(page.getParams());


		List<TbRespond> list = respondDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	public String addRespond(TbRespond respond) {
		String message = "添加评论回复成功!";
		try {
			respond.setResId(sequenceService.getSequence("tb_respond"));
			respondDao.add(respond);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加评论回复失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteRespond(String ids) {
		int count = 0;
		String message = "删除评论回复成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						respondDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除评论回复失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateRespond(TbRespond respond) {
		String message = "修改评论回复成功!";
		try {
			respondDao.update(respond);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改评论回复失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
}
