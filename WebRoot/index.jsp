<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!-- 职员列表 -->
<s:url action="listemployee" namespace="/emp" var="listemployee"></s:url>
<!-- 职员添加 -->
<s:url action="addemployee" namespace="/emp" var="addemployee"></s:url>
<!-- 用户列表 -->
<s:url action="userlist" namespace="/emp" var="userlist"></s:url>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>

    <form name="listemployee" action="emp/listemployee" method="post">
    <input type="submit" value="列表"/>
    </form>
			<div>
                <ul>
                <li><a href="form.jsp" target="_blank">form表单</a></li> 
                <li><a href="setInterval.jsp" target="_blank">setInterval周期函数</a></li>
                <li><a href="${listemployee}" target="_blank">职员列表</a></li>
                <li><a href="${addemployee}" target="_blank">职员添加</a></li> 
                <li><a href="${userlist}" target="_blank">iterator的list列表</a></li>
                <li><a href="4.html" target="_blank">点击增加</a></li>
                <li><s:a action="num_main" namespace="/num" target="_blank">numguess游戏</s:a></li>          
              </ul>
            </div> 
  </body>
</html>
