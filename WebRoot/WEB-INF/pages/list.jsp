<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="s" uri="/struts-tags"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>职员列表</title>
    
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
	<h1>员工信息表</h1>
	<form action="emp/listemployee.action" method="post">
	员工姓名
		<input type="text" name="employee.name" value="${empoyee.name}">
		<input type="submit" value="查询">
		<a href="${pageContext.request.contextPath}/emp/addemployee.action">新增</a>
			<table align="left" border="2" width="100%" bgcolor="">
				<tr bgcolor="#8080c0">
					<td align="center">工号</td>
					<td align="center">姓名</td>
					<td align="center">年龄</td> 
					<td align="center">性别</td>            
					<td align="center">电话</td>            
					<td align="center">地址</td>            
					<td align="center">操作</td>      
				</tr>
			<c:forEach var="item" items="${requestScope.list}">
				<tr>
					<td align="center">${item.id}</td>
					<td align="center">${item.name}</td>           
					<td align="center">${item.age}</td>            
					
					<td align="center">${item.sex==0?"1":"女"}</td>         
					<td align="center">${item.tel}</td>           
					<td align="center">${item.address}</td>           
					<td align="center">
						<a href="${pageContext.request.contextPath}/emp/deleteemployee.action?employee.id=${item.id }">删除</a>
						<a href="${pageContext.request.contextPath}/emp/updateBeforeemployee.action?employee.id=${item.id }">修改</a>            
					</td>        
				</tr>         
			</c:forEach><!--  -->      
		</table>      
	</form>
  </body>
</html>
