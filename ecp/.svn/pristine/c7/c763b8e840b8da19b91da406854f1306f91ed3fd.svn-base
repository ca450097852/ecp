package com.hontek.sys.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.model.TsUser;
/**
 * @ClassName: UserService
 * @Description: TODO(系统用户，service接口)
 * @date 2015-6-30 下午04:18:51
 * @author qql
 * @version 1.0
 */
public interface UserService {

	public String addUser(TsUser user);
	
	public String updateUser(TsUser user);
		
	public String deleteUser(String ids);
	
	public Grid findUserList(SearchPageUtil pageUtil);
	
	/**
	 * 用户登录
	 */
	public TsUser findUser(TsUser user);
}
