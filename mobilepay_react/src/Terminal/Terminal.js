import React, {Component} from 'react'


export default class Terminal extends Component {
    
    render () {
        return (
            <div>
                <h1 id>Пополнение счета <div id='id_operator'></div> </h1> 
<form onsubmit="return false"> </form>
  <div>
      <label for="phone"> Введите номер телефона</label>
      <input id="phone" type='text' required></input>
   </div>
   <div>
      <label for="Sum"> Введите сумму</label>
      <input id ="Sum" type='text' required></input>
   </div>
   <div>
      <button onclick="isValid(), isValidSum(), alert(isSucess())">Submit</button>
   </div>
   <div>
      <button type="reset" value='remove' onclick='reset()'>Reset</button>
   </div>
   <div>
   <p id='message'></p>
   <p id='messageSum'></p>
   </div>
            </div>
        )
    }
}