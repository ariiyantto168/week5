/*
Logic Challenge - Hapus Simbol (Regex)

Problem

Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string. 
Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.

*/

function hapusSimbol(str) {

    let code = ''
    let alfhabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alfhabet.length; j++) {
            if (str[i] === alfhabet[j]) {
                code = code + str[i]
            }
            
        }
        
    }
  
    return code
}
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100