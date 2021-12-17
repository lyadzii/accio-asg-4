function addPet(e){
    const petDetail = {
        name: e.name.value,
        age: e.age.value,
        weight: e.weight.value,
        type: e.type.value,
        favourite: e.favourite.value
    }
    console.log("Object");
    console.log(petDetail);
    console.log("JSON format")
    console.log(JSON.stringify(petDetail));
}