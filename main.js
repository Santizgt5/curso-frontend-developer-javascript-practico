const navbarEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    productDetail.classList.add('inactive');
    dektopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    dektopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({ 
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/6527053/pexels-photo-6527053.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6527053.jpg&fm=jpg'
});

productList.push({ 
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Car',
    price: 1200,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({ 
    name: 'Air conditioner',
    price: 160,
    image: 'https://images.pexels.com/photos/5539540/pexels-photo-5539540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({ 
    name: 'Fridge',
    price: 900,
    image: 'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


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
        document.querySelector('.cards-container').appendChild(productItem);
    }
}

renderProducts(productList);