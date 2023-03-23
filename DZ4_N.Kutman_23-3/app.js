const wrapper = document.querySelector('.anime')

const rqst = new XMLHttpRequest()
rqst.open('GET', 'data.json')
rqst.setRequestHeader('Content-type', 'application/json')
rqst.responseType = 'json'
rqst.send()

rqst.onload = () => {
    const data = rqst.response
    data.forEach(people => {
        const box = document.createElement('div'),
            name = document.createElement('h2'),
            series = document.createElement('span'),
            ageRating = document.createElement('span'),
            year = document.createElement('span'),
            imgBox = document.createElement('img')

        imgBox.src = people.url
        name.textContent = people.name
        series.textContent = `Серии : ${people.series}`
        ageRating.textContent = `Возрастной рейтинг : ${people.ageRating}`
        year.textContent = `Год выпуска : ${people.year}`
        box.classList.add('box')

        wrapper.appendChild(box)
        box.appendChild(imgBox)
        box.appendChild(name)
        box.appendChild(series)
        box.appendChild(ageRating)
        box.appendChild(year)
    })
}