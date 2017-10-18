package com.hontek.gen;
//代码生成器，自动生成代码
public class GenMain {
	public static void main(String[] args) {
		String configFile = "/generatorConfig.xml";
		try {
			//user 为要自动生成的表名
			 String[] tableNames = new String[] { "tb_info"};
			GenMybatisFiles.gen(configFile, tableNames);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
