function funcWinowPop(linkurl,popname,popprop)
{
	window.open(linkurl,popname,popprop);
}

function funcGoBodyBottom()
{
	document.body.scrollTop = (document.body.scrollHeight - 750) ;
}


function open_window_ehealth()
{
	window.open('http://www.khcu.ac.kr/e-health/e-health_popup/e-health.html', 'ehealthwindow','width=723,height=733,resizable=no,scrollbars=no,top=0,left=0');
}

function funcMoveTopBottomBanner(divName){
        var yMenuFrom, yMenuTo, yOffset, timeoutNextCheck;
	var divMenu = document.all.item(divName);

        yMenuFrom   = parseInt (divMenu.style.top, 10);
        yMenuTo     = document.body.scrollTop + 100;

        timeoutNextCheck = 500;

        if ( yMenuFrom != yMenuTo ) {
                yOffset = Math.ceil( Math.abs( yMenuTo - yMenuFrom ) / 20 );
                if ( yMenuTo < yMenuFrom )
                        yOffset = -yOffset;
                        divMenu.style.top = parseInt (divMenu.style.top, 10) + yOffset;

                timeoutNextCheck = 10;
        }

        setTimeout ("funcMoveTopBottomBanner('" + divName + "')", timeoutNextCheck);
}

function funcMoveTop()
{
	document.body.scrollTop = 0;
}


function funcPopLoginPage()
{
	window.open("/login/login.asp","winlogin","width=600,height=500");
}

function funcMenuLinkByRegi()
{
//	alert("원서접수는 2004년 12월 20일(월) 09:00부터 가능합니다.");
	funcMenuLinkMyApp(1);

}

function funcMenuLinkByePay()
{
	window.open('/mypage/epay/go_epay.asp','epay','resizable=yes, scrollbar=no, width=800, height=600, top=0, left=0');
}

function funcMainSiteLink(param)
{
	switch(param.toLowerCase())
	{
		case "korean" :
			document.location.href= '/';
			break;
		case "english" :
			document.location.href='/english/about_founding.asp';
			break;
		case "japanese" :
			document.location.href='/japanese/about_founding.asp';
			//document.location.href='/foreign/japanese/j_philosophy.asp';
			break;
		case "chinese" :
			document.location.href='/chinese/about_founding.asp';
			//document.location.href='/foreign/chinese/c_philosophy.asp';
			break;
	}

}


function funcSetMyPageNavi(currnavi)
{
	var objdivmypagenavi = document.all.item("divmypagenavi");	
	objdivmypagenavi.innerHTML = currnavi;
}







function funcMenuLinkMyApp(menukey)
{
	var URLlink = "";


/*
&m2_3_1=funcMenuLinkMyApp(1);http://khcu.unets.net&
&m2_3_2=funcMenuLinkMyApp(2);javascript:alert("2004년 12월 20일(월) 09:00부터 가능합니다.");&
&m2_3_3=funcMenuLinkMyApp(3);javascript:alert("2004년 12월 20일(월) 09:00부터 가능합니다.");&
&m2_3_4=funcMenuLinkMyApp(4);javascript:alert("2004년 12월 20일(월) 09:00부터 가능합니다.");&
&m2_3_5=funcMenuLinkMyApp(5);javascript:alert("해당 기간이 아닙니다.");&
&m2_3_6=funcMenuLinkMyApp(6);javascript:alert("해당 기간이 아닙니다.");& //addmission/search_pass.asp
&m2_3_7=funcMenuLinkMyApp(7);javascript:alert("해당 기간이 아닙니다.");& //addmission/search_pass_print.asp
&m2_3_8=funcMenuLinkMyApp(8);javascript:alert("해당 기간이 아닙니다.");& //addmission/search_certificate_print.asp
&m2_3_9=funcMenuLinkMyApp(9);javascript:alert("해당 기간이 아닙니다.");& //addmission/search_sugang.asp
*/
	
	switch(menukey)
	{	
			// 원서작성 및 수정
			case 1 :	
				alert("해당 기간이 아닙니다   ");
//				URLlink = "http://khcu.unets.net";
				break;

			// 학업계획서작성 및 수정
			case 2 :
				alert("원서접수가 마감되었습니다.   ");
//				URLlink = "http://khcu.unets.net/?flag=my_apply";
				break;

			// 전형료 납부 및 확인
			case 3 :
//				alert("해당 기간이 아닙니다.");
				URLlink = "http://khcu.unets.net/?flag=my_apply";
				break;

			// 원서접수 확인
			case 4 :
//				alert("해당 기간이 아닙니다.");
				URLlink = "http://khcu.unets.net/?flag=my_apply";
				break;

			// 제출서류 확인
			case 5 :
//				alert("해당 기간이 아닙니다.");
				URLlink = "http://khcu.unets.net/?flag=my_apply";
//				document.location.href = "/addmission/search_doc_check.asp";
				break;

			// 합격조회 (메인과 입학안내의 내원서관리 를 누를 때도 여기로~)
			case 6 :
				alert("해당 기간이 아닙니다.  ");
//				URLlink = "http://khcu.unets.net/?flag=my_apply";
//				document.location.href = "/addmission/search_pass.asp";
				break;

			// 합격증출력
			case 7 :
//				alert("해당 기간이 아닙니다. \n\n(신/편입생 합격조회 및 등록기간: 2005.8.5 ~ 2005.8.16)     ");
//				URLlink = "http://khcu.unets.net";
				document.location.href = "/addmission/search_pass_print.asp";
				break;


			// 등록금납부 및 조회
			case 8 :
//				alert("해당 기간이 아닙니다. \n\n(신/편입생 합격조회 및 등록기간: 2005.8.5 ~ 2005.8.16)     ");
//				URLlink = "http://khcu.unets.net";
				document.location.href = "/addmission/search_certificate_print.asp";
				break;


			// 수강신청
			case 9 :
//				alert("해당 기간이 아닙니다. \n\n(신/편입생 수강신청기간: 2005.8.17(월) 17시 ~ 8.29(월) 17시 )     ");
//				window.open("http://61.74.68.217:8088","sugang1", "width=770,height=550,scrollbars,resizable=yes,toolbar=no,directories=no,menubar=no,left=0,top=0");
				document.location.href = "/addmission/search_sugang.asp";
//				funcMenuLinkMyPage(7);
				break;

			// 수험번호 조회
			case 10 :
//				alert("해당 기간이 아닙니다.     ");
				document.location.href = "/addmission/search_accept_no.asp";
				break;

			// 제출서류 확인
			case 11 :
//				alert("해당 기간이 아닙니다.     ");
				URLlink = "http://khcu.unets.net/?flag=my_apply"
				break;

			// 시간제 원서작성 링크 
			case 12 :
				alert("해당 기간이 아닙니다.    ");
//				URLlink = "http://khcu.unets.net/?flag=my_apply"
				break;
	}
	
	
	if(URLlink != "")
	{
		window.open(URLlink,"");
	}
}




function funcMenuLinkMyPage(menukey)
{
	var URLlink = "";

	switch(menukey)
	{
			case 1 :
				funcSetMyPageNavi(" > 개인정보관리");
				URLlink = "/mypage/myinfo/myinfo.asp";
				break;
			case 2 :
				funcSetMyPageNavi(" > 개인일정관리");
				URLlink = "/mypage/myschedule/SchMain.asp?cate=P";
				break;
			case 3 :
				funcSetMyPageNavi(" > 학교공지");
				URLlink = "/mypage/schoolnews_list.asp?bbs_code=201&tb_name=020&titleimg=/mypage/img/bbs_title_3.gif";
				//학과공지 없음		alert('소속학과가 없습니다.\n학과로 이동하시려면 좌측하단의 \'타학과 홈페이지 가기\' 를 이용해주세요.');
				break;
			case 4 :
				funcSetMyPageNavi(" > 학교일정관리");
				URLlink = "/mypage/myschedule/SchMain.asp?cate=U";
				break;
			case 5 :
				funcSetMyPageNavi(" > 학교설문보기");
				URLlink = "/mypage/survey/SvyList.asp";
				//alert('학번조회 기간이 아닙니다.   \n\n2004학년도 2학기 신/편입생 학번조회는 9월 1일 정오 12:00부터 조회 가능합니다.');
				break;
			case 6 :
				window.open('http://61.74.68.199:80/searchHB.asp','','status=no,resizable=no,scrollbars=no,width=600,height=430,left=300,top=150');
				break;
			case 7 :
				alert('2005학년도 동계계절학기 수강신청이 마감되었습니다. \n\n정정및 추가신청은 추후 학교 공지를 확인하세요.           ');
//				window.open("http://61.74.68.217:8021/index.html","sugang1", "width=700,height=580,scrollbars,resizable=yes,toolbar=no,directories=no,menubar=no,left=0,top=0");
				break;
			case 8 :
				//alert('2004학년도 2학기 등록금조회는 7월 23일 09:30 부터 가능합니다. ') ;
				//window.open("/popup/notice3_0131_1.html","0131_1", "width=505,height=600,scrollbars=yes,top=0,left=0");
				funcMenuLinkByePay();
				break;
			case 9 :
				funcSetMyPageNavi(" > 강의노트신청");
				URLlink = "/mypage/note_request/request_list.asp";
				break;
			case 10 :
				funcSetMyPageNavi(" > 경희광장");
				URLlink = "/mypage/debate_list.asp";
				break;
			case 11 :
				funcSetMyPageNavi(" > 취업정보알리미");
				URLlink = "/mypage/job_list.asp?bbs_code=202";
				break;
			case 12 :
				window.open('http://61.74.68.208/chatserver/community.asp?userid=guest&amp;passwd=guest2005', '대화방', 'toolbar=no,location=no,scrollbars=no,width=630,height=370');
				break;
			case 13 :
				funcSetMyPageNavi(" > 동아리방");
				URLlink = "/mypage/club/index.asp";
				break;
			case 14 :
				window.open("http://www.khcu.org/");
				break;
			case 15 :
				funcGoMyMajor();
				break;
			case 16 :
                 window.open("http://myhome.naver.com/khcual/");
				break;
			case 18 :
                 window.open("http://cafe.daum.net/khcugg");
				break;
			case 19 :
                 window.open("http://cafe.daum.net/khcuyn");
				break;
			case 20 :
                 window.open("http://cafe.daum.net/khcuhn");
				break;
			case 21 :
                 window.open("http://cafe.daum.net/khcu2stgraduation");
				break;
			case 22 :
                 window.open("http://cafe.daum.net/khcucc");
				break;
	}
	
	if(URLlink != "")
	{
		window.open(URLlink,"frameMyPage");
	}
	
}


function funcSendMailToPro(objthis)
{
window.open('/common/formMail/mailForm.asp?receiver=' + objthis.innerHTML,'FormMail','width=469,height=400,menubar=no,scrollbars=no,resizable=no');
}

function funcSendMailPopWin(email)
{
window.open('/common/formMail/mailForm.asp?receiver=' + email,'FormMail','width=469,height=400,menubar=no,scrollbars=no,resizable=no');
}

function funcprofessorDetailView(obj)
{

	var objarr;
	var selectindex = 0;
	var poppath = "/partinfo/professor/";

	if(isNaN(obj.id))
	{
	objarr = document.all.item(obj.id);
	
	
	
			for(i=0;i<objarr.length;i++)
			{
				if(objarr[i]==obj) 
				{
					selectindex = i+1;
					break;
				}
			}
	}else
	{
		selectindex = obj.id;
	}
	
	if(selectindex>0)
	{
	
		if(selectindex<10) selectindex = "0" + selectindex; 

		var patchsubjectpage = funcGetSubjectPage();
	
		switch(patchsubjectpage)
		{
				default :
					poppath += patchsubjectpage +selectindex + ".html";
					break;
		}

		window.open(poppath,'','width=400,height=450');
	}
}

function funcsubjectDetailView(obj,objindex)
{
	var objarr = document.all.item(obj.id);
	var selectindex = 0;
	var poppath = "/partinfo/subject_info/";
	
	if(objindex!=undefined)
	{
		selectindex = objindex;
	}else
	{
			for(i=0;i<objarr.length;i++)
			{
				if(objarr[i]==obj) 
				{
					selectindex = i+1;
					break;
				}
			}
	}
		
	if(selectindex>0)
	{
	
		switch(obj.id.toLowerCase())
		{
			case "culture" :
			poppath += "cultural_" +selectindex + ".html";
			break;
			
			default :
			
				var patchsubjectpage = funcGetSubjectPage();
			
				switch(patchsubjectpage)
				{
						default :
							poppath += patchsubjectpage +selectindex + ".html";
							break;
				}
		}

		window.open(poppath,'','width=400,height=350');
	}
}

function funcGetSubjectPage()
{
	var currURL  = document.location.pathname;
	var subjectPage=  currURL.substring(currURL.lastIndexOf("/")+1);

	subjectPage= subjectPage.substring(0,subjectPage.lastIndexOf("_")+1);
	
	return subjectPage;
}


function newwin() { 
	window.open("/isaac/index.asp","isaac_main","toolbar=no, location=no, status = yes, menubar=no, scrollbars=yes, resizable=no, width=720, height=616"); 
} 

function pop_isaacMain() { 
	window.open("/isaac/index.asp","isaac_main","toolbar=no, location=no, status = yes, menubar=no, scrollbars=yes, resizable=no, width=720, height=616"); 
} 

function pop_khcuReview() { 
	window.open("/popup/notice5_0715.html","khcu_review_main","toolbar=no, location=no, status = yes, menubar=no, scrollbars=no, resizable=no,  width=350, height=458"); 
} 