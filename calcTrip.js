const formInfo = document.querySelector('.calcTrip__info')

const timeTo_data = document.querySelector('#timeTo') // время отправления из A
const timeBack_data = document.querySelector('#timeBack') // время отправления из B
const route_data = document.querySelector('#route') // маршрут

const input = document.querySelector('#num') // кол-во билетов
const button = document.querySelector('.calcTrip__btn')

// найти значение селектора
const getSelectedValue = (selector) => {
  return selector.options[selector.selectedIndex].text;
}

button.addEventListener('click', () => {
  let trip = getSelectedValue(route_data) // выбранный маршрут
  let ticket = input.value // введённое кол-во билетов
  let timeToA = rewriteTime(strToDate(timeTo_data.value)) // выбранное отправление из A
  let timeToB = rewriteTime(getTimeWithTravel(timeTo_data.value)) // прибытие в B
  let timeBackA = rewriteTime(strToDate(timeBack_data.value)) // выбранное отправление из B
  let timeBackB = rewriteTime(getTimeWithTravel(timeBack_data.value)) // прибытие в A
  let price = calcPrice(ticket) // рассчитываем стоимость билета
  
  formInfo.innerHTML = 
  `Вы выбрали ${ticket} билета по маршруту ${trip} стоимостью ${price}р. <br>`+
  `Это путешествие займет у вас ${travel_time}м минут. <br>`+
  `Теплоход отправляется в ${timeToA}, а прибудет в ${timeToB}. <br>` 

  if(isRoundTrip) {
    formInfo.innerHTML = formInfo.innerHTML +
    `Обратное отпровление начнётся в ${timeBackA}, а прибудет в ${timeBackB}`
  }
})

// расчёт стоимости билетов
const calcPrice = (ticket) => {
  let cost = isRoundTrip ? 1200 : 700
  return cost * ticket
}

// переписываем время в строку
const rewriteTime = (time) => {
  return time.getHours() + ':' + (time.getMinutes() < 10
    ? '00'
    : time.getMinutes()
  )
}