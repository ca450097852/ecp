package com.hontek.order.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbEvaluateAppendix;
/**
 * @ClassName: EvaluateAppendixService
 * @Description: TODO(评论附件，service 接口类)
 * @date 2015-6-29 下午02:24:07
 * @author qql
 * @version 1.0
 */
public interface EvaluateAppendixService {

	public String addEvaluateAppendix(TbEvaluateAppendix evaluateAppendix);
	
	public String deleteEvaluateAppendix(String ids);

	public String updateEvaluateAppendix(TbEvaluateAppendix evaluateAppendix);

	/**
	 * 分页查询
	 */
	public Grid findEvaluateAppendixList(SearchPageUtil page);
}
