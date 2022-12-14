console.log("Object")

let p007 = {
    name : "Naraa",
    phone : "99119911",
    adress : {
        duureg : "HUD"
    },

    fullname : function () {
        return this.name;
    }
};


let p2 = {
    name : "Saraa",
    phone : "99998888",
    adress : {
        duureg : "SHD"
    }
};

let p3 = p2;

console.log(p007.name);
console.log(p2.name);


console.log(p2.adress.duureg);
console.log(p007.adress.duureg);

p007.fullname();


p3.name = "Turuu"

console.log(p007.fullname());
console.log(p2.name);
