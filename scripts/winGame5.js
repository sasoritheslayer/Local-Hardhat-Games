const gameAddr = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
const contractName = "Game5";

const main = async () => {
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  await game.giveMeAllowance(10000);
  await game.mint(10000);

  const tx = await game.win();

  const receipt = await tx.wait();
  console.log(receipt);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
