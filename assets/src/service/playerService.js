/*EJECUTAR npm run build PARA VER LAS FUENTES CORRECTAMENTE!!!!*/

import {token, url, urlJoan} from "../utils/constants.js"
import {Player} from "../model/Player.js"

export async function getMember() {
    let tag = new URLSearchParams(document.location.search).get("tag")
    let urlTag = tag.split('#').join('%23')
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url:url + 'players/' + urlTag,
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
    console.log(member)
    return new Player (member.tag,member.name,member.role,member.trophies,member.arena.name,member.donations,member.donationsReceived,member.wins,member.losses)
}
