package com.hontek.sys.test;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.hontek.sys.model.Sequence;
import com.hontek.sys.model.TsUser;
import com.hontek.sys.service.SequenceService;
import com.hontek.sys.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml", "classpath:spring-mybatis.xml" })
public class TestSeq {
	private static final Logger logger = Logger.getLogger(TestSeq.class);
	
	@Autowired
	private SequenceService sequenceService;
	

	
	@Test
	public void testSelect(){
		long l1 = System.currentTimeMillis();
		
		sequenceService.getSequence("ts_user");
		
		long l2 = System.currentTimeMillis()-l1;
		
		System.out.println(l2+" ms");
	}
	

}
