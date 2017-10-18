package com.hontek.member.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.MemberTradeDao;
import com.hontek.member.model.TbMemberTrade;
import com.hontek.sys.service.SequenceService;
/**
 * <p>Title: 会员支付账户Service实现类</p>
 * <p>Description: 会员支付账户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Service("memberTradeService")
public class MemberTradeServiceImpl extends BaseServiceImpl implements MemberTradeService {

	private MemberTradeDao memberTradeDao;
	
	@Autowired
	public void setMemberTradeDao(MemberTradeDao memberTradeDao) {
		this.memberTradeDao = memberTradeDao;
	}
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 添加会员支付账户
	 */
	public String addMemberTrade(TbMemberTrade memberTrade) {
		String message = "添加会员支付账户成功!";
		try {
			memberTrade.setTradeId(sequenceService.getSequence("tb_member_addr"));
			memberTradeDao.add(memberTrade);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加会员支付账户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除会员支付账户
	 */
	public String deleteMemberTrade(String ids) {
		int count = 0;
		String message = "删除会员支付账户成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						memberTradeDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除会员支付账户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 分页查询
	 */
	public Grid findMemberTradeList(SearchPageUtil page) {		
				
		int tatol = memberTradeDao.getCount(page);

		List<TbMemberTrade> list = memberTradeDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改会员支付账户
	 */
	public String updateMemberTrade(TbMemberTrade memberTrade) {
		String message = "修改会员支付账户成功!";
		try {
			memberTradeDao.update(memberTrade);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改会员支付账户失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

}
