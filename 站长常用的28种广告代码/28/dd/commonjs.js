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
//	alert("���������� 2004�� 12�� 20��(��) 09:00���� �����մϴ�.");
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
&m2_3_2=funcMenuLinkMyApp(2);javascript:alert("2004�� 12�� 20��(��) 09:00���� �����մϴ�.");&
&m2_3_3=funcMenuLinkMyApp(3);javascript:alert("2004�� 12�� 20��(��) 09:00���� �����մϴ�.");&
&m2_3_4=funcMenuLinkMyApp(4);javascript:alert("2004�� 12�� 20��(��) 09:00���� �����մϴ�.");&
&m2_3_5=funcMenuLinkMyApp(5);javascript:alert("�ش� �Ⱓ�� �ƴմϴ�.");&
&m2_3_6=funcMenuLinkMyApp(6);javascript:alert("�ش� �Ⱓ�� �ƴմϴ�.");& //addmission/search_pass.asp
&m2_3_7=funcMenuLinkMyApp(7);javascript:alert("�ش� �Ⱓ�� �ƴմϴ�.");& //addmission/search_pass_print.asp
&m2_3_8=funcMenuLinkMyApp(8);javascript:alert("�ش� �Ⱓ�� �ƴմϴ�.");& //addmission/search_certificate_print.asp
&m2_3_9=funcMenuLinkMyApp(9);javascript:alert("�ش� �Ⱓ�� �ƴմϴ�.");& //addmission/search_sugang.asp
*/
	
	switch(menukey)
	{	
			// �����ۼ� �� ����
			case 1 :	
				alert("�ش� �Ⱓ�� �ƴմϴ�   ");
//				URLlink = "http://khcu.unets.net";
				break;

			// �о���ȹ���ۼ� �� ����
			case 2 :
				alert("���������� �����Ǿ����ϴ�.   ");
//				URLlink = "http://khcu.unets.net/?flag=my_apply";
				break;

			// ������ ���� �� Ȯ��
			case 3 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�.");
				URLlink = "http://khcu.unets.net/?flag=my_apply";
				break;

			// �������� Ȯ��
			case 4 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�.");
				URLlink = "http://khcu.unets.net/?flag=my_apply";
				break;

			// ���⼭�� Ȯ��
			case 5 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�.");
				URLlink = "http://khcu.unets.net/?flag=my_apply";
//				document.location.href = "/addmission/search_doc_check.asp";
				break;

			// �հ���ȸ (���ΰ� ���оȳ��� ���������� �� ���� ���� �����~)
			case 6 :
				alert("�ش� �Ⱓ�� �ƴմϴ�.  ");
//				URLlink = "http://khcu.unets.net/?flag=my_apply";
//				document.location.href = "/addmission/search_pass.asp";
				break;

			// �հ������
			case 7 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�. \n\n(��/���Ի� �հ���ȸ �� ��ϱⰣ: 2005.8.5 ~ 2005.8.16)     ");
//				URLlink = "http://khcu.unets.net";
				document.location.href = "/addmission/search_pass_print.asp";
				break;


			// ��ϱݳ��� �� ��ȸ
			case 8 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�. \n\n(��/���Ի� �հ���ȸ �� ��ϱⰣ: 2005.8.5 ~ 2005.8.16)     ");
//				URLlink = "http://khcu.unets.net";
				document.location.href = "/addmission/search_certificate_print.asp";
				break;


			// ������û
			case 9 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�. \n\n(��/���Ի� ������û�Ⱓ: 2005.8.17(��) 17�� ~ 8.29(��) 17�� )     ");
//				window.open("http://61.74.68.217:8088","sugang1", "width=770,height=550,scrollbars,resizable=yes,toolbar=no,directories=no,menubar=no,left=0,top=0");
				document.location.href = "/addmission/search_sugang.asp";
//				funcMenuLinkMyPage(7);
				break;

			// �����ȣ ��ȸ
			case 10 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�.     ");
				document.location.href = "/addmission/search_accept_no.asp";
				break;

			// ���⼭�� Ȯ��
			case 11 :
//				alert("�ش� �Ⱓ�� �ƴմϴ�.     ");
				URLlink = "http://khcu.unets.net/?flag=my_apply"
				break;

			// �ð��� �����ۼ� ��ũ 
			case 12 :
				alert("�ش� �Ⱓ�� �ƴմϴ�.    ");
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
				funcSetMyPageNavi(" > ������������");
				URLlink = "/mypage/myinfo/myinfo.asp";
				break;
			case 2 :
				funcSetMyPageNavi(" > ������������");
				URLlink = "/mypage/myschedule/SchMain.asp?cate=P";
				break;
			case 3 :
				funcSetMyPageNavi(" > �б�����");
				URLlink = "/mypage/schoolnews_list.asp?bbs_code=201&tb_name=020&titleimg=/mypage/img/bbs_title_3.gif";
				//�а����� ����		alert('�Ҽ��а��� �����ϴ�.\n�а��� �̵��Ͻ÷��� �����ϴ��� \'Ÿ�а� Ȩ������ ����\' �� �̿����ּ���.');
				break;
			case 4 :
				funcSetMyPageNavi(" > �б���������");
				URLlink = "/mypage/myschedule/SchMain.asp?cate=U";
				break;
			case 5 :
				funcSetMyPageNavi(" > �б���������");
				URLlink = "/mypage/survey/SvyList.asp";
				//alert('�й���ȸ �Ⱓ�� �ƴմϴ�.   \n\n2004�г⵵ 2�б� ��/���Ի� �й���ȸ�� 9�� 1�� ���� 12:00���� ��ȸ �����մϴ�.');
				break;
			case 6 :
				window.open('http://61.74.68.199:80/searchHB.asp','','status=no,resizable=no,scrollbars=no,width=600,height=430,left=300,top=150');
				break;
			case 7 :
				alert('2005�г⵵ ��������б� ������û�� �����Ǿ����ϴ�. \n\n������ �߰���û�� ���� �б� ������ Ȯ���ϼ���.           ');
//				window.open("http://61.74.68.217:8021/index.html","sugang1", "width=700,height=580,scrollbars,resizable=yes,toolbar=no,directories=no,menubar=no,left=0,top=0");
				break;
			case 8 :
				//alert('2004�г⵵ 2�б� ��ϱ���ȸ�� 7�� 23�� 09:30 ���� �����մϴ�. ') ;
				//window.open("/popup/notice3_0131_1.html","0131_1", "width=505,height=600,scrollbars=yes,top=0,left=0");
				funcMenuLinkByePay();
				break;
			case 9 :
				funcSetMyPageNavi(" > ���ǳ�Ʈ��û");
				URLlink = "/mypage/note_request/request_list.asp";
				break;
			case 10 :
				funcSetMyPageNavi(" > ������");
				URLlink = "/mypage/debate_list.asp";
				break;
			case 11 :
				funcSetMyPageNavi(" > ��������˸���");
				URLlink = "/mypage/job_list.asp?bbs_code=202";
				break;
			case 12 :
				window.open('http://61.74.68.208/chatserver/community.asp?userid=guest&amp;passwd=guest2005', '��ȭ��', 'toolbar=no,location=no,scrollbars=no,width=630,height=370');
				break;
			case 13 :
				funcSetMyPageNavi(" > ���Ƹ���");
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