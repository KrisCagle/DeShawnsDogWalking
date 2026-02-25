import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target
        if (cityTarget.dataset.type === "city"){

        window.alert(`${cityTarget.dataset.walkernames} is servicing this city`)
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        const cityWalkers = walkers.filter(walker => walker.cityId === city.id)
        const walkerNames = cityWalkers.map(walker => walker.name).join(", ")

        citiesHTML += `<li data-type="city" data-walkernames="${walkerNames}">${city.name}</li>`
    }

    citiesHTML += "</ul>" 

    return citiesHTML
