package com.hontek.order.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbOrderDetail;
/**
 * 
 * @ClassName: OrderDetailService
 * @Description: TODO(订单详细表 service)
 * @date 2015-6-26 下午04:39:36
 * @author qql
 * @version 1.0
 */
public interface OrderDetailService {

	public String addOrderDetail(TbOrderDetail orderDetail);
	
	public String deleteOrderDetail(String ids);

	public String updateOrderDetail(TbOrderDetail orderDetail);
	
	/**
	 * 通过orderId查找
	 */
	public List<TbOrderDetail> findDetailByOrderId(String orderId);
	
	
	/**
	 * 分页查询
	 */
	public Grid findOrderDetailList(SearchPageUtil page);
	
	
	public TbOrderDetail findObjectById(Integer id);

}
