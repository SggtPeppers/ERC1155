/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");

 const INFURA_PROJECT_ID = "ab2199e48f0740c4878482673fe5fedd";

 const ROPSTEN_PRIVATE_KEY = "e8854ea11528136dd8f95df31ae336036450e75c56ac5b1ef6a08e900645badd";

module.exports = {
  solidity: "0.7.4",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
