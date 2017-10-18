package com.hontek.order.service;

import java.util.List;
import java.util.Map;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.domain.BuildOrdersTDO;
import com.hontek.order.domain.TbOrderPayTDO;
import com.hontek.order.model.TbLogis;
import com.hontek.order.model.TbOrder;
import com.hontek.order.model.TbOrderDetail;
import com.hontek.order.model.TbPayment;
/**
 * 
 * @ClassName: OrderService
 * @Description: TODO(订单表 service)
 * @date 2015-6-26 下午04:30:14
 * @author qql
 * @version 1.0
 */
public interface OrderService {

	public String addOrder(TbOrder order);
	
	public String addOrder(TbOrder order,TbOrderDetail orderDetail,String addrId);
	
	public String addOrder(TbOrder order,String cartIds,String addrId);
	
	public String addOrder(TbOrder order,TbOrderDetail orderDetail,TbLogis tbLogis);
	
	public String deleteOrder(String ids);

	public String updateOrder(TbOrder order);
	
	public String orderState(TbOrder order);
	
	public String sendState(TbOrder order);
	
	public String payState(TbOrder order);
	
	public TbOrder findOrderByOrderId(Integer orderId);
	/**
	 * 分页查询
	 */
	public Grid findOrderList(SearchPageUtil page);

	public Grid findOrderListWithGoodsDetail(SearchPageUtil page);
	
	/**
	 * 生成订单
	 * @return
	 */
	public TbOrderPayTDO buildOrders(List<BuildOrdersTDO> list , Integer memberId);
	
	/*
	 * 前台跳转到支付宝的表单
	 */
	public String toAlipay(TbOrderPayTDO tbOrderPayTDO,List<BuildOrdersTDO> list) throws Exception;
	
	/*
	 * 会员中心跳转到支付宝的表单
	 */
	public String toMemberAlipay(TbOrder tbOrder) throws Exception;
	
	/*
	 * 手机端跳转到支付宝
	 */
	public String toWapAlipay(String orderIds,String totalAmount)throws Exception;
	
	/*
	 * 处理支付宝返回信息
	 */
	public TbOrder handleResult(Map<String, String> resultMap);
	
	/**
	 * 支付成功回调
	 * @param orderIds
	 */
	void paySuccess(Integer[] orderIds);

	public void payResult(List<TbPayment> payment);
	
	
	public Grid getRecommendSaledOrder(SearchPageUtil page);


}
