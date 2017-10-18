package com.hontek.recommend.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel2;
import com.hontek.recommend.dao.MemberRecommendDao;
import com.hontek.recommend.model.TbMemberRecommend;
import com.hontek.sys.service.SequenceService;
/**
 * <p>Title: 推荐记录Service实现类</p>
 * <p>Description: 推荐记录</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
@Service("meMberRecommendService")
public class MemberRecommendServiceImpl extends BaseServiceImpl implements MemberRecommendService{

	private MemberRecommendDao recommendDao;
	@Autowired
	public void setRecommendDao(MemberRecommendDao recommendDao) {
		this.recommendDao = recommendDao;
	}
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 添加
	 */
	public String addMemberRecommend(TbMemberRecommend recommend,
			HttpSession session) {
		try {
			recommend.setMrId(sequenceService.getSequence("tb_member_recommend"));
			recommend.setCreateTime(DateUtil.formatDateTime());
			recommendDao.add(recommend);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 修改
	 */
	public String updateMemberRecommend(TbMemberRecommend recommend) {
		try {
			recommendDao.update(recommend);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 分页查询
	 */
	public Grid findMemberRecommendList(SearchPageUtil pageUtil) {
		int tatol = recommendDao.getCount(pageUtil);
		List list = recommendDao.findPageList(pageUtil);
		Grid dataGrid = new Grid(tatol, list);
		System.out.println(list);
		return dataGrid;
	}

	
	public TbMemberRecommend findMemberRecommendList(Integer memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public String auditSts(String ids, String type) {
		// TODO Auto-generated method stub
		return null;
	}


	public TbMemberRecommend getMemberRecommendById(Integer shopId) {
		// TODO Auto-generated method stub
		return null;
	}

}
