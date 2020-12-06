async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contract with the account:",
      deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    TokenERC1155 = await ethers.getContractFactory("TokenERC1155");
    hardhatToken = await TokenERC1155.deploy();

    console.log("ERC1155 address:", hardhatToken.address)
  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
