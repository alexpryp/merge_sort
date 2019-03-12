"use strict"

// Merge sort    
function merge (arrFirst, arrSecond) {
    let arrSort = [];
    let i = 0, j = 0;

    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push (
            (arrFirst[i] < arrSecond[j]) ?
                    arrFirst[i++] : arrSecond[j++]
            );
    }

    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
}

function mergeSort (arr) {
    if (!arr || !arr.length) {
        return null;
    }

    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let arrLeft = arr.slice(0, middle);
    let arrRight = arr.slice(middle);

    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

//Test
console.log(mergeSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15,]));