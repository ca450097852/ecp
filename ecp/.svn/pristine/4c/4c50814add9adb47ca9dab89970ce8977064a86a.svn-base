package com.hontek.goods.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hontek.sys.service.SequenceService;
import com.hontek.goods.dao.InventoryDao;
import com.hontek.goods.model.TbInventory;

/**
* 
* <p>Title: 商品库存变化记录Service接口实现类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Service("InventoryService")
public class InventoryServiceImpl implements InventoryService {

	private Logger logger = Logger.getLogger(ShelfServiceImpl.class);
	@Autowired
	private SequenceService sequenceService;
	@Autowired
	private InventoryDao inventoryDao;


	@Override
	public Grid findPageList(SearchPageUtil page) {
		List<TbInventory> rows = inventoryDao.findPageList(page);
		int total = inventoryDao.getCountWithPram(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}


	@Override
	public String addInventory(TbInventory inventory) {
		String message = "添加成功!";
		try {
			inventory.setRecordId(sequenceService.getSequence("TB_INVENTORY"));
			inventoryDao.add(inventory);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public String updateInventory(TbInventory inventory) {
		String message = "修改成功!";
		try {
			inventoryDao.update(inventory);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	@Override
	public String deleteInventory(String ids) {
		String message = "删除成功!";
		try {
			inventoryDao.delete(ids);
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

}