package com.hontek.order.dao;

import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.domain.EvaluateCountTDO;
import com.hontek.order.domain.EvaluateTDO;
import com.hontek.order.model.TbEvaluate;

public interface EvaluateDao extends BaseDao<TbEvaluate>{

		public List<EvaluateTDO> webFindPageList(SearchPageUtil page);
		
		public List<EvaluateTDO> webFindSellerPageList(SearchPageUtil page);
			
		public List<EvaluateTDO> webFindProtalPageList(SearchPageUtil page);
		
		public EvaluateCountTDO getEvaluateCount(Integer goodsId);
		
}