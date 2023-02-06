//--GALLERY
const gallereProfy = document.querySelector('.gallery__profy')
const gallereTourusts = document.querySelector('.gallery__tourusts')
const gallereNature = document.querySelector('.gallery__nature')
document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('gallery__item-link')) {
        filter(e.target.dataset.f)
    }
})
function filter(viev) {
    switch (viev) {
        case 'tourusts':
            gallereProfy.classList.add('hide')
            gallereTourusts.classList.remove('hide')
            gallereNature.classList.add('hide')
            break;
        case 'nature':
            gallereTourusts.classList.add('hide')
            gallereNature.classList.remove('hide')
            gallereProfy.classList.add('hide')
        case 'profy':
            gallereTourusts.classList.add('hide')
            gallereProfy.classList.remove('hide')
            gallereNature.classList.add('hide')
        default:
            break;
    }
}