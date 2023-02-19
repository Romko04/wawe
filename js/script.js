//--GALLERY

AOS.init();
AOS.init({
    duration: 700, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
    loop: true,
    autoplay: {
        delay: 2500,
    },
});
const galleryNode = document.querySelectorAll('.gallery__items')
let modalGallery = document.querySelector('.gallery__modal')
let counterNoname = document.querySelector('.noname__counter')
const menuBody = document.querySelector('.menu__body');
document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('gallery__item-link')) {
        addActiveClass(e)
        filter(e.target.dataset.f)
    }
    if (e.target.classList.contains('gallery__img')) {
        openModal(e.target.src)
    }
    if (e.target.classList.contains('modal')) {
        closeModal()
    }
    if (e.target.classList.contains('slider__btn')) {
        const sliderBtns = document.querySelectorAll('.slider__btn')
        clearInterval(interval)
        sliderBtns.forEach(btn => btn.classList.contains('btn--active')? btn.classList.remove('btn--active'):'')
        carousel(e.target.dataset.value)
    }
    if (e.target.classList.contains('anchor')) {
        const activeAnchor = document.querySelector('.menu__link-active')
        activeAnchor.classList.remove('menu__link-active')
        e.target.classList.add('menu__link-active')
        if (menuBody.classList.contains('_active')) {
            menuBody.classList.toggle('_active');
            btn.classList.toggle('_active');
            btn.classList.contains('_active') ? document.body.classList.add('scroll--block') : document.body.classList.remove('scroll--block')
        }
        const blockId = e.target.getAttribute('href')
        document.querySelector(''+ blockId).scrollIntoView({
            behavior: "smooth",
            block: "start",
            
        })
    }
})
document.addEventListener('scroll', (e) => {
    let noname = document.querySelector('.noname')
    let heade = document.querySelector('.header')
    let poster = document.querySelector('.header__poster')
    let posterCenter = poster.offsetHeight / 2
    let scrolTop = window.scrollY
    let header = document.querySelector('.header__container')
    if (scrolTop >= noname.offsetTop && !counterNoname.classList.contains('active')) {
        const counters = document.querySelectorAll('.count__value')
        counters.forEach(e => counter(e.dataset.value, e.id))
    }
    if (scrolTop >= posterCenter) {
        header.classList.add('fixed')
         heade.style.paddingBottom = `${header.offsetHeight}px`
    } else {
        header.classList.remove('fixed')
         heade.style.paddingBottom = `0px`
    }
})
function filter(viev) {
    if (viev === 'all') {
        galleryNode.forEach(i => i.classList.remove('hide'))
        return
    }
    galleryNode.forEach(v => v.dataset.f === viev ? v.classList.remove('hide') : v.classList.add('hide'))
}
function addActiveClass(e) {
    let currentItem = document.querySelector('.gallery__item-link--active')
    currentItem.classList.remove('gallery__item-link--active')
    currentItem = e.target
    currentItem.classList.add('gallery__item-link--active')
}
function openModal(src) {
    const modalHtml = `
    <div class="modal">
        <div class="modal__content">
            <img class="modal__content-img" src="${src}" alt="">
        </div>
    </div>
     `
    modalGallery.innerHTML = modalHtml
    document.body.classList.add('scroll--block')

}
function closeModal() {
    modalGallery.innerHTML = ''
    document.body.classList.remove('scroll--block')

}
//--COUNTER

function counter(num, elem) {
    const el = document.querySelector('#' + elem)
    let time = 4000
    let step = 10
    num < 100 || num % 2 ? step = 1 : null
    let n = 0
    let t = Math.round((time / (num / step)))
    let interval = setInterval(() => {
        if (n == num) {
            clearInterval(interval)
            return
        }
        n = n + step
        el.innerHTML = n
    }, t);
    counterNoname.classList.add('active')
}


const btn = document.querySelector('.header__burger');
btn.addEventListener('click', mouseclick);
function mouseclick() {
    menuBody.classList.toggle('_active');
    btn.classList.toggle('_active');
    btn.classList.contains('_active')?document.body.classList.add('scroll--block'):document.body.classList.remove('scroll--block')

}