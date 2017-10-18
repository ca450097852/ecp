package com.hontek.comm.util;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;

import com.hontek.comm.qrcode.ImageManipulation;


public class CreateImg {

	BufferedImage image;
	
	void createImage(String fileLocation) {
		try {
			//FileOutputStream fos = new FileOutputStream(fileLocation);
			//BufferedOutputStream bos = new BufferedOutputStream(fos);
			//JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(bos);
			//encoder.encode(image);	
			//设置图片DPI并生成图片
			ImageManipulation imageManipulation = new ImageManipulation();
			imageManipulation.setGridImage(image);
			imageManipulation.saveGridImage(new File(fileLocation));
			
			//bos.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 二维码管理 和 二维码审核
	 * @param top_img
	 * @param proname
	 * @param maker
	 * @param codeNumber
	 * @param checkUrl
	 * @param codeNumberImg
	 * @param imgPath
	 * @return
	 */
	public String CreateImg_proBatch(String top_img,String proname,String nompanyName,String long_codeMaker,String codeNumber,String checkUrl,String codeNumberImg,String imgPath) {

		int imageWidth = 480;// 图片的宽度   530
		int imageHeight = 240;// 图片的高度   240
		String codeImg="";  // 保存协会认证的二维码图片的名称
		
		image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_RGB);
		Graphics graphics = image.getGraphics();
		graphics.setColor(Color.white);
		graphics.fillRect(0, 0, imageWidth, imageHeight);
		graphics.setColor(Color.black);
		
		graphics.setFont(new Font("", 0, 14));
		//判断是否需要换行
		if(long_codeMaker!=null&&!"".equals(long_codeMaker)){			
			graphics.drawString("产品名称:" + proname, 10, 98);
			graphics.drawString("企业名称:" + nompanyName, 10, 122);
			graphics.drawString(long_codeMaker, 72, 140);
			graphics.drawString("追溯码:" + codeNumber, 10, 160);
			graphics.drawString("追溯网址:" + checkUrl, 10, 188);
			graphics.drawString("监制单位:广东省农业科学蔬菜研究所", 10, 218);
		}else{
			graphics.drawString("产品名称:" + proname, 10, 100);
			graphics.drawString("企业名称:" + nompanyName, 10, 130);
			graphics.drawString("追溯码:" + codeNumber, 10, 160);
			graphics.drawString("追溯网址:" + checkUrl, 10, 190);
			graphics.drawString("监制单位:广东省农业科学蔬菜研究所", 10, 220);
		}
		BufferedImage bimg_top = null;
		BufferedImage bimg_code = null;
		try {
			bimg_top = javax.imageio.ImageIO.read(new java.io.File(top_img));
			bimg_code = javax.imageio.ImageIO.read(new java.io.File(imgPath));
		} catch (Exception e) {
			e.printStackTrace();
		}

		if (bimg_top != null){
			
			graphics.drawImage(bimg_top, 0, 0,480,74, null);
		}
		if (bimg_code != null){
			
			graphics.drawImage(bimg_code, 311, 77,160,160, null);
		}
		bimg_top.flush();
		bimg_code.flush();
		graphics.dispose();
		codeImg = codeNumber+".png"; 
		createImage(imgPath);		
		return codeImg;
	}
	
	
	/**
	 * 二维码管理 和 二维码审核
	 * @param top_img
	 * @param proname
	 * @param maker
	 * @param codeNumber
	 * @param codeSts
	 * @param codeNumberImg
	 * @param imgPath
	 * @return
	 */
	public String CreateImg_new(String top_img,String proname,String maker,String long_codeMaker,String codeNumber,String checkUrl,String codeNumberImg,String imgPath) {

		int imageWidth = 480;// 图片的宽度   530
		int imageHeight = 240;// 图片的高度   240
		String codeImg="";  // 保存协会认证的二维码图片的名称
		
		image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_RGB);
		Graphics graphics = image.getGraphics();
		graphics.setColor(Color.white);
		graphics.fillRect(0, 0, imageWidth, imageHeight);
		graphics.setColor(Color.black);
		
		graphics.setFont(new Font("", 0, 14));
		//判断是否需要换行
		if(long_codeMaker!=null&&!"".equals(long_codeMaker)){			
			graphics.drawString("企业名称:" + proname, 10, 98);
			graphics.drawString("企业法人:" + maker, 10, 122);
			graphics.drawString(long_codeMaker, 72, 140);
			graphics.drawString("追溯编码:" + codeNumber, 10, 160);
			graphics.drawString("追溯网址:" + checkUrl, 10, 188);
			graphics.drawString("监制单位:广东省农业科学蔬菜研究所", 10, 218);
		}else{
			graphics.drawString("企业名称:" + proname, 10, 100);
			graphics.drawString("企业法人:" + maker, 10, 130);
			graphics.drawString("追溯编码:" + codeNumber, 10, 160);
			graphics.drawString("追溯网址:" + checkUrl, 10, 190);
			graphics.drawString("监制单位:广东省农业科学蔬菜研究所", 10, 220);
		}
		// 改成这样:
		BufferedImage bimg_top = null;
		BufferedImage bimg_code = null;
		try {
			System.out.println("读取到的二维码原图片是："+imgPath);
			bimg_top = javax.imageio.ImageIO.read(new java.io.File(top_img));
			bimg_code = javax.imageio.ImageIO.read(new java.io.File(imgPath));
		} catch (Exception e) {
			e.printStackTrace();
		}

		if (bimg_top != null){
			
			graphics.drawImage(bimg_top, 0, 0,480,74, null);
		}
		if (bimg_code != null){
			
			graphics.drawImage(bimg_code, 311, 77,160,160, null);
		}
		bimg_top.flush();
		bimg_code.flush();
		graphics.dispose();

		codeImg = codeNumber+".png"; 
		createImage(imgPath);
		
		return codeImg;
	}
	
	public static void main(String[] args) {
		CreateImg cg = new CreateImg();
		try {
			cg.CreateImg_new("d://code_top.jpg","proname","codeMaker","long_codeMaker","code","checkUrl","d://code.png", "d:\\imgQRCode800.png");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
