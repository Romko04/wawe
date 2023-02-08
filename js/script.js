//--GALLERY
const galleryNode = document.querySelectorAll('.gallery__items')
let modalGallery = document.querySelector('.modal__content')
let modal = document.querySelector('.modal')
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
function filter(viev) {
    if (viev === 'all') {
        galleryNode.forEach(i => i.classList.remove('hide'))
        return
    }
    galleryNode.forEach(v => v.dataset.f === viev? v.classList.remove('hide'): v.classList.add('hide'))
}
function addActiveClass(e) {
    let currentItem = document.querySelector('.gallery__item-link--active')
    currentItem.classList.remove('gallery__item-link--active')
    currentItem = e.target
    currentItem.classList.add('gallery__item-link--active')
}
function openModal(src) {
    const modalHtml = `
     <img class="modal__content-img" src="${src}" alt="">
     `
    modalGallery.innerHTML = modalHtml
    document.body.classList.add('scroll--block')
    modal.classList.add('modal--active')
}
function closeModal() {
    modal.classList.remove('modal--active')
    document.body.classList.remove('scroll--block')

}
 
 //--MODAL

