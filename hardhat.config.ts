import { HardhatUserConfig } from 'hardhat/config'

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@openzeppelin/hardhat-upgrades'

export default {
  solidity: {
    version: '0.7.5',
  },
  mocha: {
    timeout: 100000,
  },
} as HardhatUserConfig
