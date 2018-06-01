function encode (){
    let normalFrase = document.getElementById("messageNatural1").value;
    console.log(normalFrase);
    let spaceNumber = parseInt(document.getElementById("llave").value);
    console.log(spaceNumber);
    //let codeFrase = windows.cipher.encode(normalFrase, spaceNumber);
    //document.getElementById("messageCode1").innerHTML;
    let codeFrase = "";
            
    for (i = 0 ; i < normalFrase.length; i++){
        let upperCase = normalFrase.toUpperCase();
        if(upperCase.charCodeAt(i) == 32){
            codeFrase += String.fromCharCode(upperCase.charCodeAt(i));
            document.getElementById("messageCode1").innerHTML = codeFrase;
                    
        }else{
            let form = (upperCase.charCodeAt(i)-65+spaceNumber)%26+65
            codeFrase += String.fromCharCode(form); 
            document.getElementById("messageCode1").innerHTML = codeFrase;
        }
        //let form = (normalFrase.toUpperCase().charCodeAt(i)-65+spaceNumber)%26+65;
        //codeFrase += String.fromCharCode(form); 
        //console.log(codeFrase);
    }
    //document.getElementById("messageCode1").innerHTML = codeFrase;
}

function decode() {
    let insertCodeFrase = document.getElementById("messageCode2").value;
    let spaceNumber = parseInt(document.getElementById("llave").value);
    let decodeFrase = "";
    
    for (i = 0; i<insertCodeFrase.length; i++){
        let upperCase2 = insertCodeFrase.toUpperCase();

        if (upperCase2.charCodeAt(i) == 32){
            decodeFrase += String.fromCharCode(upperCase2.charCodeAt(i));
            document.getElementById("messageNatural2").innerHTML = decodeFrase;

        }else{
            let form2 = (upperCase2.charCodeAt(i)+65-spaceNumber)%26+65;
            decodeFrase += String.fromCharCode(form2);
            document.getElementById("messageNatural2").innerHTML = decodeFrase;
            
        }
        //let form2 = (insertCodeFrase.toUpperCase().charCodeAt(i)+65-spaceNumber)%26+65;
        //    decodeFrase += String.fromCharCode(form2);
        //console.log(decodeFrase);   
    }
    
    //document.getElementById("messageNatural2").innerHTML = decodeFrase;

}

