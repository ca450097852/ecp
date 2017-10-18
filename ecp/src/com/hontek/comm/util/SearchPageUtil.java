package com.hontek.comm.util;

import java.util.HashMap;
import java.util.Map;

public class SearchPageUtil {
	
	private Integer page = 1;//默认第一页
	private Integer rows = 10;//默认每页10行
	private String order;
	private String sort;
	
	private Integer offset = 0;//默认第一页
	private Integer limit = 0;//默认每页0行
	
	private Map<String, Object> params = new HashMap<String, Object>();
	public Integer getPage() {
		return page;
	}
	public void setPage(Integer page) {
		this.page = page;
	}
	public Integer getRows() {
		if(limit>0){
			rows=limit;
		}
		return rows;
	}
	public void setRows(Integer rows) {
		this.rows = rows;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public Map<String, Object> getParams() {
		return params;
	}
	public void setParams(Map<String, Object> params) {
		this.params = params;
	}
	public Integer getOffset() {
		return offset;
	}
	public void setOffset(Integer offset) {
		this.offset = offset;
	}
	public Integer getLimit() {
		return limit;
	}
	public void setLimit(Integer limit) {
		this.limit = limit;
	}


}
