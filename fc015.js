let a = require('readline-sync').questionInt();
let b = require('readline-sync').questionInt();
let c = require('readline-sync').questionInt();
let d = require('readline-sync').questionInt();
if(a>b){
    (m1=a);
} else {
    (m1=b);
} if (c>d){
    (m2=c);
}else {
    (m2=d);
} if(m1>m2){
    console.log(m1);
} else console.log(m2);

