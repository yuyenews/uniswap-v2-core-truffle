const Migrations = artifacts.require("Migrations");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(UniswapV2Factory);
};
