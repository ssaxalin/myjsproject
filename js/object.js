function as() {
    let massiv = []
    for (let i = 0; i < 5; i++) {
        massiv[i] = []
        for (let j = 0; j < 5; j++) {
            massiv[i][j] = getrandomint(-10, 25)
        }
    }
    document.write('Выведем не сортированный массив: <br />')
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.write(massiv[i][j] + ' ')
        }
        document.write('<br />')
    }

    //сортировка от наименьшего к наибольшему
    function litesort(a, b) {
        return a - b
    }

    document.write('<br />')
    document.write('Выведем отсортированный массив')
    document.write('<br>')
        //
    massiv.forEach(row => row.sort(litesort))
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.write(massiv[i][j] + ' ')
        }
        document.write('<br />')
    }
    document.write('<br />')

    let max = massiv[0][0]
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (massiv[i][j] > max) {
                max = massiv[i][j]
            }
        }
    }
    document.write(`Максимальное значение: ${max}`)
    document.write('<br />')
    let min = massiv[0][0]
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (massiv[i][j] < min) {
                min = massiv[i][j]
            }
        }
    }
    document.write(`Минимальное значение: ${min}`)
}