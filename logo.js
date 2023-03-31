const showL = document.getElementById('showL')
const logo = document.getElementById('logo')

showL.addEventListener('click', e => {
  e.preventDefault()

  if (logo.classList.contains('hidden')) {
    logo.classList.remove('hidden')
    logoImg.classList.remove('hidden')
  } else {
    logo.classList.add('hidden')
    logoImg.classList.add('hidden')
  }
})

const btnLogo = document.getElementById('btnLogo')
const showLogo = document.getElementById('showLogo')

btnLogo.addEventListener('click', e => {
  e.preventDefault()

  if (showLogo.classList.contains('hidden')) {
    showLogo.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showGola.classList.add('hidden')
    showDetalhes.classList.add('hidden')
    showName.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showLogo.classList.add('hidden')
  }
})

const formColorL = document.getElementById('formColorL')
const inputColorL = document.getElementById('inputColorL')

formColorL.addEventListener('submit', function (e) {
  const valor = inputColorL.value

  document.getElementById('logo').style.border = '5px double' + valor

  e.preventDefault()
})

const formL = document.getElementById('formL')
const inputL = document.getElementById('inputL')

formL.addEventListener('submit', function (e) {
  const valor = inputL.value

  document.getElementById('logoImg').style.backgroundImage =
    'url' + '(' + valor + ')'

  e.preventDefault()
})

const formSizeLogo = document.getElementById('formSizeLogo')
const inputSizeLogo = document.getElementById('inputSizeLogo')

formSizeLogo.addEventListener('submit', function (e) {
  e.preventDefault()
  const valorSi = inputSizeLogo.value

  document.getElementById('logo').style.backgroundSize = valorSi + 'rem'
  document.getElementById('logo').style.backgroundSize = valorSi + 'rem'

  document.getElementById('logo').style.width = valorSi + 'rem'
  document.getElementById('logo').style.height = valorSi + 'rem'

  document.getElementById('logoImg').style.backgroundSize = valorSi + 'rem'
})
