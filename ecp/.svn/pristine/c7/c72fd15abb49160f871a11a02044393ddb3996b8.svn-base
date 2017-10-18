package com.hontek.goods.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.dao.GoodsBrandDao;
import com.hontek.goods.model.TbGoodsBrand;
import com.hontek.sys.service.SequenceService;
/**
 * 
* <p>Title:商品品牌 service实现类 </p>
* <p>Description: 商品品牌</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Service("goodsBrandService")
public class GoodsBrandServiceImpl implements GoodsBrandService{
	private Logger logger = Logger.getLogger(GoodsBrandServiceImpl.class);
	
	@Autowired
	private GoodsBrandDao goodsBrandDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	@Override
	public Grid findPageList(SearchPageUtil pageUtil) {
		List<TbGoodsBrand> list = goodsBrandDao.findPageList(pageUtil);
		
		int total = goodsBrandDao.getCount(pageUtil.getParams());
		
		Grid grid = new Grid();
		grid.setRows(list);
		grid.setTotal(total);
		
		return grid;
	}

	@Override
	public String addGoodsBrand(TbGoodsBrand goodsBrand) {
		String message = "添加商品品牌成功!";
		try {
			goodsBrand.setBrandId(sequenceService.getSequence("TB_GOODS_BRAND"));
			goodsBrandDao.add(goodsBrand);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加商品品牌失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public String updateGoodsBrand(TbGoodsBrand goodsBrand) {
		String message = "修改商品品牌成功!";
		try {
			goodsBrandDao.update(goodsBrand);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改商品品牌失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	@Override
	public String deleteGoodsBrand(String ids) {
		// TODO Auto-generated method stub
		String message = "删除商品品牌成功!";
		try {
			goodsBrandDao.delete(ids);
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除商品品牌失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public List<TbGoodsBrand> getBrandList() {
		return goodsBrandDao.getBrandList();
	}
	
	
	@Override
	public List<Tree> getGoodsBrandTree() {
		
		
		return goodsBrandDao.findForTree();
		
		
	}
}
