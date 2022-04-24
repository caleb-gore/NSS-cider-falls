const database = {
    parkAreas: [
        {
            id: 1,
            name: "Chamfort River",
            location: 'northeast',
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            location: 'northern',
        },
        {
            id: 3,
            name: "Lodge",
            location: 'northwest',
        },
        {
            id: 4,
            name: "Grander River",
            location: 'southwest',
        },
        {
            id: 5,
            name: "Campgrounds",
            location: 'southern',
        },
        {
            id: 6,
            name: "Pine Bluffs Trails",
            location: 'southeast',
        }
    ],
    services: [
        {
            id: 1,
            name: 'rafting'
        },
        {
            id: 2,
            name: 'canoeing'
        },
        {
            id: 3,
            name: 'fishing'
        },
        {
            id: 4,
            name: 'hiking'
        },
        {
            id: 5,
            name: 'picknicking'
        },
        {
            id: 6,
            name: 'rock climbing'
        },
        {
            id: 7,
            name: 'information'
        },
        {
            id: 8,
            name: 'lodging'
        },
        {
            id: 9,
            name: 'parking'
        },
        {
            id: 10,
            name: 'zip lines'
        },
    ],
    guests: [
        {
            id: 1,
            firstName: 'Al',
            lastName: 'Sheridan'
        },
        {
            id: 2,
            firstName: 'Reggie',
            lastName: 'Petra'
        },
        {
            id: 3,
            firstName: 'Trudi',
            lastName: 'Ruby'
        },
        {
            id: 4,
            firstName: 'Quinten',
            lastName: 'Braylen'
        },
        {
            id: 5,
            firstName: 'Stafford',
            lastName: 'Charnette'
        },
        {
            id: 6,
            firstName: 'Rafferty',
            lastName: 'Alberta'
        },
        {
            id: 7,
            firstName: 'Lark',
            lastName: 'Kassidy'
        },
        {
            id: 8,
            firstName: 'Kerry',
            lastName: 'Laurena'
        },
        {
            id: 9,
            firstName: 'Hunter',
            lastName: 'Gareth'
        },
        {
            id: 10,
            firstName: 'Isebella',
            lastName: 'Shevaun'
        }
    ],
    parkAreaServices: [
        {
            id: 1, 
            parkAreaId: 1,
            serviceId: 1
        },
        {
            id: 2, 
            parkAreaId: 1,
            serviceId: 2
        },
        {
            id: 3, 
            parkAreaId: 1,
            serviceId: 3
        },
        {
            id: 4, 
            parkAreaId: 2,
            serviceId: 4
        },
        {
            id: 5, 
            parkAreaId: 2,
            serviceId: 5
        },
        {
            id: 6, 
            parkAreaId: 2,
            serviceId: 6
        },
        {
            id: 7, 
            parkAreaId: 3,
            serviceId: 8
        },
        {
            id: 8, 
            parkAreaId: 3,
            serviceId: 9
        },
        {
            id: 9, 
            parkAreaId: 3,
            serviceId: 7
        },
        {
            id: 10, 
            parkAreaId: 3,
            serviceId: 5
        },
        {
            id: 11, 
            parkAreaId: 4,
            serviceId: 3
        },
        {
            id: 12, 
            parkAreaId: 4,
            serviceId: 4
        },
        {
            id: 13, 
            parkAreaId: 5,
            serviceId: 7,
        },
        {
            id: 14, 
            parkAreaId: 5,
            serviceId: 8,
        },
        {
            id: 15, 
            parkAreaId: 5,
            serviceId: 9,
        },
        {
            id: 16, 
            parkAreaId: 6,
            serviceId: 4,
        },
        {
            id: 17, 
            parkAreaId: 6,
            serviceId: 5,
        },
        {
            id: 18, 
            parkAreaId: 6,
            serviceId: 10,
        }
    ]
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkAreaService => ({...parkAreaService}))
}
