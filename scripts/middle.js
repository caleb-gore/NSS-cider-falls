import { GuestList } from "./guests.js"
import { ParkAreas } from "./parkAreas.js"

export const Middle = () => {
    const html = `<section class="main-middle">
    ${ParkAreas()}
    ${GuestList()}
    </section>`
    return html
}

