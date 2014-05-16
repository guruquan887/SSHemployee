<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'form.jsp' starting page</title>
    
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
<h1>form表单</h1>
<s:form action="test" namespace="/tag">
<s:textfield name="uname"></s:textfield>
<s:textarea  name="rmake" cols="40" rows="20" tooltipDelay="300" tooltip="hi" label="备注" javascriptTooltip="true"></s:textarea>
<s:password label="密码" name="upass"></s:password>
<s:file name="file" label="上传文件"></s:file>
<s:hidden name="id" value="1"></s:hidden>
<!--
<select name="edu">
<option value="listKey">listValue</option>
-->
<s:select list="#{'1':'博士','2':'硕士','3':'本科'}" name="edu" label="学历" listKey="key" listValue="value" value="2"></s:select>
<s:select list="{'java','.net','c'}" value="c"></s:select><!-- value是选中的 -->
<!-- 必须有name -->
<s:checkbox label="爱好 " fieldValue="true" name="checkboxFiled1"></s:checkbox>
<!-- 多个checkbox -->
<s:checkboxlist list="{'java','css','html','struts2'}" label="喜欢的编程语言" name="box" value="{'css','struts2'}"></s:checkboxlist>
<!-- map集合前要加# -->
<s:checkboxlist list="#{1:'java',2:'css',3:'html',4:'struts2',5:'spring'}" label="喜欢的编程语言" name="boxs" value="{1,2}"></s:checkboxlist>
<!-- listKey
listValue
<input type="text" name="boxs" value="listKey">显示值listValue
-->
<!-- radio -->       
<%
//从服务器传过来值
pageContext.setAttribute("sex","女",PageContext.REQUEST_SCOPE);
pageContext.setAttribute("sex1","1",PageContext.REQUEST_SCOPE);
%>
<s:radio list="{'男','女'}" name="sex" value="#request.sex"></s:radio>   
<s:radio list= "#{1:'男',2:'女'}" name="sex1" listKey="key" listValue="value" value="#request.sex1"></s:radio>        
<!-- 防止表单提交的方式 -->
<s:token></s:token>
<s:submit value="提交"></s:submit>
</s:form>
  </body>
</html>
