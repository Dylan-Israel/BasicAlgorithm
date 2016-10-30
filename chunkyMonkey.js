function chunkArrayInGroups(arr, size) {
    var holderArray = [];
      var count = 0;

  while (count < arr.length) {
    holderArray.push(arr.slice(count, count= count + size));
  }
  return holderArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
