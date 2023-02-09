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
function carousel() {
    const slides = document.querySelectorAll('.slider__item')
    slidesList = []
    slides.forEach(i=>{slidesList.push(i)})
    step = 1
    setInterval(() => {
        step === slidesList.length ? step = 0 : null
        slides.forEach(i => !i.classList.contains('hide')? i.classList.add('hide'):'')
        btnSlide = document.querySelector(`[value=${step}]`)
        btnSlide.classList.remove('btn--active')
        slidesList[step].classList.remove('hide')
        step ++
        btnSlide = document.querySelector('#'+step)
        btnSlide.classList.add('btn--active')
        

    }, 1000);
    
}
carousel()
