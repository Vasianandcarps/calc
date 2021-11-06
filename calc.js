function calc() {
  let x1 = prompt("input x1");
  let x2 = prompt("input x2");
  let sign = prompt("input sign");
  let f;
  let functionStr = "f = function(x){return x1" + sign + "x2;}";
  eval(functionStr);
  alert(f());
}
