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
import com.hontek.order.model.TbRefund;
import com.hontek.order.service.RefundService;

/**
 * @ClassName: RefundController
 * @Description: TODO(订单退款信息控制器类)
 * @date 2015-6-26 下午05:12:27
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("refund")
public class RefundController extends BaseController{

	
	private RefundService refundService;
	
	@Autowired
	public void setRefundService(RefundService refundService) {
		this.refundService = refundService;
	}

	/**
	 * 分页查询
	 * @param refund
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = refundService.findRefundList(page);
		writeJson2View(dataGrid, response);
	}
	
	@RequestMapping("findTbRefundByParam")
	public void findTbRefundByParam(HttpServletResponse response,SearchMapUtil map){
		writeJson2View(refundService.findTbRefundByParam(map), response);
	}

	/**
	 * 添加
	 * @param refund
	 * @param response
	 */
	@RequestMapping("add")
	public void addRefund(TbRefund refund,HttpServletResponse response){
		writeJson2View(refundService.addRefund(refund), response);
	}
	
	/**
	 * 修改
	 * @param refund
	 * @param response
	 */
	@RequestMapping("update")
	public void updateRefund(TbRefund refund,HttpServletResponse response){
		writeJson2View(refundService.updateRefund(refund), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteRefund(String ids,HttpServletResponse response){
		writeJson2View(refundService.deleteRefund(ids), response);
	}
	
}
