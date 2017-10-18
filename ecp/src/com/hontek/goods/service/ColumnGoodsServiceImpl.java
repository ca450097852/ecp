package com.hontek.goods.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hontek.sys.service.SequenceService;
import com.hontek.goods.dao.ColumnGoodsDao;
import com.hontek.goods.model.TbColumnGoods;

/**
* 
* <p>Title: 栏目商品关系Service接口实现类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Service("ColumnGoodsService")
public class ColumnGoodsServiceImpl implements ColumnGoodsService {

	private Logger logger = Logger.getLogger(ShelfServiceImpl.class);
	@Autowired
	private SequenceService sequenceService;
	@Autowired
	private ColumnGoodsDao columnGoodsDao;


	@Override
	public Grid findPageList(SearchPageUtil page) {
		List<TbColumnGoods> rows = columnGoodsDao.findPageList(page);
		int total = columnGoodsDao.getCount(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}


	@Override
	public String addColumnGoods(int goodsId,String ids) {
		String message = "添加成功!";
		try {
			//添加前先清空之前的记录
			columnGoodsDao.deleteColumnByGoodsId(goodsId);
			String[] arr = ids.split(",");
			for(String colId:arr){
				if(!"".equals(colId)){
					TbColumnGoods columnGoods = new TbColumnGoods();
					columnGoods.setGoodsId(goodsId);
					columnGoods.setColumnId(Integer.parseInt(colId));
					columnGoods.setCgId(sequenceService.getSequence("TB_COLUMN_GOODS"));
					columnGoodsDao.add(columnGoods);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public String updateColumnGoods(TbColumnGoods columnGoods) {
		String message = "修改成功!";
		try {
			columnGoodsDao.update(columnGoods);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public String deleteColumnGoods(String ids) {
		String message = "删除成功!";
		try {
			columnGoodsDao.delete(ids);
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public List<TbColumnGoods> findAllByGoodsId(String goodsId) {
		List<TbColumnGoods> list = columnGoodsDao.findAllByGoodsId(goodsId);
		return list;
	}
	
	@Override
	public List<String> findGoodsIdByColumnIds(String columnIds) {
		List<String> list = columnGoodsDao.findGoodsIdByColumnIds(columnIds);
		return list;
	}

}