let animationArray = []

const swap = (array, a, b) => {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

const partition = (barsCopy, l, r) => {
  const pivot = l
  let j = l

  for (let i = l + 1; i <= r; i++) {
    animationArray.push([i, pivot, null, null])
    if (barsCopy[i] < barsCopy[pivot]) {
      j += 1
      swap(barsCopy, i, j)
      animationArray.push([i, j, barsCopy.slice(), null])
    }
  }

  swap(barsCopy, pivot, j)
  animationArray.push([pivot, j, barsCopy.slice(), null])
  animationArray.push([null, null, null, j]) //jth element is in correct(sorted) position
  return j
}

const quickSortHelper = (barsCopy, l, r) => {
  if (l >= r) {
    if (l === r) animationArray.push([null, null, null, l])
    return
  }

  const pivot = l + Math.floor(Math.random() * (r - l))

  swap(barsCopy, l, pivot)
  animationArray.push([l, pivot, barsCopy.slice(), null])

  const m = partition(barsCopy, l, r)

  quickSortHelper(barsCopy, l, m - 1)
  quickSortHelper(barsCopy, m + 1, r)

  return
}

const quickSort = (bars) => {
  const barsCopy = bars.slice()
  animationArray = []

  quickSortHelper(barsCopy, 0, barsCopy.length - 1)

  return animationArray
}

export default quickSort
