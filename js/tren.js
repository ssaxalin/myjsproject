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
}