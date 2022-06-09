function changeHeading(newHeading) {
  let heading = document.querySelector('h2');
  heading.innerHTML = newHeading;
}

function orderSoap() {
  let name = prompt('What is your name?');
  alert('👋 Hello, ' + name + '! 😊 Thanks for ordering Handmade Soap.');
  let email = prompt('What is your email?');
  changeHeading('Clean inspiration will be soon in your hands, ' + name + '!');
}

let orderButton = document.querySelector('button');
orderButton.addEventListener('click', orderSoap);
