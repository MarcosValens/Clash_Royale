import {MDCTextField} from '@material/textfield';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const select = new MDCSelect(document.querySelector('.mdc-select'));
document.querySelectorAll('.mdc-text-field').forEach(e=>{
    new MDCTextField(e);})

select.listen('MDCSelect:change', () => {
    alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});
