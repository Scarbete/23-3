const box = document.querySelector('.box'),
    block = document.querySelector('.block')

let count = 1

const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
            <h2>${data.title}</h2>
            <h3>ID: ${data.id}</h3>
            <h3>${data.completed}</h3>
            `
        })
        .catch(error => console.error(error))
}
getData()

box.onclick = event => {
    const target = event.target
    if (target.tagName === 'BUTTON') {
        target.onclick = event => {
            if (event.target.classList.contains('next')) {
                count++
                if (count > 200) {
                    count = 1
                }
                getData()
            } else if (event.target.classList.contains('prev')) {
                if (count > 1) {
                    count--
                }
                getData()
            }
        }
    }
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))