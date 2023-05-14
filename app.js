var result = document.getElementById("result").value;
function getnum(num) {
  document.getElementById("result").value += num;
}
function getResult() {
  document.getElementById("result").value = eval(
    document.getElementById("result").value
  );
}
function clearValue() {
  document.getElementById("result").value = "";
}
function delvalue() {
  let a = document.getElementById("result").value;
  document.getElementById("result").value = document.getElementById("result").value.slice(0, a.length - 1);
}
