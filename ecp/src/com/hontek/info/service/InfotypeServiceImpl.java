package com.hontek.info.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Tree;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoodsType;
import com.hontek.info.dao.InfotypeVOMapper;
import com.hontek.info.modelDO.InfotypeVO;
import com.hontek.info.modelDO.InfotypeVOExample;
import com.hontek.info.modelDO.InfotypeVOExample.Criteria;
import com.hontek.info.modelVO.TreeInfoType;
import com.hontek.sys.service.SequenceService;
/**
*
* <p>Title: 资讯分类实现类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
@Service
public class InfotypeServiceImpl implements InfotypeService {

	@Autowired
	private InfotypeVOMapper infotypeVOMapper ;
	
	@Autowired
	private SequenceService sequenceService ;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	@Override
	public String addInfotype(InfotypeVO infotypeVO) {
		// TODO Auto-generated method stub
		String msg = "添加资讯分类成功！" ;
		try {
			infotypeVO.setTypeId(sequenceService.getSequence("tb_infotype"));
			infotypeVO.setCrttime(DateUtil.formatDateTime());
			infotypeVOMapper.insert(infotypeVO);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			msg = "添加资讯分类失败！" ;
			logger.error(msg+e.getMessage());
		}
		return msg;
	}

	@Override
	public String deleteInfotype(String ids) {
		// TODO Auto-generated method stub
		String msg = "删除资讯分类成功！" ;
		try {
			InfotypeVOExample example = new InfotypeVOExample();
			String[] idss = ids.split(",");
			List<Integer> list = new ArrayList<Integer>();
			for(String id  : idss){
				list.add(Integer.parseInt(id));
			}
			
			example.createCriteria().andTypeIdIn(list);
			infotypeVOMapper.deleteByExample(example);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			msg = "删除资讯分类失败！" ;
			logger.error(msg+e.getMessage());
		}
		return msg;
	}

	@Override
	public String updateInfotype(InfotypeVO infotypeVO) {
		// TODO Auto-generated method stub
		String msg = "修改资讯分类成功！" ;
		try {
			infotypeVOMapper.updateByPrimaryKeySelective(infotypeVO);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			msg = "添加修改分类失败！" ;
			logger.error(msg+e.getMessage());
		}
		return msg;
	}

	@Override
	public List<InfotypeVO> listInfotypeVO(SearchPageUtil page) {
		// TODO Auto-generated method stub
		List<InfotypeVO> list = new ArrayList<>();
		
		InfotypeVOExample example = new InfotypeVOExample() ;
		Criteria criteria = example.createCriteria();
		
		Integer typeId = (Integer)(page.getParams().get("typeId")) ;
		Integer parentId = (Integer)(page.getParams().get("parentId"));
		String typeName = (String)page.getParams().get("typeName") ;
		//String crttime = (String)page.getParams().get("crttime") ;
		String userId = (String)page.getParams().get("userId") ; 
		
		if(typeId != null ){
			criteria.andTypeIdEqualTo(typeId);
		}
		if(parentId != null ){
			criteria.andParentIdEqualTo(parentId);
		}
		if(userId != null ){
			criteria.andUserIdEqualTo(userId);
		}
		if(typeName != null ){
			criteria.andTypeNameLike("%"+typeName+"%");
		}
		try {
			list = infotypeVOMapper.selectByExample(example);
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("获取资讯分类列表失败：" + e.getMessage()) ;
		}
		
		return list;
	}

	@Override
	public List<TreeInfoType> treeInfotype(InfotypeVO infotypeVO1) {
		// TODO Auto-generated method stub
		
		List<TreeInfoType> list = new ArrayList<>();
		
		InfotypeVOExample example = new InfotypeVOExample() ;
		Criteria criteria = example.createCriteria();
		
		Integer typeId =  infotypeVO1.getTypeId();
		Integer parentId = infotypeVO1.getParentId();
		String typeName = infotypeVO1.getTypeName() ;
		String userId = infotypeVO1.getUserId() ; 
		
		if(typeId != null ){
			criteria.andTypeIdEqualTo(typeId);
		}
		if(parentId != null ){
			criteria.andParentIdEqualTo(parentId);
		}
		if(userId != null ){
			criteria.andUserIdEqualTo(userId);
		}
		if(typeName != null ){
			criteria.andTypeNameLike("%"+typeName+"%");
		}
		try {
			List<InfotypeVO> listInfotypeVO = infotypeVOMapper.selectByExample(example);
			for(InfotypeVO infotypeVO: listInfotypeVO){
				list.add(new TreeInfoType(infotypeVO));
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("获取资讯分类列表树失败：" + e.getMessage()) ;
		}
		return list;
	}

	@Override
	public List<Tree> comboTreeInfotype(Integer rootId) {
		// TODO Auto-generated method stub
		List<Tree> listTree = new LinkedList<>();
		try {
			listTree = this.getList(rootId);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("获取资讯分类comboTree树失败：" + e.getMessage()) ;
		}
		
		return listTree;
	}
	
	public List<Tree> getList(Integer pId) throws Exception{
		List<Tree> treeList = new ArrayList<>();
		
		InfotypeVOExample example = new InfotypeVOExample();
		example.createCriteria().andParentIdEqualTo(pId);
		List<InfotypeVO> list = infotypeVOMapper.selectByExample(example);
		
		if(list != null){
			for(InfotypeVO infotypeVO : list){
				treeList.add(new Tree(infotypeVO.getTypeId(), infotypeVO.getTypeName(),this.getList(infotypeVO.getTypeId())));
			}
		}
		
		return treeList ;
	}
	

}
