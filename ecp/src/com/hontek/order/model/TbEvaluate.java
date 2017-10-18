package com.hontek.order.model;
/**
 * @ClassName: TbEvaluate
 * @Description: TODO(评价表)
 * @date 2015-6-29 上午11:05:57
 * @author qql
 * @version 1.0
 */
public class TbEvaluate {
    private Integer evalId;

    private Integer orderId;
    
    private Integer orderDetailId ;

    private Integer goodsId;

    private Integer evalWay;

    private Integer evalSide;

    private Integer hadimg;

    private Integer evalType;

    private String evalContent;

    private String evalTime;

    private Integer memberId;

    private Integer approveNum;
    
    private String memberIdBuyName;

    public String getMemberIdBuyName() {
		return memberIdBuyName;
	}

	public void setMemberIdBuyName(String memberIdBuyName) {
		this.memberIdBuyName = memberIdBuyName;
	}

	public Integer getEvalId() {
        return evalId;
    }

    public void setEvalId(Integer evalId) {
        this.evalId = evalId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }
    
    public Integer getOrderDetailId() {
		return orderDetailId;
	}

	public void setOrderDetailId(Integer orderDetailId) {
		this.orderDetailId = orderDetailId;
	}

	public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public Integer getEvalWay() {
        return evalWay;
    }

    public void setEvalWay(Integer evalWay) {
        this.evalWay = evalWay;
    }

    public Integer getEvalSide() {
        return evalSide;
    }

    public void setEvalSide(Integer evalSide) {
        this.evalSide = evalSide;
    }

    public Integer getHadimg() {
        return hadimg;
    }

    public void setHadimg(Integer hadimg) {
        this.hadimg = hadimg;
    }

    public Integer getEvalType() {
        return evalType;
    }

    public void setEvalType(Integer evalType) {
        this.evalType = evalType;
    }

    public String getEvalContent() {
        return evalContent;
    }

    public void setEvalContent(String evalContent) {
        this.evalContent = evalContent == null ? null : evalContent.trim();
    }

    public String getEvalTime() {
        return evalTime;
    }

    public void setEvalTime(String evalTime) {
        this.evalTime = evalTime == null ? null : evalTime.trim();
    }

    public Integer getMemberId() {
        return memberId;
    }

    public void setMemberId(Integer memberId) {
        this.memberId = memberId;
    }

    public Integer getApproveNum() {
        return approveNum;
    }

    public void setApproveNum(Integer approveNum) {
        this.approveNum = approveNum;
    }
}