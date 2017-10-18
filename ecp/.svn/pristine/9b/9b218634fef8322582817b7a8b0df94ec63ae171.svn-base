package com.hontek.order.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.EvaluateDao;
import com.hontek.order.model.TbEvaluate;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: EvaluateServiceImpl
 * @Description: TODO(评论信息，serviceImpl实现类)
 * @date 2015-6-29 下午02:19:18
 * @author qql
 * @version 1.0
 */
@Service("evaluateService")
public class EvaluateServiceImpl implements EvaluateService {

	@Autowired
	private EvaluateDao evaluateDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findEvaluateList(SearchPageUtil page) {
		
		
		int tatol = evaluateDao.getCount(page.getParams());


		List<TbEvaluate> list = evaluateDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	public String addEvaluate(TbEvaluate evaluate) {
		String message = "添加评论信息成功!";
		try {
			evaluate.setEvalId(sequenceService.getSequence("tb_evaluate"));
			evaluateDao.add(evaluate);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加评论信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteEvaluate(String ids) {
		int count = 0;
		String message = "删除评论信息成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						evaluateDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除评论信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateEvaluate(TbEvaluate evaluate) {
		String message = "修改评论信息成功!";
		try {
			evaluateDao.update(evaluate);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改评论信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
}
