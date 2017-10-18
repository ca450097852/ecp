package com.hontek.goods.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

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
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoodsType;
import com.hontek.goods.service.GoodsTypeService;
/**
 * 
* <p>Title: 商品分类控制器</p>
* <p>Description: 商品分类</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Controller
@RequestMapping("goodsType")
public class GoodsTypeController extends BaseController{
	@Autowired
	private GoodsTypeService goodsTypeService;
	
	
	@RequestMapping("page")
	public void findList(SearchPageUtil pageUtil,HttpServletResponse response){
		Grid grid = goodsTypeService.findList(pageUtil);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addGoodsType(TbGoodsType goodsType,HttpServletResponse response){
		writeJson2View(goodsTypeService.addGoodsType(goodsType), response);
	}
	
	@RequestMapping("delete")
	public void deleteGoodsType(String ids,HttpServletResponse response){
		writeJson2View(goodsTypeService.deleteGoodsType(ids), response);
	}
	
	@RequestMapping("update")
	public void updateGoodsType(TbGoodsType goodsType,HttpServletResponse response){
		writeJson2View(goodsTypeService.updateGoodsType(goodsType), response);
	}
	
	/**
	 * 
	 * @param flag		为1时不需要添加根分类
	 * @param response
	 */
	@RequestMapping("combotree")
	public void getGoodsTypeTree(String flag,Integer upcateId,HttpServletResponse response){
		
		List<Tree> list = goodsTypeService.getGoodsTypeTree(upcateId);
		if(!"1".equals(flag)){
			Tree tree = new Tree();
			tree.setText("根分类");
			tree.setId(0);
			list.add(0,tree);
		}
		writeJson2View(list, response);
	}
	
	/**
	 * 节点树
	 * 父节点：商品类  
	 * 子节点：商品
	 * @param response
	 */
	@RequestMapping("combotree2")
	public void getGoodsTypeAndGoodsTree(HttpServletResponse response,int themeId){
		List<Tree> list = goodsTypeService.getGoodsTypeAndGoodsTree(0,themeId);
		writeJson2View(list, response);
	}
	
	@RequestMapping("combotreeAll")
	public void getAllGoodsTypeTree(HttpServletResponse response) {
		writeJson2View(goodsTypeService.getAllGoodsTypeTree(), response);
	}
	
	/**
	 * 上传商品分类图片
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
		
		path +="goodstype"+File.separator;//创建二级目录：evaluate 即：ecpFiles/goodstype
		File tmpFile2 = new File(path);
		if(!tmpFile2.exists()){
			tmpFile2.mkdir();
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String fileName = sdf.format(new Date())+uploadify.getOriginalFilename().substring(uploadify.getOriginalFilename().indexOf("."));
		
		try {
			FileUtils.copyInputStreamToFile(uploadify.getInputStream(), new File(path,fileName));
			String url = "/ecpFiles/goodstype/"+fileName;//返回图片路径
			writeJson2View(url, response);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
}
