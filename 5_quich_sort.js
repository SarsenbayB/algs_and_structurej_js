const arr = [0, 3, 4, 5, 1, 2, 6, 7, 10, 11, 1, 8, 2, 9, 14, 15, 16, 10, 11, 0, 3, 4, 5, 1, 2, 6, 0, 3, 4, 5, 1, 2, 6] // Сортируем массив
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]

}

console.log(quickSort(arr))
console.log("count= ", count)