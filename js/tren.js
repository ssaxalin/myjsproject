function ab() {
    let mass = []
    for (let i = 0; i < 5; i++) {
        mass[i] = []
        for (let j = 0; j < 5; j++) {
            mass[i][j] = getrandomint(-5, 15)
        }
    }

    document.write('<br />')
    document.write('<br />')
    document.write('Второй массив из tren.js')
    document.write('<br />')
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.write(mass[i][j] + ' ')
        }
        document.write('<br />')
    }

    let max = mass[0][0]
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (mass[i][j] > max) {
                max = mass[i][j]
            }
        }
    }
    document.write('<br />')
    document.write('Максимальное значение из tren.js: ' + max)
    document.write('<br />')
    document.write('<br />')

    let fruits = []
    for (let i = 0; i < 5; i++) {
        fruits[i] = getrandomint(-5, 15)
    }
    for (let i = 0; i < 5; i++) {

        document.write(fruits[i] + ' ')
    }
    document.write('<br />')
    document.write('Число: ' + fruits[0] + ' удалено через shift()')
    document.write('<br />')

    fruits.shift()
    document.write('<br />')
    for (let i = 0; i < 5; i++) {
        fruits.push('Привет', 'Пока') // Пока - не добавится, т.к i после первого элемента будет = 5
        document.write(fruits[i] + ' ')
    }
}

document.write('<br />')