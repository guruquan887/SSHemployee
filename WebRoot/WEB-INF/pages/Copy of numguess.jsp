<%@ page import = "num.NumberGuessBean" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<jsp:useBean id="numguess" class="num.NumberGuessBean" scope="session"/>
<jsp:setProperty name="numguess" property="*"/>

<html>
<head><title>Number Guess</title></head>
<body bgcolor="white" onload="submit1();">
<font size=4>

<% if (numguess.isSuccess()) { %>

  Congratulations!  You got it.The answer is <%= numguess.getAnswer() %>.
  And after just <%= numguess.getNumGuesses() %> tries.<p>

  <% numguess.reset(); %>

  Care to <s:a action="num_main" namespace="/num">try again</s:a>?

<% } else if (numguess.getNumGuesses() == 0) { %>

  Welcome to the Number Guess game.From <%= numguess.getNumGuesses() %> begin.<p>

  I'm thinking of a number between 1 and 100.<p>

  <form name=formname method=get>
  What's your guess? <input type=text name=guess value="<%= numguess.getAnswer() %>">
  <input type=submit value="Submit">
  </form>

<% } else { %>

  Good guess, but nope.  Try <b><%= numguess.getHint() %></b>.

  You have made <%= numguess.getNumGuesses() %> guesses.<p>

  I'm thinking of a number between 1 and 100.<p>

  <form name=formname method=get>
  What's your guess? <input type=text name=guess value="<%= numguess.getAnswer() %>">
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
