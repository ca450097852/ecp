package com.hontek.order.model;
/**
 * @ClassName: TbOrderDetail
 * @Description: TODO(订单详细表)
 * @date 2015-6-26 下午04:59:15
 * @author qql
 * @version 1.0
 */
public class TbOrderDetail {
    private Integer orderDetailId;
    private Integer orderId;
    private Integer goodsId;
    private Integer modelId;
    private Integer goodsCount;
    private Float goodsPrice;
    private String evaluateState ;
    
    private String recommend;
    
    private String goodsName;
	private int shopId;
	private int typeId;
	private Integer brandId;
	private int goodSeq;
	private float chengbenPrice;
	private float marketPrice;
	private float saledPrice;
	private int saledNum;
	private int inventory;
	private String goodsNo;
	private String barcode;
	private String dimenno;
	private String dimennoImg;
	private String goodsImg;
	private String goodsSpecs;
	private String goodsDesc;
	private String netWeight;
	private String roughWeight;
	private String goodsAddr;
	private String sourceArea;
	private String manufacturer;
	private String sourceTel;
	private String sourceAddr;
	private String storageConditions;
	private String shelfLife;
	private String state;
	private String createTime;
	private String updateTime;
	private int memberId;
	private String remark;
	
	private String modelName;
	//前台数据接收参数
	private Integer cartId ;
	
	public TbOrderDetail() {
		super();
	}
	
	public TbOrderDetail(Integer orderDetailId, String evaluateState) {
		super();
		this.orderDetailId = orderDetailId;
		this.evaluateState = evaluateState;
	}

	public TbOrderDetail(Integer orderId, Integer goodsId, Integer modelId,
			Integer goodsCount, Float goodsPrice) {
		super();
		this.orderId = orderId;
		this.goodsId = goodsId;
		this.modelId = modelId;
		this.goodsCount = goodsCount;
		this.goodsPrice = goodsPrice;
	}

	public TbOrderDetail(Integer orderDetailId, Integer orderId,
			Integer goodsId, Integer modelId, Integer goodsCount,
			Float goodsPrice, String goodsName, int shopId, int typeId,
			Integer brandId, int goodSeq, float chengbenPrice,
			float marketPrice, float saledPrice, int saledNum, int inventory,
			String goodsNo, String barcode, String dimenno, String dimennoImg,
			String goodsImg, String goodsSpecs, String goodsDesc,
			String netWeight, String roughWeight, String goodsAddr,
			String sourceArea, String manufacturer, String sourceTel,
			String sourceAddr, String storageConditions, String shelfLife,
			String state, String createTime, String updateTime, int memberId,
			String remark, String modelName) {
		super();
		this.orderDetailId = orderDetailId;
		this.orderId = orderId;
		this.goodsId = goodsId;
		this.modelId = modelId;
		this.goodsCount = goodsCount;
		this.goodsPrice = goodsPrice;
		this.goodsName = goodsName;
		this.shopId = shopId;
		this.typeId = typeId;
		this.brandId = brandId;
		this.goodSeq = goodSeq;
		this.chengbenPrice = chengbenPrice;
		this.marketPrice = marketPrice;
		this.saledPrice = saledPrice;
		this.saledNum = saledNum;
		this.inventory = inventory;
		this.goodsNo = goodsNo;
		this.barcode = barcode;
		this.dimenno = dimenno;
		this.dimennoImg = dimennoImg;
		this.goodsImg = goodsImg;
		this.goodsSpecs = goodsSpecs;
		this.goodsDesc = goodsDesc;
		this.netWeight = netWeight;
		this.roughWeight = roughWeight;
		this.goodsAddr = goodsAddr;
		this.sourceArea = sourceArea;
		this.manufacturer = manufacturer;
		this.sourceTel = sourceTel;
		this.sourceAddr = sourceAddr;
		this.storageConditions = storageConditions;
		this.shelfLife = shelfLife;
		this.state = state;
		this.createTime = createTime;
		this.updateTime = updateTime;
		this.memberId = memberId;
		this.remark = remark;
		this.modelName = modelName;
	}

	public Integer getModelId() {
		return modelId;
	}

	public void setModelId(Integer modelId) {
		this.modelId = modelId;
	}

	public Integer getCartId() {
		return cartId;
	}

	public void setCartId(Integer cartId) {
		this.cartId = cartId;
	}

	public String getModelName() {
		return modelName;
	}
	
	public String getEvaluateState() {
		return evaluateState;
	}

	public void setEvaluateState(String evaluateState) {
		this.evaluateState = evaluateState;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public int getShopId() {
		return shopId;
	}

	public void setShopId(int shopId) {
		this.shopId = shopId;
	}

	public int getTypeId() {
		return typeId;
	}

	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

	public Integer getBrandId() {
		return brandId;
	}

	public void setBrandId(Integer brandId) {
		this.brandId = brandId;
	}

	public int getGoodSeq() {
		return goodSeq;
	}

	public void setGoodSeq(int goodSeq) {
		this.goodSeq = goodSeq;
	}

	public float getChengbenPrice() {
		return chengbenPrice;
	}

	public void setChengbenPrice(float chengbenPrice) {
		this.chengbenPrice = chengbenPrice;
	}

	public float getMarketPrice() {
		return marketPrice;
	}

	public void setMarketPrice(float marketPrice) {
		this.marketPrice = marketPrice;
	}

	public float getSaledPrice() {
		return saledPrice;
	}

	public void setSaledPrice(float saledPrice) {
		this.saledPrice = saledPrice;
	}

	public int getSaledNum() {
		return saledNum;
	}

	public void setSaledNum(int saledNum) {
		this.saledNum = saledNum;
	}

	public int getInventory() {
		return inventory;
	}

	public void setInventory(int inventory) {
		this.inventory = inventory;
	}

	public String getGoodsNo() {
		return goodsNo;
	}

	public void setGoodsNo(String goodsNo) {
		this.goodsNo = goodsNo;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}

	public String getDimenno() {
		return dimenno;
	}

	public void setDimenno(String dimenno) {
		this.dimenno = dimenno;
	}

	public String getDimennoImg() {
		return dimennoImg;
	}

	public void setDimennoImg(String dimennoImg) {
		this.dimennoImg = dimennoImg;
	}

	public String getGoodsImg() {
		return goodsImg;
	}

	public void setGoodsImg(String goodsImg) {
		this.goodsImg = goodsImg;
	}

	public String getGoodsSpecs() {
		return goodsSpecs;
	}

	public void setGoodsSpecs(String goodsSpecs) {
		this.goodsSpecs = goodsSpecs;
	}

	public String getGoodsDesc() {
		return goodsDesc;
	}

	public void setGoodsDesc(String goodsDesc) {
		this.goodsDesc = goodsDesc;
	}

	public String getNetWeight() {
		return netWeight;
	}

	public void setNetWeight(String netWeight) {
		this.netWeight = netWeight;
	}

	public String getRoughWeight() {
		return roughWeight;
	}

	public void setRoughWeight(String roughWeight) {
		this.roughWeight = roughWeight;
	}

	public String getGoodsAddr() {
		return goodsAddr;
	}

	public void setGoodsAddr(String goodsAddr) {
		this.goodsAddr = goodsAddr;
	}

	public String getSourceArea() {
		return sourceArea;
	}

	public void setSourceArea(String sourceArea) {
		this.sourceArea = sourceArea;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getSourceTel() {
		return sourceTel;
	}

	public void setSourceTel(String sourceTel) {
		this.sourceTel = sourceTel;
	}

	public String getSourceAddr() {
		return sourceAddr;
	}

	public void setSourceAddr(String sourceAddr) {
		this.sourceAddr = sourceAddr;
	}

	public String getStorageConditions() {
		return storageConditions;
	}

	public void setStorageConditions(String storageConditions) {
		this.storageConditions = storageConditions;
	}

	public String getShelfLife() {
		return shelfLife;
	}

	public void setShelfLife(String shelfLife) {
		this.shelfLife = shelfLife;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public String getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}

	public int getMemberId() {
		return memberId;
	}

	public void setMemberId(int memberId) {
		this.memberId = memberId;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Integer getOrderDetailId() {
        return orderDetailId;
    }

    public void setOrderDetailId(Integer orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public Integer getGoodsCount() {
        return goodsCount;
    }

    public void setGoodsCount(Integer goodsCount) {
        this.goodsCount = goodsCount;
    }

    public Float getGoodsPrice() {
        return goodsPrice;
    }

    public void setGoodsPrice(Float goodsPrice) {
        this.goodsPrice = goodsPrice;
    }

	public String getRecommend() {
		return recommend;
	}

	public void setRecommend(String recommend) {
		this.recommend = recommend;
	}
    
    
}