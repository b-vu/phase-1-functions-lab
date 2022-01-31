// Code your solution in this file!
const distanceFromHqInBlocks = (num) => {
    if(num > 42){
        return num - 42;
    }
    else{
        return 42 - num;
    }
}

const distanceFromHqInFeet = (blocks) => {
    if(blocks > 42){
        return (blocks - 42) * 264;
    }
    else{
        return (42 - blocks) * 264;
    }
}

const distanceTravelledInFeet = (num1, num2) => {
    if(num1 > num2){
        return (num1 - num2) * 264;
    }
    else{
        return (num2 - num1) * 264;
    }
}

const calculatesFarePrice = (start, destination) => {
    let numBlocksTravelled;

    if(start > destination){
        numBlocksTravelled = start - destination;
    }
    else{
        numBlocksTravelled = destination - start;
    }

    let feetTravelled = Math.abs(numBlocksTravelled) * 264 - 400;
    console.log(feetTravelled)

    if(numBlocksTravelled === 1){
        return 0;
    }
    else if(feetTravelled <= 1600){
        return feetTravelled * 0.02;
    }
    else if(feetTravelled > 1600 && feetTravelled < 2100){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}