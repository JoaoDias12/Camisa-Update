const BtnMangaD = document.getElementById('btnMangaD')
const showMangaD = document.getElementById('showMangaD')

BtnMangaD.addEventListener('click', e => {
  e.preventDefault()

  if (showMangaD.classList.contains('hidden')) {
    showMangaD.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showGola.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showDetalhes.classList.add('hidden')
    showLogo.classList.add('hidden')
    showName.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showMangaD.classList.add('hidden')
  }
})

const formColorMD = document.getElementById('formColorMD')
const inputColorMD = document.getElementById('inputColorMD')

formColorMD.addEventListener('submit', function (e) {
  const valor = inputColorMD.value

  document.getElementById('mangaDireita').style.background = valor

  e.preventDefault()
})
