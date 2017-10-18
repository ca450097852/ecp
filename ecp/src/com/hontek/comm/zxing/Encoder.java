package com.hontek.comm.zxing;

import java.io.File;
import java.io.IOException;
import java.util.Hashtable;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

public class Encoder {

	public static void main(String[] args) {

		String contents = "http://seed.hontek.com.cn/seed/trace.jsp";

		Hashtable<EncodeHintType, Object> hints = new Hashtable<EncodeHintType, Object>();

		hints.put(EncodeHintType.CHARACTER_SET, "GBK");
		hints.put(EncodeHintType.MARGIN, 1);//缩小白色边框


		try {

			BitMatrix matrix = new MultiFormatWriter().encode(contents,BarcodeFormat.QR_CODE, 300, 300, hints);

			File file = new File("D://qrcodeImage1.png");
			
			MatrixToImageWriter.writeToFile(matrix, "png", file);


		} catch (WriterException e) {

			e.printStackTrace();

		} catch (IOException e) {

			e.printStackTrace();

		}


	}
}
