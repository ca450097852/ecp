package com.hontek.comm.model;

public class Combo {

	private int value;
	private String text;
	
	public Combo() {
		super();
	}
	public Combo(int value, String text) {
		super();
		this.value = value;
		this.text = text;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	
}
