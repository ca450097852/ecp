package com.web.order.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.service.RefundService;

/**
*
* <p>Title: 退换货类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
@Controller
@RequestMapping("webRefund")
public class WebRefundController {

	@Autowired
	private RefundService refundService ;
	
	/**
	 * 退款page
	 * @param page
	 * @return
	 */
	@RequestMapping("page")
	@ResponseBody
	public Grid page(SearchPageUtil page){
		return refundService.findRefundListWithGoods(page);
		
	}
}
