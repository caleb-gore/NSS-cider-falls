import { getParkAreas, getParkAreaServices, getServices } from "./database.js"

const services = getServices()
export const Services = () => {
    let html = `
    <section class="main-services">
        <pre>Park Services:</pre>`

    for (const service of services) {
        if (service.id === services.length) {
            html += `<pre id="service--${service.id}"> ${service.name}</pre>`
        } else {
            html += `<pre id="service--${service.id}"> ${service.name},</pre>`
        }
    }
    html += `</section>`
    return html
}

// create an event listener that displays an alert message when clicking on an individual service



// when clicking on an individual service, the alert message should say "{servicename} is available in {park areas}"
// need access to the parkareas database and the parkareaservices database
// if the serviceId matches the serviceId property of the parkareaservices database, display the names of all park areas that correspond with that service Id
// first, create an array of parkArea Objects by 
const parkAreas = getParkAreas()
const parkAreaServices = getParkAreaServices()

const areasPerService = (service, parkAreasArray, indexArray) => {
    let arrayOfAreas = []
    for (const index of indexArray) {
        if (service.id === index.serviceId) {
            for (const area of parkAreasArray) {
                if (area.id === index.parkAreaId) {
                    arrayOfAreas.push(area)
                }
            }
        }
    }
    return arrayOfAreas
}

const areaNames = (areasArray) => {
    let html = ""
    for (const area of areasArray) {
        if (areasArray.indexOf(area) === areasArray.length - 1) {
            html += `${area.name}.`
        } else if (areasArray.indexOf(area) === areasArray.length -2) {
            html += `${area.name} and `
        } else {
            html += `${area.name}, `
        }
    }
    return html
}


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("service")) {
        const [, serviceId] = itemClicked.id.split("--")

        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                const area = areaNames(areasPerService(service, parkAreas, parkAreaServices))
                window.alert(`${service.name} is available in ${area}`)
            }
        }
    }
})


// document.addEventListener("click", (clickEvent) => {
    //     const itemClicked = clickEvent.target
    //     if (itemClicked.id.startsWith("parkArea")) {
        //         const [, parkAreaId] = itemClicked.id.split("--")
        
//         for (const area of parkAreas) {
//             const numOfGuests = guestsInArea(area)
//             if (area.id === parseInt(parkAreaId) && numOfGuests !== 1) {
//                 window.alert(`There are ${numOfGuests} guests in this area`)
//             } else if (area.id === parseInt(parkAreaId)) {
//                 window.alert(`There is ${numOfGuests} guest in this area`)

//             }
//         }
//     }
// })