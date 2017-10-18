package com.hontek.member.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.MemberDao;
import com.hontek.member.dao.MemberUserDao;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberUser;
import com.hontek.sys.service.SequenceService;
/**
 * <p>Title: 会员用户Service实现类</p>
 * <p>Description: 会员用户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Service("memberUserService")
public class MemberUserServiceImpl extends BaseServiceImpl implements MemberUserService {

	private MemberUserDao memberUserDao;
	
	private MemberDao memberDao;
	
	@Autowired
	public void setMemberDao(MemberDao memberDao) {
		this.memberDao = memberDao;
	}

	@Autowired
	public void setMemberUserDao(MemberUserDao memberUserDao) {
		this.memberUserDao = memberUserDao;
	}
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	
	/**
	 * 会员用户登录
	 */
	public TbMemberUser loginMemberUser(TbMemberUser memberUser){		
		TbMemberUser loginMemberUser = null;
		try {
			List<TbMemberUser> list = memberUserDao.loginMemberUser(memberUser);
			
			if(list.size()>0){
				loginMemberUser = list.get(0);
			}
			
				
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return loginMemberUser;
	}

	
	/**
	 * 添加会员用户
	 */
	public String addMemberUser(TbMemberUser memberUser) {
		String message = "添加会员用户成功!";
		try {
			memberUser.setMemberUserId(sequenceService.getSequence("tb_member_user"));
			memberUserDao.add(memberUser);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加会员用户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除会员用户
	 */
	public String deleteMemberUser(String ids) {
		int count = 0;
		String message = "删除会员用户成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						memberUserDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除会员用户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 分页查询
	 */
	public Grid findMemberUserList(SearchPageUtil page) {		
				
		int tatol = memberUserDao.getCount(page);

		List<TbMemberUser> list = memberUserDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改会员用户
	 */
	public String updateMemberUser(TbMemberUser memberUser) {
		String message = "修改会员用户成功!";
		try {
			memberUserDao.update(memberUser);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改会员用户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	/**
	 * 审核
	 * type :1-通过；2-作废
	 */
	@SuppressWarnings("unused")
	public String auditSts(String ids,String type) {
		String message = "审核成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(type.equals("1")){
						TbMemberUser info=new TbMemberUser();
						info.setMemberState("1");
						info.setMemberId(Integer.parseInt(id));
						memberUserDao.updateByMemberId(info);
						TbMember member=new TbMember();
						member.setMemberState("1");
						member.setMemberId(Integer.parseInt(id));
						memberDao.update(member);
					}else if(type.equals("2")){
						TbMemberUser info=new TbMemberUser();
						info.setMemberState("2");
						info.setMemberId(Integer.parseInt(id));
						memberUserDao.updateByMemberId(info);
						TbMember member=new TbMember();
						member.setMemberState("2");
						member.setMemberId(Integer.parseInt(id));
						memberDao.update(member);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "审核失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}	
	
	/**
	 * 根据ID查找会员
	 */
	public TbMemberUser findMemberUser(Integer memberId) {
		TbMemberUser memberUser = null;
		List<TbMemberUser> list = memberUserDao.findObjectList(memberId);
		if(!list.isEmpty()){
			memberUser = list.get(0);
		}
		return memberUser;
		
	}
	
	/**
	 * 根据账号查找会员
	 */
	public TbMemberUser findMemberUserByAccount(String account) {
		TbMemberUser memberUser = memberUserDao.findMemberUserByAccount(account);
		return memberUser;
	}

}
