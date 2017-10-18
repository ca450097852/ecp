package com.hontek.order.service;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.PaymentDao;
import com.hontek.order.model.TbPayment;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: PaymentServiceImpl
 * @Description: TODO(订单支付信息表 ServiceImpl)
 * @date 2015-6-26 下午04:56:05
 * @author qql
 * @version 1.0
 */
@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentDao paymentDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	
	/**
	 * 分页查询
	 */
	@Override
	public Grid findPaymentList(SearchPageUtil page) {
		
		
		int tatol = paymentDao.getCount(page.getParams());

		List<TbPayment> list = paymentDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	@Override
	public String addPayment(TbPayment payment) {
		String message = "添加订单支付信息成功!";
		try {
			payment.setPayId(sequenceService.getSequence("tb_payment"));
			paymentDao.add(payment);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加订单支付信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public String deletePayment(String ids) {
		int count = 0;
		String message = "删除订单支付信息成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						paymentDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除订单支付信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public TbPayment findTbPaymentByParam(SearchMapUtil map) {
		// TODO Auto-generated method stub
		TbPayment TbPayment = null ;
		try {
			TbPayment = paymentDao.findTbPaymentByParam(map);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取TbPayment失败");
		}
		return TbPayment;
	}

	@Override
	public String updatePayment(TbPayment payment) {
		String message = "修改订单支付信息成功!";
		try {
			paymentDao.update(payment);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改订单支付信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
}
