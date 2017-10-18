package com.hontek.comm.base;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.core.JsonEncoding;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hontek.comm.model.JsonMsg;
import com.hontek.member.model.TbMember;
import com.hontek.sys.model.TsUser;

public class BaseController {

	private JsonGenerator jsonGenerator = null;
	private ObjectMapper objectMapper = null;
	
	/**
	 * 将对象转换为JSON字符串并输出到前端
	 * @param Object
	 * @return JSON字符串
	 */
	public void writeJson2View(Object object,HttpServletResponse response){
		objectMapper = new ObjectMapper();
        try {
            jsonGenerator = objectMapper.getFactory().createGenerator(response.getOutputStream(), JsonEncoding.UTF8);//           
            //System.out.println(object.toString());
            jsonGenerator.writeObject(object);
        } catch (IOException e) {
            e.printStackTrace();
        }finally{
        	 try {
                 if (jsonGenerator != null) {
                     jsonGenerator.flush();
                 }
                 if (!jsonGenerator.isClosed()) {
                     jsonGenerator.close();
                     jsonGenerator = null;
                 }
             } catch (IOException e) {
                 e.printStackTrace();
             }
        }
	}
	
    /**
     * 将JSON字符串输出到前端
     * @param jsonString
     * @param response
     */
    protected void writeJson2View (String jsonString ,HttpServletResponse response) {
        PrintWriter out = null;
        try {
        	response.setCharacterEncoding ( "UTF-8" );
            response.setContentType("text/html;charset=UTF-8");             
            out = response.getWriter ();
            out.print ( jsonString );
        }
        catch (IOException e) {
            e.printStackTrace ();
        }finally {
        	out.flush();
            out.close ();
        }
    }
    
    /**
     * 将JSON字符串输出到前端
     * @param jsonMsg
     * @param response
     */
    protected void writeJson2View (JsonMsg jsonMsg ,HttpServletResponse response) {
    	writeJson2View( converObject2Json(jsonMsg) , response);       
    }
    
	/**
	 * 将对象转换为JSON字符串
	 * @param Object
	 * @return JSON字符串
	 */
	public String converObject2Json(Object Object){
		String jsonString ="";
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			jsonString = objectMapper.writeValueAsString(Object);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		//System.out.println(jsonString);
		return jsonString;
	}
	
	/**
	 * 获取前台当前登录用户的信息
	 * @param session
	 * @return
	 */
	public TbMember getLoginWebUser(HttpSession session){
		Object u = session.getAttribute("member");
		if(u==null){
			return null;
		}
		return (TbMember)u;
	}

	
	/**
	 * 获取当前登录用户的信息
	 * @param session
	 * @return
	 */
	public TsUser getLoginUser(HttpSession session){
		Object u = session.getAttribute("loginUser");
		if(u==null){
			return null;
		}
		return (TsUser)u;
	}
	
	/**
	 * 获取当前登录用户的USERID
	 * @param session
	 * @return
	 */
	public String getLoginUserId(HttpSession session){
		Object u = getLoginUser(session);
		if(u==null){
			return null;
		}
		return ((TsUser)u).getUserId();
	}
	
	/**
	 * 判断当前登录用户是否为管理员
	 * @param session
	 * @return
	 */
	public boolean isAdmin(HttpSession session){
		Object u = getLoginUser(session);
		if(u==null){
			return false;
		}
		return "y".equalsIgnoreCase(((TsUser)u).getAdmin());
	}
}
