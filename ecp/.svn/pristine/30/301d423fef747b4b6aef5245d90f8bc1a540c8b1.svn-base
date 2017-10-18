package com.hontek.goods.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hontek.sys.service.SequenceService;
import com.hontek.goods.dao.ShelfDao;
import com.hontek.goods.model.TbShelf;

/**
 * 
* <p>Title: 商品上下架记录 service实现类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Service("shelfService")
public class ShelfServiceImpl implements ShelfService {
	private Logger logger = Logger.getLogger(ShelfServiceImpl.class);
	
	@Autowired
	private ShelfDao shelfDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	@Override
	public Grid findPageList(SearchPageUtil page) {
		List<TbShelf> rows = shelfDao.findPageList(page);
		int total = shelfDao.getCount(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}

	@Override
	public String addShelf(TbShelf shelf) {
		String message = "添加商品上下架记录成功!";
		try {
			shelf.setShelfId(sequenceService.getSequence("TB_SHELF"));
			shelfDao.add(shelf);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加商品上下架记录失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public String updateShelf(TbShelf shelf) {
		String message = "修改商品上下架记录成功!";
		try {
			shelfDao.update(shelf);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改商品上下架记录失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public String deleteShelf(String ids) {
		String message = "删除商品上下架记录成功!";
		try {
			shelfDao.delete(ids);
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除商品上下架记录失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
}
