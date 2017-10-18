package com.hontek.order.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.OrderDetailDao;
import com.hontek.order.model.TbOrderDetail;
import com.hontek.sys.service.SequenceService;
/**
 * 
 * @ClassName: OrderDetailServiceImpl
 * @Description: TODO(订单详细表 详细表 ServiceImpl )
 * @date 2015-6-26 下午04:41:31
 * @author qql
 * @version 1.0
 */
@Service("orderDetailService")
public class OrderDetailServiceImpl implements OrderDetailService {

	@Autowired
	private OrderDetailDao orderDetailDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	public Grid findOrderDetailList(SearchPageUtil page) {
		
		
		int tatol = orderDetailDao.getCount(page.getParams());

		List<TbOrderDetail> list = orderDetailDao.findPageListWithParam(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	public String addOrderDetail(TbOrderDetail orderDetail) {
		String message = "添加订单详细成功!";
		try {
			orderDetail.setOrderDetailId(sequenceService.getSequence("tb_order_detail"));
			orderDetailDao.add(orderDetail);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加订单详细失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteOrderDetail(String ids) {
		int count = 0;
		String message = "删除订单详细成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						orderDetailDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除订单详细失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateOrderDetail(TbOrderDetail orderDetail) {
		String message = "修改订单详细成功!";
		try {
			orderDetailDao.update(orderDetail);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改订单详细失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public TbOrderDetail findObjectById(Integer id) {
		// TODO Auto-generated method stub
		TbOrderDetail tbOrderDetail = null ;
		try {
			tbOrderDetail = orderDetailDao.findObjectById(id);
			//orderDetailDao.update(orderDetail);
		} catch (Exception e) {
			e.printStackTrace();
			String message = "根据Id查询订单详细失败!"+e.getMessage();
			logger.error(message);
		}
		return tbOrderDetail;
	}

	@Override
	public List<TbOrderDetail> findDetailByOrderId(String orderId) {
		// TODO Auto-generated method stub
		Map<String,Object> map = new HashMap<>();
		map.put("orderId", orderId);
		List<TbOrderDetail> list = orderDetailDao.findListWithParam(map);
		return list;
	}
	
}
