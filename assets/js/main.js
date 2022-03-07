const toggleheader = document.getElementById('header__toggle')
const headerNav = document.getElementById('header__nav') 
const closeHeader = document.getElementById('header__close') 
const listHeaderItem = document.querySelectorAll('.header__list .header__item');
const header = document.getElementById('header')
const scrollToTop = document.querySelector('.scrollToTop')


/* ========= SHOW HEADER ON MOBILE =========*/
if (toggleheader) {
    toggleheader.addEventListener('click', () => {
        headerNav.classList.add('show-menu') 
    })
}

if (closeHeader) {
    closeHeader.addEventListener('click', () => {
        headerNav.classList.remove('show-menu') 
    })
}

listHeaderItem.forEach(item => {
    item.addEventListener('click', () => {
        headerNav.classList.remove('show-menu') 
    })
})

/* ========= SCROLL CHANGE BACKGROUND HEADER ON MOBILE =========*/
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('change-header');
        scrollToTop.classList.add('upToTop')
    } else {
        header.classList.remove('change-header');
        scrollToTop.classList.remove('upToTop')
    }
})



/* ========= MIXLTUP =========*/
var mixerProducts = mixitup('.card__list', {
    selectors: {
        target: '.card__item'
    },
    animation: {
        duration: 300
    }
});

mixerProducts.filter('.delicacies')

const productList = document.querySelectorAll('.products__item')

const refreshActiveProduct = () => {
    productList.forEach(item => {
        item.classList.remove('active-product')
    })
}

productList.forEach(item => {
    item.addEventListener('click', () => {
        refreshActiveProduct()
        item.classList.add('active-product')
    })
})

if (scrollToTop) {
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({top: 0})
    })
}