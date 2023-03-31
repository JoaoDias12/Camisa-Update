const showCamisa = document.getElementById('showCamisa')
const camisa = document.getElementById('btncamisa')

camisa.addEventListener('click', e => {
  e.preventDefault()

  if (showCamisa.classList.contains('hidden')) {
    showCamisa.classList.remove('hidden')
    showGola.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showDetalhes.classList.add('hidden')
    showLogo.classList.add('hidden')
    showName.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showCamisa.classList.add('hidden')
  }
})

const formColor = document.getElementById('formColor')
const inputColor = document.getElementById('inputColor')

formColor.addEventListener('submit', function (e) {
  const valor = inputColor.value

  document.getElementById('camisa').style.backgroundColor = valor

  e.preventDefault()
})
