// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    struct MyStruct {
        uint256 id;
        string name;
    }
    
    mapping(uint256 => MyStruct) public myDictionary;
    
    function addToDictionary(uint256 _id, string memory _name) public {
        MyStruct memory newStruct = MyStruct(_id, _name);
        myDictionary[_id] = newStruct;
    }
}

