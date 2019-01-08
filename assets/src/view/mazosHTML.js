import {getBestSpainPlayers} from "../service/locationService.js"
import {betterPlayers} from "../utils/auxFunctions.js"
import {Player} from "../model/Player.js"
import {getBattleLogs, getMember} from "../service/playerService.js"
import {MDCIconToggle} from "@material/icon-toggle"


if (window.location.href.indexOf("mazos") !== -1) {
    window.onload = async function () {

        let member = await getMember()
        let cards = member.cards
        let bestSpainPlayers = await getBestSpainPlayers()
        let filterBetterPlayers = betterPlayers(bestSpainPlayers).map(player => new Player(player.tag, player.name, null, player.trophies, player.arena))
        let bLogsPlayers = await getBattleLogs(filterBetterPlayers)
        let simpleBlogsArray = bLogsPlayers.flat()
        simpleBlogsArray = simpleBlogsArray.filter(bLog => bLog.trophyChange > 0)
        simpleBlogsArray.sort((a, b) => parseFloat(b.trophyChange) - parseFloat(a.trophyChange))
        let decks = []
        simpleBlogsArray.forEach(bLogs => {
            let tmp = []
            bLogs.deck.forEach(cardFromBlog => {
                cards.forEach(cardActualPlayer => {
                    if (cardFromBlog.id === cardActualPlayer.id && cardFromBlog.level === cardActualPlayer.level) {
                        tmp.push(cardFromBlog)
                    }
                })
            })
            if (tmp.length === 8) {
                decks.push(tmp)
            }

        })
        decks = decks.slice(0, 10)
        let innerHTML = ""
        if (decks.length === 0) {
            innerHTML = '<p>' + "No tienes ningun mazo disponible" + '</p>'
        } else {
            let i = 1
            decks.forEach(deck => {
                innerHTML += '<p>mazo ' + i + '</p>'
                innerHTML += '<ul class="mdc-image-list standard-image-list mdc-image-list--with-text-protection">'
                deck.forEach(card => {
                    innerHTML += '<li class="mdc-image-list__item">'
                    innerHTML += '<div class="mdc-card my-card">'
                    innerHTML += '<div class="mdc-card__media mdc-card__media--square">'
                    innerHTML += '<img src="' + card.iconUrl + '" alt="CardImage" class="card"><div class="mdc-image-list__supporting">'
                    innerHTML += '<span class="mdc-image-list__label">Nivel ' + card.level + '</span></div></div>'
                    innerHTML += '<div class="mdc-card__actions">'
                    innerHTML += '<div class="mdc-card__action-buttons">'
                    innerHTML += '<div class="info">' + card.name + ' </div > '
                    innerHTML += '<div class="mdc-card__action-icons">'
                    innerHTML += '<i class="fav mdc-icon-toggle material-icons" role="button" aria-pressed="false" ' +
                        'aria-label="Add to favorites" tabindex="0" data-toggle-on=\'{"label": "Remove from favorites", ' +
                        '"content": "favorite"}\' data-toggle-off=\'{"label": "Add to favorites", ' +
                        '"content": "favorite_border"}\'>favorite_border</i>'
                    innerHTML += '<button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" ' +
                        'title="Compartir">share</button>'
                    innerHTML += '<button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" ' +
                        'title="Otras opciones">more_vert</button>'
                    innerHTML += '</div></div></div></li>'
                })
                innerHTML += '</ul>'
                i++
            })
        }
        document.getElementById('cards').innerHTML = innerHTML
    }
}

