import {token, url, urlJoan} from "../utils/constants.js"
import {Player} from "../model/Player.js"
import {Card} from "../model/Card.js"
import {Chest} from "../model/Chest.js"
import {BattleLog} from "../model/BattleLog.js"
import {parseTag} from "../utils/auxFunctions.js"

export async function getMember() {

    let urlTag = parseTag()
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
    return new Player(member.tag, member.name, member.role, member.trophies, member.arena, member.donations, member.donationsReceived, member.wins, member.losses, cards, chests)
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
        return new Chest(chest.index, chest.name)
    })
    return chests
}

export async function getBattleLogs(players) {
    let battleLogs = []
    players.forEach(function (player) {
        let objTract = {
            MethodName: 'sendAPI',
            params: {
                url: url + 'players/' + player.tag + '/battlelog',
                token: token
            }
        }

        const response = fetch(urlJoan, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify(objTract)
        })
        battleLogs.push(response)
    })
    let promisesBLogs = await Promise.all(battleLogs)
    let toJSON = promisesBLogs.map(bLog => bLog.json())
    let fetchResult = await Promise.all(toJSON)
    let PVPLogForEachPlayer = []
    fetchResult.forEach(player => {
        let tmp = player.filter(bLog => bLog.type === "PvP")
        PVPLogForEachPlayer.push(tmp)
    })
    return PVPLogForEachPlayer.map(player => player.map(bLog =>
        new BattleLog(bLog.team[0].cards, bLog.team[0].trophyChange)))
}
