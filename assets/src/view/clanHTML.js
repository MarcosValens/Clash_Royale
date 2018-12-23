import clash from '../images/Clash_Royale.png'
import {getClanByTag, getClanMembers} from "../service/clanService.js"
import {headTableMembers} from "../utils/constants.js"

export let card
if (document.querySelector('.mdc-card')) {
    card = document.querySelector('.mdc-card').childNodes
}

if (window.location.href.indexOf("clan") !== -1) {
    window.onload = async function () {
        let clan = await getClanByTag()
        let members = await getClanMembers(clan[0].tag)
        card[1].childNodes[1].children[0].children[0].innerHTML = clan[0].name
        card[1].childNodes[1].children[1].children[0].innerHTML = clan[0].tag
        card[1].childNodes[1].children[2].children[0].innerHTML = clan[0].country
        card[3].children[0].innerHTML = clan[0].description
        drawTable(members)
    }
}

function drawTable(members) {
    let table = headTableMembers
    list.innerHTML = table
    members.forEach(function (member) {
        let tag = member.tag
        tag = tag.split('#').join('%23')
        table += '<tr>'
        table += '<td><button id="' + member.name + '" onclick="location.href=\'player.html?tag=' + tag + '\'">'
        table += '<img src="' + clash + '" alt="memberButton" width="256" height="256">'
        table += '</button>' + member.name + '</td>'
        table += '<td>' + member.tag + '</td>'
        table += '<td>' + member.role + '</td>'
        table += '<td>' + member.trophies + '</td>'
        table += '<td>' + member.arena + '</td>'
        table += '<td>' + member.donations + '</td>'
        table += '<td>' + member.donationsReceived + '</td>'
        table += '</tr>'
    })
    list.innerHTML = table
}
