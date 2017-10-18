package com.hontek.order.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.EvaluateAppendixDao;
import com.hontek.order.model.TbEvaluateAppendix;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: EvaluateAppendixServiceImpl
 * @Description: TODO(评论附件，serviceImpl实现类)
 * @date 2015-6-29 下午02:19:18
 * @author qql
 * @version 1.0
 */
@Service("evaluateAppendixService")
public class EvaluateAppendixServiceImpl implements EvaluateAppendixService {

	@Autowired
	private EvaluateAppendixDao evaluateAppendixDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findEvaluateAppendixList(SearchPageUtil page) {
		
		
		int tatol = evaluateAppendixDao.getCount(page.getParams());


		List<TbEvaluateAppendix> list = evaluateAppendixDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	public String addEvaluateAppendix(TbEvaluateAppendix evaluateAppendix) {
		String message = "添加评论附件成功!";
		try {
			evaluateAppendix.setEvalAppId(sequenceService.getSequence("tb_evaluate_appendix"));
			evaluateAppendix.setUploadTime(DateUtil.formatDateTime());
			evaluateAppendixDao.add(evaluateAppendix);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加评论附件失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteEvaluateAppendix(String ids) {
		int count = 0;
		String message = "删除评论附件成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						evaluateAppendixDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除评论附件失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateEvaluateAppendix(TbEvaluateAppendix evaluateAppendix) {
		String message = "修改评论附件成功!";
		try {
			evaluateAppendixDao.update(evaluateAppendix);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改评论附件失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
}
