var message = "";

function clickIE() {
  if (document.all) {
      (message);
      return false;
  }
}

function clickNS(e) {
  if (document.layers || (document.getElementById && !document.all)) {
      if (e.which == 2 || e.which == 3) {
          (message);
          return false;
      }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS;
} else {
  document.onmouseup = clickNS;
  document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false")
// -->

function disabletextselect(i) {
  return false
}

function renabletextselect() {
  return true
}
//if IE4+ 
document.onselectstart = new Function("return false")
//if NS6+ 
if (window.sidebar) {
  document.onmousedown = disabletextselect
  document.onclick = renabletextselect
}
document.onkeypress = function(event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
      return false;
  }
}
document.onmousedown = function(event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
      return false;
  }
}
document.onkeydown = function(event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
      return false;
  }
}
