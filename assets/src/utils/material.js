import {inputTag, button} from "./constants.js"
import {MDCTextField} from '@material/textfield'
import {MDCTopAppBar} from '@material/top-app-bar/index'
import {MDCRipple} from '@material/ripple'
import {MDCSelect} from '@material/select'
if (document.querySelector('.mdc-text-field')) {
    new MDCTextField(document.querySelector('.mdc-text-field'))
    document.querySelectorAll('.mdc-text-field').forEach(e => {
        new MDCTextField(e)
    })
}
const topAppBarElement = document.querySelector('.mdc-top-app-bar')
new MDCTopAppBar(topAppBarElement)
new MDCRipple(document.querySelector('.mdc-button'))
if (document.querySelector('.mdc-select')) {
    const select = new MDCSelect(document.querySelector('.mdc-select'))
    select.listen('MDCSelect:change', () => {
        if (inputTag.value) {
            inputTag.value = ""
            button.disabled = false
        }
        button.name = select.value
    })
}




