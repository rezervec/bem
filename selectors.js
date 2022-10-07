const travel_time = 50; // время в пути
var isRoundTrip = false // маршрут "туда и обратно"

// после загрузки DOM находим наши селекторы и устанавливаем значение по умолчанию
document.addEventListener("DOMContentLoaded", () => {
  const timeBack = document.querySelector('#timeBack')
  const timeTo = document.querySelector('#timeTo')
  timeBack.value = 'default'
  timeTo.value = 'default'
})

const route = document.querySelector('#route') // выбор маршрута

route.addEventListener('click', () => {
  // если пользователь выбрал маршрут 'туда и обратно'
  if(route.value === 'roundTrip') {
    isRoundTrip = () => {return true}
    (timeBack.style.display = 'block') // выводим селектор выбора обратного времени
    getTimesBack()
  } else {
    (timeBack.style.display = 'none') 
  }

})

// фильтруем опции обратного времени относительно времени отправления
const getTimesBack = () => {
  timeTo.addEventListener('click', () => {
    const options = timeBack.querySelectorAll('option') // все опции обратного времени
    for (let i = 1; i < options.length; i++) {
      let arrive = getTimeWithTravel(timeTo.value) // время прибытия
      let come = strToDate(options[i].value) // сравниваем время обратного отплытия
      if(come < arrive) {
        options[i].style.display = 'none'
      } else {
        options[i].style.display = 'block'
        options[i].innerHTML = rewriteTime(come)
      }
    }
  })
}

// преобразовать строку во время
const strToDate = (str) => {
  str = str.substring(0, 5) // взять символы соответствующие времени
  var part = str.split(':'); // создать массив, разделитель ':'
  var date = new Date();
  date.setHours(Number(part[0]));
  date.setMinutes(Number(part[1]));

  return date
}

// рассчитать время прибытия
const getTimeWithTravel = (time) => {
  date = strToDate(time)
  var dateWithTravel = new Date(date.getTime() + travel_time*60000) // добавляем минуты (50 * 60000 миллисекунд)

  return dateWithTravel;
}