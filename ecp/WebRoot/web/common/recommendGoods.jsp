<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
%>

 <script type="text/javascript" src="<%=basePath%>web/js/recommendGoods.js"></script>
<input type="hidden" id="basePath" value="<%=basePath%>">
<input type="hidden" id="filePath" value="<%=filePath%>">

    <div class="list-left">
      <div class="left-bar">
        <h3>推荐商品</h3>
      <div id="recommend" style="padding-left: 9px;"></div>
      </div>
      <div class="left-bar">
        <h3>热销榜</h3>
        <div id="hotSaled"></div>
      </div>
      <div class="cl"></div>
    </div>
    