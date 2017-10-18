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
import com.hontek.member.dao.MeberLevelDao;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbShop;
import com.hontek.sys.service.SequenceService;
/**
 * <p>Title: 会员积分Service实现类</p>
 * <p>Description: 会员积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */

@Service("meberLevelService")
public class MemberLevelServiceImpl extends BaseServiceImpl implements MemberLevelService{

	private MeberLevelDao meberLevelDao;
	
	@Autowired
	public void setMeberLevelDao(MeberLevelDao meberLevelDao) {
		this.meberLevelDao = meberLevelDao;
	}
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	
	
	
	/**
	 * 添加
	 */
	public String addMemberLevel(TbMemberLevel memberLevel, HttpSession session) {
		String msg="添加失败！";
		try{
			memberLevel.setLevelId(sequenceService.getSequence("tb_member_level"));
			memberLevel.setCreateTime(DateUtil.formatDateTime());
			meberLevelDao.add(memberLevel);
			msg="添加成功";
		} catch (Exception e) {
			e.printStackTrace();
			msg = "添加失败!"+e.getMessage();
			logger.error(msg);
		}
		return msg;
	}

	/**
	 * 修改
	 */
	public String updateMemberLevel(TbMemberLevel memberLevel) {
		String message = "修改失败!";
		try {
			meberLevelDao.update(memberLevel);
			message="修改成功！";
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
		
	}

	/**
	 * 删除
	 */
	public String deleteMemberLevel(String ids) {
		int count = 0;
		String message = "删除失败!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						meberLevelDao.delete(Integer.parseInt(id));
						count++;
					}
				}
			}
			
			message="删除成功！";
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
		
	}

	/**
	 * 分页查询
	 */
	public Grid findMemberLevelList(SearchPageUtil pageUtil) {
		int tatol = meberLevelDao.getCount(pageUtil);
		List<TbMemberLevel> list = meberLevelDao.findPageList(pageUtil);
		Grid dataGrid = new Grid(tatol, list);
		return dataGrid;
	}

	
	
	public String auditSts(String ids, String type) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TbMemberLevel getMemberLevelById(Integer levelId) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public TbMemberLevel getMemberLevelByLevelId(Integer levelId) {
		return  meberLevelDao.findByLevelId(levelId);
	}


}
