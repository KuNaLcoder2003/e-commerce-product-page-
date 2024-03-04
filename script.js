// changing image according to click
const image_1_url = 'challenge3_assests/image-product-1.jpg';
const image_2_url = 'challenge3_assests/image-product-2.jpg';
const image_3_url = 'challenge3_assests/image-product-3.jpg'
const image_4_url = 'challenge3_assests/image-product-4.jpg';

const urls = [image_1_url , image_2_url , image_3_url , image_4_url];

const main_image = document.querySelector('.main-image');
const thumb_nails = document.querySelectorAll('.sub-img-continer');

thumb_nails.forEach((thumb_nail , index)=>{
    thumb_nail.addEventListener('click' ,()=>{
        changeMainPhoto(index);
    })
})

function changeMainPhoto(index){
    main_image.style.backgroundImage = `url(${urls[index]})`;
}
