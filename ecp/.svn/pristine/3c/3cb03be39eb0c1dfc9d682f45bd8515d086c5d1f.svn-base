package com.hontek.info.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DirectoryUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.info.modelDO.Banner;
import com.hontek.info.service.BannerService;

/**
 * 广告
 * @author qql
 */
@Controller
@RequestMapping("banner")
public class BannerController extends BaseController{
	@Autowired
	private BannerService bannerService;
	
	/**
	 * 列表
	 * @param page
	 * @param response
	 */
	@RequestMapping("page")
	public void findBannerList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = bannerService.findBannerList(page);
		writeJson2View(grid, response);
	}
	
	/**
	 * 列表
	 * @param page
	 * @param response
	 */
	@RequestMapping("ns/page")
	public void findBannerList1(SearchPageUtil page,HttpServletResponse response){
		Grid grid = bannerService.findBannerList(page);
		writeJson2View(grid, response);
	}
	
	/**
	 * 添加
	 * @param banner
	 * @param response
	 */
	@RequestMapping("add")
	public void addBanner(Banner banner,HttpServletResponse response){
		writeJson2View(bannerService.addBanner(banner), response);
	}
	
	/**
	 * 修改
	 * @param banner
	 * @param response
	 */
	@RequestMapping("update")
	public void updateBanner(Banner banner,HttpServletResponse response){
		writeJson2View(bannerService.updateBanner(banner), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteBanners(String ids,HttpServletResponse response){
		writeJson2View(bannerService.deleteBanner(ids), response);
	}
	
	/**
	 * 删除附件
	 */
	@RequestMapping("deleteFile")
	public void deleteFile(String fileName,HttpServletRequest request,HttpServletResponse response){
		//获取通报附件目录
		File fileDir = DirectoryUtil.getDirectoryByName(request, "uploads");
		File file = new File(fileDir,fileName);	
		if(file.exists()){
			file.delete();
		}
	}
	
	
	/**
	 * 上传附件
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
		
		path +="bannerinfo"+File.separator;//创建二级目录：usersinfo即：ecpFiles/usersinfo
		File tmpFile2 = new File(path);
		if(!tmpFile2.exists()){
			tmpFile2.mkdir();
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String fileName = sdf.format(new Date())+uploadify.getOriginalFilename().substring(uploadify.getOriginalFilename().indexOf("."));
		
		try {
			FileUtils.copyInputStreamToFile(uploadify.getInputStream(), new File(path,fileName));
			String url = "/ecpFiles/bannerinfo/"+fileName;//返回图片路径
			writeJson2View(url, response);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
}
