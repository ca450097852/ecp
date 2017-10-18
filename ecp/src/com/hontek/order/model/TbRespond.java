package com.hontek.order.model;
/**
 * @ClassName: TbRespond
 * @Description: TODO(评价回复表)
 * @date 2015-6-29 上午11:06:47
 * @author qql
 * @version 1.0
 */
public class TbRespond {
    private Integer resId;

    private Integer evalId;

    private String evalContent;

    private String evalTime;

    private Integer memberId;

    public Integer getResId() {
        return resId;
    }

    public void setResId(Integer resId) {
        this.resId = resId;
    }

    public Integer getEvalId() {
        return evalId;
    }

    public void setEvalId(Integer evalId) {
        this.evalId = evalId;
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
}