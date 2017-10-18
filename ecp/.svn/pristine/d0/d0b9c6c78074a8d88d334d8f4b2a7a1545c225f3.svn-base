package com.hontek.order.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbOrder;
import com.hontek.order.service.OrderService;

/**
 * @ClassName: OrderController
 * @Description: TODO(订单控制器类)
 * @date 2015-6-26 下午05:30:07
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("order")
public class OrderController extends BaseController{

	@Autowired
	private OrderService orderService;
	
	/**
	 * 分页查询
	 * @param order
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = orderService.findOrderList(page);
		writeJson2View(dataGrid, response);
	}
	


	/**
	 * 添加
	 * @param order
	 * @param response
	 */
	@RequestMapping("add")
	public void addOrder(TbOrder order,HttpServletResponse response){
		writeJson2View(orderService.addOrder(order), response);
	}
	
	/**
	 * 修改
	 * @param order
	 * @param response
	 */
	@RequestMapping("update")
	public void updateOrder(TbOrder order,HttpServletResponse response){
		writeJson2View(orderService.updateOrder(order), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteOrder(String ids,HttpServletResponse response){
		writeJson2View(orderService.deleteOrder(ids), response);
	}
	
}
