/*

Logic Challenge: Melee Ranged Grouping

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
 implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah:
 <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan:
 [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/


function meleeRangedGrouping (str) {
    //your code here
    str=str+","
    var simpan=[[],[]];
    var hero=[];
    var tipeHero=[];
    var strTemp='';
    var strTemp2='';
  
    for(var i = 0; i<str.length; i++){
      if(str[i]!==","){
        strTemp+=str[i];
      } else {
        hero.push(strTemp);
        strTemp='';
      }
    }
    // console.log(hero);
  
    for(var j=0; j<hero.length; j++){
      tipeHero.push([]);
      for(var k=0; k<hero[j].length; k++){
        if(hero[j][k]==="-"){
          tipeHero[j].push(strTemp2);
          strTemp2='';
        }else if(k===hero[j].length-1){
          tipeHero[j].push(strTemp2)
          strTemp2='';
        }else {
          strTemp2+=hero[j][k]
        }
      }
    }
    // console.log(tipeHero);
  
    for(a=0; a<tipeHero.length; a++){
      for(b=0; b<tipeHero[a].length; b++){
        if(tipeHero[a][b]==="Range"){
          simpan[0].push(tipeHero[a][0]);
        }if(tipeHero[a][b]==="Mele"){
          simpan[1].push(tipeHero[a][0]);
        }
      }
    }
  
    // console.log(simpan);
    if(str.length===1){
      return []
    }
  
    return simpan
  
  
  }
  
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []