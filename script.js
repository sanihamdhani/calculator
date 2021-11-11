function view(val) {
  document.getElementById("viewer").value += val;
}

function clean() {
  document.getElementById("viewer").value = "";
}

function equal() {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = eval(val);
  }
}
function sin() {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = Math.sin(val);
  }
}

function cos() {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = Math.cos(val);
  }
}

function tan() {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = Math.tan(val);
  }
}

function persentase() {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = val / 100;
  }
}
