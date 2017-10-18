package com.hontek.order.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.OrderDetailDao;
import com.hontek.order.dao.RefundDao;
import com.hontek.order.domain.TbRefundTDO;
import com.hontek.order.model.TbOrderDetail;
import com.hontek.order.model.TbRefund;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: RefundServiceImpl
 * @Description: TODO(订单退款信息 serviceImpl)
 * @date 2015-6-26 下午05:02:54
 * @author qql
 * @version 1.0
 */
@Service("refundService")
public class RefundServiceImpl implements RefundService {

	@Autowired
	private RefundDao refundDao;
	
	@Autowired
	private OrderDetailDao orderDetailDao ;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findRefundList(SearchPageUtil page) {
		
		
		int tatol = refundDao.getCount(page.getParams());

		List<TbRefund> list = refundDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	/**
	 * 分页查询(联合查询出商品)
	 */
	public Grid findRefundListWithGoods(SearchPageUtil page) {
		Grid dataGrid = new Grid();
		try {
			
			int tatol = refundDao.getCount(page.getParams());
			List<TbRefundTDO> TbRefundTDOlist = new ArrayList<TbRefundTDO>();
			
			List<TbRefund> list = refundDao.findPageList(page);
			Map<String, Object> map = new HashMap<String, Object>();
			for(TbRefund tbRefund : list){
				map.clear();
				map.put("orderId", tbRefund.getOrderId());
				List<TbOrderDetail> findListWithParam = orderDetailDao.findListWithParam(map);	
				TbRefundTDOlist.add(new TbRefundTDO(tbRefund,findListWithParam));
			}
			dataGrid.setTotal(tatol);
			dataGrid.setRows(TbRefundTDOlist);
			
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("分页查询(联合查询出商品)错误"+e.getMessage());
		}
		return dataGrid;
	}
	
	@Override
	public TbRefund findTbRefundByParam(SearchMapUtil map) {
		// TODO Auto-generated method stub
		TbRefund tbRefund = null ;
		try {
			tbRefund = refundDao.findTbRefundByParam(map);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取TbRefund失败");
		}
		return tbRefund;
	}

	public String addRefund(TbRefund refund) {
		String message = "添加订单退款信息成功!";
		try {
			refund.setRefundId(sequenceService.getSequence("tb_refund"));
			refundDao.add(refund);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加订单退款信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteRefund(String ids) {
		int count = 0;
		String message = "删除订单退款信息成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						refundDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除订单退款信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateRefund(TbRefund refund) {
		String message = "修改订单退款信息成功!";
		try {
			refundDao.update(refund);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改订单退款信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
}
