var num=0;
function jsq(num) {
            var tmp=document.getElementById(num).value;
            if(tmp=="×") tmp="*";
            else if(tmp=="÷") tmp="/";
            if(document.getElementById("screen").value=="error") document.getElementById("screen").value='';
            else if(document.getElementById("screen").value=="0") document.getElementById("screen").value='';
            document.getElementById("screen").value += tmp;
}
function clearnum(){
    document.getElementById("screen").value='0';
}
function eva() {
    try{
     document.getElementById("screen").value = eval(document.getElementById("screen").value);}
    catch{
        document.getElementById("screen").value = "error";
    }
 }
 window.addEventListener("keydown", function(event) {
    if(document.getElementById("screen").value == "error" || document.getElementById("screen").value == "0"){
        document.getElementById("screen").value = null;
    }
    if(!isNaN(event.key)||event.key=="+"||event.key=="-"||event.key=="*"||event.key=="/"||event.key=="("||event.key==")"||event.key==".") document.getElementById("screen").value += event.key;
    else if(event.key=="Backspace"){
        var tmp=document.getElementById("screen");
        tmp.value=tmp.value.substring(0, tmp.value.length - 1);
        document.getElementById("screen").value=tmp.value;
    }
    /*else if(event.key=="Enter"){
        eva();
    }*/
  }, true);