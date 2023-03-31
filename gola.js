const gola = document.getElementById('gola')
const btnGola = document.getElementById('btnGola')
const showGola = document.getElementById('showGola')

btnGola.addEventListener('click', e => {
  e.preventDefault()

  if (showGola.classList.contains('hidden')) {
    showGola.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showDetalhes.classList.add('hidden')
    showLogo.classList.add('hidden')
    showName.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showGola.classList.add('hidden')
  }
})

const formColorG = document.getElementById('formColorG')
const inputColorG = document.getElementById('inputColorG')

formColorG.addEventListener('submit', function (e) {
  const valor = inputColorG.value

  document.getElementById('gola').style.border = '20px solid' + valor

  e.preventDefault()
})
