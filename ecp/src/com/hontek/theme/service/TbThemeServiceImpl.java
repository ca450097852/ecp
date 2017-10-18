package com.hontek.theme.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbShop;
import com.hontek.sys.service.SequenceService;
import com.hontek.theme.dao.TbThemeDao;
import com.hontek.theme.model.TbTheme;
/**
 * <p>Title: 主题管理Service实现类</p>
 * <p>Description: 主题管理</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author ca
 * @version 1.0
 */
@Service("tbThemeService")
public class TbThemeServiceImpl extends BaseServiceImpl implements TbThemeService {

	private TbThemeDao tbThemeDao;
	
	@Autowired
	public void setTbThemeDao(TbThemeDao tbThemeDao) {
		this.tbThemeDao = tbThemeDao;
	}
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	

	/**
	 * 添加
	 */
	public String addTbTheme(TbTheme tbTheme, HttpSession session) {
		String msg="添加失败！";
		try{
			tbTheme.setThemeId(sequenceService.getSequence("tb_theme"));
			tbTheme.setCreateTime(DateUtil.formatDateTime());
			tbThemeDao.add(tbTheme);
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
	public String updateTbTheme(TbTheme tbTheme) {
		String message = "修改失败!";
		try {
			tbThemeDao.update(tbTheme);
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
	public String deleteTbTheme(String ids) {
		int count = 0;
		String message = "删除失败!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						tbThemeDao.delete(Integer.parseInt(id));
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
	public Grid findTbThemeList(SearchPageUtil pageUtil) {
		int tatol = tbThemeDao.getCount(pageUtil);
		List<TbTheme> list = tbThemeDao.findPageList(pageUtil);
		Grid dataGrid = new Grid(tatol, list);
		return dataGrid;
	}

	@Override
	public TbTheme findTbThemeList(Integer tbThemeId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TbTheme getTbThemeById(Integer tbThemeId) {
		// TODO Auto-generated method stub
		return null;
	}
	
	/**
	 * 审核
	 * type :1未发布； 2已发布；
	 */
	public String auditSts(String ids,String type) {
		String message = "审核成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(type.equals("2")){
						TbTheme tbTheme=new TbTheme();
						tbTheme.setState("2");
						tbTheme.setThemeId(Integer.parseInt(id));
						tbThemeDao.update(tbTheme);
					}else if(type.equals("1")){
						TbTheme tbTheme=new TbTheme();
						tbTheme.setState("1");
						tbTheme.setThemeId(Integer.parseInt(id));
						tbThemeDao.update(tbTheme);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "审核失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public List<Tree> findForTree() {
		return tbThemeDao.findForTree();
	}	


	

	
	
	
}
