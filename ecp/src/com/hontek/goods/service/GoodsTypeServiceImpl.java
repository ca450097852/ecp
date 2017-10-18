package com.hontek.goods.service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.dao.GoodsDao;
import com.hontek.goods.dao.GoodsTypeDao;
import com.hontek.goods.model.TbGoodsType;
import com.hontek.sys.service.SequenceService;



@Service("goodsTypeService")
public class GoodsTypeServiceImpl implements GoodsTypeService{
	
	private Logger logger = Logger.getLogger(GoodsTypeServiceImpl.class);
	
	@Autowired
	private GoodsTypeDao goodsTypeDao;

	@Autowired
	private SequenceService sequenceService;
	
	@Autowired
	private GoodsDao goodsDao;
	
	@Override
	public Grid findList(SearchPageUtil pageUtil) {
		
		List<TbGoodsType> list = goodsTypeDao.findList(pageUtil);
		
		int total = goodsTypeDao.getCount(pageUtil.getParams());
		
		Grid grid = new Grid();
		
		grid.setRows(list);
		
		grid.setTotal(total);
		
		return grid;
	}

	@Override
	public String addGoodsType(TbGoodsType goodsType) {
		String message = "添加商品分类成功!";
		try {
			goodsType.setTypeId(sequenceService.getSequence("TB_GOODS_TYPE"));
			goodsTypeDao.add(goodsType);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加商品分类失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public String deleteGoodsType(String ids) {
		String message = "删除商品分类成功!";
		String returnIds = ids + "," ;
		try {
			do{
				if ( ids.endsWith(",")) {
					ids = ids.substring(0,ids.lastIndexOf(","));
				}
				ids = this.getids(ids);
				returnIds += ids ;
			}
			while(!"".equals(ids));
			
			if ( returnIds.endsWith(",")) {
				returnIds = returnIds.substring(0,returnIds.lastIndexOf(","));
			}
			
			goodsTypeDao.delete(returnIds);
		
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除商品分类失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 查出id 在ids 中的多有子分类
	 * @param ids
	 * @return
	 */
	public String getids(String ids){
		String returnIds = "" ;
		if(ids != null && !"".equals(ids)){
			Map<Object,Object> map = new HashMap<Object,Object>();
			map.put("upcateIds", ids);
			List<TbGoodsType> list = goodsTypeDao.findAllList(map);
			if(list != null && list.size()!=0){
				for(TbGoodsType tbGoodsType : list){
					returnIds =  returnIds + tbGoodsType.getTypeId() + ",";
				}
			}
		}
		return returnIds ;
	}
	
	@Override
	public String updateGoodsType(TbGoodsType goodsType) {
		String message = "修改商品分类成功!";
		try {
			goodsTypeDao.update(goodsType);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改商品分类失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public List<Tree> getGoodsTypeTree(Integer upcateId) {
		
		if(upcateId==null)
			upcateId = 0;
		
		System.out.println("upcateId===="+upcateId);
		
		List<Tree> treeList =goodsTypeDao.findForTree(upcateId,1);
		
		for(Tree tree:treeList){
			System.out.println("@@==="+tree.getId());
			tree.setChildren(getGoodsTypeTree(tree.getId()));
		}
		
		return treeList;
	}
	
	@Override
	public List<Tree> getGoodsTypeAndGoodsTree(Integer upcateId,Integer themeId) {
		
		if(upcateId==null)
			upcateId = 0;
		
		System.out.println("upcateId===="+upcateId);
		
		List<Tree> treeList =goodsTypeDao.findForTree(upcateId,1);
		
		for(Tree tree:treeList){
			tree.setChecked(false);
			System.out.println("@@==="+tree.getId());
			tree.setChildren(getGoodsTypeTree(tree.getId()));
			List<Tree> treeListChild=tree.getChildren();
			for (Tree tree2 : treeListChild) {
				tree2.setChildren(goodsDao.findForTree(tree2.getId(),themeId));
				treeListChild.set(0, tree2);
			}
		}
		
		return treeList;
	}
	
	@Override
	public Grid getAllGoodsTypeTree() {
		// TODO Auto-generated method stub
		Map map = new HashMap(); 
		List<TbGoodsType> allList = goodsTypeDao.findAllList(map);
		List<TbGoodsType> treeList = new LinkedList<TbGoodsType>();
		if ( allList != null && !"".equals(allList)){
			for ( TbGoodsType tbGoodsType : allList ) {
				tbGoodsType.set_parentId(tbGoodsType.getUpcateId());
				treeList.add(tbGoodsType);
			}
		}
		
		return new Grid(goodsTypeDao.getCount(map), treeList);
	}

	@Override
	public TbGoodsType getGoodsTypeById(String typeId) {
		return goodsTypeDao.getGoodsTypeById(typeId);
	}
	
	@Override
	public List<TbGoodsType> getGoodsTypeByShopId(String shopId) {
		return goodsTypeDao.getGoodsTypeByShopId(shopId);
	}
	
	@Override
	public List<TbGoodsType> getGoodsTypeByUpcateId(String typeId) {
		return goodsTypeDao.getGoodsTypeByUpcateId(typeId);
	}
	
}
