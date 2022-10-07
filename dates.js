const dates = document.querySelectorAll(".block__service-time") // получаем все селекторы с датами
for (let i = 0; i < dates.length; i++) {
  // получаем все даты из одного селектора
  const dateElems = dates[i].querySelectorAll("div")
  // если элементов больше 4ёх то у 4го меняем значение
  if(dateElems.length > 4) {
    dateElems[3].innerHTML = 'ещё...'
    // гасим элементы чей индекс больше 3ёх
    dateElems.forEach(
      (elem, index) => index > 3 &&
        (elem.style.display = 'none')
    )
  }
}

const test = document.querySelectorAll(".block__service-time")

// console.log(test[0].offsetHeight)