/*EJECUTAR npm run build PARA VER LAS FUENTES CORRECTAMENTE!!!!*/

import {selector} from "./constants.js"
import {Clan} from "../model/Clan.js"

/**
 * locationsFilter it serves to select the chosen location through the select that is in index.html
 * @param locations --> its an array with all locations returned from the API
 * @returns {*} --> single location id filtered from location variable
 */
export function locationsFilter(locations) {
    let location = locations.filter(loc => {
        if (loc.name === selector.innerHTML) {
            return loc
        }
    })
    return location[0].id
}

/**
 * arrayCheck exist just for transform the object returned from the API in to an array of Clan(s)
 * @param clans --> object obtained from API
 * @returns {*} --> array of clan(s)
 */
export function arrayCheck(clans) {
        clans = clans.items.map(clan => {
            return new Clan(clan.tag, clan.name, clan.members, clan.clanChestLevel, clan.clanScore, clan.location.name, clan.description)
        })
        return clans
}
