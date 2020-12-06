pragma solidity ^0.7.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

/// @title ERC1155 implementation
/// @author Ramiro Fernandez
contract TokenERC11553 is ERC1155 {
  
    uint public Minted = 0;

    constructor() public ERC1155("") {}

    /// @notice Mint ERC1155 token
    /// @return The id of the generated collectible
    function mint() public payable returns (uint) {
        uint newId = Minted.add(1);
        _mint(msg.sender, newId, uint(msg.value.div(etherValue)), "");
        Minted = newId;
        return newId;
    }

}
