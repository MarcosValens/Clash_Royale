import app from '../images/App_Icon.png'
import clash from '../images/Clash_Royale.png'
import logo from '../images/logo-1.png'
import {
    getSpanishClans,
    getClanByName,
    getClanByTag,
    getClanByLocation,
    getClanByLocationAndName
} from "../service/clanService.js"
import {getLocations} from "../service/locationService.js"
import {headTable} from "../utils/constants.js"
import {locationsFilter} from "../utils/auxFunctions.js"
import {MDCSelect} from "@material/select"
import {MDCTopAppBar} from "@material/top-app-bar/index"
import {MDCRipple} from "@material/ripple"
import {MDCTextField} from '@material/textfield'


document.getElementById('icon').href = app
let locations

(async function () {
    document.getElementById('logo').src = logo
    if (document.querySelector('.mdc-text-field')) {
        document.querySelectorAll('.mdc-text-field').forEach(e => {
            new MDCTextField(e)
        })
    }
    const topAppBarElement = document.querySelector('.mdc-top-app-bar')
    new MDCTopAppBar(topAppBarElement)
    if (document.querySelector('.mdc-button')) {
        new MDCRipple(document.querySelector('.mdc-button'))
    }
    locations = await getLocations()
    if (document.querySelector('.mdc-list')) {
        document.querySelector('.mdc-list').innerHTML += '<li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>'
    }
    if (document.querySelector('.mdc-select')) {
        const select = new MDCSelect(document.querySelector('.mdc-select'))
        select.listen('MDCSelect:change', () => {
            if (document.getElementById('clanTag').value) {
                document.getElementById('clanTag').value = ""
                document.getElementById('search').disabled = false
            }
            document.getElementById('search').name = select.value
        })
    }
    if (document.querySelector('.mdc-list')) {
        locations.forEach(function (location) {
            document.querySelector('.mdc-list').innerHTML += '<li class="mdc-list-item" data-value=' + location.id + '>' + location.name + '</li>'
        })
    }

    document.querySelectorAll('input').forEach(function (input) {
        input.addEventListener("input", function () {
            document.getElementById('search').disabled = !!(document.getElementById('clanName').value && document.getElementById('clanTag').value)
        })
    })
    let clans = await getSpanishClans()
    document.querySelectorAll('input').innerHTML = headTable
    drawTable(clans)
})()

if (document.getElementById('search')) {
    document.getElementById('search').addEventListener('click', async function () {
        if (document.getElementById('clanName').value && !document.querySelector('.mdc-select__selected-text').innerHTML) {
            let clanName = await getClanByName()
            checkResults(clanName)
        } else if (document.getElementById('clanTag').value) {
            let clanTag = await getClanByTag()
            checkResults(clanTag)
        } else if (!document.getElementById('clanName').value && document.querySelector('.mdc-select__selected-text').innerHTML) {
            let location = locationsFilter(locations)
            let clanLocation = await getClanByLocation(location)
            checkResults(clanLocation)
        } else if (document.getElementById('clanName').value && document.querySelector('.mdc-select__selected-text').innerHTML) {
            let location = locationsFilter(locations)
            let nameLocation = await getClanByLocationAndName(location)
            checkResults(nameLocation)
        } else alert("Introduce un valor")
    })
}

function drawTable(clans) {
    let table = headTable
    document.getElementById('list').innerHTML = table
    clans.forEach(function (clan) {
        let tag = clan.tag
        tag = tag.split('#').join('%23')
        table += '<tr>'
        table += '<td><button onclick="location.href=\'clan.html?tag=' + tag + '\'">'
        table += '<img src="' + clash + '" alt="clanButton" width="256" height="256">'
        table += '</button>' + clan.name + '</td>'
        table += '<td>' + clan.tag + '</td>'
        table += '<td>' + clan.nMember + '</td>'
        table += '<td>' + clan.chestLvl + '</td>'
        table += '<td>' + clan.score + '</td>'
        table += '<td>' + clan.country + '</td>'
        table += '</tr>'
    })
    document.getElementById('list').innerHTML = table
}

function checkResults(clan) {
    console.log(clan)
    if (clan.length > 0) {
        drawTable(clan)
    } else document.getElementById('list').innerHTML = "SIN RESULTADOS"
}
