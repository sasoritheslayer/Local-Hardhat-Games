const contractName = "Game5";

const main = async () => {
  const Game = await hre.ethers.getContractFactory(contractName);

  const game = await Game.deploy();

  console.log(`${contractName} deployed to address: ${game.address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
