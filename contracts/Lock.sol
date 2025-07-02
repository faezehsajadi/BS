// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Lock {
    uint256 public unlockTime;
    address payable public owner;

    constructor(uint256 _unlockTime) payable {
        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        require(block.timestamp >= unlockTime, "Lock time not expired");
        require(msg.sender == owner, "Not owner");
        owner.transfer(address(this).balance);
    }
}