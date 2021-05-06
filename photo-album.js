// Photo Album

let topImage = document.getElementById('top-image');
let images = document.querySelectorAll('.images');

images.forEach(image=>image.addEventListener('click', enlargeImage));

function enlargeImage(e) {
  images.forEach((image)=>{    
    topImage.src = e.target.src;
    topImage.style.height = '600px';
  });     
}

// ****************************************************************************************
// Store photos to LocalStorage

let file = document.getElementById('file');
file.addEventListener('change', (e) => {
  let fileList = e.target.files;
  // console.log(fileList);
  let reader = new FileReader();
  reader.addEventListener('load', () => {
    // console.log(reader.result);
    localStorage.setItem('current-image', reader.result);

  });
  reader.readAsDataURL(fileList[0]);
});


document.addEventListener('DOMContentLoaded()', () => {
  let currentImageURL = localStorage.getItem('current-image');
  if (currentImageURL) {
    document.getElementById('preview-image').setAttribute('src', currentImageURL);
  }
})


// Display base64Image
let base64Current = localStorage.getItem('current-image');
let currentImageContainer = document.getElementById('current-image-container');

function displayBase64Image(placeholder, base64Image) {
  let image = document.createElement('img');
  image.onload = function() {
      placeholder.innerHTML = '';
      placeholder.appendChild(this);
  }
  image.src = base64Image;  
}
displayBase64Image(currentImageContainer, base64Current);

// localStorage.clear();

