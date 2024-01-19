

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

// Display the message on the webpage
document.getElementById('lemonMessage').innerHTML = message;

// Apply different background images based on the selected lemon
document.body.style.backgroundImage = `url('${getImageForLemon(chosenLemon)}')`;
}

function getImageForLemon(lemon) {
// Map each lemon to its corresponding image
const lemonImages = {
    "Sorrento Lemon": "sorrento-lemon.jpg",
    "Citron": "citron.jpg",
    "Tesco Finest Lemon": "/assets/images/tesco-lemon.png",
    "Lime": "https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};

// Return the image URL for the given lemon
return lemonImages[lemon] || "default-image.jpg";
}

