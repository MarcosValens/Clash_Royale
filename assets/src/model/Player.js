import {Arena} from "./Arena.js"

export function Player(tag, name, role, trophies, arena, donations, donationsReceived, wins, losses, cards, chests, battleLog) {
    this.name = name
    this.tag = tag
    this.role = role
    this.trophies = trophies
    this.arena = new Arena(arena.id, arena.name)
    this.donations = donations
    this.donationsReceived = donationsReceived
    this.wins = wins
    this.losses = losses
    this.cards = cards
    this.chests = chests
    this.battleLog = battleLog
}

