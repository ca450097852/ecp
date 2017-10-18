package com.hontek.order.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.hontek.comm.alipay.AlipayUtil;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.dao.GoodsModelDao;
import com.hontek.goods.model.RecommendGoods;
import com.hontek.goods.model.TbGoods;
import com.hontek.goods.service.GoodsService;
import com.hontek.goods.service.RecommendGoodsService;
import com.hontek.member.dao.ShopDao;
import com.hontek.order.dao.OrderDao;
import com.hontek.order.dao.OrderDetailDao;
import com.hontek.order.dao.PaymentDao;
import com.hontek.order.domain.BuildOrdersTDO;
import com.hontek.order.domain.TbOrderPayTDO;
import com.hontek.order.domain.TbOrderTDO;
import com.hontek.order.domain.TbShoppingcartTDO;
import com.hontek.order.model.TbLogis;
import com.hontek.order.model.TbOrder;
import com.hontek.order.model.TbOrderDetail;
import com.hontek.order.model.TbPayment;
import com.hontek.sys.service.SequenceService;
/**
 * 
 * @ClassName: OrderServiceImpl
 * @Description: TODO(订单表 serviceImpl)
 * @date 2015-6-26 下午04:38:01
 * @author qql
 * @version 1.0
 */
@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private LogisService logisService ;
	
	@Autowired
	private OrderDetailDao orderDetailDao ;
	
	@Autowired
	private SequenceService sequenceService;
	
	@Autowired
	private ShopDao shopDao ;
	
	@Autowired
	private GoodsModelDao goodsModelDao;
	
	@Autowired
	private GoodsService goodsService ;
	
	@Autowired
	private ShoppingcartService shoppingcartService ;
	
	@Autowired
	private OrderDetailService orderDetailService;
	
	@Autowired
	private PaymentDao PaymentDao ;
	
	@Autowired
	private RecommendGoodsService recommendGoodsService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findOrderList(SearchPageUtil page) {
		
		
		int tatol = orderDao.getCountWithParam(page);


		List<TbOrder> list = orderDao.findPageListWithParam(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	/**
	 * 分页查询
	 */
	public Grid findOrderListWithGoodsDetail(SearchPageUtil page) {
		
		
		int total = orderDao.getCountWithParam(page);
		List<TbOrder> list = orderDao.findPageListWithParam(page);
		
		List<TbOrderTDO> tbOrderTDOList = new ArrayList<TbOrderTDO>();
		Map<String,Object> map = new HashMap<String,Object>();
		for(TbOrder tbOrder : list){
			map.clear();
			map.put("orderId", tbOrder.getOrderId());
			List<TbOrderDetail> tbOrderDetailList = orderDetailDao.findListWithParam(map);
			TbOrderTDO tbOrderTDO = new TbOrderTDO(tbOrder , tbOrderDetailList);
			tbOrderTDOList.add(tbOrderTDO);
		}
						
		Grid dataGrid = new Grid(total, tbOrderTDOList);
		
		return dataGrid;
	}
	
	
	public String addOrder(TbOrder order) {
		String message = "添加订单成功!";
		try {
			order.setOrderId(sequenceService.getSequence("tb_order"));
			orderDao.add(order);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加订单失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	/**
	 * 单个商品购买
	 */
	public String addOrder(TbOrder order,TbOrderDetail orderDetail,String addrId) {
		String message = "0";
		try {
			
			int goodsId = orderDetail.getGoodsId();		
			TbGoods goods = goodsService.getGoodsById(String.valueOf(goodsId));
				
			int orderId = sequenceService.getSequence("tb_order");		
			String curtime = DateUtil.formatDateTime();		
			float orderAmount = orderDetail.getGoodsCount()*goods.getSaledPrice();
			
			//订单表
			order.setMemberIdSale(goods.getMemberId());
			order.setOrderType("2");
			order.setOrderTime(curtime);
			order.setOrderId(orderId);
			order.setOrderState("1");
			order.setPayState("1");
			order.setOrderAmount(String.valueOf(orderAmount));
			
			//订单明细
			orderDetail.setOrderId(orderId);
			orderDetail.setOrderDetailId(sequenceService.getSequence("tb_order_detail"));
			orderDetail.setGoodsPrice(goods.getSaledPrice());
			orderDetail.setEvaluateState("1");

			//物流
			TbLogis logis = new TbLogis();
			logis.setOrderId(orderId);
			logis.setAddrId(addrId);
				
			orderDao.add(order);
			orderDetailDao.add(orderDetail);
			logisService.addLogis(logis);

			message = String.valueOf(orderId);
		} catch (Exception e) {
			e.printStackTrace();
			message = "0";
			logger.error(e.getMessage());
		}
		return message;
	}

	/**
	 * 推荐商品订单
	 */
	public String addOrder(TbOrder order,TbOrderDetail orderDetail,TbLogis tbLogis){
		String message = "0";
		try {		
			
			String rgId = order.getRecommend();		
			SearchPageUtil page = new SearchPageUtil();
			page.getParams().put("rgId", rgId);
			List<RecommendGoods> grid = recommendGoodsService.findList(page);
			if(grid==null||grid.isEmpty()){
				return message;
			}
			
			RecommendGoods recommendGood = grid.get(0);
			
			int goodsId = recommendGood.getGoodsId();		
			TbGoods goods = goodsService.getGoodsById(String.valueOf(goodsId));				
			int orderId = sequenceService.getSequence("tb_order");		
			String curtime = DateUtil.formatDateTime();		
			float orderAmount = orderDetail.getGoodsCount()*recommendGood.getRgPrice();
			
			
			//订单表
			order.setMemberIdSale(goods.getMemberId());
			order.setMemberIdBuy(recommendGood.getMenberId());
			order.setOrderType("2");
			order.setOrderTime(curtime);
			order.setOrderId(orderId);
			order.setOrderState("1");
			order.setPayState("1");
			order.setOrderAmount(String.valueOf(orderAmount));
			
			//订单明细
			orderDetail.setOrderId(orderId);
			orderDetail.setOrderDetailId(sequenceService.getSequence("tb_order_detail"));
			orderDetail.setGoodsPrice(recommendGood.getRgPrice());
			orderDetail.setEvaluateState("1");
			orderDetail.setGoodsId(goodsId);
			orderDetail.setRecommend(rgId);

			//物流

			tbLogis.setOrderId(orderId);
				
			orderDao.add(order);
			orderDetailDao.add(orderDetail);
			logisService.addLogis(tbLogis);

			message = String.valueOf(orderId);
		} catch (Exception e) {
			e.printStackTrace();
			message = "0";
			logger.error(e.getMessage());
		}
		return message;
	
	}

	
	/**
	 * 从购物车创建订单
	 */
	public String addOrder(TbOrder order,String cartIds,String addrId) {
		String message = "0";
		try {			
			if(cartIds==null||"".equals(cartIds)){
				return message;
			}
			
			String [] cartIdsArray = cartIds.split(",");
			List<Integer> ids = new ArrayList<Integer>();
			for (String cartId : cartIdsArray) {
				ids.add(Integer.valueOf(cartId));
			}
			
			List<TbShoppingcartTDO> list = shoppingcartService.findShoppingcartListByIds(ids);
			
			int orderId = sequenceService.getSequence("tb_order");		
			String curtime = DateUtil.formatDateTime();		
			float orderAmount = 0f;
			
			//订单表
			order.setMemberIdSale(list.get(0).getTbGoods().getMemberId());
			order.setOrderType("2");
			order.setOrderTime(curtime);
			order.setOrderId(orderId);
			order.setOrderState("1");
			order.setPayState("1");
			
			//订单明细
			List<TbOrderDetail> orderDetailList = new ArrayList<TbOrderDetail>();
			for (TbShoppingcartTDO tbShoppingcartTDO : list) {
				TbOrderDetail orderDetail = new TbOrderDetail();				
				TbGoods goods = tbShoppingcartTDO.getTbGoods();
				
				orderAmount+=tbShoppingcartTDO.getGoodsCount()*goods.getSaledPrice();
				
				orderDetail.setGoodsId(goods.getGoodsId());
				orderDetail.setGoodsCount(tbShoppingcartTDO.getGoodsCount());
				orderDetail.setOrderId(orderId);
				orderDetail.setOrderDetailId(sequenceService.getSequence("tb_order_detail"));
				orderDetail.setGoodsPrice(goods.getSaledPrice());
				orderDetail.setEvaluateState("1");
							
				orderDetailList.add(orderDetail);
			}
			
			order.setOrderAmount(String.valueOf(orderAmount));
						
			//物流
			TbLogis logis = new TbLogis();
			logis.setOrderId(orderId);
			logis.setAddrId(addrId);
			
			orderDao.add(order);
			
			for (TbOrderDetail tbOrderDetail : orderDetailList) {
				orderDetailDao.add(tbOrderDetail);
			}

			logisService.addLogis(logis);
			shoppingcartService.deleteShoppingcart(cartIds);
			message = String.valueOf(orderId);
		} catch (Exception e) {
			e.printStackTrace();
			message = "0";
			logger.error(e.getMessage());
		}
		return message;
	}
	
	
	public String deleteOrder(String ids) {
		int count = 0;
		String message = "删除订单成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						orderDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除订单失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateOrder(TbOrder order) {
		String message = "修改订单成功!";
		try {
			orderDao.update(order);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改订单失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	
	public String orderState(TbOrder order) {
		String message = "操作成功!";
		try {
			orderDao.update(order);
		} catch (Exception e) {
			e.printStackTrace();
			message = "操作失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	public String sendState(TbOrder order) {
		String message = "操作成功!";
		try {
			orderDao.update(order);
		} catch (Exception e) {
			e.printStackTrace();
			message = "操作失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	public String payState(TbOrder order) {
		String message = "操作成功!";
		try {
			orderDao.update(order);
		} catch (Exception e) {
			e.printStackTrace();
			message = "操作失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public TbOrder findOrderByOrderId(Integer orderId) {
		
		TbOrder order = orderDao.findOrderByOrderId(orderId);
		
		return order;
	}

	@Override
	@Transactional(propagation=Propagation.REQUIRED,rollbackFor=java.lang.Exception.class)//只要报exception就回滚事务
	public TbOrderPayTDO buildOrders(List<BuildOrdersTDO> list ,Integer memberId) {
		// TODO Auto-generated method stub
		List<Integer> orderIdList = new ArrayList<Integer>();
		BigDecimal totalAmount = BigDecimal.ZERO ;
		try {
			
			for(BuildOrdersTDO buildOrdersTDO :list ){
				BigDecimal orderAmount = BigDecimal.ZERO ;
				BigDecimal shipFee =  BigDecimal.ZERO  ;
				List<Integer> cartIdList = new ArrayList<Integer>();
				
				Integer orderId = sequenceService.getSequence("tb_order");
				Integer saleId = shopDao.findById(buildOrdersTDO.getShopId()).getMemberId();
				
				orderIdList.add(orderId);
				//维护订单表
				TbOrder order = new TbOrder(orderId, saleId, memberId, DateUtil.formatDateTime(), "1","1","1",buildOrdersTDO.getBuyRemark(),"1");
				orderDao.add(order);
				//维护发送物流表
				TbLogis tbLogis = new TbLogis(orderId,buildOrdersTDO.getAddressId().toString(),buildOrdersTDO.getLogisName(),buildOrdersTDO.getBuyRemark());
				logisService.addLogis(tbLogis);
				//维护订单详情表
				for(TbOrderDetail orderDetail : buildOrdersTDO.getList()){
					orderDetail.setOrderId(orderId);
					orderDetail.setEvaluateState("1");
					orderDetailService.addOrderDetail(orderDetail);
					Integer cartId = orderDetail.getCartId() ;
					Integer modelId = orderDetail.getModelId();
					cartIdList.add(cartId);
					Integer goodsId = orderDetail.getGoodsId();
					TbGoods goods =goodsService.getGoodsById(goodsId+"");
					//TbGoodsModel goodsModel = goodsModelDao.findByPrimaryId(modelId);
					
					//orderAmount = orderAmount.add(new BigDecimal(goodsModel.getModelPrice().toString()).multiply(new BigDecimal(orderDetail.getGoodsCount().toString())));
					orderAmount = orderAmount.add(new BigDecimal(goods.getSaledPrice().toString()).multiply(new BigDecimal(orderDetail.getGoodsCount().toString())));
				}
				//更新订单表中订单金额和运费
				TbOrder tbOrder = orderDao.findOrderByOrderId(orderId);
				
				//因为数据库表中 ， shipfee 是int类型 ， 这里就强转了， 后期要求精度了 ， 修改他
				tbOrder.setShipFree(Integer.parseInt(shipFee.toString()));
				tbOrder.setOrderAmount(orderAmount+"");
				orderDao.update(tbOrder);
				totalAmount = totalAmount.add(orderAmount).add(shipFee) ;
				//删除购物车里相关数据
				String ids = cartIdList.toString();
				shoppingcartService.deleteShoppingcart(ids.substring(1, ids.length()-1));
				
				logger.warn("用户【"+ memberId +"】生成订单 "+DateUtil.formatDateTime());
			}
			
			
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("生成订单错误！"+e.getMessage());
			e.printStackTrace();
			//return new TbOrderPayTDO(totalAmount.toString(),orderIdList,orderIdList.size());
		}
		return new TbOrderPayTDO(totalAmount.toString(),orderIdList,orderIdList.size());
		
	}

	/**
	 * 支付成功回调
	 */
	@Override
	//@Transactional(propagation=Propagation.REQUIRED,rollbackFor=java.lang.Exception.class)
	public void paySuccess(Integer[] orderIds) {
		// TODO Auto-generated method stub
		try {
			for(Integer orderId : orderIds){
				//修改订单状态
				orderDao.update(new TbOrder(orderId,DateUtil.formatDateTime(),null,"2"));
				
				//存储支付信息
				TbOrder findOrderByOrderId = orderDao.findOrderByOrderId(orderId);
				
				PaymentDao.add(new TbPayment(orderId,sequenceService.getSequence("tb_payment"),findOrderByOrderId.getMemberIdSale(),findOrderByOrderId.getMemberIdBuy(),null,null,null,null,DateUtil.formatDateTime(),null ,null ,null));
				
				logger.warn("支付成功回调修改订单【"+ orderId +"】状态，并存储支付信息");
				
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("支付成功信息写入错误："+e.getMessage());
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();

		}
	}
	
	/*
	 * 
	 */
	@Override
	public void payResult(List<TbPayment> pays) {
		// TODO Auto-generated method stub
		try {
			for(TbPayment payment : pays){
				//修改订单状态
				Integer orderId = payment.getOrderId();
				TbOrder findOrderByOrderId = orderDao.findOrderByOrderId(orderId);
				if(payment.getOrderState()!=null&&payment.getOrderState()==3L){
					findOrderByOrderId.setPayState("2");//付款状态
					findOrderByOrderId.setPayTime(DateUtil.formatDateTime());
					findOrderByOrderId.setSendState("1");//发货状态
					orderDao.update(findOrderByOrderId);
					//保存付款信息
					payment.setPayId(sequenceService.getSequence("tb_payment"));
					payment.setMemberIdBuy(findOrderByOrderId.getMemberIdBuy());
					payment.setMemberIdSale(findOrderByOrderId.getMemberIdSale());
					payment.setOrderAmount(findOrderByOrderId.getOrderAmount());
					payment.setPayTime(DateUtil.formatDateTime());
					PaymentDao.add(payment);
					logger.warn("支付成功回调修改订单【"+ orderId +"】状态，并存储支付信息");
				}							
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("支付成功信息写入错误："+e.getMessage());
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();

		}
	}

	@Override
	public String toAlipay(TbOrderPayTDO tbOrderPayTDO,List<BuildOrdersTDO> list) throws Exception{
		// TODO Auto-generated method stub
		String out_trade_no = "";
		//付款金额，必填
		String total_amount = "";
		//订单名称，必填
		String subject = "";
		//商品描述，可空
		String body = "";
		//表单字符串
		String result = "";
		try {
			if (tbOrderPayTDO!=null&&tbOrderPayTDO.getTotal()>0) {
				//多个订单号拼接
				List<Integer> orderIds = tbOrderPayTDO.getOrderIdList();
				for(Integer orderId:orderIds){
					out_trade_no+=","+orderId;
				}
				out_trade_no = out_trade_no.substring(1);
				total_amount = tbOrderPayTDO.getTotalAcount();
				
				if(list!=null&&list.size()>0){
					for(int i=0;i<list.size();i++){
						List<TbOrderDetail> details = list.get(i).getList();
						if(details.size()>0){
							for(int j=0;j<details.size();j++){
								int goodsId = details.get(j).getGoodsId();
								TbGoods goods = goodsService.getGoodsById(goodsId+"");
								if(goods!=null){
									subject+="、"+goods.getGoodsName();
								}
								if(j>=2) break;
							}
						}
					}
				}
				subject = subject.substring(1);
				
				result = AlipayUtil.sendPCRequest(out_trade_no, total_amount, subject, body);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		return result;
	}

	@Override
	public String toMemberAlipay(TbOrder tbOrder) throws Exception {
		// TODO Auto-generated method stub
		String result="";
		if(tbOrder!=null){	
			//商户订单号，商户网站订单系统中唯一订单号，必填
			String out_trade_no = tbOrder.getOrderId()+"";
			//付款金额，必填
			String total_amount = tbOrder.getOrderAmount()+"";
			//订单名称，必填
			String subject = "";
			//商品描述，可空
			String body = "";
			List<TbOrderDetail> details = orderDetailService.findDetailByOrderId(out_trade_no);
			if(details.size()>0){
				for(int i=0;i<details.size();i++){
					subject+="、"+details.get(i).getGoodsName();
				}
			}
			subject = subject.substring(1);
	
			result = AlipayUtil.sendPCRequest(out_trade_no, total_amount, subject, body);
		}
		return result;
	}
	

	@Override
	public String toWapAlipay(String orderIds,String totalAmount)throws Exception {
		// TODO Auto-generated method stub
		String result="";
		if(orderIds!=null&&!"".equals(orderIds)&&totalAmount!=null&&!"".equals(totalAmount)){	
			//商户订单号，商户网站订单系统中唯一订单号，必填
			String out_trade_no = orderIds;
			//付款金额，必填
			String total_amount = totalAmount;
			//订单名称，必填
			String subject = "";
			//商品描述，可空
			String body = "";
			String[] orderIdArray = orderIds.split(",");
			for (int i = 0; i < orderIdArray.length; i++) {
				String orderId= orderIdArray[i];
				List<TbOrderDetail> details = orderDetailService.findDetailByOrderId(orderId);
				if(details.size()>0){
					for(int j=0;j<details.size();j++){
						subject+="、"+details.get(j).getGoodsName();
						if(j>=3) break;
					}
				}
			}	
			subject = subject.substring(1);
	
			result = AlipayUtil.sendWapRequest(out_trade_no, total_amount, subject, body);
		}
		return result;
	}
	
	
	@Override
	public TbOrder handleResult(Map<String, String> resultMap) {
		// TODO Auto-generated method stub
		//商户订单号
		TbOrder order = new TbOrder();
		String out_trade_no = resultMap.get("out_trade_no");
		String payState = "1";
		Integer showOrderId = 0;
		//支付宝交易号
		String trade_no = resultMap.get("trade_no");
	
		//付款金额
		String total_amount = resultMap.get("total_amount");
		
		//查询付款结果
		Map<String, String> payResultMap = AlipayUtil.queryResult(out_trade_no, trade_no);
		if(payResultMap!=null){
			String orderIdsStr = payResultMap.get("out_trade_no");//订单号
			String tradeStatus = payResultMap.get("trade_status");//交易状态
			String payAccount  = payResultMap.get("pay_account");//付款账号
			String payNo = payResultMap.get("trade_no");//支付宝交易号
			String buyerAccount  = payResultMap.get("buyer_account");//卖家账号
			String[] orderIdStrArray = orderIdsStr.split(",");
			if("TRADE_SUCCESS".equals(tradeStatus)||"TRADE_FINISHED".equals(tradeStatus)){//支付成功
				payState = "2";
				int orderState =3;//付款成功
				//保存付款结果
				List<TbPayment> pays = new ArrayList<>();
				for(String orderIdStr:orderIdStrArray){
					TbPayment payment = new TbPayment();
					String reg="^\\d+$";//正整数    
					if(orderIdStr.matches(reg)){
						Integer orderId =  Integer.parseInt(orderIdStr);
						TbOrder findOrder = this.findOrderByOrderId(orderId);
						if(!"2".equals(findOrder.getPayState())){
							payment.setOrderId(orderId);
							payment.setPayWay("1");
							payment.setOrderState(orderState);
							payment.setPayAccount(payAccount);
							payment.setPayNo(payNo);
							payment.setReceiverAccount(buyerAccount);
							pays.add(payment);
						}		
					}
				}	

				if(pays.size()>0){
					showOrderId  = Integer.parseInt(orderIdStrArray[0]);
					this.payResult(pays);//更改状态
				}
			}
			order.setOrderId(showOrderId);
			order.setPayState(payState);
			order.setOrderAmount(total_amount);
		}

		else{//调用支付宝失败
			logger.error("调用失败");
		}		
		return order;
	}
	
	/**
	 * 获取推荐订单
	 */
	public Grid getRecommendSaledOrder(SearchPageUtil page){
		
		page.getParams().put("orderState", "4");
		page.getParams().put("recommend", "1");
				
		int total = orderDao.getCountWithParam(page);
		List<TbOrder> list = orderDao.findPageListWithParam(page);
		
		List<TbOrderTDO> tbOrderTDOList = new ArrayList<TbOrderTDO>();
		Map<String,Object> map = new HashMap<String,Object>();
		for(TbOrder tbOrder : list){
			map.clear();
			map.put("orderId", tbOrder.getOrderId());
			List<TbOrderDetail> tbOrderDetailList = orderDetailDao.findListWithParam(map);
			TbOrderTDO tbOrderTDO = new TbOrderTDO(tbOrder , tbOrderDetailList);
			tbOrderTDOList.add(tbOrderTDO);
		}
						
		Grid dataGrid = new Grid(total, tbOrderTDOList);
		
		return dataGrid;
	}


}
