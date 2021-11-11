const view = (val) => {
  document.getElementById("viewer").value += val;
};

const clean = () => {
  document.getElementById("viewer").value = "";
};

const equal = () => {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = eval(val);
  }
};
const sin = () => {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = Math.sin(val);
  }
};

const cos = () => {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = Math.cos(val);
  }
};

const tan = () => {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = Math.tan(val);
  }
};

const persentase = () => {
  var val = document.getElementById("viewer").value;
  if (val) {
    document.getElementById("viewer").value = val / 100;
  }
};
