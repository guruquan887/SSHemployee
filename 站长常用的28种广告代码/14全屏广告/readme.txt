1\�޸Ĺ��Ͷ��ʱ��
AD.StartTime    = new Array("2006/04/01 12:00");
AD.EndTime      = new Array("2007/04/01 12:00");

2\�޸Ĺ����ͼƬ��ʽ����flash��ʽ
AD.src          = new Array("images/adflash.swf");
//AD.src          = new Array("images/adpic.jpg");
//AD.href         = new Array("http://www.makewing.com");

3\�޸Ĺ��ߴ�
OBJ.innerHTML=ADM_Media(o.src[FAi],778,350,o,"",o.href[FAi]);

4\�޸�ȫ��ͣ��ʱ��
isNaN(parseInt(o.timeout))?5000:parseInt(o.timeout));
5000��5��