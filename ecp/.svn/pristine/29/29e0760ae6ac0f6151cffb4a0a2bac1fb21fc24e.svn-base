package com.hontek.info.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.info.dao.BannerDao;
import com.hontek.info.modelDO.Banner;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: BannerServiceImpl
 * @Description: TODO(广告，serviceImpl实现类)
 * @date 2015-11-2 下午04:19:23
 * @author qql
 * @version 1.0
 */
@Service("bannerService")
public class BannerServiceImpl implements BannerService {

	@Autowired
	private BannerDao bannerDao;
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	@Override
	public String addBanner(Banner banner) {
		String message = "添加广告成功!";
		try {
			banner.setImgId(sequenceService.getSequence("tb_banner"));
			banner.setCrttime(DateUtil.formatDateTime());
			bannerDao.add(banner);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加广告失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 删除
	 */
	public String deleteBanner(String ids) {
		int count = 0;
		String message = "删除广告成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						bannerDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除广告失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	
	/**
	 * 分页查询
	 */
	public Grid findBannerList(SearchPageUtil page) {
		
		int tatol = bannerDao.getCount(page);

		List<Banner> list = bannerDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改
	 */
	public String updateBanner(Banner banner) {
		String message = "修改广告成功!";
		try {
			bannerDao.update(banner);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改广告失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	
	
}
