var btn = document.querySelector('#btn')
btn.addEventListener("click", carregar)

var data = new Date()
var ano = data.getFullYear()

var anoNasc = document.querySelector("#ano")
var sexo = document.getElementsByName("sexo")
var res = document.querySelector("#res")
var genero = ''




var img = document.createElement("img")
img.setAttribute('id', 'foto')


function carregar(){
    if(anoNasc.value.length == 0 || anoNasc.value > ano){
        window.alert("Errou")
    } else{
        var idade = ano - Number(anoNasc.value)
        if(sexo[0].checked){
            if(idade > 0 && idade < 15){
                img.setAttribute('src', '/assets/crianca-homem.png')
                genero = "Criança Homem"
            } else if(idade < 21){
                img.setAttribute('src', '/assets/jovem-homem.png')
                genero = "Jovem homem"
            } else if(idade < 50){
                img.setAttribute('src', '/assets/adulto-homem.png')
                genero = "Adulto homem"
            } else {
                img.setAttribute('src', '/assets/idoso-homem.png')
                genero = "Idoso homem"
            }
        } else if(sexo[1].checked){
            if(idade > 0 && idade < 15){
                img.setAttribute('src', '/assets/crianca-mulher.png')
                genero = "Criança mulher"
            } else if(idade < 21){
                img.setAttribute('src', '/assets/jovem-mulher.png')
                genero = "Jovem mulher"
            } else if(idade < 50){
                img.setAttribute('src', '/assets/adulto-mulher.png')
                genero = "Adulto mulher"
            } else{
                img.setAttribute('src', '/assets/idoso-mulher.png')
                genero = "Idoso mulher"
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}
