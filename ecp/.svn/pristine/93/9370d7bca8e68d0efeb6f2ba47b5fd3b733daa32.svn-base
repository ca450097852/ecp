package com.hontek.info.controller;

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
import com.hontek.info.modelDO.InfoVO;
import com.hontek.info.service.InfoService;
import com.hontek.sys.model.TsUser;

/**
 * 
* <p>Title: 资讯内容控制器</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */

@Controller
@RequestMapping("info")
public class InfoController extends BaseController{

	@Autowired
	private InfoService infoService ;
	
	@RequestMapping("add")
	@ResponseBody
	public String addInfo(InfoVO infoVO ,HttpSession session){
		infoVO.setUserId(((TsUser)session.getAttribute("loginUser")).getUserId());
		return infoService.addInfo(infoVO);
	}
	
	@RequestMapping("delete")
	@ResponseBody
	public String deleteInfo(String ids){
		return infoService.deleteInfo(ids);
	}
	
	@RequestMapping("update")
	@ResponseBody
	public String updateInfo(InfoVO infoVO){
		return infoService.updateInfo(infoVO);
	}
	
	@RequestMapping("page")
	@ResponseBody
	public Grid listInfo(SearchPageUtil page){
		return infoService.listInfo(page);
	}
	/**
	 * 列表
	 * @param page
	 * @param response
	 */
	@RequestMapping("ns/findADInfoList")
	public void findADInfoList(SearchPageUtil page,InfoVO info,HttpServletResponse response){
		Grid grid = infoService.findADInfoList(page,info);
		writeJson2View(grid, response);
	}
	/**
	 * 上传标题图片
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
		
		path +="infopic"+File.separator;//创建二级目录：infopic即：ecpFiles/infopic
		File tmpFile2 = new File(path);
		if(!tmpFile2.exists()){
			tmpFile2.mkdir();
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String fileName = sdf.format(new Date())+uploadify.getOriginalFilename().substring(uploadify.getOriginalFilename().indexOf("."));
		
		try {
			FileUtils.copyInputStreamToFile(uploadify.getInputStream(), new File(path,fileName));
			String url = "/ecpFiles/infopic/"+fileName;//返回图片路径
			writeJson2View(url, response);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
}
