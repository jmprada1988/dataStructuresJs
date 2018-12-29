countDown = (num) => {
    if(num <= 0){
        console.log("I have reach the end");
        return;
    }
    console.log(`num is ${num}`);
    num--;
    countDown(num);
}

countDown(10);