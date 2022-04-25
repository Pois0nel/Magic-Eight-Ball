
// RNG

let eBall = document.getElementById('ans').innerHTML;

let eightBall = answer();
function answer(rN) {
  rN = Math.floor(Math.random() * 8);
  console.log(rN);
      rN === 0 ? document.getElementById('ans').innerHTML = 'It is certain'
  : (rN === 1) ? document.getElementById('ans').innerHTML='It is decidedly so'
  : (rN === 2) ? document.getElementById('ans').innerHTML='Reply hazy try again'
  : (rN === 3) ? document.getElementById('ans').innerHTML='Cannot predict now'
  : (rN === 4) ? document.getElementById('ans').innerHTML='Do not count on it'
  : (rN === 5) ? document.getElementById('ans').innerHTML='My sources say no'
  : (rN === 6) ? document.getElementById('ans').innerHTML='Outlook not so good'
  : (rN === 7) ? document.getElementById('ans').innerHTML='Signs point to yes'
  :document.getElementById('ans').innerHTML='Possibly';
}
