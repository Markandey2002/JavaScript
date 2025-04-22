// // console.log("2" > 1)
// // console.log("01" > 1)

// // console.log(null > 0)
// // console.log(null == 0)
// // console.log(null >= 0)



// function boilWater() {
//     console.log("Boiling water...");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Water is boiled.");
//             resolve(); // done boiling
//         }, 3000);
//     });
// }

// function makeCoffee() {
//     console.log("Making coffee ☕");
// }
// function makeTea() {
//     console.log("Making tea 🍵");
// }

// boilWater().then(makeTea);


async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
    sleep(1000).then(() => {
        console.log(Date.now()-t);
    });
    
    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */