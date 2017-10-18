package com.hontek.sys.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.dao.UserDao;
import com.hontek.sys.model.TsUser;
/**
 * @ClassName: UserServiceImpl
 * @Description: TODO(系统用户，serviceImpl实现类)
 * @date 2015-6-30 下午04:19:23
 * @author qql
 * @version 1.0
 */
@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	@Override
	public String addUser(TsUser user) {
		String message = "添加用户成功!";
		try {
			user.setUserId(sequenceService.getSequence("ts_user")+"");
			userDao.add(user);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加用户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 删除用户
	 */
	public String deleteUser(String ids) {
		int count = 0;
		String message = "删除用户成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						userDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除用户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	
	/**
	 * 分页查询
	 */
	public Grid findUserList(SearchPageUtil page) {		
		if(page==null){
			page = new SearchPageUtil();
		}
		
		int tatol = userDao.getCount(page.getParams());

		List<TsUser> list = userDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改用户
	 */
	public String updateUser(TsUser user) {
		String message = "修改用户成功!";
		try {
			userDao.update(user);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改用户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	
	/**
	 * 用户登录
	 */
	public TsUser findUser(TsUser user){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("userName", user.getUserName());
		params.put("password", user.getPassword());
		SearchPageUtil page = new SearchPageUtil();
		page.setParams(params);
		List<TsUser> list = userDao.findPageList(page);
		if(list==null||list.isEmpty()){
			return null;
		}else{
			return list.get(0);
		}
	}
	
	
}
