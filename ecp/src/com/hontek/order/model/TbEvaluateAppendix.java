package com.hontek.order.model;
/**
 * @ClassName: TbEvaluateAppendix
 * @Description: TODO(评价附件表)
 * @date 2015-6-29 上午11:07:18
 * @author qql
 * @version 1.0
 */
public class TbEvaluateAppendix {
    private Integer evalAppId;

    private Integer evalId;

    private String appName;

    private String appPath;

    private String uploadTime;

    private Integer memberId;
    
    public TbEvaluateAppendix() {
		super();
	}
    
	public TbEvaluateAppendix(Integer evalId, String appName, String appPath,
			Integer memberId) {
		super();
		this.evalId = evalId;
		this.appName = appName;
		this.appPath = appPath;
		this.memberId = memberId;
	}

	public TbEvaluateAppendix(Integer evalAppId, Integer evalId,
			String appName, String appPath, String uploadTime, Integer memberId) {
		super();
		this.evalAppId = evalAppId;
		this.evalId = evalId;
		this.appName = appName;
		this.appPath = appPath;
		this.uploadTime = uploadTime;
		this.memberId = memberId;
	}

	public Integer getEvalAppId() {
        return evalAppId;
    }

    public void setEvalAppId(Integer evalAppId) {
        this.evalAppId = evalAppId;
    }

    public Integer getEvalId() {
        return evalId;
    }

    public void setEvalId(Integer evalId) {
        this.evalId = evalId;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName == null ? null : appName.trim();
    }

    public String getAppPath() {
        return appPath;
    }

    public void setAppPath(String appPath) {
        this.appPath = appPath == null ? null : appPath.trim();
    }

    public String getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(String uploadTime) {
        this.uploadTime = uploadTime == null ? null : uploadTime.trim();
    }

	public Integer getMemberId() {
		return memberId;
	}

	public void setMemberId(Integer memberId) {
		this.memberId = memberId;
	}

   
}