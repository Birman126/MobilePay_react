import React, { Component } from "react";

export default class Terminal extends Component {
  isValid = () => {
    var output = "";
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById("phone").value;
    var valid = re.test(myPhone);
    if (valid) output = "Номер телефона введен правильно!";
    else output = "Номер телефона введен неправильно!";
    document.getElementById("message").innerText = output;
  };

  isValidSum = () => {
    var sumOutput;
    var mySum = document.getElementById("Sum").value;
    var valid = mySum <= 1000 && mySum >= 1;
    if (valid) sumOutput = "Сумма введена правильно!";
    else sumOutput = "Введите сумму от 1 до 1000!";
    document.getElementById("messageSum").innerHTML = sumOutput;
  };
  render() {
    return (
      <div>
        <h1 id>
          Пополнение счета <div id="id_operator"></div>{" "}
        </h1>
        <form onsubmit="return false"> </form>
        <div>
          <label for="phone"> Введите номер телефона</label>
          <input id="phone" type="text" required></input>
        </div>
        <div>
          <label for="Sum"> Введите сумму</label>
          <input id="Sum" type="text" required></input>
        </div>
        <div>
          <button onClick="isValid(), isValidSum(), alert(isSucess())">
            Submit
          </button>
        </div>
        <div>
          <button type="reset" value="remove" onClick="reset()">
            Reset
          </button>
        </div>
        <div>
          <p id="message"></p>
          <p id="messageSum"></p>
        </div>
      </div>
    );
  }
}
