// console.log("n бутархай тооны хамгийн ойрын бүхэл тоог ол.")

// let n, asd, bvhel;

// n= prompt("Butarhai toogoo oruulna uu");

// asd= Number(n);

// console.log(Math.round(asd));

// console.log("3 оронтой той ( n ) ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.")

// let n1, number, ts1, ts2, ts3, sum;

// n1 = prompt("3 orontoi toogoo oruulna uu");

// number = Number(n1);

// ts1 = (number - number % 100)/100 ;

// ts2 = ((number - ts1*100 ) - ((number - ts1*100 )%10))/10 ;

// ts3 = (number - ts1*100 )%10;

// sum = ts1 + ts2 + ts3;
// console.log("3-n orontoi toonuudiin niilber: " + sum);

// Math.random()  0 ... <1

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

let b = parseInt(prompt("Ta duriin toogoo oruulna uu"));

let isPrime = true, a=2, sum=0;

while(a <= b){
    if(a === 2){
        
    }else{
        if(a % 2 ===0 ){
            isPrime = false;
        }else{
            let i = 2;
            while(i < a){
                if(a % i === 0){
                isPrime=false;
                break;
            }
            i++;   
            }
        }
        
    }
    if(isPrime){
        console.log(`anhnii toonuud ni- ${a}`)
        sum++;
    }
    isPrime = true;
    a++;
}
console.log(`anhnii toonuudiin niit too- ${sum}`)