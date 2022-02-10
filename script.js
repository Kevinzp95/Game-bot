'use strict'

const isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num)
}

function gamebot (num) {
      function guesscount () {
      let countNumber = prompt('Угадай число от 1 до 100')

      if (countNumber == null) {
            alert('Игра окончена')
      } else if (countNumber < num) {
            alert('Загаданное число больше!')
            guesscount()
      } else if (countNumber > num) {
            alert('Загаданное число меньше!')
            guesscount()
      } else if (!isNumber(countNumber)) {
            alert('Введи число!')
            guesscount()  
      } else if (countNumber == num) {
            alert('Поздравляю, Вы угадали!')
      }
}
      guesscount()
}

gamebot(10)

