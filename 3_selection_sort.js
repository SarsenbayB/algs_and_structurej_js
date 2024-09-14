const arr = [0, 3, 4, 5, 1, 2, 6, 7, 10, 11, 1, 8, 2, 9, 14, 15, 16, 10, 11] // Сортируем массив
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr))
console.log(arr.length)// O(n*n2)
console.log("count= ", count)