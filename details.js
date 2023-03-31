const showDetalhes = document.getElementById('showDetalhes')
const btnShowDetalhes = document.getElementById('btnShowDetalhes')

btnShowDetalhes.addEventListener('click', e => {
  e.preventDefault()

  if (showDetalhes.classList.contains('hidden')) {
    showDetalhes.classList.remove('hidden')
    showCamisa.classList.add('hidden')
    showMangaE.classList.add('hidden')
    showMangaD.classList.add('hidden')
    showDesenhos.classList.add('hidden')
    showGola.classList.add('hidden')
    showLogo.classList.add('hidden')
    showName.classList.add('hidden')
    showNum.classList.add('hidden')
  } else {
    showDetalhes.classList.add('hidden')
  }
})

const showDetail1 = document.getElementById('SD1')
const detail1 = document.getElementById('detail1')

showDetail1.addEventListener('click', e => {
  e.preventDefault()

  if (detail1.classList.contains('hidden')) {
    detail1.classList.remove('hidden')
  } else {
    detail1.classList.add('hidden')
  }
})

const showDetail2 = document.getElementById('SD2')
const detail2 = document.getElementById('detail2')

showDetail2.addEventListener('click', e => {
  e.preventDefault()

  if (detail2.classList.contains('hidden')) {
    detail2.classList.remove('hidden')
  } else {
    detail2.classList.add('hidden')
  }
})

const showDetail3 = document.getElementById('SD3')
const detail3 = document.getElementById('detail3')

showDetail3.addEventListener('click', e => {
  e.preventDefault()

  if (detail3.classList.contains('hidden')) {
    detail3.classList.remove('hidden')
  } else {
    detail3.classList.add('hidden')
  }
})

const showDetail4 = document.getElementById('SD4')
const detail4 = document.getElementById('detail4')

showDetail4.addEventListener('click', e => {
  e.preventDefault()

  if (detail4.classList.contains('hidden')) {
    detail4.classList.remove('hidden')
  } else {
    detail4.classList.add('hidden')
  }
})

const showDetail5 = document.getElementById('SD5')
const detail5 = document.getElementById('detail5')

showDetail5.addEventListener('click', e => {
  e.preventDefault()

  if (detail5.classList.contains('hidden')) {
    detail5.classList.remove('hidden')
  } else {
    detail5.classList.add('hidden')
  }
})

const showDetail6 = document.getElementById('SD6')
const detail6 = document.getElementById('detail6')

showDetail6.addEventListener('click', e => {
  e.preventDefault()

  if (detail6.classList.contains('hidden')) {
    detail6.classList.remove('hidden')
  } else {
    detail6.classList.add('hidden')
  }
})

const showDetail7 = document.getElementById('SD7')
const detail7 = document.getElementById('detail7')

showDetail7.addEventListener('click', e => {
  e.preventDefault()

  if (detail7.classList.contains('hidden')) {
    detail7.classList.remove('hidden')
  } else {
    detail7.classList.add('hidden')
  }
})

const showDetail8 = document.getElementById('SD8')
const detail8 = document.getElementById('detail8')

showDetail8.addEventListener('click', e => {
  e.preventDefault()

  if (detail8.classList.contains('hidden')) {
    detail8.classList.remove('hidden')
  } else {
    detail8.classList.add('hidden')
  }
})

const showDetail9 = document.getElementById('SD9')
const detail9 = document.getElementById('detail9')

showDetail9.addEventListener('click', e => {
  e.preventDefault()

  if (detail9.classList.contains('hidden')) {
    detail9.classList.remove('hidden')
  } else {
    detail9.classList.add('hidden')
  }
})

const showDetail10 = document.getElementById('SD10')
const detail10 = document.getElementById('detail10')

showDetail10.addEventListener('click', e => {
  e.preventDefault()

  if (detail10.classList.contains('hidden')) {
    detail10.classList.remove('hidden')
  } else {
    detail10.classList.add('hidden')
  }
})

const formColorD = document.getElementById('formColorD')
const inputColorD = document.getElementById('inputColorD')

formColorD.addEventListener('submit', function (e) {
  const valor = inputColorD.value

  document.getElementById('colorD').style.background = valor
  document.getElementById('colorD1').style.background = valor
  document.getElementById('colorD2').style.background = valor
  document.getElementById('colorD3').style.background = valor
  document.getElementById('colorD4').style.background = valor
  document.getElementById('colorD5').style.background = valor
  document.getElementById('colorD6').style.background = valor
  document.getElementById('colorD7').style.background = valor
  document.getElementById('colorD8').style.background = valor
  document.getElementById('colorD9').style.background = valor
  document.getElementById('colorD10').style.background = valor
  document.getElementById('colorD11').style.background = valor
  document.getElementById('colorD12').style.background = valor
  document.getElementById('colorD13').style.background = valor
  document.getElementById('colorD14').style.background = valor
  document.getElementById('colorD15').style.background = valor
  document.getElementById('colorD16').style.background = valor
  document.getElementById('colorD17').style.background = valor
  document.getElementById('colorD18').style.background = valor
  document.getElementById('colorD19').style.background = valor
  document.getElementById('colorD20').style.background = valor
  document.getElementById('colorD21').style.background = valor
  document.getElementById('colorD22').style.background = valor
  document.getElementById('colorD23').style.background = valor
  document.getElementById('colorD24').style.background = valor
  document.getElementById('colorD25').style.background = valor
  document.getElementById('colorD26').style.background = valor
  document.getElementById('colorD27').style.background = valor
  document.getElementById('colorD28').style.background = valor
  document.getElementById('colorD29').style.background = valor
  document.getElementById('colorD30').style.background = valor
  document.getElementById('colorD31').style.background = valor
  document.getElementById('colorD32').style.background = valor
  document.getElementById('colorD33').style.background = valor
  document.getElementById('colorD34').style.background = valor
  document.getElementById('colorD35').style.background = valor

  e.preventDefault()
})

const btnClosePositions = document.getElementById('closePositions')
const btnShowPositions = document.getElementById('showPositions')
const positionsDetail = document.getElementById('positionsDetail')
const palletDetails = document.getElementById('palletDetails')

btnShowPositions.addEventListener('click', e => {
  e.preventDefault()

  positionsDetail.classList.remove('hidden')
  btnShowPositions.classList.add('hidden')
  btnClosePositions.classList.remove('hidden')
  palletDetails.classList.add('hidden')
})

btnClosePositions.addEventListener('click', e => {
  e.preventDefault()

  positionsDetail.classList.add('hidden')
  btnShowPositions.classList.remove('hidden')
  btnClosePositions.classList.add('hidden')
  palletDetails.classList.remove('hidden')
})
