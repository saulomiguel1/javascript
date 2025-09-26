function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var frase = document.getElementById('frase')
    var data = new Date()
    var hora = data.getHours()
    var min =data.getMinutes() 
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/imagem-dia-red.png'
        document.body.style.background = '#f5d085ff'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/imagem-tarde-red.png'
        document.body.style.background = '#a8c4dc'
    } else {
        // BOA NOITE!
        img.src = 'imagens/imagem-noite-red.png'
        document.body.style.background = '#3b4f56'
    }

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        frase.innerHTML = '<strong>Bom dia</strong>!'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        frase.innerHTML = '<strong>Boa tarde</strong>!'
    } else {
        // BOA NOITE!
        frase.innerHTML = 'Boa noite!'
    }
}
