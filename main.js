const navbarEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');
const productDetailTwo = document.querySelector('.product-detail-two');
// Apuntador main container
const mainContainer = document.querySelector('.main-container');


navbarEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    productDetail.classList.add('inactive');
    productDetailTwo.classList.add('inactive');
    if(!mainContainer.classList.contains('fondo')) {
        mainContainer.classList.add('fondo');
    }
    dektopMenu.classList.toggle('inactive');
    if(dektopMenu.classList.contains('inactive')) {
        mainContainer.classList.remove('fondo');
    }
}

function toggleMobileMenu() {
    productDetail.classList.add('inactive');
    productDetailTwo.classList.add('inactive');
    if(!mainContainer.classList.contains('fondo')) {
        mainContainer.classList.add('fondo');
    }
    mobileMenu.classList.toggle('inactive');
    if(mobileMenu.classList.contains('inactive')) {
        mainContainer.classList.remove('fondo');
    }
}

function toggleProductDetail() {
    dektopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailTwo.classList.add('inactive');
    if(!mainContainer.classList.contains('fondo')) {
        mainContainer.classList.add('fondo');
    }
    productDetail.classList.toggle('inactive');
    if(productDetail.classList.contains('inactive')) {
        mainContainer.classList.remove('fondo');
    }
}

const productList = [];

productList.push({
    id: 0,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({ 
    id: 1,
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/6527053/pexels-photo-6527053.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6527053.jpg&fm=jpg'
});

productList.push({
    id: 2, 
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    id: 3,
    name: 'Car',
    price: 1200,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({ 
    id: 4,
    name: 'Air conditioner',
    price: 160,
    image: 'https://images.pexels.com/photos/5539540/pexels-photo-5539540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    id: 5, 
    name: 'Fridge',
    price: 900,
    image: 'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function openProductDetail(i) {
    dektopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    if(!mainContainer.classList.contains('fondo')) {
        mainContainer.classList.add('fondo');
    }

    productDetailTwo.classList.remove('inactive');
    //Ver los detalles del producto de manera dinamica
    const detailProduct = document.createElement('div');
    detailProduct.classList.add('container-detail-two');
    detailProduct.innerHTML = `<div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src="${productList[i].image}" alt="bike">
        <div class="product-info-two">
            <p>$${productList[i].price}</p>
            <p>${productList[i].name}</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
            </button>
        </div>`;
     //Elimino el producto de la lista anterior   
    document.querySelector('.product-detail-two').removeChild(document.querySelector('.product-detail-two').firstChild);
    document.querySelector('.product-detail-two').appendChild(detailProduct);
    //Agregar el evento de cerrar el detalle del producto
    const productDetailClose = document.querySelector('.product-detail-close');
    productDetailClose.addEventListener('click', closeProductDetail);

    if(productDetailTwo.classList.contains('inactive')) {
        mainContainer.classList.remove('fondo');
    }
}

function closeProductDetail() {
    productDetailTwo.classList.add('inactive');
    mainContainer.classList.remove('fondo');

}


function renderProducts(productList) {
    for(product of productList) {
        const productItem = document.createElement('div');
        productItem.classList.add('product-card');
        productItem.innerHTML = `
        <div class="product-card">
        <img src=${product.image} alt="image">
        <div class="product-info">
          <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="Icon">
          </figure>
        </div>
      </div>`;
        const productImg = productItem.querySelector('.product-card img');
        productImg.addEventListener('click', openProductDetail.bind(null, product.id));
        document.querySelector('.cards-container').appendChild(productItem);
    }
}

renderProducts(productList);