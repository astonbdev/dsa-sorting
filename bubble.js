//[4, 20, 12, 10, 7, 9]

function bubbleSort(list) {
  for (let i = list.length; i >= 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp
      }
    }
  }

  return list
}

module.exports = bubbleSort;