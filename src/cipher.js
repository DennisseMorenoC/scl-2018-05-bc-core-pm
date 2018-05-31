/*window.cipher = {
  encode: (normalFrase, spaceNumber) => {

    let codeFrase = "";
            
    for (i = 0 ; i < normalFrase.length; i++){
      const form = (normalFrase.toUpperCase().charCodeAt(i)-65+spaceNumber)%26+65;
      const codeFrase = String.fromCharCode(form); 
      
      console.log(codeFrase);
    }
    return codeFrase = document.getElementById("messageCode1").innerHTML;

  },

  decode: () => {
    /* Acá va tu código 
  }
}*/