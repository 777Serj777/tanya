let key = 3;
let message = document.getElementById("message");
let decrypted = false

function encryptCyrillic(text, key) {
  let result = "";
  for (let char of text) {
    let code = char.charCodeAt(0);


    if (code >= 1040 && code <= 1071) {
      let base = 1040;
      let newCode = (code - base + key + 32) % 32 + base;
      result += String.fromCharCode(newCode);


    } else if (code >= 1072 && code <= 1103) {
      let base = 1072;
      let newCode = (code - base + key + 32) % 32 + base;
      result += String.fromCharCode(newCode);

    } else {
   
      result += char;
    }
  }
  return result;
}

function decryptCyrillic(cipher, key) {
  return encryptCyrillic(cipher, -key);
}

function onBtn(){
    let inputText = document.getElementById("keyForDecryption").value.replace(/\s+/g, "");



    if(inputText.toLowerCase() === "миша24" && !decrypted){
       message.innerHTML = decryptCyrillic(message.innerHTML, key);
       decrypted = true
    }

    else if (decrypted && inputText.toLowerCase() !== "миша24")
    {  
        message.innerHTML = encryptCyrillic(message.innerHTML, key);
        decrypted = false;
    }
}

document.getElementById("button").addEventListener('click', onBtn);
message.innerHTML = encryptCyrillic(message.innerHTML, key);





