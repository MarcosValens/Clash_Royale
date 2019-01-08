import {Location} from "../model/Location.js"
import {token, url, urlJoan} from "../utils/constants.js"

export async function getLocations() {
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'locations',
            token: token
        }
    }

    const response = await fetch(urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    })

    let locations = await response.json()
    locations = locations.items.map(location => {
        return new Location(location.id, location.name, location.isCountry, location.countryCode)
    })
    return locations
}

export async function getBestSpainPlayers() {
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'locations/57000218/rankings/players',
            token: token
        }
    }

    const response = await fetch(urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    })

    return await response.json()


}
