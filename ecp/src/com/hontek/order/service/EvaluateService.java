package com.hontek.order.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbEvaluate;
/**
 * @ClassName: EvaluateService
 * @Description: TODO(评论信息，service接口)
 * @date 2015-6-29 下午02:17:18
 * @author qql
 * @version 1.0
 */
public interface EvaluateService {

	public String addEvaluate(TbEvaluate evaluate);
	
	public String deleteEvaluate(String ids);

	public String updateEvaluate(TbEvaluate evaluate);

	/**
	 * 分页查询
	 */
	public Grid findEvaluateList(SearchPageUtil page);
}
