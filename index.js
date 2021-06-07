function distanceFromHqInBlocks(street){
    return Math.abs(42 - street)
};

function distanceFromHqInFeet(street) {
    return (distanceFromHqInBlocks(street))*264
};

function distanceTravelledInFeet(start, end) {
    return Math.abs(end-start)*264
};

function calculatesFarePrice(start, end) {
    const billableDistance = (distanceTravelledInFeet(start, end))-400

    if (billableDistance < 0) {
        return 0
    } else if (billableDistance <= 1600) {
        return billableDistance*0.02
    } else if (billableDistance > 1600 && billableDistance < 2100) {
        return 25
    } else {
        return 'cannot travel that far'
    }
    

}