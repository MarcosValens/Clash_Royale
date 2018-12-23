import {token, url, urlJoan} from "../utils/constants.js"
import {Player} from "../model/Player.js"
import {Card} from "../model/Card.js"
import {Chest} from "../model/Chest.js"

export async function getMember(urlTag) {

    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'players/' + urlTag,
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

    let member = await response.json()
    let cards = member.cards.map(card => {
        return new Card(card.count, card.iconUrls.medium, card.id, card.level, card.maxLevel, card.name)
    })
    let chests = await getChests(urlTag)
    return new Player(member.tag, member.name, member.role, member.trophies, member.arena.name, member.donations, member.donationsReceived, member.wins, member.losses, cards, chests)
}

async function getChests(urlTag) {

    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url + 'players/' + urlTag + '/upcomingchests',
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

    let chests = await response.json()
    chests = chests.items.map(chest => {
        return new Chest(chest.index,chest.name)
    })
    return chests
}
