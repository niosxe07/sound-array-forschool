
function checker(msg) {

  const check = msg.split("");
  let len = check.length;
  
  for (let i = 0; i < len; i++) {
    if (check[i] == " ") {
      return true;
    }    
  }
  return false;
}

function rev(msg) {
  let x = msg.split("");
  x = x.reverse();
  let len = x.length;

  let z = [];
  let z1 = [];
  for (let i = 0; i < len; i++) {
    z.push(x[i])

  }

  for (let i = 0; i < len; i++) {
    z1 = z1 + z[i]
  }
  return z1;
  
}

function foreach(msg) {

  let n = []
  let x = msg.split(" ");
  let len = x.length;
  for (let i = 0; i < len; i++) {
    n.push(rev(x[i]))
    n.push(" ")
  }

  let z = []
  let nlen = n.length;
  for (let i = 0; i < nlen; i++) {
    z += n[i]
    
  }
  
  return z;
}

function rev_sentences(msg) {
  let split = msg.split(" ")
  split = split.reverse();

  let len = split.length;

  let n = []
  for (let i = 0; i < len; i++) {
    n += split[i]
    n += " "
  }
  return n;
}

var readline = require('readline-sync');
var msg = readline.question("type: ");
var completely_reversed = true;

if (checker(msg) == false) {
  console.log(rev(msg))
} else if (checker(msg) == true) {
  if (completely_reversed == true) {
    console.log(rev_sentences(msg))
  } else if (completely_reversed == false) {
    console.log(foreach(rev_sentences(msg)))
  }
}

