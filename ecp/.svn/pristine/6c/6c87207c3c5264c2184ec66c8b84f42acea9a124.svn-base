package com.hontek.order.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbPayment;
/**
 * @ClassName: PaymentService
 * @Description: TODO(订单支付信息表 Service)
 * @date 2015-6-26 下午04:54:30
 * @author qql
 * @version 1.0
 */
public interface PaymentService {

	public String addPayment(TbPayment payment);
	
	public String deletePayment(String ids);

	public String updatePayment(TbPayment payment);
	
	/**
	 * 分页查询
	 */
	public Grid findPaymentList(SearchPageUtil page);
	
	public TbPayment findTbPaymentByParam(SearchMapUtil map);


}
