window.cipher = {
  encode: (normalFrase, spaceNumber) => {
    let codeFrase = "";
            
    for (i = 0 ; i < normalFrase.length; i++){
        let upperCase = normalFrase.toUpperCase();
         if(upperCase.charCodeAt(i) == 32){
            codeFrase += String.fromCharCode(upperCase.charCodeAt(i));
        }else{
            let form = (upperCase.charCodeAt(i)-65+spaceNumber)%26+65;
            codeFrase += String.fromCharCode(form); 
        }
        //let form = (normalFrase.toUpperCase().charCodeAt(i)-65+spaceNumber)%26+65;
        //codeFrase += String.fromCharCode(form); 
        //console.log(codeFrase);
    }  
    return codeFrase;
  },

  decode: (insertCodeFrase, spaceNumber) => {
    let decodeFrase = "";
    
    for (i = 0; i<insertCodeFrase.length; i++){
        let upperCase2 = insertCodeFrase.toUpperCase();

        if (upperCase2.charCodeAt(i) == 32){
            decodeFrase += String.fromCharCode(upperCase2.charCodeAt(i));

        }else{
            let form2 = (upperCase2.charCodeAt(i)+65-spaceNumber)%26+65;
            decodeFrase += String.fromCharCode(form2);
        }
        //let form2 = (insertCodeFrase.toUpperCase().charCodeAt(i)+65-spaceNumber)%26+65;
        //    decodeFrase += String.fromCharCode(form2);
        //console.log(decodeFrase);   
    }
    return decodeFrase;
  }
  
}