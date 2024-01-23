function cal(value) {
    document.getElementById("number").value+= value;

  }

  function cancel() {
    document.getElementById("number").value=" ";
  }

  function display() {
    let expression = document.getElementById("number").value;
    let result = eval(expression);
    document.getElementById("number").value = result;
  }
