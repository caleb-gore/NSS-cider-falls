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

// import necessary functions from other modules
import { getParkAreas, getParkAreaServices, getServices } from "./database.js";

// call necessary functions by assigning them to a variable
const parkAreas = getParkAreas() // returns an array of park area objects
const services = getServices() // returns an array of services objects
const parkAreaServices = getParkAreaServices() // returns an array of park area service matching objects

// function takes park areas, services, and parkAreaServices as parameters
// defines an empty array
// iterates through the parkAreaServices array
// if the park area id matches the park area services parkarea id, then the empty array will now become an array of all services associated with that park area.
// function returns the array
const pairedServicesArray = (area, servicesArray, indexArray) => {
    let arrayOfServices = []
    for (const index of indexArray) {
        if (area.id === index.parkAreaId) {
            for (const service of servicesArray) {
                if (service.id === index.serviceId) {
                    arrayOfServices.push(service)
                }
            }
            // arrayOfServices = servicesArray.filter(service => service.id === index.serviceId)
        }
    }
    return arrayOfServices
}

// function creates HTML element that contains the list of services names associated with a give park area
// funciton takes the returned array from the previous function as a parameter
// defines an html string starting with an opening ul tag
// for each service in the services array, add a list item to that ul that contains the name of that service
// after cycling through all servies, add a closing ul tag
// return the html string
const serviceNames = (servicesArray) => {
    let html = "<ul>"
    for (const service of servicesArray) {
        html += `<li>${service.name}</li>`
    }
    html += "</ul>"
    return html
}

// ecported function creates the html to be pushed to the DOM
// defines an html string that starts with an opening section tag
// for each park area, the string adds an h1 element containing the park area name
// the html element adds the result of running the paired services array and the services names array
// the html element adds the closing section tag and returns the html section
export const ParkAreas = () => {
    let html = `<section class="middle-areas">`
    for (const area of parkAreas) {
        html += `<div class="areas-card"><h1>${area.name}</h1>
        ${serviceNames(pairedServicesArray(area, services, parkAreaServices))}
        </div>`
    }
    html += `</section>`
    return html
}

