package com.hontek.member.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.MemberDao;
import com.hontek.member.dao.MemberUserDao;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberUser;
import com.hontek.sys.service.SequenceService;
/**
 * <p>Title: 会员Service实现类</p>
 * <p>Description: 会员</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Service("memberService")
public class MemberServiceImpl extends BaseServiceImpl implements MemberService {
	
	@Autowired
	private MemberUserDao memberUserDao;
	
	private MemberDao memberDao;
	
	@Autowired
	public void setMemberDao(MemberDao memberDao) {
		this.memberDao = memberDao;
	}
	
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 会员注册
	 */
	public String registerMember(TbMember member,TbMemberUser memberUser){
		String message = "会员注册成功!";
		try {
						
			if(memberDao.findNameExists(member.getMemberName())>0){
				message = "会员注册失败!该会员名称已经存在!";
			}else if(memberUserDao.findNameExists(memberUser.getAccount())>0){
				message = "会员注册失败!该会员登录账号已经存在!";
			}else{
				//添加会员表
				int memberId =sequenceService.getSequence("tb_member");
				member.setMemberId(memberId);
				String regTime = DateUtil.formatDateTime();
				member.setRegTime(regTime);		
				member.setMemberScore(0);
				member.setMemberState("1");//使用状态
				memberDao.add(member);
				
				//添加会员用户表
				memberUser.setMemberUserId(sequenceService.getSequence("tb_member_user"));
				memberUser.setRegTime(regTime);
				memberUser.setMemberId(memberId);
				memberUser.setMemberState("1");//使用状态
				
				memberUserDao.add(memberUser);
			}

		} catch (Exception e) {
			e.printStackTrace();
			message = "会员注册失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	/**
	 * app会员注册后并登陆
	 */
	public String registerMember2(TbMember member,TbMemberUser memberUser,HttpSession session){
		String message = "会员注册成功!";
		try {
			
			if(memberDao.findNameExists(member.getMemberName())>0){
				message = "会员注册失败!该会员名称已经存在!";
			}else if(memberUserDao.findNameExists(memberUser.getAccount())>0){
				message = "会员注册失败!该会员登录账号已经存在!";
			}else{
				//添加会员表
				int memberId =sequenceService.getSequence("tb_member");
				member.setMemberId(memberId);
				String regTime = DateUtil.formatDateTime();
				member.setRegTime(regTime);		
				member.setMemberScore(0);
				member.setMemberState("1");//使用状态
				memberDao.add(member);
				
				//添加会员用户表
				memberUser.setMemberUserId(sequenceService.getSequence("tb_member_user"));
				memberUser.setRegTime(regTime);
				memberUser.setMemberId(memberId);
				memberUser.setMemberState("1");//使用状态
				
				memberUserDao.add(memberUser);
				
				session.setAttribute("member", member);
				session.setAttribute("memberUser", memberUser);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			message = "会员注册失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	
	
	/**
	 * 添加会员
	 */
	public String addMember(TbMember member) {
		String message = "添加会员成功!";
		try {
			member.setMemberId(sequenceService.getSequence("tb_member"));
			memberDao.add(member);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加会员失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除会员
	 */
	public String deleteMember(String ids) {
		int count = 0;
		String message = "删除会员成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						memberDao.delete(Integer.parseInt(id));
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除会员失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 分页查询
	 */
	public Grid findMemberList(SearchPageUtil page) {		
				
		int tatol = memberDao.getCount(page);

		List<TbMember> list = memberDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改会员
	 */
	public String updateMember(TbMember member) {
		String message = "修改会员成功!";
		try {
			memberDao.update(member);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改会员失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 根据ID查找会员
	 */
	public TbMember findMember(Integer memberId) {
		TbMember member = null;
		List<TbMember> list = memberDao.findObjectList(memberId);
		if(!list.isEmpty()){
			member = list.get(0);
		}
		return member;
		
	}

}
