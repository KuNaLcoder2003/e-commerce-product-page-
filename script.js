const image_1_url = 'challenge3_assests/image-product-1.jpg';
const image_2_url = 'challenge3_assests/image-product-2.jpg';
const image_3_url = 'challenge3_assests/image-product-3.jpg'
const image_4_url = 'challenge3_assests/image-product-4.jpg';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.lightbox');
const modal_main_img = document.querySelector('.main-img');
const modal_sub_images = document.querySelectorAll('.subimgcontiner');
const left_btn = document.querySelector('.left-btn');
const close_modal_btn = document.querySelector('.close-btn');

let nexttIndex  = 0;



const urls = [image_1_url , image_2_url , image_3_url , image_4_url];

const main_image = document.querySelector('.main-image');
const thumb_nails = document.querySelectorAll('.sub-img-continer');


thumb_nails.forEach((thumb_nail , index)=>{
    thumb_nail.addEventListener('click' ,()=>{
        changeMainPhoto(index,main_image);
        checkMainImg(modal_main_img , index);
    })
})


function changeMainPhoto(index , main_img){
    main_img.style.backgroundImage = `url(${urls[index]})`;
}

function checkMainImg(main_img_modal , index){
    main_img_modal.style.backgroundImage = `url(${urls[index]})`;
    nexttIndex = index;
}

main_image.addEventListener('click' ,()=>{
    overlay.classList.add('active');
    modal.classList.add('active');
})
overlay.addEventListener('click' ,()=>{
    overlay.classList.remove('active');
    modal.classList.remove('active');
})

window.addEventListener('click' ,(e)=>{
    if(e.target === modal){
        overlay.classList.remove('active');
        modal.classList.remove('active');
    }
})

close_modal_btn.addEventListener('click' ,()=>{
    overlay.classList.remove('active');
    modal.classList.remove('active');
})

modal_sub_images.forEach((img,index)=>{
    img.addEventListener('click' , ()=>{
        changeMainPhoto(index,modal_main_img);
    })
})
right_button.addEventListener('click' , ()=>{
    console.log(nexttIndex);
    nexttIndex++
    if(nexttIndex < urls.length){
        changeMainImage(nexttIndex , modal_main_img);
    }

})

function changeMainImage(index , img){
    img.style.backgroundImage = `url(${urls[index]})`;
}

