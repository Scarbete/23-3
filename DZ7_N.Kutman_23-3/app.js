async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=28')
    return await response.json()
}

async function render() {
    const news = await getPosts()
    const box = document.querySelector('.cards_container')

    news.forEach((item) => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <img src='https://picsum.photos/400/200?random=${item.id}' alt='#'>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        `
        box.appendChild(card)
    })
}

render().catch(error => console.error(error))