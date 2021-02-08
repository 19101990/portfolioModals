const itemLinks = document.querySelectorAll('.item-link')
const modals = document.querySelectorAll('.portfolio-modal')
const closeButtons = document.querySelectorAll('.modal-close')

itemLinks.forEach((item, index) => {
    item.addEventListener('click', () => {
        modals[index].classList.add('show')
    })
    closeButtons[index].addEventListener('click', () => {
        modals[index].classList.remove('show')
    })
})

