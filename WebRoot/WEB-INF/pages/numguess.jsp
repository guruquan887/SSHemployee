<%@ page import = "num.NumberGuessBean" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<jsp:useBean id="numguess" class="num.NumberGuessBean" scope="session"/>
<jsp:setProperty name="numguess" property="*"/>

<html>
<head><title>Number Guess</title></head>
<body bgcolor="white" onload="submit1();">
<font size=4>

<% if (numguess.isSuccess()) { %>
中奖，奖项是：<%= numguess.getAnswer() %>。
<% numguess.reset(); %>
<s:a action="num_main" namespace="/num">再来一次</s:a>吗？
<% } else if (numguess.getNumGuesses() == 0) { %>
欢迎参与摸奖游戏！开始第<%= numguess.getNumGuesses()+1 %>摸奖！<p>
从1到100猜猜我写的数字<p>
<form name=formname method=get>
	你要猜什么奖呢？<input type=text name=num value="<%= numguess.getAnswer() %>">
	<input type=submit value="Submit">
</form>
<% } else { %>
猜的好!但是没猜中。试着猜 <b><%= numguess.getHint() %></b>。
第<%= numguess.getNumGuesses()+1 %>次摸奖！<p>
从1到100猜猜我写的数字<p>
<form name=formname method=get>
  你要猜什么奖呢？<input type=text name=num value="<%= numguess.getAnswer() %>">
  <input type=submit value="Submit">
</form>

<% } %>
</font>
</body>
<script>
var submitTime=10000;
function submit1(){
setTimeout('document.formname.submit();',submitTime);//submitTime10秒后自动提交
}
</script>

</html>
