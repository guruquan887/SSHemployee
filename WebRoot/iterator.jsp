<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'iterator.jsp' starting page</title>
    
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
<table>
<s:iterator value="mylist" var="var">
   <tr>
        <td><s:property value="#var.userId"/></td>
        <td><s:property value="#var.userName"/></td>
        <td><s:property value="#var.userPwd"/></td>
   </tr>
</s:iterator>
<tr><td>或者</td></tr>
<s:iterator value="mylist">
   <tr>
        <td><s:property value="userId"/></td>
        <td><s:property value="userName"/></td>
        <td><s:property value="userPwd"/></td>
   </tr>
</s:iterator>
</table>
<table>
<b>s:iterator各种遍历用法</b><br>
<b>1.map中的value为String字符串</b><br>  
  <s:iterator value="map" id="column">  
  <s:property value="#column"/><br>  
  key: <s:property value="key"/><br>  
  value:<s:property value="value"/><br>  
  ******************************************<br>  
  </s:iterator>  
  
  
  <b>2.map中的value为Student对象</b>  
  <table border="1" width="50%"  cellspacing="0" cellpadding="0">  
    <tr>  
      <td>key=value</td>  
      <td>userId</td>  
      <td>userName</td>  
      <td>userPwd</td> 
      <td>obj</td>   
    </tr>  
    <s:iterator value="studentMap" id="column">  
    <tr>  
    <td><s:property value="#column"/></td>  
    <td><s:property value="value.userId"/></td>  
    <td><s:property value="value.userName"/></td>  
    <td><s:property value="value.userPwd"/></td>  
    <td>有<s:property value="studentMap"/>个对象实例</td> 
    </tr>  
    </s:iterator>  
  </table>  
  <p>  
    
    
  <b>3.map中的value为String数组</b>  
  <table border="1" width="50%" cellspacing="0" cellpadding="0">  
    <tr>  
      <td>key=value</td>  
      <td>userId</td>  
      <td>userName</td>  
      <td>userPwd</td> 
      <td>obj</td>   
    </tr>  
    <s:iterator value="arrayMap" id="column">  
    <tr>  
    <td><s:property value="#column"/></td>  
    <td><s:property value="value[0]"/></td>  
    <td><s:property value="value[1]"/></td>  
    <td><s:property value="value[2]"/></td> 
    <td>有<s:property value="arrayMap.size()"/>个对象实例</td> 
    </tr>  
    </s:iterator>  
  </table>  
  <p>  
  <b>4.map中的value为list集合</b>  
  <table border="1" width="50%"  cellspacing="0" cellpadding="0">  
    <tr>  
      <td>class</td>  
      <td>userId</td>  
      <td>userName</td>  
      <td>userPwd</td>
      <td>obj</td>    
    </tr>  
    
  <s:iterator value="listMap" id="listid">  
  <s:iterator value="#listid.value" id="listidsub">  
      <tr>  
            <td><s:property value="key"/></td>  
            <td><s:property value="userId"/></td>  
          	<td><s:property value="userName"/></td>  
            <td><s:property value="userPwd"/></td> 
            <td>有<s:property value="listMap.size()"/>个对象实例</td>  
        </tr>  
    </s:iterator>  
</s:iterator> 
</table>  
    

</table>
  </body>
</html>
