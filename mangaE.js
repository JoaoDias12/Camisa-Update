const BtnMangaE = document.getElementById('btnMangaE')
const showMangaE = document.getElementById('showMangaE')

BtnMangaE.addEventListener('click', e => {
  e.preventDefault()

  if (showMangaE.classList.contains('hidden')) {
    showMangaE.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showGola.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showDetalhes.classList.add('hidden')
    showLogo.classList.add('hidden')
    showName.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showMangaE.classList.add('hidden')
  }
})

const formColorME = document.getElementById('formColorME')
const inputColorME = document.getElementById('inputColorME')

formColorME.addEventListener('submit', function (e) {
  //*console.log(nome.value)*//

  const valor = inputColorME.value

  document.getElementById('mangaEsquerda').style.background = valor

  e.preventDefault()
})
