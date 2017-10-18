package com.web.evaluate.service;

import java.util.LinkedList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.dao.EvaluateAppendixDao;
import com.hontek.order.dao.EvaluateDao;
import com.hontek.order.dao.OrderDetailDao;
import com.hontek.order.domain.EvaluateCountTDO;
import com.hontek.order.domain.EvaluateTDO;
import com.hontek.order.model.TbEvaluate;
import com.hontek.order.model.TbEvaluateAppendix;
import com.hontek.order.model.TbOrder;
import com.hontek.order.model.TbOrderDetail;
import com.hontek.order.service.EvaluateAppendixService;
import com.hontek.order.service.OrderDetailService;
import com.hontek.order.service.OrderService;
import com.hontek.sys.service.SequenceService;
/**
 * @ClassName: EvaluateServiceImpl
 * @Description: TODO(评论信息，serviceImpl实现类)
 * @date 2015-6-29 下午02:19:18
 * @author qql
 * @version 1.0
 */
@Service
public class WebEvaluateServiceImpl implements WebEvaluateService {

	@Autowired
	private EvaluateDao evaluateDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	@Autowired
	private EvaluateAppendixService evaluateAppendixService ;
	
	@Autowired
	private OrderDetailService orderDetailService ;
	
	@Autowired
	private OrderService orderService ;
	
	@Autowired
	private OrderDetailDao orderDetailDao ;
	
	@Autowired
	private EvaluateAppendixDao evaluateAppendixDao ;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 分页查询
	 */
	@Override
	public Grid findEvaluateList(SearchPageUtil page) {
		List<EvaluateTDO> evaluateTDOList = new LinkedList<>();
		int total = 0;
		
		try {
			total = evaluateDao.getCount(page);
			List<EvaluateTDO> list = evaluateDao.webFindPageList(page);
			for(EvaluateTDO evaluateTDO : list){//填充评价图片 ，及评价的商品信息
				
				if(evaluateTDO.getHadimg() != null && evaluateTDO.getHadimg() == 1){//有图
					SearchPageUtil page1 = new SearchPageUtil();
					page1.getParams().put("evalId", evaluateTDO.getEvalId());
					
					List<TbEvaluateAppendix> list2 = evaluateAppendixDao.findPageList(page1);
					evaluateTDO.setTbEvaluateAppendixList(list2);
				}
				evaluateTDOList.add(evaluateTDO);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("分页查询错误"+e.getMessage());
		}
		
		return new Grid(total, evaluateTDOList);
	}
	/**
	 * 分页查询
	 */
	@Override
	public Grid findSellerEvaluateList(SearchPageUtil page) {
		List<EvaluateTDO> evaluateTDOList = new LinkedList<>();
		int total = 0;
		
		try {
			total = evaluateDao.getCount(page);
			Integer memberId = (Integer) page.getParams().get("memberId");
			
//			page.getParams().put("memberId", tbMember.getMemberId());
			List<EvaluateTDO> list = evaluateDao.webFindSellerPageList(page);
			for(EvaluateTDO evaluateTDO : list){//填充评价图片 ，及评价的商品信息
				
				if(evaluateTDO.getHadimg() != null && evaluateTDO.getHadimg() == 1){//有图
					SearchPageUtil page1 = new SearchPageUtil();
					page1.getParams().put("evalId", evaluateTDO.getEvalId());
					
					List<TbEvaluateAppendix> list2 = evaluateAppendixDao.findPageList(page1);
					evaluateTDO.setTbEvaluateAppendixList(list2);
				}
				evaluateTDOList.add(evaluateTDO);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("分页查询错误"+e.getMessage());
		}
		
		return new Grid(total, evaluateTDOList);
	}
	
	/**
	 * 门户的商品评价，包含卖家回复
	 */
	@Override
	public Grid findProtalEvaluateList(SearchPageUtil page) {
		List<EvaluateTDO> evaluateTDOList = new LinkedList<>();
		int total = 0;
		
		try {
			total = evaluateDao.getCount(page);
			List<EvaluateTDO> list = evaluateDao.webFindProtalPageList(page);
			for(EvaluateTDO evaluateTDO : list){//填充评价图片 ，及评价的商品信息
				
				if(evaluateTDO.getHadimg() != null && evaluateTDO.getHadimg() == 1){//有图
					SearchPageUtil page1 = new SearchPageUtil();
					page1.getParams().put("evalId", evaluateTDO.getEvalId());
					
					List<TbEvaluateAppendix> list2 = evaluateAppendixDao.findPageList(page1);
					evaluateTDO.setTbEvaluateAppendixList(list2);
				}
				evaluateTDOList.add(evaluateTDO);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("分页查询错误"+e.getMessage());
		}
		
		return new Grid(total, evaluateTDOList);
	}
	
	/**
	 * 评价统计
	 */
	@Override
	public EvaluateCountTDO getEvaluateCount(Integer goodsId) {
		// TODO Auto-generated method stub
		
		try {
			EvaluateCountTDO evaluateCountTDO = evaluateDao.getEvaluateCount(goodsId);
			if(evaluateCountTDO.getTotalEvaluate() !=null && !"0".equals(evaluateCountTDO.getTotalEvaluate()) ){
				Float praiseRate = Float.parseFloat(evaluateCountTDO.getGoodEvaluate())/Float.parseFloat(evaluateCountTDO.getTotalEvaluate())*100f ;
				evaluateCountTDO.setPraiseRate(praiseRate+"%");
			};
			return evaluateCountTDO ;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error("获取评价统计错误"+e.getMessage());
		}
		return null;
	}

	@Override
	@Transactional
	public String addEvaluate(TbEvaluate evaluate ,String[]  evaluatePics ) {
		String message = "评论成功!";
		try {
			Integer evaluateId = sequenceService.getSequence("tb_evaluate");
			evaluate.setEvalId(evaluateId);
			evaluate.setEvalTime(DateUtil.formatDateTime());
			
			String evaSts = orderDetailService.findObjectById(evaluate.getOrderDetailId()).getEvaluateState();
			if("2".equals(evaSts)){
				message = "已经评价过了！";
				return message ;
			}
			
			if(null !=  evaluatePics  && !"".equals(evaluatePics)  ){//有图片
				evaluate.setHadimg(1);
				for(String evaluatePic : evaluatePics){
					//维护附件表
					evaluateAppendixService.addEvaluateAppendix(new TbEvaluateAppendix(evaluateId,null,evaluatePic,evaluate.getMemberId()));
				}
			}else{//无图
				evaluate.setHadimg(2);
			}
			evaluateDao.add(evaluate);
			
			//维护订单详细表的评价状态
			orderDetailService.updateOrderDetail(new TbOrderDetail( evaluate.getOrderDetailId() , "2"));
			
			//维护订单表的评价状态
			SearchPageUtil page = new SearchPageUtil();
			page.setRows(1000);
			page.getParams().put("orderId", evaluate.getOrderId());
			List<TbOrderDetail> list = orderDetailDao.findPageListWithParam(page);
			
			boolean b = true ;
			for(TbOrderDetail tbOrderDetail : list){//所有订单详细表都评价过了，则订单评价过了
				if(null == tbOrderDetail.getEvaluateState() ||  "1".equals(tbOrderDetail.getEvaluateState()) ){//未评价
					b = false ;
					break ;
				}
			}
			
			if(b){//都评价过了
				TbOrder tbOrder = orderService.findOrderByOrderId(evaluate.getOrderId());
				if ("3".equals(tbOrder.getEvaluateState())) {
					tbOrder.setEvaluateState("4");
					orderService.updateOrder(tbOrder);
				}else{
					tbOrder.setEvaluateState("2");
					orderService.updateOrder(tbOrder);
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			message = "评论失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/*@Override
	public String deleteEvaluate(String ids) {
		int count = 0;
		String message = "删除评论信息成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						evaluateDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除评论信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public String updateEvaluate(TbEvaluate evaluate) {
		String message = "修改评论信息成功!";
		try {
			evaluateDao.update(evaluate);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改评论信息失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}*/
	
}
