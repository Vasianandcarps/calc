function calc() {
  let x1 = prompt("input x1");
  let sign = prompt("input sign");
  let x2 = prompt("input x2");
  document.write(x1 + sign + x2 + "=");
  let f;
  let functionStr = "f = function(x){return " + x1 + sign + x2 + "}";
  eval(functionStr);
  document.write(f());
}

