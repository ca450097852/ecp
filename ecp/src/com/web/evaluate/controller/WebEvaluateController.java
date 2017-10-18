package com.web.evaluate.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberUser;
import com.hontek.order.domain.EvaluateCountTDO;
import com.hontek.order.model.TbEvaluate;
import com.web.evaluate.service.WebEvaluateService;

@Controller
@RequestMapping("web/evaluate")
public class WebEvaluateController extends BaseController{

	@Autowired
	private WebEvaluateService webEvaluateService ;
	
	/**
	 * 添加
	 * @param evaluate
	 * @param response
	 */
	@RequestMapping("add")
	public void addEvaluate(TbEvaluate evaluate,String[] evaluatePic,HttpServletResponse response , HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		evaluate.setMemberId(tbMember.getMemberId());
		
		writeJson2View(webEvaluateService.addEvaluate(evaluate, evaluatePic), response);
	}
	
	/**
	 * 分页查询
	 * @param evaluate
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page, HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		page.getParams().put("memberId", tbMember.getMemberId());
		Grid dataGrid = webEvaluateService.findEvaluateList(page);
		writeJson2View(dataGrid, response);
	}
	/**
	 * 分页查询
	 * @param evaluate
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("sellerPage")
	public void findSellerPagerList(HttpServletResponse response,SearchPageUtil page, HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		page.getParams().put("memberId", tbMember.getMemberId());
		Grid dataGrid = webEvaluateService.findSellerEvaluateList(page);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 分页查询(页面获取商品评价)
	 * @param evaluate
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("ns/protalPage")
	public void findPagerList2(HttpServletResponse response,SearchPageUtil page, HttpSession session){
		Grid dataGrid = webEvaluateService.findProtalEvaluateList(page);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 评价统计
	 * @param goodsId
	 */
	@RequestMapping("ns/getEvaluateCount")
	@ResponseBody
	public EvaluateCountTDO getEvaluateCount(Integer goodsId){
		EvaluateCountTDO evaluateCountTDO = webEvaluateService.getEvaluateCount(goodsId);
		return evaluateCountTDO;
	}
	
	/**
	 * 上传评价图片
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
		
		path +="evaluate"+File.separator;//创建二级目录：evaluate 即：ecpFiles/evaluate
		File tmpFile2 = new File(path);
		if(!tmpFile2.exists()){
			tmpFile2.mkdir();
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String fileName = sdf.format(new Date())+uploadify.getOriginalFilename().substring(uploadify.getOriginalFilename().indexOf("."));
		
		try {
			FileUtils.copyInputStreamToFile(uploadify.getInputStream(), new File(path,fileName));
			String url = "/ecpFiles/evaluate/"+fileName;//返回图片路径
			writeJson2View(url, response);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
}
