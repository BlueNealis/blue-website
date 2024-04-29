const technologies = require('./technologies.json')
console.log(technologies)
createTechnologyCards = () => {
    console.log(technologies)
    technologies.forEach((technology) => {
        console.log(technology.name)
        return(`<div class="technology-box">${technology.name}</div>`)
    })
}

createTechnologyCards()