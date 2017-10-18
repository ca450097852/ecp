package com.hontek.sys.test;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.hontek.sys.model.TsUser;
import com.hontek.sys.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml", "classpath:spring-mybatis.xml" })
public class TestUser {
	private static final Logger logger = Logger.getLogger(TestUser.class);
	
	@Autowired
	private UserService userService;
	
	@Test
	public void testAdd(){
		TsUser user = new TsUser();
		
		user.setUserId("3");
		user.setUserName("test3");
		
		logger.info(userService.addUser(user));
	}
	
//	@Test
//	public void testSelect(){
//		
//		TsUser u = userService.selectByPrimaryKey("1");
//		logger.info(u.getUserName());
//		
//		System.out.println("===="+u.getUserName());
//	}
//	
//	@Test
//	public void testSelectAll(){
//		
//		List<TsUser> list = userService.selectAll();
//		
//		for (TsUser user : list) {
//			logger.info(user.getUserName());
//		}		
//	}
}
