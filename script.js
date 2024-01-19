

function whichLemon() {
  //   console.log("testing")

  const lemonOptions =
    [
      "Sorrento Lemon! god's favourite lemon",
      "Citron! oh la la hup Fronce",
      "Tesco Finest Lemon! Now available in the €3.50 meal deal as 1 of your 5 a day",
      "Lime! not e-sure"
    ];

  const randomLemonInt = Math.floor(Math.random() * lemonOptions.length);
  const chosenLemon = lemonOptions[randomLemonInt];


  const message = `You are a ${chosenLemon}!`;

// Display the message on the webpage
document.getElementById('lemonMessage').innerHTML = message;

// Apply different background images based on the selected lemon
document.body.style.backgroundImage = `url('${getImageForLemon(chosenLemon)}')`;
}

function getImageForLemon(lemon) {
// Map each lemon to its corresponding image
const lemonImages = {
    "Sorrento Lemon! god's favourite lemon": "/assets/images/sorrento.jpg",
    "Citron! oh la la hup Fronce": "/assets/images/citron.png",
    "Tesco Finest Lemon! Now available in the €3.50 meal deal as 1 of your 5 a day": "/assets/images/tesco-lemon.png",
    "Lime! not e-sure": "https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};

// Return the image URL for the given lemon
return lemonImages[lemon] || "default-image.jpg";
}

