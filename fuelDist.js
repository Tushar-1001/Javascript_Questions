function fuelDist(magic,dist){

let startIndex = 0;
    let remainingMagic = 0;
    let usedMagic = 0;
    let len = magic.length;

    for (let i = 0; i < len; i++) {
        remainingMagic += magic[i] - dist[i];
        if (remainingMagic < 0) {
            startIndex = i + 1;
            usedMagic += remainingMagic;
            remainingMagic = 0;
        }
    }
    return usedMagic + remainingMagic >= 0 ? startIndex : -1;

}

console.log(fuelDist([1,2,3,4] , [2,3,1,2]))