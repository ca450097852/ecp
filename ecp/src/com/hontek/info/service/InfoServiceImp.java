package com.hontek.info.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.info.dao.InfoVOMapper;
import com.hontek.info.dao.InfoVOMapperExt;
import com.hontek.info.modelDO.InfoVO;
import com.hontek.info.modelDO.InfoVOExample;
import com.hontek.info.modelVO.Info;
import com.hontek.sys.service.SequenceService;
/**
*
* <p>Title: 资讯内容实现类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
@Service
public class InfoServiceImp implements InfoService {

	@Autowired
	private InfoVOMapper infoVOMapper ;
	
	@Autowired
	private SequenceService sequenceService ;
	
	@Autowired
	private InfoVOMapperExt infoVOMapperExt ;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	@Override
	public String addInfo(InfoVO infoVO) {
		// TODO Auto-generated method stub
		String msg = "添加资讯分类成功！" ;
		try {
			infoVO.setInfoId(sequenceService.getSequence("tb_info"));
			infoVO.setCrttime(DateUtil.formatDateTime());
			infoVOMapper.insert(infoVO);
		} catch (Exception e) {
			// TODO: handle exception
			msg = "添加资讯分类失败！" ;
			logger.error(msg+e.getMessage());
		}
		System.out.println(msg);
		return msg;
	}

	@Override
	public String deleteInfo(String ids) {
		// TODO Auto-generated method stub
		String msg = "删除资讯分类成功！" ;
		try {
			InfoVOExample example = new InfoVOExample();
			String[] idss = ids.split(",");
			List<Integer> list = new ArrayList<Integer>();
			for(String id  : idss){
				list.add(Integer.parseInt(id));
			}
			
			example.createCriteria().andInfoIdIn(list);
			infoVOMapper.deleteByExample(example);
		} catch (Exception e) {
			// TODO: handle exception
			msg = "删除资讯分类失败！" ;
			logger.error(msg+e.getMessage());
		}
		return msg;
	}

	@Override
	public String updateInfo(InfoVO InfoVO) {
		// TODO Auto-generated method stub
		String msg = "修改资讯分类成功！" ;
		try {
			infoVOMapper.updateByPrimaryKeySelective(InfoVO);
		} catch (Exception e) {
			// TODO: handle exception
			msg = "添加修改分类失败！" ;
			logger.error(msg+e.getMessage());
		}
		System.out.println(msg);
		return msg;
	}

	@Override
	public Grid listInfo(SearchPageUtil page) {
		// TODO Auto-generated method stub
		List<Info> rows = null ;
		Integer total = null ;
		try {
			rows = infoVOMapperExt.selectByParams(page);
			total = infoVOMapperExt.count(page);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("获取资讯列表出错："+e.getMessage());
		}
		return new Grid(total,rows);
	}

	/**
	 * 查询广告
	 */
	public Grid findADInfoList(SearchPageUtil page,InfoVO info) {		
		if ( page == null ) {
			page = new SearchPageUtil();
		}
		InfoVOExample example = new InfoVOExample();
		example.setOffset((page.getPage()-1)*page.getRows());
		example.setLimit(page.getRows());
		if ( page.getOrder() != null && !"".equals(page.getOrder())) {
			example.setOrderByClause( page.getOrder()+ " " + page.getSort());
		}
		example.createCriteria().andTypeIdEqualTo(2).andRstsEqualTo(1);
		example.setOrderByClause(" seq ");
		List<InfoVO> list = infoVOMapper.selectByExample(example);
		int total = infoVOMapper.countByExample(example);
		return new Grid(total, list);
	}

	@Override
	public List<InfoVO> findInfoByInfoId(Integer infoId) {
		InfoVOExample example = new InfoVOExample();
		example.createCriteria().andInfoIdEqualTo(infoId);
		List<InfoVO> list = infoVOMapper.selectByExample(example);
		return list;
	}
}
