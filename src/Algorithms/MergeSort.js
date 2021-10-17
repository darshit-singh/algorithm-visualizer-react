let animationArray = []

const merge = (barsCopy, l, mid, r) => {
  let i = l,
    j = mid + 1

  const arr = []

  while (i <= mid && j <= r) {
    animationArray.push([i, j, null, null]) // comparision snapshot
    if (barsCopy[i] <= barsCopy[j]) {
      arr.push(barsCopy[i++])
    } else {
      arr.push(barsCopy[j++])
    }
  }

  while (i <= mid) {
    animationArray.push([i, null, null, null])
    arr.push(barsCopy[i++])
  }

  while (j <= r) {
    animationArray.push([null, j, null, null])
    arr.push(barsCopy[j++])
  }

  for (i = l; i <= r; i++) {
    barsCopy[i] = arr[i - l]
    animationArray.push([i, null, barsCopy.slice(), null])
  }
}

const mergeSortHelper = (barsCopy, l, r) => {
  if (l >= r) return

  const mid = Math.floor((l + r) / 2)

  mergeSortHelper(barsCopy, l, mid)
  mergeSortHelper(barsCopy, mid + 1, r)

  merge(barsCopy, l, mid, r)
}

const mergeSort = (bars) => {
  animationArray = []
  const barsCopy = bars.slice()

  mergeSortHelper(barsCopy, 0, barsCopy.length - 1)

  for (let i = 0; i < barsCopy.length; i++) {
    animationArray.push([null, null, null, i]) // i th element will be in correct(sorted) position
  }

  return animationArray
}

export default mergeSort
