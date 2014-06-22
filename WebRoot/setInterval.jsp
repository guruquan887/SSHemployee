<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'setInterval.jsp' starting page</title>
    
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
<form>
<input type="text" id="clock" size="60" />
<script language=javascript>
var int=self.setInterval("clock()",50);//50毫秒(1000毫秒为一秒)调用一次clock();
function clock()
  {
  var t=new Date();
  document.getElementById("clock").value=t;
  }
</script>
</form>
<button onclick="int=window.clearInterval(int)">
Stop interval</button>


  </body>
</html>
