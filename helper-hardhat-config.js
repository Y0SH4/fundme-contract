const networkConfig = {
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
  },
  97: {
    name: "BNBT",
    ethUsdPriceFeed: "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526"
  }
}

const developmentChain = ["hardhat", "localhost"]

module.exports = {
  networkConfig,
  developmentChain
}
