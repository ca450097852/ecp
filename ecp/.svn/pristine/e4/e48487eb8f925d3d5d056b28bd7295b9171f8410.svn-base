package com.wap.order.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.ws.Response;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.hontek.comm.alipay.AlipayUtil;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.MemberAddrDao;
import com.hontek.member.dao.ShopDao;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberAddr;
import com.hontek.member.model.TbMemberUser;
import com.hontek.member.model.TbShop;
import com.hontek.member.service.ShopService;
import com.hontek.order.domain.BuildOrdersTDO;
import com.hontek.order.domain.TbOrderPayTDO;
import com.hontek.order.model.TbLogis;
import com.hontek.order.model.TbOrder;
import com.hontek.order.model.TbOrderDetail;
import com.hontek.order.service.OrderService;

/**
 * @ClassName: OrderController
 * @Description: TODO(前台订单控制器类)
 * @date 2015-6-26 下午05:30:07
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("wap/order")
public class WapOrderController extends BaseController{

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private ShopDao shopDao ;
	
	@Autowired
	private MemberAddrDao memberAddrDao ;
	
	private Logger logger = Logger.getLogger(this.getClass());
	
	/*public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}*/

	/**
	 * 分页查询
	 * @param order
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page ,HttpSession session ){
		Object object = session.getAttribute("member");
		if(object!=null){
			TbMember member = (TbMember)object;
			Map<String, Object> params = page.getParams();
			params.put("memberIdBuy", member.getMemberId());
			page.setParams(params);
			page.setOrder("order by too.order_time desc");
			page.setRows(10000);
			Grid dataGrid = orderService.findOrderListWithGoodsDetail(page);
			writeJson2View(dataGrid, response);
		}

//		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
//		if(tbMember != null) {
			
//		}
	}
	
	
	@RequestMapping("recommendpage")
	public void getRecommendSaledOrder(HttpServletResponse response,SearchPageUtil page ,HttpSession session ){
		Object object = session.getAttribute("member");
		if(object!=null){
			TbMember member = (TbMember)object;
			Map<String, Object> params = page.getParams();
			params.put("memberIdBuy", member.getMemberId());
			page.setParams(params);
			page.setOrder("order by too.order_time desc");
			Grid dataGrid = orderService.getRecommendSaledOrder(page);
			writeJson2View(dataGrid, response);
		}
	}
	
	
	@RequestMapping("findStsNum")
	public void findStsNum(HttpServletResponse response,SearchPageUtil page ,HttpSession session ){
		Object object = session.getAttribute("member");
		if(object!=null){
			TbMember member = (TbMember)object;
			page.setOrder("order by too.order_time desc");
			page.setRows(10000);
			List<String> stsNum = new ArrayList<String>();
			
			for(int i=0;i<4;i++){
				Map<String, Object> params = page.getParams();
				params.put("memberIdBuy", member.getMemberId());
				page.setParams(params);
				if(i==0){//待付款订单
					params.put("orderState", 1);
					params.put("payState", 1);
					Grid dataGrid = orderService.findOrderListWithGoodsDetail(page);
					stsNum.add(dataGrid.getTotal()+"");
				}else if(i==1){//待发货订单
					params.put("orderState", 1); 
					params.put("payState", 2);
					params.put("sendState", 1);
					Grid dataGrid = orderService.findOrderListWithGoodsDetail(page);
					stsNum.add(dataGrid.getTotal()+"");
				}else if(i==2){//待收货订单
					params.put("orderState", 1); 
					params.put("payState", 2);
					params.put("sendState", 2);
					Grid dataGrid = orderService.findOrderListWithGoodsDetail(page);
					stsNum.add(dataGrid.getTotal()+"");
				}else if(i==3){//待评价订单
					params.put("orderState", 4); 
					params.put("payState", 2);
					params.put("sendState", 3);
					params.put("evaluateState", 1);
					Grid dataGrid = orderService.findOrderListWithGoodsDetail(page);
					stsNum.add(dataGrid.getTotal()+"");
				}
			}
			writeJson2View(stsNum, response);
		}
		
//		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
//		if(tbMember != null) {
		
//		}
	}
	
	@RequestMapping("pageBySale")
	public void findPagerListBySale(HttpServletResponse response,SearchPageUtil page ,HttpSession session ){
		if(page!=null){
			TbMember member = getLoginWebUser(session);
			page.getParams().put("memberIdSale", member.getMemberId());
		}
		Grid dataGrid = orderService.findOrderListWithGoodsDetail(page);
		writeJson2View(dataGrid, response);

	}
	


	/**
	 * 创建订单
	 * @param order
	 * @param response
	 */
	@RequestMapping("createOrderOneGoods")
	public void addOrder(TbOrder order,TbOrderDetail orderDetail,String addrId,HttpServletResponse response,HttpSession session){
		TbMember member = getLoginWebUser(session);
		order.setMemberIdBuy(member.getMemberId());
		order.setMemberIdBuyName(member.getMemberName());
		
		writeJson2View(orderService.addOrder(order,orderDetail,addrId), response);
	}
	
	/**
	 * 从购物车创建订单
	 * @param order
	 * @param response
	 */
	@RequestMapping("createOrderByCart")
	public void createOrderByCart(TbOrder order,String cartIds,String addrId,HttpServletResponse response,HttpSession session){
		TbMember member = getLoginWebUser(session);
		order.setMemberIdBuy(member.getMemberId());
		order.setMemberIdBuyName(member.getMemberName());	
		writeJson2View(orderService.addOrder(order,cartIds,addrId), response);
	}
	
	
	/**
	 * 从推荐商品创建订单
	 * @param order
	 * @param response
	 */
	@RequestMapping("ns/createRecommendOrder")
	public void createRecommendOrder(TbOrder order,TbOrderDetail orderDetail,TbLogis tbLogis,HttpServletResponse response){
		writeJson2View(orderService.addOrder(order,orderDetail,tbLogis), response);
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
	 * 订单状态  1：交易中 2：买家取消 3：卖家无效 4：交易完成 5：退货 
	 * @param order
	 * @param response
	 */
	@RequestMapping("orderState")
	public void orderState(Integer orderId,String state,HttpServletResponse response){
		TbOrder order = orderService.findOrderByOrderId(orderId);
		order.setOrderState(state);
		writeJson2View(orderService.orderState(order), response);
	}
	/**
	 * 发货状态 1:待发货 2：已发货 3：收货确认 4：拒收
	 * @param order
	 * @param response
	 */
	@RequestMapping("sendState")
	public void sendState(Integer orderId,String state,HttpServletResponse response){
		TbOrder order = orderService.findOrderByOrderId(orderId);
		order.setSendState(state);
		writeJson2View(orderService.orderState(order), response);
	}
	/**
	 * 支付状态  1待付款 2：已付款 
	 * @param order
	 * @param response
	 */
	@RequestMapping("payState")
	public void payState(Integer orderId,String state,HttpServletResponse response){
		TbOrder order = orderService.findOrderByOrderId(orderId);
		order.setPayState(state);
		writeJson2View(orderService.orderState(order), response);
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
	
	/**
	 * 生成订单
	 * buildOrdersListStr参数格式
	 * [
	*	    {
	*	        "shopId": 1,
	*	        "addressId": 3,
	*	        "buyRemark": "fsdafsdf",
	*			"orderType": "1",
	*	        "list": [
	*	            {
	*	                "goodsId": 111,
	*	                "goodsCount": 3,
	*	                "modelId": 5,
	*	                "cartId": 9
	*	            }
	*	        ]
	*	    }
	*	]
	 * @param modelAndView
	 * @return
	 */
	@RequestMapping("buildOrders")
	public ModelAndView buildOrders (ModelAndView modelAndView , String buildOrdersListStr ,HttpSession session){
		List<BuildOrdersTDO> list = null ;
		
		try {
			list = JSONObject.parseArray(buildOrdersListStr, BuildOrdersTDO.class);
			TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
			
			//数据校验
			for(BuildOrdersTDO buildOrdersTDO : list){
				if(buildOrdersTDO != null){
					//效验shopId
					if(buildOrdersTDO.getShopId() != null && !"".equals(buildOrdersTDO.getShopId()) ){
						TbShop tbShop = shopDao.findById(buildOrdersTDO.getShopId());
						if(tbShop ==null || "".equals(tbShop)){
							logger.error("生成订单：店铺不存在！");
							modelAndView.setViewName("buy/common/500");
							return modelAndView ;
						}
						
					}else{
						logger.error("生成订单：shopID为空！");
						modelAndView.setViewName("buy/common/500");
						return modelAndView ;
					}
					
					//效验addressId
					if(buildOrdersTDO.getAddressId() != null && !"".equals(buildOrdersTDO.getAddressId()) ){
						TbMemberAddr tbMemberAddr = memberAddrDao.findById(buildOrdersTDO.getAddressId());
						if(tbMemberAddr ==null || "".equals(tbMemberAddr)){
							logger.error("生成订单：地址不存在！");
							modelAndView.setViewName("buy/common/500");
							return modelAndView ;
						}
						
					}else{
						logger.error("生成订单：addressId为空！");
						modelAndView.setViewName("buy/common/500");
						return modelAndView ;
					}
					
					
					//效验list
					if(buildOrdersTDO.getList() != null && !"".equals(buildOrdersTDO.getList())){
						//这个效验，请求量有点多，留后期决定
						//for(TbOrderDetail tbOrderDetail : buildOrdersTDO.getList()){
							//效验goodsId
							
							//效验goodsCount
							
							//效验modelId
							
							//效验cartId
						//}
						
					}else{
						logger.error("只有商铺没有商品！");
						modelAndView.setViewName("buy/common/500");
						return modelAndView ;
					}
					
				}else{
					logger.error("数据结构不正确！");
					modelAndView.setViewName("buy/common/500");
					return modelAndView ;
				}
			}
			//数据校验结束
			
			TbOrderPayTDO tbOrderPayTDO =  orderService.buildOrders(list ,tbMember.getMemberId());
			modelAndView.addObject("tbOrderPayTDO",tbOrderPayTDO);
			
			modelAndView.setViewName("buy/custom/pay");
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("数据结构不正确！"+e.getMessage());
			modelAndView.setViewName("buy/common/500");
			return modelAndView ;
		}
		return modelAndView ;
	}
	
	/**
	 * 一键支付
	 * @param modelAndView
	 * @param orderId
	 * @param session
	 * @return
	 */
	@RequestMapping("toPayHtml")
	public ModelAndView toPayHtml(ModelAndView modelAndView , Integer orderId ,HttpSession session){
		if(orderId == null || orderId == -1){
			modelAndView.addObject("msg", "orderId不能为null");
			modelAndView.setViewName("buy/custom/order");
			return modelAndView;
		}else{
			TbOrder tbOrder = orderService.findOrderByOrderId(orderId);
			
			List<Integer> list = new ArrayList<>();
			list.add(tbOrder.getOrderId());
			
			TbOrderPayTDO tbOrderPayTDO = new TbOrderPayTDO(tbOrder.getOrderAmount(),list,list.size());
			
			modelAndView.addObject("tbOrderPayTDO",tbOrderPayTDO);
			modelAndView.setViewName("buy/custom/pay");
			return modelAndView ;
		}
	}
	
	/**
	 * 付款成功回调
	 */
	@RequestMapping("paySuccess")
	public void paySuccess(Integer[] orderIds){
		orderService.paySuccess(orderIds);
	}
	/*
	 * 跳转到支付宝
	 */
	@RequestMapping("toAlipay")
	public void toAlipay(HttpServletResponse response,String orderIds,String totalAmount,HttpSession session){
		try {
			String result = orderService.toWapAlipay(orderIds,totalAmount);
			response.setContentType("text/html;charset=utf-8"); 
		    /*response.getWriter().write(result);//直接将完整的表单html输出到页面 
		    response.getWriter().flush(); 
		    response.getWriter().close();*/
			response.setCharacterEncoding("utf-8");
			response.getWriter().println(result);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			writeJson2View("跳转支付宝失败", response);
		}
	}
	/*
	 * 手机端从支付宝跳转回来
	 */
	@RequestMapping("alipayReturn")
	public void alipayReturn(HttpServletRequest request,HttpServletResponse response){
		//付款结果
		boolean payResult = false;
		String showOrderId = "";
		String total_amount = "0";
		//获取支付宝反馈信息
		Map<String, String> resultMap = AlipayUtil.checkResult(request);
		//——请在这里编写您的程序（以下代码仅作参考）——
		TbOrder order = new TbOrder();
		if(resultMap!=null) {
			order = orderService.handleResult(resultMap);
			if(order!=null&&"2".equals(order.getPayState())){
				payResult = true;
			}
			showOrderId = order.getOrderId()+"";
			total_amount = order.getOrderAmount();
		}else {
			logger.error("验签失败");
		}
		/*modelAndView.getModel().put("total_amount",total_amount);//付款金额
		modelAndView.getModel().put("order_id",showOrderId);//订单编号
		modelAndView.getModel().put("payResult",payResult);//是否成功付款
		modelAndView.setViewName("wap/pay_result");*/
		String paramString = "total_amount="+total_amount+"&payResult="+payResult;
		try {
			response.sendRedirect("../pay_result.jsp?"+paramString);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
