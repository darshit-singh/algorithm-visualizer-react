const swap = (array, a, b) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

const bubbleSort = (bars) => {
    const barsCopy = bars.slice();
    const animationArray = [];

    for (var i = 0; i < barsCopy.length; i++) {
        for (var j = 0; j < barsCopy.length - i - 1; j++) {
            animationArray.push([j, j + 1, null, null]) // Comparision snapshot
            let first = barsCopy[j];
            let second = barsCopy[j + 1];
            if (first > second) {
                swap(barsCopy, j, j + 1); //barsCopy is mutated
                animationArray.push([j, j + 1, barsCopy.slice(), null]); // Swapped snapshot
            }
        }
        animationArray.push([null, null, null, j]); //jth element is in correct(sorted) position
    }
    return animationArray
}

export default bubbleSort