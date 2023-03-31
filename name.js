const btnNome = document.getElementById('btnNome')
const showName = document.getElementById('showName')
const fecharName = document.getElementById('fecharName')

btnNome.addEventListener('click', e => {
  e.preventDefault()

  if (showName.classList.contains('hidden')) {
    showName.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showGola.classList.add('hidden')
    showLogo.classList.add('hidden')
    showGola.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showName.classList.add('hidden')
  }
})

const form = document.getElementById('formulario')
const nome = document.getElementById('nome')
const nomeCamisa = document.getElementById('nomeCamisa')

form.addEventListener('submit', function (e) {
  nomeCamisa.innerHTML = nome.value

  e.preventDefault()
})

const formColorN = document.getElementById('formColorN')
const inputColorN = document.getElementById('inputColorN')

formColorN.addEventListener('submit', function (e) {
  const valor = inputColorN.value

  document.getElementById('nomeCamisa').style.color = valor

  e.preventDefault()
})

const formSizeName = document.getElementById('formSizeName')
const inputSizeName = document.getElementById('inputSizeName')

formSizeName.addEventListener('submit', function (e) {
  e.preventDefault()
  const valorSi = inputSizeName.value

  document.getElementById('nomeCamisa').style.fontSize = valorSi + 'rem'
})
