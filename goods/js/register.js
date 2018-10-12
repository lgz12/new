var isIe = (document.all) ? true : false;
//设置select的可见状态
function setSelectState(state) {
	var objl = document.getElementsByTagName('select');
	for(var i = 0; i < objl.length; i++) {
		objl[i].style.visibility = state;
	}
}

function mousePosition(ev) {
	if(ev.pageX || ev.pageY) {
		return {
			x: ev.pageX,
			y: ev.pageY
		};
	}
	return {
		x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y: ev.clientY + document.body.scrollTop - document.body.clientTop
	};
}
//弹出方法
function showMessageBox(wTitle, content, pos, wWidth) {
	closeWindow();
	var bWidth = parseInt(document.documentElement.scrollWidth);
	var bHeight = parseInt(document.documentElement.scrollHeight);
	if(isIe) {
		setSelectState('hidden');
	}
	var back = document.createElement("div");
	back.id = "back";
	var styleStr = "top:0px;left:0px;position:absolute;background:#666;width:" + bWidth + "px;height:" + bHeight + "px;";
	styleStr += (isIe) ? "filter:alpha(opacity=0);" : "opacity:0;";
	back.style.cssText = styleStr;
	document.body.appendChild(back);
	showBackground(back, 50);
	var mesW = document.createElement("div");
	mesW.id = "mesWindow";
	mesW.className = "mesWindow";
	mesW.innerHTML = "<div class='mesWindowTop'><table width='100%' height='100%'><tr><td style='font-size=60px'>" + wTitle + "</td><td style='width:1px;'><input type='button' style='width:20px;height:20px;background: url(../img/关闭.png);margin-right:20px' onclick='closeWindow();' title='关闭窗口' class='close' /></td></tr></table></div><div class='mesWindowContent' id='mesWindowContent'>" + content + "</div><div class='mesWindowBottom'></div>";
	styleStr = "left:" + (((pos.x - wWidth) > 0) ? (pos.x - wWidth) : pos.x) + "px;top:" + (pos.y) + "px;position:absolute;width:" + wWidth + "px;";
	mesW.style.cssText = styleStr;
	document.body.appendChild(mesW);
}
//让背景渐渐变暗
function showBackground(obj, endInt) {
	if(isIe) {
		obj.filters.alpha.opacity += 1;
		if(obj.filters.alpha.opacity < endInt) {
			setTimeout(function() {
				showBackground(obj, endInt)
			}, 5);
		}
	} else {
		var al = parseFloat(obj.style.opacity);
		al += 0.01;
		obj.style.opacity = al;
		if(al < (endInt / 100)) {
			setTimeout(function() {
				showBackground(obj, endInt)
			}, 5);
		}
	}
}
//关闭窗口
function closeWindow() {
	if(document.getElementById('back') != null) {
		document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
	}
	if(document.getElementById('mesWindow') != null) {
		document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
	}
	if(isIe) {
		setSelectState('');
	}
}
//背景变暗
function black() {
	closeWindow();
	var bWidth = parseInt(document.documentElement.scrollWidth);
	var bHeight = parseInt(document.documentElement.scrollHeight);
	var back = document.createElement("div");
	back.id = "back";
	var styleStr = "top:0px;left:0px;position:absolute;background:#666;width:" + bWidth + "px;height:" + bHeight + "px;";
	styleStr += (isIe) ? "filter:alpha(opacity=0);" : "opacity:0;";
	back.style.cssText = styleStr;
	document.body.appendChild(back);
	showBackground(back, 50);
}

function test() {
	alert(123);
}
//测试弹出
function testMessageBox(ev) {
	var objPos = mousePosition(ev);
	black()
	btn()

	//       	showMessageBox('会员注册', 12, objPos, 690);
}

function btn() {
	var form = document.getElementById('register');
	//	var box1 = document.getElementById('box');
	//alert(form.style.display)
	if(form.style.display = '') {

		form.style.display = 'none';
	} else {
		form.style.display = '';
		alert(form.style.display)
	}
}
window.onload = function() {

	var oBtn = document.getElementById('btn');
	var oMask = document.getElementById('mask');
	var oLogin = document.getElementById('register');

	oBtn.onclick = function() {
		oMask.style.display = 'block';
		oLogin.style.display = 'block';
	}

	var oLogin_close = document.getElementById('login_close');

	oLogin_close.onclick = function() {
		oMask.style.display = 'none';
		oLogin.style.display = 'none';
	}
}
//正则表达式验证手机号
function checkPhone() {
	//	alert(11)
	var err = document.getElementById('err');
	var phone = document.getElementById('phone').value;
	if(!(/^1[34578]\d{9}$/.test(phone))) {
		//		alert("手机号码有误，请重填");

//		err.style.display = 'block';
err.innerHTML='请输入正确的手机号!';
		return false;
	} 
	else if(!StatHandler1()){
        return false;
	}
	else{
		err.innerHTML='';
		return true;
	}
}
//获取验证码
var countdown = 60;

function settime(val) {
//	checkPhone() 
	if(checkPhone() == true) {
		if(countdown == 0) {
			val.removeAttribute("disabled");
			val.value = "获取验证码";
			countdown = 60;
			return false;
		} else {
			val.setAttribute("disabled", true);
			val.value = "重新发送(" + countdown + ")";
			countdown--;
		}
		setTimeout(function() {
			settime(val);
		}, 1000);
	}

}
//当手机号，验证码不为空，点击下一步
function check() {
	var next = document.getElementById('next');
	var phone = document.getElementById('phone').value;
	var pass = document.getElementById('pass').value;
	if(phone != '' && pass != '') {
		next.style.background = "#3BC37B";
		next.style.color = "white";
		next.style.fontWeight = "bolder";
		next.disabled = "";
	} else {
		next.style.background = "#eeeeee";
		next.style.color = "#cbcbcb";
		next.style.fontWeight = "";
		next.disabled = "disabled";
	}
}
//跳到第二步
function tonext() {
	var err = document.getElementById('err');
	var pass = document.getElementById('pass').value;
	var next = document.getElementById('next');
	var phone = document.getElementById('phone_form');
	var ziliao = document.getElementById('ziliao');
	var newdiv = document.getElementById("err3");
//	alert(err.innerHTML);
//alert(checkPhone());
if(checkPhone()){
	if(pass=='1234'){
		document.getElementById("one").src = "img/验证完成.png";
	document.getElementById("two").src = "img/步骤2.png";
	phone.style.display="none";
	ziliao.style.display="";
	
		next.style.background = "#eeeeee";
		next.style.color = "#cbcbcb";
		next.style.fontWeight = "";
		next.disabled = "disabled";
	}else{
		newdiv.innerText = "验证码错误！请重新填写";
	}

}
	
		
	
	
	

}
var sexx="";
//性别选择
function sex(val) {
	//	alert(val.id)
	var next = document.getElementById('next');
	var phone = document.getElementById('phone_form');
	var ziliao = document.getElementById('ziliao');
	if(val.id == 'nv') {
		document.getElementById("nan").src = "img/单选项默认.png";
		document.getElementById("nv").src = "img/单选选中.png";
		sexx="nv";
	} else {
		document.getElementById("nv").src = "img/单选项默认.png";
		document.getElementById("nan").src = "img/单选选中.png";
		sexx="nan";
	}

}
//判断必填项，并验证
function bixuan() {
	var name = document.getElementById('name').value;
	var newdiv = document.getElementById("err1");
	if(name==""){
		newdiv.innerText = "名字不能为空！";
		return false;
	}else if(!(/^[\u4E00-\u9FA5]{1,5}$/.test(name))) {
    
	newdiv.innerText = "名字中不能含有违禁词！";
		return false;
	} else {
	newdiv.innerText = "";
		return true;
	}
	
}
function a(){
	test()
}

//判断必选是否已经填完
function nonull() {
//	var dt=''
    var next = document.getElementById('next');
    var next1 = document.getElementById('next1');
    var name = document.getElementById('name').value;
	var datetime = document.getElementById('datetime').value;
	var newdiv = document.getElementById("err2");
//	if(!dt) {
//				alert(datetime);
    if(!datetime) {
	newdiv.innerText = "请完整输入必填内容";
		return false;
	} else {
	newdiv.innerText = "";
//	console.log(name+","+datetime);
	if(name != '' && datetime != ''&&bixuan()) {
		next.style.display = "none";
		next1.style.display = "block";
		next1.style.background = "#3BC37B";
		next1.style.color = "white";
		next1.style.fontWeight = "bolder";
		next1.disabled = "";
		return true;
	} else{
		next1.style.background = "#eeeeee";
		next1.style.color = "#cbcbcb";
		next1.style.fontWeight = "";
		next1.disabled = "disabled";
		return false;
	}
		
	}
	
}
function tofinish(){
	var next1 = document.getElementById('next1');
	var next2 = document.getElementById('next2');
	var phone = document.getElementById('phone_form');
	var ziliao = document.getElementById('ziliao');
	var finish = document.getElementById('finish_form');
//	if(nonull()){
//	document.getElementById("one").src = "img/验证完成.png";
	document.getElementById("two").src = "img/验证完成.png";
	document.getElementById("three").src = "img/验证完成.png";
	ziliao.style.display="none";
	finish.style.display="";
	next1.style.display="none";
	next2.style.display="block";
//	}
	
}
function finish(){
	alert("ok")
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
//用ajax请求判断手机号是否存在
var xmlHttp;                  //定义XMLHttpRequest对象
function createXmlHttpRequestObject(){
    if(window.ActiveXObject){          //如果在internet Explorer下运行
      try{
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }catch(e){
        xmlHttp=false;
      }
    }else{
      try{                  //如果在Mozilla或其他的浏览器下运行
        xmlHttp=new XMLHttpRequest();
      }catch(e){
        xmlHttp=false;
      }
    }
    if(!xmlHttp)                //返回创建的对象或显示错误信息
      alert("返回创建的对象或显示错误信息");
    else
      return xmlHttp;
}
function showsimple(){               //创建主控制函数
  createXmlHttpRequestObject();
  var us = document.getElementById("name").value;   //获取表单提交的值
  var dt = document.getElementById("datetime").value;
  var phone = document.getElementById("phone").value;
//var se=document.getElementById("nan").src;
//alert(se);
  var sex='男';
  if(sexx=="nv"){
  	alert("123")
  	sex='女';
  }else{
  	alert("nan")
  	sex='男';
  }
  if(us=="" && dt==""){         //判断表单提交的值不能为空
    alert('添加的数据不能为空！');
    return false;
  }
  var post_method="name="+us+"&dt="+dt+"&phone="+phone+"&sex="+sex;    //构造URL参数
  xmlHttp.open("POST","php/Form_save.php",false);           //调用指定的添加文件
xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");  //设置请求头信息
//xmlHttp.setRequestHeader("Content-type","application/json;charset=UTF-8");//可以发送json格式字符串
  xmlHttp.onreadystatechange=StatHandler;     //判断URL调用的状态值并处理
  xmlHttp.send(post_method);           //将数据发送给服务器
}
function StatHandler(){               //定义处理函数
  if(xmlHttp.readyState==4 && xmlHttp.status==200){  
  	//判断如果执行成功，则输出下面内容
//	alert(xmlHttp.responseText);
    var x=myTrim(xmlHttp.responseText);
//  alert(x);
    if((x)=='success'){
//    	alert('ok');

      	tofinish();
    }else{
      alert("添加失败！");           //如果返回值为空
    }
  }
}
function selece(){               //创建主控制函数
createXmlHttpRequestObject();
var phone = document.getElementById("phone").value;   //获取表单提交的值
if(phone==""){         //判断表单提交的值不能为空
//  alert('');
    document.getElementById("err").innerHTML="手机号不能为空！";
    return false;
}
var post_method="phone="+phone;    //构造URL参数
xmlHttp.open("POST","php/select.php",false);           //调用指定的添加文件
xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");  //设置请求头信息
//xmlHttp.setRequestHeader("Content-type","application/json;charset=UTF-8");//可以发送json格式字符串
xmlHttp.onreadystatechange=StatHandler1;     //判断URL调用的状态值并处理
xmlHttp.send(post_method);           //将数据发送给服务器
}
function StatHandler1(){               //定义处理函数
if(xmlHttp.readyState==4 && xmlHttp.status==200){ 
	//判断如果执行成功，则输出下面内容
	
	var t=myTrim(xmlHttp.responseText);
//	console.log(t.length);
    if((t)=='fail'){
//    document.getElementById("err").innerHTML=xmlHttp.responseText;
   document.getElementById("err").innerHTML="用户已注册";
      return false;
    }else{
      document.getElementById("err").innerHTML="";
      return true;          //如果返回值为空
    }
}
}
