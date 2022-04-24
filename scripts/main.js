import { GuestList } from "./guests.js"
import { ParkAreas } from "./parkAreas.js"
/* 
What are the main resources ?

- Park Areas
- Guests
- Services

What are the properies of each resource?

- Park Areas
    - id
    - name
    - location

- Services
    - id
    - name

- Guests
    - id 
    - first name
    - last name
    - park area id
    - service id

- park area / services
    - id 
    - service id
    - park area id

what is the relationship between the resources? 

- park area to guest
    - one to many

- park area to service
    - many park areas to many services
    - need intermediary

- services to guest
    - one to many

What modules should you create?

- guests module
    - populates guests in the park

- park areas module 
    - populates park areas 

- services module
    - populates services inside of park areas

- main module 
    - pull from other modules and push to the DOM

what functions should be in which modules?

- guest module
    - function to get guests names and convert them into an html list

- services module
    - function to get park services based on park area and create and html list

- park areas module
    
What is the responsibility of each function ?

What should each function return? 

What is the specific algorithm for each function? Does it need parameters? Should it return something?

 */

/* 
header and footer modules

header module contains function to make header html text
function creates string containing 'header' 'logo image url ' 'h1' 'park name' '/h1' '/header'
return string

footer module contains function to make footer html text
functin creates string containing 'footer' 'p' 'phone number' '/p' 'p' 'email address' '/p' 'p' 'street address' '/p' '/footer'
*/
/* 
*****Modules*****
1. main.js
2. documents.js
3. guests.js
4. parkAreas.js
5. header.js
6. footer.js
*/

const container = document.querySelector('#container')

container.innerHTML = `
${ParkAreas()}
<h1>Guests In Park</h1>
${GuestList()}
`





























