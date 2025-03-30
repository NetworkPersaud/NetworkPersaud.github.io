var strings = [
  "Initializing cybersecurity profile...",
  "Resolving local host 169.254.0.0/16...",
  "Requesting secure system access...",
  "Verifying digital identity...",
  "Authentication failed...",
  "Revalidating credentials...",
  "Access granted.",
  "Probing personal cyber environment...",
  "Identifying core modules...",
  "Launching reconnaissance scanner...",
  "Loading threat analysis suite...",
  "Activating firewall protocols...",
  "Initiating intrusion detection system...",
  "Synchronizing security logs...",
  "Starting vulnerability assessment...",
  "Deploying honeypots...",
  "Engaging encryption algorithms...",
  "Verifying network integrity...",
  "Analyzing system performance...",
  "Calibrating risk metrics...",
  "Integrating pen-test modules...",
  "Mapping digital footprint...",
  "Scanning for open ports...",
  "Collecting network data...",
  "Evaluating intrusion attempts...",
  "Running forensics diagnostics...",
  "Reviewing threat intelligence...",
  "Activating secure protocols...",
  "Securing data transmissions...",
  "Integrating cybersecurity frameworks...",
  "Deploying incident response scripts...",
  "Checking compliance standards...",
  "Reviewing access logs...",
  "Optimizing system configurations...",
  "Enabling advanced analytics...",
  "Monitoring real-time traffic...",
  "Connecting to security databases...",
  "Fetching credentials from vault...",
  "Cross-referencing threat indicators...",
  "Analyzing historical data...",
  "Deploying machine learning defenses...",
  "Updating virus definitions...",
  "Scanning digital perimeters...",
  "Inspecting firewall rules...",
  "Hardening system defenses...",
  "Initiating backup protocols...",
  "Validating secure connections...",
  "Deploying dynamic IDS...",
  "Syncing security appliances...",
  "Configuring secure tunnels...",
  "Launching forensic tools...",
  "Aggregating system alerts...",
  "Reviewing security strategies...",
  "Enhancing digital countermeasures...",
  "Calibrating data encryption...",
  "Testing security resilience...",
  "Analyzing penetration test logs...",
  "Integrating expert systems...",
  "Finalizing cyber defense protocols...",
  "Welcome to Rohan's Cyber Lab.",
  "Showcasing skills & expertise...",
  "Profile fully initialized.",
  "Launching digital operations..."
];

var preloader = document.getElementById('preloader');
var delay = 1000;
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


