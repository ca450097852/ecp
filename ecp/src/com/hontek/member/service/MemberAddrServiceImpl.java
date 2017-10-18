package com.hontek.member.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.MemberAddrDao;
import com.hontek.member.model.TbMemberAddr;
import com.hontek.sys.service.SequenceService;
/**
 * <p>Title: 会员地址Service实现类</p>
 * <p>Description: 会员地址</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Service("memberAddrService")
public class MemberAddrServiceImpl extends BaseServiceImpl implements MemberAddrService {

	private MemberAddrDao memberAddrDao;
	
	@Autowired
	public void setMemberAddrDao(MemberAddrDao memberAddrDao) {
		this.memberAddrDao = memberAddrDao;
	}
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 添加会员地址
	 */
	public String addMemberAddr(TbMemberAddr memberAddr) {
		String message = "添加会员地址成功!";
		try {
			
			if(memberAddr.getAddrDefault()!=null&&"0".equals(memberAddr.getAddrDefault())&&memberAddr.getMemberId()!=0){
				memberAddrDao.updateaddrDefault(memberAddr);//重置默认地址
			}
			memberAddr.setAddrId(sequenceService.getSequence("tb_member_addr"));
			memberAddrDao.add(memberAddr);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加会员地址失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除会员地址
	 */
	public String deleteMemberAddr(String ids) {
		int count = 0;
		String message = "删除会员地址成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						memberAddrDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除会员地址失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 分页查询
	 */
	public Grid findMemberAddrList(SearchPageUtil page) {		
				
		int tatol = memberAddrDao.getCount(page);

		List<TbMemberAddr> list = memberAddrDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	/**
	 * 分页查询2
	 */
	public Grid findMemberAddrList2(SearchPageUtil page) {		
				
		int tatol = memberAddrDao.getCount2(page);

		List<TbMemberAddr> list = memberAddrDao.findPageList2(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 列表查询
	 */
	@Override
	public List<TbMemberAddr> findMemberAddrList(TbMemberAddr tbMemberAddr) {
		// TODO Auto-generated method stub
		return memberAddrDao.findList(tbMemberAddr);
	}

	/**
	 * 修改会员地址
	 */
	public String updateMemberAddr(TbMemberAddr memberAddr) {
		String message = "修改会员地址成功!";
		try {
			memberAddrDao.update(memberAddr);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改会员地址失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 设置默认地址
	 */
	@Override
	public String toDefaultAddr(TbMemberAddr tbMemberAddr) {
		// TODO Auto-generated method stub
		String message = "设置默认地址成功!";
		try {
			List<TbMemberAddr> list = memberAddrDao.findList(new TbMemberAddr(tbMemberAddr.getMemberId()));
			for (TbMemberAddr tbMemberAddr1 : list) {
				if(tbMemberAddr1.getAddrDefault() != "1"){//1非默认
					memberAddrDao.update(new TbMemberAddr(tbMemberAddr1.getAddrId(),"1"));
				}
			}
			memberAddrDao.update(new TbMemberAddr(tbMemberAddr.getAddrId(),"0"));
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			message = "设置默认地址失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	

}
