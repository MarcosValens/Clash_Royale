/*EJECUTAR npm run build PARA VER LAS FUENTES CORRECTAMENTE!!!!*/

import {icon, logo as lg} from "../utils/constants.js"
import '../service/clanService.js'
import '../service/locationService.js'
import '../service/playerService.js'
import '../model/Clan.js'
import '../model/Player.js'
import '../model/Location.js'
import '../utils/material.js'
import '../utils/auxFunctions.js'
import '../utils/constants.js'
import '../scss/index.scss'
import '../fonts/Supercell-magic-webfont.generated.woff'

import i0 from '../images/0.png'
import i1 from '../images/1.png'
import i2 from '../images/2.png'
import i3 from '../images/3.png'
import i4 from '../images/4.png'
import i5 from '../images/5.png'
import i6 from '../images/6.png'
import i7 from '../images/7.png'
import i8 from '../images/8.png'
import i9 from '../images/9.png'
import i10 from '../images/10.png'
import i11 from '../images/11.png'
import i12 from '../images/12.png'
import i13 from '../images/13.png'
import i14 from '../images/14.png'
import i15 from '../images/15.png'
import i16 from '../images/16.png'
import app from '../images/App_Icon.png'
import clash from '../images/Clash_Royale.png'
import cryKing from '../images/CryingKing.png'
import smileKing from '../images/kingSmile.png'
import logo from '../images/logo-1.png'


icon.href = app

let clashLogo = new Image()
clashLogo.src = logo
lg.appendChild(clashLogo)


if(document.getElementById('member')){
    document.getElementById('member').style.backgroundImage = "url('"+i16+"')"
}


