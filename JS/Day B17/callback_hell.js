function step1(callback) {
    console.log("Step 1");
    callback();
}

function step2(callback) {
    console.log("Step 2");
    callback();
}

function step3() {
    console.log("Step 3");
}

step1(() => {
    step2(() => {
        step3();
    });
});