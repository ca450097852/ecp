package com.hontek.comm.qrcode;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;


public class CreateTagImg {

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
	 * @param entname
	 * @param codeNumber
	 * @param website
	 * @param codeNumberImg
	 * @param imgPath
	 * @return
	 */
	public String CreateImg_new(String top_img,String proname,String entname,String long_entname,String codeNumber,String website,String codeNumberImg,String imgPath) {

		int imageWidth = 480;// 图片的宽度   480
		int imageHeight = 240;// 图片的高度   240
		String codeImg="";  // 保存认证的二维码图片的名称
		
		image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_RGB);
		Graphics graphics = image.getGraphics();
		graphics.setColor(Color.white);
		graphics.fillRect(0, 0, imageWidth, imageHeight);
		graphics.setColor(Color.black);
		graphics.setFont(new Font("新宋体", 0,14));
		//判断是否需要换行
		if(long_entname!=null&&!"".equals(long_entname)){
			graphics.drawString("产品名称:" + proname, 10, 98);
			graphics.drawString("企业名称:" + entname, 10, 122);
			graphics.drawString(long_entname, 72, 140);
			graphics.drawString("  追溯码:" + codeNumber, 10, 160);
			graphics.drawString("追溯网址:" + website, 10, 188);
			graphics.drawString("监制单位:广东省农业科学院蔬菜研究所", 10, 218);
		}else{
			graphics.drawString("产品名称:" + proname, 10, 100);
			graphics.drawString("企业名称:" + entname, 10, 130);
			graphics.drawString("  追溯码:" + codeNumber, 10, 160);
			graphics.drawString("追溯网址:" + website, 10, 190);
			graphics.drawString("监制单位:广东省农业科学院蔬菜研究所", 10, 220);
		}

		//
		BufferedImage bimg_top = null;
		BufferedImage bimg_code = null;
		try {
			bimg_top = javax.imageio.ImageIO.read(new java.io.File(top_img));
			bimg_code = javax.imageio.ImageIO.read(new java.io.File(codeNumberImg));
			
			graphics.drawImage(bimg_top, 0, 0,480,74, null);			
			graphics.drawImage(bimg_code, 311, 77,160,160, null);

		} catch (Exception e) {
			e.printStackTrace();
		}

		if (bimg_top != null){
			bimg_top.flush();
		}
		if (bimg_code != null){
			bimg_code.flush();
		}
		graphics.dispose();
		// 保存图片				
		codeImg = codeNumber+".png"; 
		createImage(imgPath);
		
		return codeImg;
	}
	
	public static void main(String[] args) {
		CreateTagImg cg = new CreateTagImg();
		try {
			cg.CreateImg_new("d://code_top1.jpg","黑优1号冬瓜","广东科农蔬菜种业有限公司","","55412100010006105896","www.gdvri.com","d://imgQRCode200.png", "d:\\QRCode.png");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
