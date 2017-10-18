package com.hontek.member.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.ShopDao;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberUser;
import com.hontek.member.model.TbShop;
import com.hontek.sys.service.SequenceService;
/**
 * <p>Title: 卖家店铺Service实现类</p>
 * <p>Description: 卖家店铺</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Service("shopService")
public class ShopServiceImpl extends BaseServiceImpl implements ShopService {

	private ShopDao shopDao;
	
	@Autowired
	public void setShopDao(ShopDao shopDao) {
		this.shopDao = shopDao;
	}
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 添加卖家店铺
	 */
	public String addShop(TbShop shop,HttpSession session) {
		String message = "店铺开通成功!";
		try {			
			Object memberObject = session.getAttribute("member");
			if(memberObject!=null){
				TbMember member = (TbMember)memberObject;
				Integer memberId = member.getMemberId();							
				List<TbShop> list = shopDao.findObjectList(memberId);
				if(!list.isEmpty()){
					message = "卖家已开通店铺!";
				}else{
					shop.setShopId(sequenceService.getSequence("tb_shop"));
					shop.setMemberId(memberId);
					shop.setOpenTime(DateUtil.formatDateTime());
					
					shopDao.add(shop);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "开通卖家店铺失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除卖家店铺
	 */
	public String deleteShop(String ids) {
		int count = 0;
		String message = "删除卖家店铺成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						shopDao.delete(Integer.parseInt(id));
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除卖家店铺失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 分页查询
	 */
	public Grid findShopList(SearchPageUtil page) {		
				
		int tatol = shopDao.getCount(page);

		List<TbShop> list = shopDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改卖家店铺
	 */
	public String updateShop(TbShop shop) {
		String message = "修改卖家店铺成功!";
		try {
			shopDao.update(shop);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改卖家店铺失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	@Override
	public TbShop findShopList(Integer memberId) {

		TbShop tbShop = null;
		
		List<TbShop> list = shopDao.findObjectList(memberId);
		if(!list.isEmpty()){
			tbShop = list.get(0);
		}
		
		return tbShop;
	}

	/**
	 * 根据shopId获取店铺的部分信息
	 */
	@Override
	public TbShop getShopById(Integer shopId) {
		// TODO Auto-generated method stub
		TbShop tbShop = null;
		try {
			tbShop = shopDao.findById(shopId);
			//过滤身份信息
			tbShop.setIdcard(null);
			tbShop.setIdcardImg1(null);
			tbShop.setIdcardImg2(null);
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("获取店铺信息失败"+e.getMessage());
		}
		return tbShop;
	}

	/**
	 * 审核
	 * type :0待提交；1待审核； 2审核通过；3审核不通过；4店铺关闭
	 */
	@SuppressWarnings("unused")
	public String auditSts(String ids,String type) {
		String message = "审核成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(type.equals("2")){
						TbShop shop=new TbShop();
						shop.setShopState("2");
						shop.setShopId(Integer.parseInt(id));
						shopDao.update(shop);
					}else if(type.equals("3")){
						TbShop shop=new TbShop();
						shop.setShopState("3");
						shop.setShopId(Integer.parseInt(id));
						shopDao.update(shop);
					}else if(type.equals("4")){
						TbShop shop=new TbShop();
						shop.setShopState("4");
						shop.setShopId(Integer.parseInt(id));
						shopDao.update(shop);
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
	
	
}
