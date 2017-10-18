package com.hontek.sys.model;
/**
 * <p>Title: 数据表序列号实体类</p>
 * <p>Description: 数据表序列号</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public class Sequence {

	private String tableName;
	private int currentValue;
	private int minValue;
	private int maxValue;
	private int cycle;
	private int sequenceLen;
	private int head;
	private String headMark;
	private String headValue;
	
	public Sequence() {
		super();
	}
	
	public Sequence(String tableName, int currentValue, int minValue,
			int maxValue, int cycle, int sequenceLen, int head,
			String headMark, String headValue) {
		super();
		this.tableName = tableName;
		this.currentValue = currentValue;
		this.minValue = minValue;
		this.maxValue = maxValue;
		this.cycle = cycle;
		this.sequenceLen = sequenceLen;
		this.head = head;
		this.headMark = headMark;
		this.headValue = headValue;
	}
	
	public String getTableName() {
		return tableName;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	public int getCurrentValue() {
		return currentValue;
	}
	public void setCurrentValue(int currentValue) {
		this.currentValue = currentValue;
	}
	public int getMinValue() {
		return minValue;
	}
	public void setMinValue(int minValue) {
		this.minValue = minValue;
	}
	public int getMaxValue() {
		return maxValue;
	}
	public void setMaxValue(int maxValue) {
		this.maxValue = maxValue;
	}
	public int getCycle() {
		return cycle;
	}
	public void setCycle(int cycle) {
		this.cycle = cycle;
	}
	public int getSequenceLen() {
		return sequenceLen;
	}
	public void setSequenceLen(int sequenceLen) {
		this.sequenceLen = sequenceLen;
	}
	public int getHead() {
		return head;
	}
	public void setHead(int head) {
		this.head = head;
	}
	public String getHeadMark() {
		return headMark;
	}
	public void setHeadMark(String headMark) {
		this.headMark = headMark;
	}
	public String getHeadValue() {
		return headValue;
	}
	public void setHeadValue(String headValue) {
		this.headValue = headValue;
	}
	
	
}
