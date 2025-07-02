// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract BlackStallion {
    uint256 public totalSupply;

    function mint(uint256 amount) public {
        totalSupply += amount;
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }
}