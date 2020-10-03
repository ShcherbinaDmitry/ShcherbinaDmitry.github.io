function  checkingFunction(){
  if (!customSwitch1.checked){
    document.getElementById("text1").style.display = "none";
  }
  if (customSwitch1.checked){
    document.getElementById("text1").style.display = "inline-block";
    document.getElementById("text1").style.animationIterationCount = 1;
  }
}

function namingFunction() {
  var value1 = document.getElementById('input1').value;
  document.getElementById("form-check").innerHTML = " Hello " + value1 + ". ";
}

function radioButtonFunction(value){
  if (value == "option1"){
    alert('The official motto of the city is "The place where Europe and Asia meet" as the city occupies land in both Europe and Asia.');
  }
  else if (value == "option2"){
    alert('Magnitogorsk was named after Mount Magnitnaya, a geological anomaly that once consisted almost completely of iron ore, around 55% to 60% iron.');
  }
  else if (value == "option3"){
    alert('Magnitogorsk was supposed to be a completely planned city. It was moddeled after two of the most advanced steel producing sites in US then: Gary in Indiana and Pittsburgh in Pennsylvania.');
  }
  
}


function trimTrailingSlash(string){if(string!=null){return string.replace(/\/+$/,'');}else{return string;}}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};}
ctrHref=trimTrailingSlash('http://maps-generator.com/ru'.trim());ctrHref2=trimTrailingSlash('http://maps-generator.com/ru'.trim());eInDoc=function(e){while(e=e.parentNode){if(e==document){return true;}}
return false;};lCheck=function(l){if(null!=l&&null!=l.getAttribute('href')&&(ctrHref===''||trimTrailingSlash(l.getAttribute('href').trim())==ctrHref||trimTrailingSlash(l.href.trim())==ctrHref||trimTrailingSlash(l.getAttribute('href').trim())==ctrHref2||trimTrailingSlash(l.href.trim())==ctrHref2)){return true;}
else{return false;}};linkfound=false;window.onload=function(){els=document.getElementsByTagName('a');l=els.length;for(i=0;i<l;i++){el=els[i];if(trimTrailingSlash(el.href)===ctrHref||trimTrailingSlash(el.getAttribute('href'))===ctrHref||trimTrailingSlash(el.href)===ctrHref2||trimTrailingSlash(el.getAttribute('href'))===ctrHref2){linkfound=true;if(el.getAttribute('rel')=='nofollow'||!eInDoc(el)||!lCheck(el)){linkfound=false;}
linktext=el.innerHTML;if(linktext==undefined){linkfound=false;}
else if(linktext.trim()==''){linkfound=false;}
if(el.offsetHeight!=undefined&&el.offsetHeight<8){linkfound=false;}
break;}}
if(linkfound){linkToHide=el;linkToHide.innerHTML='Map2';}
if(document.getElementById('gmap_canvas')!=null){document.getElementById('gmap_canvas').parentNode.insertBefore(div,document.getElementById('gmap_canvas').nextSibling);}else{document.body.appendChild(div);}
widget=document.getElementById('gmap_canvas');if(widget){widget.style.visibility='hidden';}}