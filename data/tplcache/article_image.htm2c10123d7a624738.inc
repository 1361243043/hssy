<?php
$z[0]=Array("include","",0,36);
$z[0][4]['filename']="head.html";
$z[1]=Array("global","",259,284);
$z[1][4]['name']="cfg_cmsurl";
$z[2]=Array("field","",1261,1288);
$z[2][4]['name']="phpurl";
$z[3]=Array("global","",2149,2174);
$z[3][4]['name']="cfg_phpurl";
$z[4]=Array("global","",2419,2444);
$z[4][4]['name']="cfg_phpurl";
$z[5]=Array("global","",2517,2545);
$z[5][4]['name']="art_shortname";
$z[6]=Array("field","",2563,2591);
$z[6][4]['name']="nowpage";
$z[7]=Array("field","",2611,2641);
$z[7][4]['name']="totalpage";
$z[8]=Array("field","",2661,2690);
$z[8][4]['name']="namehand";
$z[9]=Array("field","",2714,2746);
$z[9][4]['name']="displaytype";
$z[10]=Array("field","",3342,3365);
$z[10][4]['name']="id";
$z[11]=Array("field","",3522,3545);
$z[11][4]['name']="id";
$z[12]=Array("field","",3819,3842);
$z[12][4]['name']="id";
$z[13]=Array("global","",4040,4072);
$z[13][4]['name']="cfg_templets_skin";
$z[14]=Array("channelartlist","\r\n			 			<li><a href='{dede:field name='typeurl'/}'>{dede:field name='typename'/}</a></li>\r\n						",4133,4283);
$z[14][4]['typeid']="1";
$z[15]=Array("global","",4380,4412);
$z[15][4]['name']="cfg_templets_skin";
$z[16]=Array("global","",4505,4537);
$z[16][4]['name']="cfg_templets_skin";
$z[17]=Array("global","",4620,4652);
$z[17][4]['name']="cfg_templets_skin";
$z[18]=Array("global","",4818,4850);
$z[18][4]['name']="cfg_templets_skin";
$z[19]=Array("global","",5040,5072);
$z[19][4]['name']="cfg_templets_skin";
$z[20]=Array("global","",5262,5294);
$z[20][4]['name']="cfg_templets_skin";
$z[21]=Array("global","",5484,5516);
$z[21][4]['name']="cfg_templets_skin";
$z[22]=Array("global","",5812,5844);
$z[22][4]['name']="cfg_templets_skin";
$z[23]=Array("global","",5918,5950);
$z[23][4]['name']="cfg_templets_skin";
$z[24]=Array("global","",6596,6628);
$z[24][4]['name']="cfg_templets_skin";
$z[25]=Array("field","",6790,6812);
$z[25][4]['name']="typename";
$z[26]=Array("field","",6833,6862);
$z[26][4]['name']="position";
$z[27]=Array("global","",6956,6988);
$z[27][4]['name']="cfg_templets_skin";
$z[28]=Array("field","\r\n                if(@me==3) {\r\n                	@me = '<ul class=\"e8\">';\r\n                }\r\n                else if(@me==2) {\r\n                	@me = \"\r\n					<center>\r\n						<a href='javascript:dPlayBig();' class='c1'>原始图片</a>\\r\\n\r\n						<a href='javascript:dPlayPre();' class='c1'>上一张</a>\\r\\n\r\n						<a href='javascript:dPlayNext();' class='c1'>下一张</a>\\r\\n\r\n						<a href='javascript:dStopPlay();' class='c1'>自动 / 暂停播放</a>\\r\\n\r\n					</center>\r\n                	\";\r\n                }\r\n                else {\r\n                	@me = '';\r\n                }\r\n             ",7099,7815);
$z[28][4]['name']="pagestyle";
$z[28][4]['alt']="根据不同的页面风格输出不同的头信息";
$z[28][4]['runphp']="yes";
$z[29]=Array("field","\r\n                [field:pagestyle runphp='yes'] @me= (@me==3 ? '<li>' : '');[/field:pagestyle]\r\n                <a href='[field:linkurl/]' [field:pagestyle runphp='yes'] @me= (@me==3 ? 'class=\"pic\"' : ''); [/field:pagestyle]>\r\n                  <img src='[field:imgsrc/]' id='bigimg' [field:imgwidth /] alt='[field:alttext /]' border='0' />\r\n                </a>\r\n                <a href='[field:linkurl/]' [field:pagestyle runphp='yes']@me = (@me==3 ? 'class=\"title\"' : '');[/field:pagestyle]>\r\n                	\r\n                </a>\r\n                [field:pagestyle runphp='yes'] @me = (@me==3 ? '</li>' : ''); [/field:pagestyle]\r\n             ",7987,8698);
$z[29][4]['name']="imgurls";
$z[29][4]['alt']="图片输出区";
$z[30]=Array("field","\r\n                if(@me==3) {\r\n                @me = '</ul>';\r\n                }\r\n                else if(@me==2) {\r\n                	@me = \"<script language='javascript'>dStartPlay();</script>\\r\\n\";\r\n               	}\r\n               	else {\r\n               		@me = '';\r\n                }\r\n             ",8715,9130);
$z[30][4]['name']="pagestyle";
$z[30][4]['alt']="根据不同的风格输出不同的结尾信息";
$z[30][4]['runphp']="yes";
$z[31]=Array("include","",9267,9305);
$z[31][4]['filename']="footer.html";

?>