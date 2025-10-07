function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Criação de uma tag <img>
        img.setAttribute('id', 'foto')  //Forma de criar um id para a tag img acima -> <img id='foto'>

        if (fsex[0].checked) {  // [0] = posição 1 -> masculino no ex. 'checked' -> O que está marcado
            genero = 'Homem'
            if(idade >= 0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'imagens/foto-m-crianca.png') // Forma de atribuir a tag img com os arquivos de imagens por src
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-m-jovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-m-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-m-idoso.png')
            }
        } else if (fsex[1].checked) {   // [1] = posição 2 -> feminino no ex. 'checked' -> O que está marcado
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-f-crianca.png')   // Forma de atribuir a tag img com os arquivos de imagens por src
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-f-jovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-f-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-f-idosa.png')
            }
        }
        res.style.textAlign = 'center' // Forma de centralizar por JavaScript
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)    // Adiciona o ELEMENTO img
    }

}