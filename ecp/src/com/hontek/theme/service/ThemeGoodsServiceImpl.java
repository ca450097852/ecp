package com.hontek.theme.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.service.SequenceService;
import com.hontek.theme.dao.ThemeGoodsDao;
import com.hontek.theme.model.TbTheme;
import com.hontek.theme.model.ThemeGoods;
/**
 * <p>Title: 主题商品Service实现类</p>
 * <p>Description: 主题商品</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author ca
 * @version 1.0
 */
@Service("themeGoodsService")
public class ThemeGoodsServiceImpl extends BaseServiceImpl implements ThemeGoodsService {

	private ThemeGoodsDao themeGoodsDao;
	
	@Autowired
	public void setThemeGoodsDao(ThemeGoodsDao themeGoodsDao) {
		this.themeGoodsDao = themeGoodsDao;
	}
	
	@Autowired
	private SequenceService sequenceService;

	

	Logger logger = Logger.getLogger(this.getClass());
	

	/**
	 * 添加
	 */
	public String addThemeGoods(ThemeGoods themeGoods,String goodsId, HttpSession session) {
		String msg="添加失败！";
		try{
			String[] temp=goodsId.split(",");
			if(temp!=null&&temp.length!=0){
				for(int i=0;i<temp.length;i++){
					if(temp[i]!=null&&!temp[i].equals("")){
						themeGoods.setThemeGoogsId(sequenceService.getSequence("tb_theme_goods"));
						themeGoods.setCreateTime(DateUtil.formatDateTime());
						themeGoods.setGoodsId(Integer.valueOf(temp[i]));
						themeGoodsDao.add(themeGoods);
					}
				
				}
			}
			
			msg="添加成功";
		} catch (Exception e) {
			e.printStackTrace();
			msg = "添加失败!"+e.getMessage();
			logger.error(msg);
		}
		return msg;
	}

	/**
	 * 修改
	 */
	public String updateThemeGoods(ThemeGoods themeGoods) {
		String message = "修改失败!";
		try {
			themeGoodsDao.update(themeGoods);
			message="修改成功！";
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除
	 */
	public String deleteThemeGoods(String ids) {
		int count = 0;
		String message = "删除失败!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						themeGoodsDao.delete(Integer.parseInt(id));
						count++;
					}
				}
			}
			
			message="删除成功！";
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	/**
	 * 删除
	 */
	public String deleteThemeGoods2(String ids) {
		int count = 0;
		String message = "删除失败!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						themeGoodsDao.delete2(Integer.parseInt(id));
						count++;
					}
				}
			}
			
			message="删除成功！";
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 分页查询
	 */
	public Grid findThemeGoodsList(SearchPageUtil pageUtil) {
		int tatol = themeGoodsDao.getCount(pageUtil);
		List<ThemeGoods> list = themeGoodsDao.findPageList(pageUtil);
		Grid dataGrid = new Grid(tatol, list);
		return dataGrid;
	}

	@Override
	public TbTheme findThemeGoodsList(Integer themeGoodsId) {
		// TODO Auto-generated method stub
		return null;
	}



	

	
	
	
}
