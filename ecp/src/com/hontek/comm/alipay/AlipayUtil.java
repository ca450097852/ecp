package com.hontek.comm.alipay;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradeWapPayModel;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.alipay.api.request.AlipayTradeQueryRequest;
import com.alipay.api.request.AlipayTradeWapPayRequest;
import com.alipay.api.response.AlipayTradeQueryResponse;

/*
 * 支付宝方法
 */
public class AlipayUtil {
	/*
	 * 发送电脑端支付请求
	 * 
	 * out_trade_no:商户订单号，商户网站订单系统中唯一订单号，必填
	 * total_amount:付款金额，必填
	 * subject:订单名称，必填
	 * body:商品描述，可空
	 */
	public static String sendPCRequest(String out_trade_no, String total_amount,String subject,String body) throws Exception{
		AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, AlipayConfig.FORMAT, AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
		
		//设置请求参数
		AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
		alipayRequest.setReturnUrl(AlipayConfig.return_url);
		alipayRequest.setNotifyUrl(AlipayConfig.notify_url);
		
		alipayRequest.setBizContent("{\"out_trade_no\":\""+ out_trade_no +"\"," 
				+ "\"total_amount\":\""+ total_amount +"\"," 
				+ "\"subject\":\""+ subject +"\"," 
				+ "\"body\":\""+ body +"\"," 
				+ "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");
		String result = alipayClient.pageExecute(alipayRequest).getBody();
		
		return result;
	}
	/*
	 * 发送手机端支付请求
	 * 
	 * out_trade_no:商户订单号，商户网站订单系统中唯一订单号，必填
	 * total_amount:付款金额，必填
	 * subject:订单名称，必填
	 * body:商品描述，可空
	 */
	public static String sendWapRequest(String out_trade_no, String total_amount,String subject,String body) throws Exception{
		// 超时时间 可空
		String timeout_express="2m";
		// 销售产品码 必填
	    String product_code="QUICK_WAP_PAY";
	 // SDK 公共请求类，包含公共请求参数，以及封装了签名与验签，开发者无需关注签名与验签     
	    //调用RSA签名方式
	    AlipayClient client = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, AlipayConfig.FORMAT, AlipayConfig.charset, AlipayConfig.alipay_public_key,AlipayConfig.sign_type);
	    AlipayTradeWapPayRequest alipay_request=new AlipayTradeWapPayRequest();
	    
	    // 封装请求支付信息
	    AlipayTradeWapPayModel model=new AlipayTradeWapPayModel();
	    model.setOutTradeNo(out_trade_no);
	    model.setSubject(subject);
	    model.setTotalAmount(total_amount);
	    model.setBody(body);
	    model.setTimeoutExpress(timeout_express);
	    model.setProductCode(product_code);
	    alipay_request.setBizModel(model);
	    // 设置异步通知地址
	    alipay_request.setNotifyUrl(AlipayConfig.notify_url);
	    // 设置同步地址
	    alipay_request.setReturnUrl(AlipayConfig.app_return_url);   
	    
	    // form表单生产
	    String result  = client.pageExecute(alipay_request).getBody();
	    
	    return result;
	}
	
	
	/*
	 * 验证支付宝同步或者异步返回信息
	 */
	public static Map<String, String>  checkResult(HttpServletRequest request){
		Map<String, String> result  = null;
		try {
			Map<String,String> params = new HashMap<String,String>();
			Map<String,String[]> requestParams = request.getParameterMap();
			for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
				String name = (String) iter.next();
				String[] values = (String[]) requestParams.get(name);
				String valueStr = "";
				for (int i = 0; i < values.length; i++) {
					valueStr = (i == values.length - 1) ? valueStr + values[i]
							: valueStr + values[i] + ",";
				}
				//乱码解决，这段代码在出现乱码时使用
				valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
				params.put(name, valueStr);
			}

			boolean signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.alipay_public_key, AlipayConfig.charset, AlipayConfig.sign_type); //调用SDK验证签名
			
			if(signVerified) {//验签成功
				//商户订单号
				String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
			
				//支付宝交易号
				String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
			
				//付款金额
				String total_amount = new String(request.getParameter("total_amount").getBytes("ISO-8859-1"),"UTF-8");
				
				System.out.println("trade_no:"+trade_no+"<br/>out_trade_no:"+out_trade_no+"<br/>total_amount:"+total_amount);
				result = new HashMap<>();
				result.put("out_trade_no", out_trade_no) ;
				result.put("trade_no", trade_no) ;
				result.put("total_amount", total_amount) ;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
	/*
	 * 查询付款结果接口
	 */
	public static Map<String, String>  queryResult(String out_trade_no, String trade_no){
		//获得初始化的AlipayClient
		Map<String, String> result = null;
		try {
			AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
			
			//设置请求参数
			AlipayTradeQueryRequest alipayRequest = new AlipayTradeQueryRequest();
			
			alipayRequest.setBizContent("{\"out_trade_no\":\""+ out_trade_no +"\","+"\"trade_no\":\""+ trade_no +"\"}");
			AlipayTradeQueryResponse alipayResponse = alipayClient.execute(alipayRequest);
			String code = alipayResponse.getCode();
			if("10000".equals(code)){//调用成功
				String orderIdsStr = alipayResponse.getOutTradeNo();//订单号
				String tradeStatus = alipayResponse.getTradeStatus();//交易状态
				String payAccount  = alipayResponse.getBuyerLogonId();//付款账号
				String payNo = alipayResponse.getTradeNo();//支付宝编号
				String buyerAccount  = AlipayConfig.buyerAccount;//收款账号
				result = new HashMap<>();
				result.put("out_trade_no", orderIdsStr) ;
				result.put("trade_no", payNo);
				result.put("pay_account", payAccount) ;
				result.put("buyer_account", buyerAccount) ;
				result.put("trade_status", tradeStatus) ;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
	
}
