package com.web.info.serice;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.info.dao.InfoVOMapper;
import com.hontek.info.modelDO.InfoVO;
import com.hontek.info.modelDO.InfoVOExample;

@Service
public class WebInfoServiceImp implements WebInfoService {

	@Autowired
	private InfoVOMapper infoVOMapper ;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	@Override
	public InfoVO getInfoById(Integer id) {
		// TODO Auto-generated method stub
		InfoVO infoVO = null ;
		try {
			InfoVOExample example = new InfoVOExample();
			
			example.createCriteria().andInfoIdEqualTo(id).andRstsEqualTo(1);//审核通过
			
			infoVO = infoVOMapper.selectByExampleWithBLOBs(example).get(0);
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("获取文章失败："+e.getMessage());
		}
		return infoVO;
	}

	@Override
	public List<InfoVO> listInfoVOById(Integer menuId) {
		// TODO Auto-generated method stub
		List<InfoVO> list= null ;
		try {
			InfoVOExample example = new InfoVOExample();
			example.createCriteria().andTypeIdEqualTo(menuId).andRstsEqualTo(1);//审核通过
			list = infoVOMapper.selectByExample(example);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("获取文章列表失败："+e.getMessage());
		}
		return list;
	}
	
	

}
