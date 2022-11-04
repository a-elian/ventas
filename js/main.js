
//Cambio de cantidad + -
let minusBtn=document.querySelector('.input__minus');
let plusBtn=document.querySelector('.input__plus');
let userInput=document.querySelector('.input__number');

let userInputNumber=0;

plusBtn.addEventListener('click',()=>{
    userInputNumber++;
    userInput.value=userInputNumber;
});

minusBtn.addEventListener('click',()=>{
    userInputNumber--;
    
    if (userInputNumber<=0) {
        userInputNumber=0;
    }
    userInput.value=userInputNumber;
});

//Agregar el total al carrito al hacer click al boton Add TO CART

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let priceModal= document.querySelector('.cart-modal__price');
let parrafo = document.createElement('p');

addToCartBtn.addEventListener('click',()=>{
    
    
    cartNotification.style.display='block';
    priceModal.innerHTML=`$125 x ${cartNotification.innerText=userInputNumber}=<span>${cartNotification.innerText=userInputNumber*125}.00</span>`;
    cartNotification.innerText=userInputNumber;
    
    if(userInputNumber==0){
        parrafo.innerHTML="Producto vacio";
        parrafo.classList.add('texto-vacio');
        parrafo.style.display='block';
        cartModal.replaceChild(parrafo,ProductContainer)
        ProductContainer.style.display='none';
    } else{
        
        parrafo.style.display='none';
        // cartModal.replaceChild(ProductContainer,parrafo);
        ProductContainer.style.display='block';
    }
    
});


//Mostrar Modal de la cantidad del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const ProductContainer = document.querySelector('.cart-modal__chekout-container');


cartIconBtn.addEventListener('click',()=>{
    
    cartModal.classList.toggle('show');
    priceModal.innerHTML=`$125 x ${cartNotification.innerText=userInputNumber}=<span>${cartNotification.innerText=userInputNumber*125}.00</span>`;
    cartNotification.innerText=userInputNumber;
    
    if(userInputNumber==0){
        parrafo.innerHTML="Producto vacio";
        parrafo.classList.add('texto-vacio');
        parrafo.style.display='block';
        cartModal.appendChild(parrafo);
        ProductContainer.style.display='none';
    }
    // else{
    
    //     parrafo.style.display='none';
    //     cartModal.remove(parrafo);
    //     ProductContainer.style.display='block';
    // }
});

//Borrar el contenido del carrito 
const deleteProductBtn = document.querySelector('.cart-modal__delete');

deleteProductBtn.addEventListener('click',()=>{
    userInputNumber=0;
    cartNotification.innerText=userInputNumber;
    userInput.value=userInputNumber;
    parrafo.innerHTML="Producto vacio";
    parrafo.classList.add('texto-vacio');
    parrafo.style.display='block';
    cartModal.appendChild(parrafo);
    ProductContainer.style.display='none';
});



//Carrusel de imagenes
const imageContainer=document.querySelector('.gallery__image-conteiner'); 
let nextGalleryBtn= document.querySelector('.gallery__next');
let previusGalleryBtn= document.querySelector('.gallery__previus');
let imgIndex=1;
// const imgUrls=['../img/image-product-1.jpg',
// "../img/image-product-2.jpg",
// "../img/image-product-3.jpg",
// "../img/image-product-4.jpg"];


nextGalleryBtn.addEventListener('click',()=>{
   
    changeNextImage(imageContainer);
    
});

previusGalleryBtn.addEventListener('click',()=>{
    changePreviusImage(imageContainer);
    
});

//Carrusel de imagenes Modal
const previusModalBtn= document.querySelector('.modal-gallery__previus');
const nextModalBtn= document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click',()=>{
    changeNextImage(modalImageContainer);
    
});

previusModalBtn.addEventListener('click',()=>{
    changePreviusImage(modalImageContainer);
    
});



//Mostrar Modal En EL ESCRITORIO
const imageModal=document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click',()=>{
    imageModal.style.display='block';
});

closeModalBtn.addEventListener('click',()=>{
    imageModal.style.display='none';
});

//Mostrar NAVBAR En EL TELEFONO
const headerMenu= document.querySelector('.header__menu');
const modalNavbarBackground = document.querySelector('.modal-navbar__background');
const modalNavbarCloseIcon=document.querySelector('.modal-navbar__close-icon');

headerMenu.addEventListener('click',()=>{
    modalNavbarBackground.style.display='block';
});

modalNavbarCloseIcon.addEventListener('click',()=>{
    modalNavbarBackground.style.display='none';
});


//Cambiar Imagenes en El ESCRITORIO

let thumbnails = document.querySelectorAll('.gallery__thumnail');

[...thumbnails].forEach(thumbnail=>{
    thumbnail.addEventListener('click',e=>{
        
    imageContainer.style.backgroundImage=`url("./img/image-product-${e.target.id}.jpg")`;
    imageContainer.style.backgroundPositioY='-35px';
    imageContainer.style.backgroundSize='cover';
   

//     let x = window.getComputedStyle(imageContainer)
// console.log(  imageContainer.style.backgroundImage=`url("../img/image-product-${e.target.id}.jpg")`,x.backgroundImage)
    });
});



//Cambiar Imagenes en El Modal
let modathumbnails = document.querySelectorAll('.modal-gallery__thumnails');
const modalImageContainer = document.querySelector('.modal-gallery__image-conteiner');
[...modathumbnails].forEach(modathumbnail=>{
    modathumbnail.addEventListener('click',e=>{
       
        modalImageContainer.style.background=`url("./img/image-product-${e.target.id.slice(-1)}.jpg")`;
        modalImageContainer.style.backgroundPositioY='-35px';
        modalImageContainer.style.backgroundSize='cover';
 
    });
});



//Funciones
function changeNextImage(imgContainer){
    if (imgIndex==4) {
        imgIndex=1;
    }else{
        imgIndex++;
    }
    imgContainer.style.background=`url("./img/image-product-${imgIndex}.jpg")`;
    imgContainer.style.backgroundPositioY='-35px';
    imgContainer.style.backgroundSize='cover';
    
    
}

function changePreviusImage(imgContainer){
    if (imgIndex==1) {
        imgIndex=4;
    }else{
        imgIndex--;
    }
    
    imgContainer.style.background=`url("./img/image-product-${imgIndex}.jpg")`;
    imgContainer.style.backgroundPositioY='-35px';
    imgContainer.style.backgroundSize='cover';
    
}


function myFunction(x) {
    if (x.matches) { // If media query matches
    
      imageContainer.addEventListener('click',()=>{
        imageModal.style.display='none';
    });
    } 
  }
  
  var x = window.matchMedia("(max-width: 1000px)");
  myFunction(x); // Call listener function at run time
  x.addEventListener('load',myFunction); // Attach 