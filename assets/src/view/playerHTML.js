import i0 from '../images/0.png'
import i1 from '../images/1.png'
import i2 from '../images/3.png'
import i3 from '../images/4.png'
import i4 from '../images/5.png'
import i5 from '../images/7.png'
import i6 from '../images/9.png'
import i7 from '../images/10.png'
import i8 from '../images/11.png'
import i9 from '../images/12.png'
import i10 from '../images/13.png'
import i11 from '../images/14.png'
import i12 from '../images/15.png'
import i13 from '../images/16.png'
import smileKing from '../images/kingSmile.png'
import cryKing from '../images/CryingKing.png'
import {getMember} from "../service/playerService.js"
import {MDCIconToggle} from "@material/icon-toggle"


let images = [i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13]

if (document.getElementById('member')) {
    let imgSelector = Math.floor(Math.random() * 14)
    document.getElementById('member').style.backgroundImage = "url('" + images[imgSelector] + "')"
}

if (window.location.href.indexOf("player") !== -1) {
    window.onload = async function () {
        let tag = new URLSearchParams(document.location.search).get("tag")
        let urlTag = tag.split('#').join('%23')
        let member = await getMember(urlTag)
        document.getElementById('playerName').innerHTML = member.name
        document.getElementById('playerTag').innerHTML = member.tag
        document.getElementById('winsCounter').innerHTML = member.wins
        document.getElementById('lossesCounter').innerHTML = member.losses
        if ( document.getElementById('wins')) {
            let img = document.createElement('img')
            img.src = smileKing
            document.getElementById('wins').prepend(img)
        }

        if (document.getElementById('losses')) {
            let img = document.createElement('img')
            img.src = cryKing
            document.getElementById('losses').prepend(img)
        }
        let cards = '<ul class="mdc-image-list standard-image-list mdc-image-list--with-text-protection">'
        member.cards.forEach(card => {
            cards += '<li class="mdc-image-list__item">'
            cards += '<div class="mdc-card my-card">'
            cards += '<div class="mdc-card__media mdc-card__media--square">'
            cards += '<img src="' + card.iconUrl + '" alt="CardImage" class="card"><div class="mdc-image-list__supporting">'
            cards += '<span class="mdc-image-list__label">Nivel ' + card.level + '</span></div></div>'
            cards += '<div class="mdc-card__actions">'
            cards += '<div class="mdc-card__action-buttons">'
            cards += '<div class="info">' + card.name + '  X  ' + card.count + ' </div > '
            cards += '<div class="mdc-card__action-icons">'
            cards += '<i class="fav mdc-icon-toggle material-icons" role="button" aria-pressed="false" ' +
                'aria-label="Add to favorites" tabindex="0" data-toggle-on=\'{"label": "Remove from favorites", ' +
                '"content": "favorite"}\' data-toggle-off=\'{"label": "Add to favorites", ' +
                '"content": "favorite_border"}\'>favorite_border</i>'
            cards += '<button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" ' +
                'title="Share">share</button>'
            cards += '<button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" ' +
                'title="More options">more_vert</button>'
            cards += '</div></div></div></li>'
        })
        cards += '</ul>'
        document.getElementById('cards').innerHTML = cards
        let td = ""
        for (let i = 0; i < 5; i++) {
            td += '<td><img src="' + member.chests[i].image + '" alt="incomingChest">'
            td += '<div> + ' + member.chests[i].index + '</div></td>'
        }
        if (document.getElementById('chests')) {
            document.getElementById('chests').innerHTML = td
        }
        if (document.querySelector('.fav')) {
            document.querySelectorAll('.fav').forEach(e => {
                MDCIconToggle.attachTo(e)
            })
        }
    }
}
