package com.hontek.goods.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hontek.sys.service.SequenceService;
import com.hontek.goods.dao.GoodsModelDao;
import com.hontek.goods.model.TbGoodsModel;

/**
* 
* <p>Title: 商品规格Service接口实现类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Service("GoodsModelService")
public class GoodsModelServiceImpl implements GoodsModelService {

	private Logger logger = Logger.getLogger(ShelfServiceImpl.class);
	@Autowired
	private SequenceService sequenceService;
	@Autowired
	private GoodsModelDao goodsModelDao;


	@Override
	public Grid findPageList(SearchPageUtil page) {
		List<TbGoodsModel> rows = goodsModelDao.findPageList(page);
		int total = goodsModelDao.getCount(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}
	
	@Override
	public List<TbGoodsModel> findModelList(String goodsId) {
		List<TbGoodsModel> list = goodsModelDao.findModelList(goodsId);
		return list;
	}

	@Override
	public String addGoodsModel(TbGoodsModel goodsModel) {
		String message = "添加成功!";
		try {
			goodsModel.setModelId(sequenceService.getSequence("TB_GOODS_MODEL"));
			goodsModelDao.add(goodsModel);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public String updateGoodsModel(TbGoodsModel goodsModel) {
		String message = "修改成功!";
		try {
			goodsModelDao.update(goodsModel);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public String deleteGoodsModel(String ids) {
		String message = "删除成功!";
		try {
			goodsModelDao.delete(ids);
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

}