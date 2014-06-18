function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}






function pop(pPage,Opt) { 
	popUpWin = window.open(pPage,'',Opt); 
} 




function CheckLogin(theForm){
	if (theForm.userid.value.length < 1){
		alert("ID를 입력하십시오.");
		theForm.userid.focus();
		theForm.userid.select();
		return false;
	}
	if (theForm.passwd.value.length < 1){
		alert("비밀번호를 입력하십시오.");
		theForm.passwd.focus();
		theForm.passwd.select();
		return false;
	}
	return true;
}


function IDPWD_reg_pop() {		
	 		document.location.href = '/khcu_idpwd/regidpwd/step1_1.html';
}	


function idpwd_lost_pop(){
	 		document.location.href = "/khcu_idpwd/lostidpwd/pass_lost.asp"
}


function IDPWD_reg() {		
	 var w=open('/khcu_idpwd/regidpwd/step1_1.html','','width=600,height=500,left=20,top=20') ; 
	 w.moveTo(0,0);
	 w.focus();
}	

function professor_reg(){
	var w = window.open('/certificate/teacher_reg/teacher_conf.html','class','width=530,height=320,left=300');
	w.moveTo(0,0);
  w.focus();
}
function idpwd_lost(){
	var w = window.open("/khcu_idpwd/lostidpwd/pass_lost.asp","findid","width=600,height=500");
	w.moveTo(0,0)
	w.focus();
}
function hongbo_open(idx){
	switch(idx){
		case 0 :break;
		case 1 :location.href="mms://vod.khcu.ac.kr/disk4/en0000000779/khcu/khcu/2003/khcu_hb.wmv";break;
		case 2 :location.href="mms://vod.khcu.ac.kr/disk4/en0000000779/khcu/khcu/2003/khcu_hb_english.wmv";break;
		case 3 :location.href="mms://vod.khcu.ac.kr/disk4/en0000000779/khcu/khcu/2003/khcu_hb_japan.wmv";break;
		case 4 :location.href="mms://vod.khcu.ac.kr/disk4/en0000000779/khcu/khcu/2003/khcu_hb_china.wmv";break;	
	}

}
function depart_open(idx){
	switch(idx){
		case 0 :;break;
		case 1 :location.href="/partinfo/writing_intro.asp";break;
		case 2 :location.href="/partinfo/business_intro.asp";break;
		case 6 :location.href="/partinfo/ngo_intro.asp";break;
		case 15 :location.href="/partinfo/design_intro.asp";break;
		case 9 :location.href="/partinfo/hotel_intro.asp";break;
		case 3 :location.href="/partinfo/global_intro.asp";break;
		case 4 :location.href="/partinfo/asset_intro.asp";break;
		case 7 :location.href="/partinfo/social_intro.asp";break;
		case 14 :location.href="/partinfo/tech_intro.asp";break;
		case 10 :location.href="/partinfo/tour_intro.asp";break;
		case 5 :location.href="/partinfo/tax_intro.asp";break;
		case 13 :location.href="/partinfo/british_intro.asp";break;
		case 11 :location.href="/partinfo/japan_intro.asp";break;
		case 12 :location.href="/partinfo/china_intro.asp";break;
		case 8 :location.href="/partinfo/public_intro.asp";break;
	}
}
function banner1_pop(){
	mm=window.open("/banner_pop/main_popup1.htm","pop1","width=600,height=500,scrollbars=yes,menubar=no,resizable=no");
	mm.moveTo(0,0);
}
function banner2_pop(){
	mm=window.open("/banner_pop/main_popup2.htm","pop2","width=330,height=100,scrollbars=no,menubar=no,resizable=no");
	mm.moveTo(0,0);
}

function on_focus(){
	 document.form1.passwd.value='';
	 document.form1.passwd.focus();
}

function PasswdCheck(){
	if (document.form1.userid.value == '')	{
	     alert('회원아이디를 반드시 입력하세요!!');
	     document.form1.userid.focus();
	    return false;
	}
	if (document.form1.passwd.value == '')	{
	  alert('패스워드를 반드시 입력하세요!!');
	  document.form1.passwd.focus();
	  return false;
	}			
	return true
}

function notice1(url)
{
   var v_url = "/popup/" + url;
   if (getCookie("notice4_0301") != "notice4_0301" )
   {
     var w = window.open(v_url, 'notice4_0301', 'width=296, height=338, status=no, scrollbars=no, resizable=no, menubar=no top=0, left=0');
   } 
}

function notice2(url)
{
   var v_url = "/popup/" + url;
   if (getCookie("notice4_0301_1") != "notice4_0301_1" )
   {
     var w = window.open(v_url, 'notice4_0301_1', 'width=335, height=375, status=no, scrollbars=no, resizable=no, menubar=no top=0, left=303');
   } 
}

function notice3(url)
{
   var v_url = "/popup/" + url;
   if (getCookie("notice4_0223") != "notice4_0223" )
   {
     var w = window.open(v_url, 'notice4_0223', 'width=293, height=343, status=no, scrollbars=no, resizable=no, menubar=no top=0, left=345');
   } 
}

function notice4(url)
{
   var v_url = "/popup/" + url;
   if (getCookie("notice4_041111") != "notice4_041111" )
   {
     var w = window.open(v_url, 'notice4_041111', 'width=344, height=439, status=no, scrollbars=no, resizable=no, menubar=no top=0, left=0');
   } 
}

function notice5(url)
{
   var v_url = "/popup/" + url;
   if (getCookie("notice4_040913") != "notice4_040913" )
   {
     var w = window.open(v_url, 'notice4_040913', 'width=354, height=438 status=no, scrollbars=no, resizable=no, menubar=no top=0, left=0');
   } 
}