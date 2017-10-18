package com.web.order.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.kdniao.KdniaoSubscribeAPI;
import com.hontek.comm.kdniao.RequestData;
import com.hontek.comm.kdniao.ResponseData;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.order.model.TbLogis;
import com.hontek.order.service.LogisService;

@Controller
@RequestMapping("ns/webLogis")
public class WebLogisController extends BaseController{

	@Autowired
	private LogisService logisService ;
	
	/**
	 * 查询单个物流
	 * @param response
	 */
	@RequestMapping("findTbLogisByParam")
	public void findTbLogisByParam(HttpServletResponse response,SearchMapUtil map){
		writeJson2View(logisService.findTbLogisByParam(map), response);
	}
	
	/**
	 * 物流跟踪
	 * @param logisId
	 */
	@RequestMapping("followLogis")
	@ResponseBody
	public ResponseData followLogis(Integer logisId){
		TbLogis tbLogis = logisService.findTbLogisById(logisId);
		if(tbLogis != null){
			if(tbLogis.getLogisNo()!=null && !"".equals(tbLogis.getLogisNo()) && tbLogis.getLogisName() !=null && !"".equals(tbLogis.getLogisName())){
				RequestData requestData = new RequestData();
				requestData.setLogisticCode(tbLogis.getLogisNo());
				requestData.setShipperCode(tbLogis.getLogisName());
				
				KdniaoSubscribeAPI KdniaoSubscribeAPI = new KdniaoSubscribeAPI();
				try {
					String orderTracesSubByJson = KdniaoSubscribeAPI.orderTracesSubByJson(requestData);
					return JSONObject.parseObject(orderTracesSubByJson, ResponseData.class);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		return null ;
	}
	
	/**
	 * 修改
	 * @param response
	 */
	@RequestMapping("modify")
	public void modifyLogis(TbLogis logis,HttpServletResponse response){
		TbLogis logistmp = logisService.findTbLogisById(logis.getLogisId());
		logistmp.setLogisName(logis.getLogisName());
		logistmp.setLogisNo(logis.getLogisNo());
		logistmp.setLogisTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		writeJson2View(logisService.modifyLogis(logistmp), response);
	}
	
	
	
	
	
	
}
