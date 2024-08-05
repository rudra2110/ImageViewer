const container=document.querySelector('.container');
const form=document.querySelector('form');
const image=document.querySelector('img');
let arr=[];
let count=0;
form.addEventListener('submit',slider);



function slider(e) {
    e.preventDefault();
    const input = document.querySelector('#inp');
    arr.push(input.value);
    input.value = ''; // Clear the input field after adding the URL
    count = arr.length - 1; // Set count to the last added image index
    updateImage();
}

function updateImage() {
    if (arr.length > 0 && count >= 0 && count < arr.length) {
        image.setAttribute('src', arr[count]);
    }
}

function previousImage() {
    if (arr.length > 0) {
        count = (count - 1 + arr.length) % arr.length;
        updateImage();
    }
}

function nextImage() {
    if (arr.length > 0) {
        count = (count + 1) % arr.length;
        updateImage();
    }
}



function deleteImage() {
    if (arr.length > 0 && count >= 0 && count < arr.length) {
        arr.splice(count, 1);
        if (arr.length === 0) {
            count = 0; // Reset count if no images are left
        } else {
            count = count % arr.length; // Adjust count if there are still images
        }
        updateImage();
    }
}



document.addEventListener('keydown', function(event) {
    if (event.key === 'p' || event.key === 'P') {
        previousImage();
    } else if (event.key === 'n' || event.key === 'N') {
        nextImage();
    }
    else if(event.key==='c' || event.key==='C'){
        deleteImage();
    }
});




