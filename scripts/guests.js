/* 
guests

guests are listed in database with the following information
    - id
    - first name
    - last name
    - parkAreaId
    - serviceId

How is this data to be used? 
    to have names displayed in a section of the site titled "guests"

What must happen to achieve this? 
    guests names must be extracted from the database and put into a list, that list must be displayed on the front page of the site.

    **steps**
    - export guest name list from database
    - import guest name list into guest module
    - iterate guest name list
    - for each guest, create a line of HTML code containing the guests name in list format
    - return the full list of guests names

    **pseudocode**

    - export getGuests (f) {
        database.guests.map(function to make copy of guests array)
    }

    - import { getGuests } from 'database'

    const guests = getGuests()

    export const GuestList = (f) {
        let html = 'ul'
        for (const guest of guests) {
            html += 'li {guest.firstName} {guest.lastName} /li'
        }
        html += '/ul'
        return html 
    }
*/

import { getGuests } from "./database.js";

const guests = getGuests()

export const GuestList= () => {
    let html = '<ul>'
    for (const guest of guests) {
        html += `<li>${guest.firstName} ${guest.lastName}</li>`
    }
    html += '</ul>'
    return html
}
