function encode (){
    let normalFrase = document.getElementById("messageNatural1").value;
    console.log(normalFrase);
    let spaceNumber = parseInt(document.getElementById("llave").value);
    console.log(spaceNumber);
    //let codeFrase = windows.cipher.encode(normalFrase, spaceNumber);
    //document.getElementById("messageCode1").innerHTML;
    let codeFrase = "";
            
    for (i = 0 ; i < normalFrase.length; i++){
      let form = (normalFrase.toUpperCase().charCodeAt(i)-65+spaceNumber)%26+65;
          codeFrase += String.fromCharCode(form); 
      
      console.log(codeFrase);
    }
    
    document.getElementById("messageCode1").innerHTML = codeFrase;
}

function decode() {
    let insertCodeFrase = document.getElementById("messageCode2").value;
    let spaceNumber = parseInt(document.getElementById("llave").value);

    let decodeFrase = "";
    
    for (i = 0; i<insertCodeFrase.length; i++){
        let form2 = (insertCodeFrase.toUpperCase().charCodeAt(i)+65-spaceNumber)%26+65;
            decodeFrase += String.fromCharCode(form2);
        console.log(decodeFrase);   
    }
    document.getElementById("messageNatural2").innerHTML = decodeFrase;

}

