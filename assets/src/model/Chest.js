import wooden from '../images/WoodenChest.png'
import crown from '../images/Crown_Chest.png'
import silver from '../images/SilverChest.png'
import golden from '../images/GoldenChest.png'
import magical from '../images/MagicalChest.png'
import giant from '../images/Giant_Chest.png'
import epic from '../images/Epic_Chest.png'
import legendary from '../images/Legendary_Chest.png'
import lighting from '../images/Lighting_Chest.png'
import megaLighting from '../images/chest-megalightning.png'
import fortune from '../images/Fortune_Chest.png'
import king from '../images/King_Chest.png'
import legendaryKing from '../images/Legendary King Chest.png'
import draft from '../images/Draft_Chest.png'
import challange from '../images/challenge_chest.png'
import clanWar from '../images/Clan_War_Chest.png'

export function Chest(index, name) {
    this.index = index
    this.name = name
    let image
    switch (name) {
        case "Wooden Chest":
            image = wooden
            break
        case "Crown Chest":
            image = crown
            break
        case "Silver Chest":
            image = silver
            break
        case "Golden Chest":
            image = golden
            break
        case "Magical Chest":
            image = magical
            break
        case "Giant Chest":
            image = giant
            break
        case "Epic Chest":
            image = epic
            break
        case "Legendary Chest":
            image = legendary
            break
        case "Lightning Chest ":
            image = lighting
            break
        case "Mega Lightning Chest":
            image = megaLighting
            break
        case "Fortune Chest":
            image = fortune
            break
        case "King Chest ":
            image = king
            break
        case "Legendary King Chest":
            image = legendaryKing
            break
        case "Draft Chest":
            image = draft
            break
        case "Challenge Chest":
            image = challange
            break
        case "Clan War Chest":
            image = clanWar
            break
    }
    this.image = image
}
