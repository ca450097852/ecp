package com.hontek.goods.model;

import java.util.List;

/**
 * 推荐商品
 * @author Administrator
 *
 */
public class RecommendGoods {
    private String rgId;

    private Integer goodsId;

    private String memberName;

    private Integer menberId;

    private Float rgPrice;

    private String createTime;

    private Float saledPrice;
    
    private String  introduce;
    
    private String  state;
    
    private TbGoods goods;
    private List<String> goodsImgs;

    public String getRgId() {
        return rgId;
    }

    public void setRgId(String rgId) {
        this.rgId = rgId == null ? null : rgId.trim();
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

	public String getMemberName() {
		return memberName;
	}

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}

	public Integer getMenberId() {
        return menberId;
    }

    public void setMenberId(Integer menberId) {
        this.menberId = menberId;
    }

    public Float getRgPrice() {
        return rgPrice;
    }

    public void setRgPrice(Float rgPrice) {
        this.rgPrice = rgPrice;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime == null ? null : createTime.trim();
    }

    public Float getSaledPrice() {
        return saledPrice;
    }

    public void setSaledPrice(Float saledPrice) {
        this.saledPrice = saledPrice;
    }

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public TbGoods getGoods() {
		return goods;
	}

	public void setGoods(TbGoods goods) {
		this.goods = goods;
	}

	public List<String> getGoodsImgs() {
		return goodsImgs;
	}

	public void setGoodsImgs(List<String> goodsImgs) {
		this.goodsImgs = goodsImgs;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	
    
}