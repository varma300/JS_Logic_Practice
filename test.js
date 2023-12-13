let a = [{a:1, b:2},
{a:2,b:3},
{a:3,b:4}
];
let x = [];
let y

for(i =0; i<a.length ; i++){
      x.unshift(a[i].b)
      y = x.sort(function(a,b){return b-a})
    }
    console.log(y[2]);