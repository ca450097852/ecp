package com.web.goods.controller;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.DirectoryUtil;
/**
 * 
* <p>Title: 附件上传控制器</p>
* <p>Description: 附件上传</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Controller
@RequestMapping("webGoodsFile")
public class WebUploadFileController extends BaseController{

	@RequestMapping("upload")
	public void upload(String dir,@RequestParam MultipartFile uploadify,HttpServletResponse response,HttpServletRequest request){
        try {
        	String path = DirectoryUtil.getDirectoryPathByName(request,DirectoryUtil.GOODSDIR);
        	if(dir!=null){
        		path += DirectoryUtil.getSeparator()+dir;
        	}
        	
        	if("goods".equals(dir)){
        		path += DirectoryUtil.getSeparator()+DateUtil.formatYYYMMDD();
        	}
        	
        	File tmp = new File(path);
        	if(!tmp.exists()){
        		tmp.mkdir();
        	}
        	
        	String fileName = DateUtil.formatYYYMMDDHHMMSSAnd5Random()+uploadify.getOriginalFilename().substring(uploadify.getOriginalFilename().indexOf("."));
        	
        	System.out.println("fileName==="+fileName);
        	
        	String url = path.substring(path.lastIndexOf("webapps")+7)+"/"+fileName;
        	url = url.replaceAll("\\\\", "/");
        	
        	FileUtils.copyInputStreamToFile(uploadify.getInputStream(), new File(path,fileName));
        	
			writeJson2View(url, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
        
	}
	
	@RequestMapping("upload1")
	public void uploadEdit(String dir,@RequestParam MultipartFile filedata,HttpServletResponse response,HttpServletRequest request){
		try {
        	String path = DirectoryUtil.getDirectoryPathByName(request,DirectoryUtil.GOODSDIR);
        	if(dir!=null){
        		path += DirectoryUtil.getSeparator()+dir;
        	}
        	
        	if("goods".equals(dir)){
        		path += DirectoryUtil.getSeparator()+DateUtil.formatYYYMMDD();
        	}
        	
        	File tmp = new File(path);
        	if(!tmp.exists()){
        		tmp.mkdir();
        	}
        	
        	String fileName = DateUtil.formatYYYMMDDHHMMSSAnd5Random()+filedata.getOriginalFilename().substring(filedata.getOriginalFilename().indexOf("."));
        	
        	
        	String url = path.substring(path.lastIndexOf("webapps")+7)+"/"+fileName;
        	url = url.replaceAll("\\\\", "/");
        	
        	FileUtils.copyInputStreamToFile(filedata.getInputStream(), new File(path,fileName));
        	String content = "{\"err\":\"\",\"msg\":\""+url+"\"}";
			writeJson2View(content, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
