/*

Logic Challenge - Most Frequent Largest Numbers

Problem
Implementasikan function sortingdan getTotaluntuk mendapatkan angka yang paling besar 
dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sortingdan getTotal). 
Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

*/

function sorting(arrNumber) {

  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = 0; j < arrNumber.length - i - 1; j++) {
      if (arrNumber[j] < arrNumber[j + 1]) {
        var temp = arrNumber[j]
        arrNumber[j] = arrNumber[j + 1]
        arrNumber[j + 1] = temp
      }
    }
  }
  return arrNumber

  }

  
  function getTotal(arrNumber) {

    var count = 0

    for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[0] === arrNumber[i]) {
      count++
    }
  }

    var hasil = 'Angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + count + ' kali'

    if (arrNumber.length === 0) {
    return 'tidak ada data!'
    }else{
    return hasil
  }
}
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;

  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''