function encode (){
    let normalFrase = document.getElementById("messageNatural1").value;
    let spaceNumber = parseInt(document.getElementById("llave").value);
    let codeFrase = window.cipher.encode(normalFrase, spaceNumber);
    document.getElementById("messageCode1").innerHTML = codeFrase;

    //let codeFrase = windows.cipher.encode(normalFrase, spaceNumber);
    //document.getElementById("messageCode1").innerHTML;
 
    //document.getElementById("messageCode1").innerHTML = codeFrase;
}

function decode() {
    let insertCodeFrase = document.getElementById("messageCode2").value;
    let spaceNumber = parseInt(document.getElementById("llave").value);
    let decodeFrase = window.cipher.encode(insertCodeFrase, spaceNumber);
    document.getElementById("messageNatural2").innerHTML = decodeFrase;
    //document.getElementById("messageNatural2").innerHTML = decodeFrase;

}

