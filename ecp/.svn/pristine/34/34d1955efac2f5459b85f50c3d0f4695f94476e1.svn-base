package com.hontek.goods.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.dao.ColumnDao;
import com.hontek.goods.model.TbColumn;
import com.hontek.sys.service.SequenceService;

/**
 * 
* <p>Title: 商品栏目 service 实现类</p>
* <p>Description: 商品栏目</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Service("columnService")
public class ColumnServiceImpl implements ColumnService{
	private Logger logger = Logger.getLogger(ColumnServiceImpl.class);
	
	@Autowired
	private ColumnDao columnDao;
	@Autowired
	private SequenceService sequenceService;

	@Override
	public Grid findPageList(SearchPageUtil page) {
		List<TbColumn> rows = columnDao.findPageList(page);
		int total = columnDao.getCount(page);
		Grid grid = new Grid(total,rows);
		return grid;
	}
	
	@Override
	public String addColumn(TbColumn column) {
		String message = "添加商品栏目成功!";
		try {
			column.setColumnId(sequenceService.getSequence("TB_COLUMN"));
			column.setCrttime(DateUtil.formatDateTime());
			columnDao.add(column);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加商品栏目失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public String updateColumn(TbColumn column) {
		String message = "修改商品栏目成功!";
		try {
			columnDao.update(column);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改商品栏目失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public List<Tree> getColumnTree(Integer parentId) {
		if(parentId==null)
			parentId = 0;
		
		List<Tree> list = columnDao.getTree(parentId);
		
		for(Tree tree:list){
			if(tree.getId()!=0)
				tree.setChildren(getColumnTree(tree.getId()));
		}
		
		return list;
	}
	
}
