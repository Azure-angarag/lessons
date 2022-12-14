let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 22,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 19,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 21,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 22,
    gender: "female"
},
]

function gender(angi){
    let male = 0; 
    let female = 0;
    let retObj = {};
    for(let i = 0; i < angi.length; i++){
      
        if(angi[i].gender == "male"){
            male++;
        }else {
            female++;
        }
    }
    retObj.male = male;
    retObj.female = female;

    return retObj;
}

function ageDundaj(angi){
    let age = 0, dundaj = 0;
    for(let i=0; i < angi.length; i++ ){
        age += angi[i].age;
    }
    dundaj = age / angi.length;
    return dundaj;
}


function addOwog(angi){
    for(let i = 0; i < angi.length; i++){
        angi[i].LastName = prompt(`Ta ${angi[i].name} hvvhded owogoo oruulna uu`);
    }
    return angi;
}

function sameAge(angi){
    for(i = 0; i < angi.length-1; i++){
        for(j = i + 1 ; j < angi.length; j++){
            if(angi[i].age == angi[j].age){
                let ijil = [];
                ijil.push(angi[i].name,angi[j].name);
                console.log(`${ijil} nar ni ijilhen ${angi[i].age} nastai`);
            }
        }
    }
}


let nasniiDundaj = ageDundaj(students);

console.log("Angiin nasnii dundaj ni:"+nasniiDundaj);

let huisiinToo = gender(students);

console.log(huisiinToo);

// let owog = addOwog(students);

// console.log(owog);

sameAge(students);