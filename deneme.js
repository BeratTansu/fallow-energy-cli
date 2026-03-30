const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve,ms));
};

const main = async () => {
    console.log("1");
    await wait(2000);
    console.log("2");
    console.log("3");
};

main();