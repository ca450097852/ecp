package com.hontek.sys.test;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.sys.model.Sequence;
import com.hontek.sys.model.TsUser;
import com.hontek.sys.service.SequenceService;
import com.hontek.sys.service.SysColService;
import com.hontek.sys.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml", "classpath:spring-mybatis.xml" })
public class TestSysCol extends BaseController{
	private static final Logger logger = Logger.getLogger(TestSysCol.class);
	
	@Autowired
	private SysColService sysColService;
	

	
	@Test
	public void testSelect(){
		
		for (int i =0;i<10;i++) {
			long l1 = System.currentTimeMillis();
			
			Grid grid =  sysColService.findSysColList(null);
			
			System.out.println(converObject2Json(grid));
			
			long l2 = System.currentTimeMillis()-l1;
			
			System.out.println("第"+i+"次运行："+l2+" ms");
		}
		
		
	}
	

}
