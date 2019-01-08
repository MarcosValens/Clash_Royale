import {Clan} from "../model/Clan.js"
import {arrayCheck} from "../utils/auxFunctions.js"
import {Player} from "../model/Player.js"
import {url, token, urlJoan} from "../utils/constants.js"

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
    let name = document.getElementById('clanName').value
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
    if (tag === null) tag = document.getElementById('clanTag').value
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
    let name = document.getElementById('clanName').value
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

export async function getClanMembers(tag) {

    let urlTag = tag.split('#').join('%23')
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'clans/' + urlTag + '/members',
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

    let members = await response.json()
    members = members.items.map(member => new Player
    (member.tag, member.name, member.role, member.trophies, member.arena.name, member.donations, member.donationsReceived))
    return members
}
