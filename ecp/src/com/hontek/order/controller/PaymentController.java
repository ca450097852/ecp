package com.hontek.order.controller;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbPayment;
import com.hontek.order.service.PaymentService;

/**
 * @ClassName: PaymentController
 * @Description: TODO(订单支付信息控制器类)
 * @date 2015-6-26 下午05:12:27
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("payment")
public class PaymentController extends BaseController{

	
	private PaymentService paymentService;
	
	@Autowired
	public void setPaymentService(PaymentService paymentService) {
		this.paymentService = paymentService;
	}

	/**
	 * 分页查询
	 * @param payment
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = paymentService.findPaymentList(page);
		writeJson2View(dataGrid, response);
	}
	
	@RequestMapping("findTbPaymentByParam")
	public void findTbPaymentByParam(HttpServletResponse response,SearchMapUtil map){
		writeJson2View(paymentService.findTbPaymentByParam(map), response);
	}
	
	/**
	 * 添加
	 * @param payment
	 * @param response
	 */
	@RequestMapping("add")
	public void addPayment(TbPayment payment,HttpServletResponse response){
		writeJson2View(paymentService.addPayment(payment), response);
	}
	
	/**
	 * 修改
	 * @param payment
	 * @param response
	 */
	@RequestMapping("update")
	public void updatePayment(TbPayment payment,HttpServletResponse response){
		writeJson2View(paymentService.updatePayment(payment), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deletePayment(String ids,HttpServletResponse response){
		writeJson2View(paymentService.deletePayment(ids), response);
	}
	
}
