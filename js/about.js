const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about-info')
const article = document.querySelectorAll('.content')
const about_img = document.querySelectorAll('.about-img')

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id
    if (id) {
        btns.forEach(btn => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
    }
    article.forEach(ele => {
        ele.classList.remove('active')
    })

    let element = document.getElementById(id)
    element.classList.add('active')

})