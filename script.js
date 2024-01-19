function whichLemon() {
    //   console.log("testing")
      
      constlemonOptions = 
      [
          "Sorrento Lemon",
          "Citron", 
          "Tesco Finest Lemon",
          "Lime"
          ];
          
             const randomLemonlInt = Math.floor(Math.random() * lemonOptions.length);
            const chosenLemon = lemonOptions[randomLemonInt];
          
                 
    const message = `Enjoy your ${chosenLemon}!`;
    console.log(message)
    }
    
   whichLemon();
