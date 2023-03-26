const som = document.querySelector('#som'),
    usd = document.querySelector('#usd'),
    euro = document.querySelector('#euro')
const convert = (elem, target, target2, ) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "Application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach(function(e) {
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2)
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2)
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2)
                }
            })
            elem.value === '' && (target.forEach(e => e.value = ''))
        }
        request.onerror = () => {
            console.error("Произошла ошибка!")
        }
    }
}
convert(som,[usd,euro])
convert(usd ,[som,euro])
convert(euro,[som,usd])


