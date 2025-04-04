// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract MarketData is Ownable{
    AggregatorV3Interface internal ETHUSD;
    
    constructor() Ownable(msg.sender) {
        ETHUSD = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    }

    function getPrice () public view returns (int256) {
        (,int ethusdPrice, , ,) =  ETHUSD.latestRoundData();
        return ethusdPrice;
    }

}