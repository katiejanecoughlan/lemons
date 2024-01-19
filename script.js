

function whichLemon() {
    //   console.log("testing")
      
      const lemonOptions = 
      [
          "Sorrento Lemon",
          "Citron", 
          "Tesco Finest Lemon",
          "Lime"
          ];
          
             const randomLemonInt = Math.floor(Math.random() * lemonOptions.length);
            const chosenLemon = lemonOptions[randomLemonInt];
          
                 
    const message = `You are a ${chosenLemon}!`;
    console.log(message)
    }
    
   whichLemon();
