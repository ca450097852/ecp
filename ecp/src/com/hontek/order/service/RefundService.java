package com.hontek.order.service;

import java.util.Map;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbRefund;
/**
 * @ClassName: RefundService
 * @Description: TODO(订单退款信息 service)
 * @date 2015-6-26 下午05:01:33
 * @author qql
 * @version 1.0
 */
public interface RefundService {

	public String addRefund(TbRefund refund);
	
	public String deleteRefund(String ids);

	public String updateRefund(TbRefund refund);

	/**
	 * 分页查询
	 */
	public Grid findRefundList(SearchPageUtil page);
	
	public Grid findRefundListWithGoods(SearchPageUtil page);
	
	public TbRefund findTbRefundByParam(SearchMapUtil map);
}
