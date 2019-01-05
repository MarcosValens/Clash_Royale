import {Card} from "./Card"

export function BattleLog(deck, trophyChange) {
    this.deck = deck.map(card => new Card(null, card.iconUrls.medium, card.id, card.level, card.maxLevel, card.name))
    this.trophyChange = trophyChange || null
}
