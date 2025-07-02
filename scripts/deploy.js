const hre = require("hardhat");

async function main() {
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(Math.floor(Date.now() / 1000) + 3600); // قفل 1 ساعت
    await lock.waitForDeployment(); // جایگزین deployed()
    console.log("Lock deployed to:", await lock.getAddress()); // آدرس قرارداد
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});