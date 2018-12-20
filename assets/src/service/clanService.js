import {Clan} from "../model/Clan.js"
import {url, inputName, inputTag, token,urlJoan} from "../utils/constants.js"
import {arrayCheck} from "../utils/auxFunctions.js"



export async function getSpanishClans() {
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'clans?locationId=57000218',
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

    let clans = await response.json()
    return arrayCheck(clans)
}

export async function getClanByName() {
    let name = inputName.value
    name = name.split(' ').join('%20')

    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'clans?name=' + name,
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

    let clans = await response.json()
    return arrayCheck(clans)

}

export async function getClanByTag() {
    let array = []
    let tag = new URLSearchParams(document.location.search).get("tag")
    if (tag === null) tag = inputTag.value
    tag = tag.split('#').join('%23')
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'clans/' + tag,
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
    let clan = await response.json()
    if (clan.reason !== "notFound") {
        let clanForPush = new Clan(clan.tag, clan.name, clan.members, clan.clanChestLevel, clan.clanScore, clan.location.name, clan.description)
        array.push(clanForPush)
        return array
    } else return null
}

export async function getClanByLocation(idLocation) {
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'clans?locationId=' + idLocation,
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

    let clans = await response.json()
    return arrayCheck(clans)
}

export async function getClanByLocationAndName(idLocation) {
    let name = inputName.value
    name = name.split(' ').join('%20')
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'clans?name=' + name + '&locationId=' + idLocation,
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

    let clans = await response.json()
    return arrayCheck(clans)
}
/*https://api.clashroyale.com/v1/clans/%23PU9R9LPQ/members*/

export async function getClanMembers(tag) {

    let urlTag = tag.split('#').join('%23')
    console.log(urlTag)
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url:url + 'clans/' + urlTag + '/members',
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

    let clans = await response.json()
    return arrayCheck(clans)
}
