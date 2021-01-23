window.onload = function(e) {
    console.log('documento cargado')

    document.getElementById('enlace_1').onclick = (e) => toggle('contenidos_1')
}

function toggle(id) {
    console.log(`hide ${id}`)
    let node = document.getElementById(id)

    console.log(`hidden? ${node.hidden}`)
    node.hidden = !node.hidden
}