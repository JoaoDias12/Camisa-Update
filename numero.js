const formNum = document.getElementById('formNum')
const Num = document.getElementById('Num')

formNum.addEventListener('submit', function (e) {
  const valor = Num.value

  document.getElementById('Nume').innerHTML = valor

  e.preventDefault()
})

const formColorNU = document.getElementById('formColorNU')
const inputColorNU = document.getElementById('inputColorNU')

formColorNU.addEventListener('submit', function (e) {
  const valor = inputColorNU.value

  document.getElementById('Nume').style.color = valor

  e.preventDefault()
})

const btnNum = document.getElementById('btnNum')
const showNum = document.getElementById('showNum')

btnNum.addEventListener('click', e => {
  e.preventDefault()

  if (showNum.classList.contains('hidden')) {
    showNum.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showGola.classList.add('hidden')
    showLogo.classList.add('hidden')
    showName.classList.add('hidden')
    showGola.classList.add('hidden')
  } else {
    showNum.classList.add('hidden')
  }
})

const formSizeNumero = document.getElementById('formSizeNumero')
const inputSizeNumero = document.getElementById('inputSizeNumero')

formSizeNumero.addEventListener('submit', function (e) {
  e.preventDefault()
  const valorSi = inputSizeNumero.value

  document.getElementById('Nume').style.fontSize = valorSi + 'rem'
})
