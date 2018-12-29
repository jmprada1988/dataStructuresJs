takeSower = () => {
    return "Taking a hot shower!!";
}

eatBreakfast = () => {
    let meal = cookFood();
    return `Eating ${meal}`
}

cookFood = () => {
    let items = ["Oatmeal", "Eggs", "Protein shake", "Smoothy"]
    return items[Math.floor(Math.random()* items.length)];
}

wakeUp = () => {
    takeSower();
    eatBreakfast();
    console.log("Going to work with happy tommy!!!");
}

wakeUp();