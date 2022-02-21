require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  network: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/MLyECTtkip69nUDV934_IhpS89jT5Bqx',
      accounts: ['b161c4759c70e986c2340697265bbe22fed838e4f72d1056110d640fde848ab8']
    }
  }
}