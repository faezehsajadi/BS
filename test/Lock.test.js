const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lock", function () {
  it("Should set the right unlockTime", async function () {
    const currentTime = Math.floor(Date.now() / 1000);
    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(currentTime + 3600); // قفل 1 ساعت
    await lock.waitForDeployment();
    const unlockTime = await lock.unlockTime();
    expect(unlockTime).to.be.above(currentTime);
  });
});