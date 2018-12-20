/*At the beginning this file would contain only constants, but when entering additional HTML files, these constants
give errors when the selectors did not find the desired selection, the solution is to change some constants by simple
variables and check if the selectors work*/

export const url = 'https://api.clashroyale.com/v1/'
export const urlJoan = 'https://esliceu.codiblau.com/clashRoyale.php'
export const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQxMDUxOWM0LTFkODQtNDJjNi04YzY1LWZkNjcxOTQ0ZWZkOCIsImlhdCI6MTU0NTA2MzU3Nywic3ViIjoiZGV2ZWxvcGVyL2VjNWI5MjQyLTA2NzAtMjcwZi00ZWUxLTdhMGY1MDA3YTY0MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.WMceu7E5rTjLHGUjyMgao1NOP3Yh9sann8WmRMHJ46KkQBFDnkdwo7EJ5yMxd-r9wHH3qFOA1rZb9iup_ABQkQ'
export const headTable = '<table id="table-id"><tr><th>Nombre</th><th>Tag</th><th>Miembros</th><th>Nivel de cofre</th><th>Puntuacion</th><th>Pais</th></tr>'
export const headTableMembers = '<table id="table-id"><tr><th>Nombre</th><th>Tag</th><th>Rol</th><th>Donaciones</th><th>Cartas Recibidas</th></tr>'
/*Tag, nom, rol, trofeus, número de donacions donades, número de donacions
rebudes i tota la información addicional del membre*/
export let inputName
if (document.getElementById('clanName')) {
    inputName = document.getElementById('clanName')
}
export let inputTag
if (document.getElementById('clanTag')){
    inputTag = document.getElementById('clanTag')
}
export let inputs
if(document.querySelectorAll('input')){
    inputs = document.querySelectorAll('input')
}
export let options
if (document.querySelector('.mdc-list')){
    options = document.querySelector('.mdc-list')
}
export let list
if (document.getElementById('list')) {
    list = document.getElementById('list')
}
export let button
if (document.getElementById('search')){
    button = document.getElementById('search')
}
export let selector
if (document.querySelector('.mdc-select__selected-text')){
    selector = document.querySelector('.mdc-select__selected-text')
}
export let card
if (document.querySelector('.mdc-card')) {
    card = document.querySelector('.mdc-card').childNodes
}

