/*

park areas

park areas are displayed with the name of each area and the services provided within.  
    - each park area has multiple services
    - some types of services exist in multiple park areas,
    - a parkAreaServices table has been created to organize which services exist in which park areas

what will the park areas module do?
    The park areas module will go through each park area and use the data to determine which services exist in each area
    then the module will create an HTML string that is composed of each park area and its respective services to be pushed to the DOM

    **steps**
    - export park areas from the database
    - export services from the database
    - export parkareaservices from the database
    - split the responsibilites into multiple functions
    

    1. take each indiviual park area and use the parkareaservices table to see which services exist in that area
    2. take the services for that park area and put them into their own array
    3. take the park area and the array of services and pull the names out into an html string. 
    4. output that string to the DOM

    ***pseudocode***

    export getParkAreas = (f) {
        database.parkAreas.Map(function to copy park areas into array)
    }
    export getServices = (f) {
        database.services.Map(function to copy services into array)
    }
    export getParkAreaServices = (f) {
        database.parkAreaServices.Map(function to copy park areas services into array)
    }

    -------------------------------------------------------------------------------------

    import { getParkAreas, getServices, getParkAreaServices} from 'database'

    const parkAreas = getParkAreas()
    const services = getServices()
    const parkAreaServices = getParkAreaServices()

    // create a function that iterates parkAreas and creates a new array containing all services for that park area

    // if parkArea.id === parkAreaService.parkAreaId && service.id === parkAreaService.serviceId, push service into new array and return the service when done.

    goal - get all services for each park area
        - pick a park area
        - check parkAreaServices for matching park area id
        - if ids match, check parkAreaservices for service id
        - push corresponding service into new array


    const pairedServicesArrayMaker = (area, services, indexArray) {
            for (const index of indexes) {
                if (area.id === index.parkAreaId) {
                    const array = services.filter(service => service.id === index.serviceId)
                }
            }
        return array
    }

    
    define a function 'arraymaker' that takes an area object, a services array, and an index array of area/service pairings as parameters

    -iterate index array
        -if area id matches the area id in the index
            filter the services array for services that match that index
            return array of services for that area
    
    define function 'serviceNames' that takes outpuf from 'arraymaker' as parameter
    define a string 'ul'
    - iterate pairedServicesArray
    add '/ul' to string
        - return list of service names as a string

    define a function 'ParkAreas'
    define string 'section'
    iterate through park areas
        for each park area
        - add park area name to string
        - add 'serviceNames' to string
    add '/section' to string
    return string

 */

import { getParkAreas, getParkAreaServices, getServices } from "./database.js";

const parkAreas = getParkAreas()
const services = getServices()
const parkAreaServices = getParkAreaServices()

const pairedServicesArray = (area, servicesArray, indexArray) => {
    let arrayOfServices = []
    for (const index of indexArray) {
        if (area.id === index.parkAreaId) {
            arrayOfServices = servicesArray.filter(service => service.id === index.serviceId)
        }
    }
    return arrayOfServices
}

const serviceNames = (servicesArray) => {
    let html = "<ul>"
    for (const service of servicesArray) {
        html += `<li>${service.name}</li>`
    }
    html += "</ul>"
    return html
}

export const ParkAreas = () => {
    let html = `<section>`
    for (const area of parkAreas) {
        html += `<h1>${area.name}</h1>
        ${serviceNames(pairedServicesArray(area, services, parkAreaServices))}
        </section><section>`
    }
    html += `</section>`
    return html
}

// ************************************ service names only displaying one service ********************************************