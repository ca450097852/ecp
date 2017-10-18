package com.web.shop.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbShop;
import com.hontek.member.service.ShopService;


/**
 * <p>Title: 卖家店铺控制器类</p>
 * <p>Description: 卖家店铺</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("web/shop")
public class WebShopController extends BaseController{

	
	private ShopService shopService;
	
	@Autowired
	public void setShopService(ShopService shopService) {
		this.shopService = shopService;
	}

	
	/**
	 * 添加
	 * @param shop
	 * @param response
	 */
	@RequestMapping("add")
	public void addShop(TbShop shop,HttpServletResponse response,HttpSession session){
		writeJson2View(shopService.addShop(shop,session), response);
	}
	


	/**
	 * 修改
	 * @param shop
	 * @param response
	 */
	@RequestMapping("update")
	public void updateShop(TbShop shop,HttpServletResponse response){
		writeJson2View(shopService.updateShop(shop), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteShop(String ids,HttpServletResponse response){
		writeJson2View(shopService.deleteShop(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("hadshop")
	public void findShop(HttpServletResponse response,Integer memberId,HttpSession session){
		try {
			if(memberId==null){
				memberId = ((TbMember)session.getAttribute("member")).getMemberId();
			}
			TbShop shop = shopService.findShopList(memberId);
			writeJson2View(shop, response);
		} catch (Exception e) {
			e.getStackTrace();
		}
	
	}
	
	/**
	 * 上传shop图片
	 * @param uploadify
	 * @param response
	 * @param request
	 */
	@RequestMapping("ns/upload")
	public void uploadFile(@RequestParam MultipartFile uploadify,HttpServletResponse response,HttpServletRequest request){
		
		String path = request.getRealPath("");
		path = path.substring(0,path.lastIndexOf(File.separator)+1);
		path +="ecpFiles"+File.separator;//创建一级目录：ecpFiles
		File tmpFile = new File(path);
		if(!tmpFile.exists()){
			tmpFile.mkdir();
		}
		
		path +="shop"+File.separator;//创建二级目录：goods 即：ecpFiles/shop
		File tmpFile2 = new File(path);
		if(!tmpFile2.exists()){
			tmpFile2.mkdir();
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String fileName = sdf.format(new Date())+uploadify.getOriginalFilename().substring(uploadify.getOriginalFilename().indexOf("."));
		
		try {
			FileUtils.copyInputStreamToFile(uploadify.getInputStream(), new File(path,fileName));
			String url = "/ecpFiles/shop/"+fileName;//返回图片路径
			writeJson2View(url, response);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 根据shopid获取店铺部分信息
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("ns/getShopById")
	@ResponseBody
	public TbShop getShopById(Integer shopId){
		return shopService.getShopById(shopId);
	}
	
}
