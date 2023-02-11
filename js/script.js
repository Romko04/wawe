//--GALLERY
const galleryNode = document.querySelectorAll('.gallery__items')
let modalGallery = document.querySelector('.gallery__modal')
let counterNoname = document.querySelector('.noname__counter')
document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('gallery__item-link')) {
        addActiveClass(e)
        filter(e.target.dataset.f)
    }
    if (e.target.localName === 'img') {
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
})
document.addEventListener('scroll', (e) => {
    let noname = document.querySelector('.noname')
    let scrolTop = window.scrollY
    if (scrolTop >= noname.offsetTop && !counterNoname.classList.contains('active')) {
        const counters = document.querySelectorAll('.count__value')
        counters.forEach(e => counter(e.dataset.value, e.id))
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

//--CAROUSEL
function carousel(count) {
    chandeClassCarousel(count, true)
    slidesList = slidesFun()
    slidesList[count].classList.remove('hide')
    step = count
    interval = setInterval(() => {
        slidesList.forEach(i => !i.classList.contains('hide')? i.classList.add('hide'):'')
        chandeClassCarousel(step, false)
        step ++
        step > slidesList.length-1 ? step = 0 : null
        slidesList[step].classList.remove('hide')
        chandeClassCarousel(step, true)
    }, 1000);
}
carousel(0)
function chandeClassCarousel(count, action) {
    btnSlide = document.querySelector(`[data-value="${count}"]`)
    action?btnSlide.classList.add('btn--active'):btnSlide.classList.remove('btn--active')
}
function slidesFun() {
    const slides = document.querySelectorAll('.slider__item')
    let slidesList = []
    slides.forEach(i=>{
        slidesList.push(i)
        slides.forEach(i => !i.classList.contains('hide')? i.classList.add('hide'):'')
    })
    return slidesList
}


