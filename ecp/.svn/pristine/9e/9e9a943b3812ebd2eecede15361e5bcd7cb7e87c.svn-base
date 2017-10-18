package com.hontek.order.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbOrderDetail;
import com.hontek.order.service.OrderDetailService;

/**
 * @ClassName: OrderDetailController
 * @Description: TODO(订单详细控制器类)
 * @date 2015-6-26 下午05:30:07
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("orderDetail")
public class OrderDetailController extends BaseController{

	
	private OrderDetailService orderDetailService;
	
	@Autowired
	public void setOrderDetailService(OrderDetailService orderDetailService) {
		this.orderDetailService = orderDetailService;
	}

	/**
	 * 分页查询
	 * @param orderDetail
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = orderDetailService.findOrderDetailList(page);
		writeJson2View(dataGrid, response);
	}
	


	/**
	 * 添加
	 * @param orderDetail
	 * @param response
	 */
	@RequestMapping("add")
	public void addOrderDetail(TbOrderDetail orderDetail,HttpServletResponse response){
		writeJson2View(orderDetailService.addOrderDetail(orderDetail), response);
	}
	
	/**
	 * 修改
	 * @param orderDetail
	 * @param response
	 */
	@RequestMapping("update")
	public void updateOrderDetail(TbOrderDetail orderDetail,HttpServletResponse response){
		writeJson2View(orderDetailService.updateOrderDetail(orderDetail), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteOrderDetail(String ids,HttpServletResponse response){
		writeJson2View(orderDetailService.deleteOrderDetail(ids), response);
	}
	
}
