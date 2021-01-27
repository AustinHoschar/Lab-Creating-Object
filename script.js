let pet={
    type:"Dog:",
    name:"Dozer",
    numbLegs:4,

    sayLegs: function(){return "This dog has " + this.numbLegs + " legs" },
   
    sayInfo: function(){return "This is a " +pet.type + " his name is " + pet.name + " and he has " + pet.numbLegs + " legs."}
};


document.getElementById("type").innerHTML = pet.type;

document.getElementById("name").innerHTML = pet.name;

document.getElementById("legs").innerHTML = pet.numbLegs;


