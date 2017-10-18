package com.hontek.order.dao;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.order.model.TbRefund;
/**
 * @ClassName: RefundDao
 * @Description: TODO(订单退款信息，Dao接口类)
 * @date 2015-6-29 下午02:14:04
 * @author qql
 * @version 1.0
 */
public interface RefundDao extends BaseDao<TbRefund>{

	public TbRefund findTbRefundByParam(SearchMapUtil map);
	
}