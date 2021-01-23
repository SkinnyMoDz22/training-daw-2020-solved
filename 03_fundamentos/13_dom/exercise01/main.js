window.onload = function(e) {
    console.log('documento cargado')

    document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
    console.log(document.getElementsByTagName('div'))
    console.log(document.getElementsByClassName('buttons'))
    console.log(document.querySelectorAll('div.buttons'))
}