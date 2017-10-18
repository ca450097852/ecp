package com.hontek.info.service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.info.modelDO.Banner;
/**
 * @ClassName: BannerService
 * @Description: TODO(广告 service接口)
 * @date 2015-11-2 下午04:18:51
 * @author qql
 * @version 1.0
 */
public interface BannerService {

	public String addBanner(Banner banner);
	
	public String updateBanner(Banner banner);
		
	public String deleteBanner(String ids);
	
	public Grid findBannerList(SearchPageUtil pageUtil);
	
}
