const showDesenhos = document.getElementById('showDesenhos')
const BtnDesenho = document.getElementById('btnDesenho')

BtnDesenho.addEventListener('click', e => {
  e.preventDefault()

  if (showDesenhos.classList.contains('hidden')) {
    showDesenhos.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showGola.classList.add('hidden')
    showDetalhes.classList.add('hidden')
    showLogo.classList.add('hidden')
    showName.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showDesenhos.classList.add('hidden')
  }
})

const D1 = document.getElementById('D1')
const D2 = document.getElementById('D2')
const D3 = document.getElementById('D3')
const D4 = document.getElementById('D4')
const D5 = document.getElementById('D5')
const D6 = document.getElementById('D6')
const D7 = document.getElementById('D7')
const D8 = document.getElementById('D8')
const D9 = document.getElementById('D9')
const D10 = document.getElementById('D10')
const D11 = document.getElementById('D11')
const D12 = document.getElementById('D12')
const D13 = document.getElementById('D13')
const D14 = document.getElementById('D14')
const D15 = document.getElementById('D15')
const D16 = document.getElementById('D16')
const D17 = document.getElementById('D17')
const D18 = document.getElementById('D18')
const D19 = document.getElementById('D19')
const D20 = document.getElementById('D20')
const D21 = document.getElementById('D21')
const D22 = document.getElementById('D22')
const D23 = document.getElementById('D23')
const D24 = document.getElementById('D24')
const D25 = document.getElementById('D25')
const D26 = document.getElementById('D26')
const D27 = document.getElementById('D27')

const desenho = document.getElementById('desenhoNaFrente')

D1.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/macaquinho.png)'
})

D2.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/baleia.png)'
})

D3.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/centauro.png)'
})

D4.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/chimpanzee-head.png)'
})

D5.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/dragao.png)'
})

D6.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/dragao1.png)'
})

D7.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/dragao2.png)'
})

D8.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/gorila.png)'
})

D9.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/leao-de-juda.png)'
})

D10.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/leao.png)'
})

D11.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/leao1.png)'
})

D12.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/leao2.png)'
})

D13.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/leao3.png)'
})

D14.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/macaco1.png)'
})

D15.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/mamute.png)'
})

D16.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/mamute1.png)'
})

D17.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage =
    'url(img/monkey-mammal-face-outline-front.png)'
})

D18.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/panda.png)'
})

D19.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/pantera-negra.png)'
})

D20.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/sereia.png)'
})

D21.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/sereia1.png)'
})

D22.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/girassol.png)'
})

D23.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/macaco4.png)'
})

D24.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/rosa.png)'
})

D25.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/cobraEspada.png)'
})

D26.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/cobraCaveira.png)'
})

D27.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url(img/cobraFlores.png)'
})

const resetD = document.getElementById('resetD')

resetD.addEventListener('click', e => {
  e.preventDefault()

  desenho.style.backgroundImage = 'url()'
})

const formD = document.getElementById('formD')
const inputD = document.getElementById('inputD')

formD.addEventListener('submit', function (e) {
  const valor = inputD.value

  document.getElementById('desenhoNaFrente').style.backgroundImage =
    'url' + '(' + valor + ')'

  e.preventDefault()
})

const formSizeDesenho = document.getElementById('formSizeDesenho')
const inputSizeDesenho = document.getElementById('inputSizeDesenho')

formSizeDesenho.addEventListener('submit', function (e) {
  e.preventDefault()
  const valorS = inputSizeDesenho.value

  document.getElementById('desenhoNaFrente').style.backgroundSize =
    valorS + 'rem'
  document.getElementById('desenhoNaFrente').style.backgroundSize =
    valorS + 'rem'
})
