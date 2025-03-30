var strings = [
"Initializing cybersecurity profile...",
"Resolving local host 169.254.0.0/16...",
"Authenticating secure access...",
"Access granted.",
"Loading pentest modules & threat intelligence...",
"Deploying custom firewall and IDS...",
"Scanning for vulnerabilities...",
"Connecting to personal lab services...",
"Acquiring digital forensics tools...",
"Analyzing security logs...",
"Integrating my skills and experience...",
"Finalizing system optimizations...",
"Welcome to Rohan's Cyber Lab.",
"Profile initialized."
];

var preloader = document.getElementById('preloader');
var delay = 1100;
var count = 0;
var repeat = 0;

function addLog() {
  var row = createLog('ok', count);
  preloader.appendChild(row);
  
  goScrollToBottom();
  
  count++;
  
  if (repeat == 0) {
    if (count > 3) {
      delay = 300;
    }
    
    if (count > 6) {
      delay = 100;
    }
    
    if (count > 8) {
      delay = 50;
    }
    
    if (count > 10) {
      delay = 10;
    }
  } else {
    if (count > 3) {
      delay = 10;
    }
  }
  
  if (count < strings.length) {
    setTimeout(function() {
      return addLog();
    }, delay);
  } else {
    setTimeout(function() {
      delay = 1000;
      return createLog("ok");
    }, 1000);
  }
}

function createLog(type, index) {
  var row = document.createElement('div');
  
  var spanStatus = document.createElement('span');
  spanStatus.className = type;
  spanStatus.innerHTML = type.toUpperCase();
  
  var message = (index != null) 
              ? strings[index] 
              : 'kernel: Initializing...';

  if(index == null) 
  {
    var preloader = $('#preloader');
    jQuery(preloader).fadeOut("slow");
    jQuery("#main").fadeIn("slow");
  }
  
  var spanMessage = document.createElement('span');
  spanMessage.innerHTML = message;
  
  row.appendChild(spanStatus);
  row.appendChild(spanMessage);
  
  return row;
}

function goScrollToBottom() {
  $(document).scrollTop($(document).height()); 
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// below method reference https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript/25490531#25490531
function getCookie(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

function checkCookie() {
  var user=getCookie("visited"); 
  if (user == 1) {   
    setCookie("visited", 1, 30); //this will update the cookie      
    jQuery("#main").fadeIn("slow"); 
  } else {  
    addLog();      
    setCookie("visited", 1, 30);   

  }
}

checkCookie();


