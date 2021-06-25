/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { UniversalVault } from '../UniversalVault'

export class UniversalVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<UniversalVault> {
    return super.deploy(overrides || {}) as Promise<UniversalVault>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): UniversalVault {
    return super.attach(address) as UniversalVault
  }
  connect(signer: Signer): UniversalVault__factory {
    return super.connect(signer) as UniversalVault__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): UniversalVault {
    return new Contract(address, _abi, signerOrProvider) as UniversalVault
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Locked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'notified',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'reason',
        type: 'string',
      },
    ],
    name: 'RageQuit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Unlocked',
    type: 'event',
  },
  {
    inputs: [],
    name: 'LOCK_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'RAGEQUIT_GAS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UNLOCK_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'calculateLockID',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'lockID',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'checkBalances',
    outputs: [
      {
        internalType: 'bool',
        name: 'validity',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
    ],
    name: 'getBalanceDelegated',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getBalanceLocked',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getLockAt',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'delegate',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        internalType: 'struct IUniversalVault.LockData',
        name: 'lockData',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLockSetCount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'eip712TypeHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'getPermissionHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'permissionHash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initializeLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'permissionHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'isValidSignature',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'permission',
        type: 'bytes',
      },
    ],
    name: 'lock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nft',
    outputs: [
      {
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: 'ownerAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'rageQuit',
    outputs: [
      {
        internalType: 'bool',
        name: 'notified',
        type: 'bool',
      },
      {
        internalType: 'string',
        name: 'error',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'permission',
        type: 'bytes',
      },
    ],
    name: 'unlock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x60c060405234801561001057600080fd5b50604080518082018252600e81526d155b9a5d995c9cd85b15985d5b1d60921b6020808301918252835180850190945260058452640312e302e360dc1b908401908152915190206080529051902060a05260805160a05161221b61008460003980611abf525080611a9b525061221b6000f3fe60806040526004361061016e5760003560e01c80638c8ca33c116100cb5780639db5dbe41161007f578063b292462011610059578063b2924620146103af578063c792f45d146103c4578063d087d288146103e457610175565b80639db5dbe41461034d5780639e241e851461036d578063abee08031461038f57610175565b80638f9c197b116100b05780638f9c197b146102ea5780639d505d3d1461030a5780639db1d6b51461031f57610175565b80638c8ca33c146102c05780638da5cb5b146102d557610175565b80635aef521e116101225780637b1a4909116101075780637b1a4909146102815780637df98acf146102965780638129fc1c146102ab57610175565b80635aef521e1461024c57806370680c1a1461026c57610175565b80632466de6c116101535780632466de6c146101dd57806347ccca021461020a57806349bf78941461022c57610175565b80630d4f581a1461017a5780631626ba7e146101b057610175565b3661017557005b600080fd5b34801561018657600080fd5b5061019a610195366004611d9e565b6103f9565b6040516101a79190611ff0565b60405180910390f35b3480156101bc57600080fd5b506101d06101cb366004611cfd565b610457565b6040516101a79190611f12565b3480156101e957600080fd5b506101fd6101f8366004611b98565b610488565b6040516101a79190611eda565b34801561021657600080fd5b5061021f6104b2565b6040516101a79190611e40565b34801561023857600080fd5b506101fd610247366004611cb0565b6104c2565b34801561025857600080fd5b506101fd610267366004611b98565b610505565b34801561027857600080fd5b506101fd610538565b61029461028f366004611c05565b610549565b005b3480156102a257600080fd5b506102946105a5565b3480156102b757600080fd5b5061029461065e565b3480156102cc57600080fd5b506101fd610709565b3480156102e157600080fd5b5061021f61072d565b3480156102f657600080fd5b506101fd610305366004611b7e565b610737565b34801561031657600080fd5b506101fd6107b3565b34801561032b57600080fd5b5061033f61033a366004611b98565b6107ba565b6040516101a7929190611eb7565b34801561035957600080fd5b50610294610368366004611bca565b6109cc565b34801561037957600080fd5b50610382610ad7565b6040516101a79190611eac565b34801561039b57600080fd5b506102946103aa366004611c2e565b610bbf565b3480156103bb57600080fd5b506101fd610db1565b3480156103d057600080fd5b506102946103df366004611c2e565b610dd5565b3480156103f057600080fd5b506101fd61106b565b610401611b47565b60026000610410600385611071565b81526020808201929092526040908101600020815160608101835281546001600160a01b03908116825260018301541693810193909352600201549082015290505b919050565b600061046b61046461072d565b848461107d565b61047657600061047f565b630b135d3f60e11b5b90505b92915050565b6000600260006104988486610505565b815260200190815260200160002060020154905092915050565b6000546001600160a01b03165b90565b60006104fb86868686866040516020016104e0959493929190611ee3565b60405160208183030381529060405280519060200120611252565b9695505050505050565b6000828260405160200161051a929190611e19565b60405160208183030381529060405280519060200120905092915050565b600061054460036112b9565b905090565b3361055261072d565b6001600160a01b0316146105975760405162461bcd60e51b81526004018080602001828103825260268152602001806120cb6026913960400191505060405180910390fd5b6105a182826112c4565b5050565b600054600160a81b900460ff16806105c057506105c06113b7565b806105d55750600054600160a01b900460ff16155b6106105760405162461bcd60e51b815260040180806020018281038252602e815260200180612169602e913960400191505060405180910390fd5b600054600160a81b900460ff16158015610647576000805460ff60a01b1960ff60a81b19909116600160a81b1716600160a01b1790555b801561065b576000805460ff60a81b191690555b50565b600054600160a81b900460ff168061067957506106796113b7565b8061068e5750600054600160a01b900460ff16155b6106c95760405162461bcd60e51b815260040180806020018281038252602e815260200180612169602e913960400191505060405180910390fd5b600054600160a81b900460ff16158015610700576000805460ff60a01b1960ff60a81b19909116600160a81b1716600160a01b1790555b610647336113c8565b7f8d081d812ea189de0af9ba525d04569d14ba76f44bb76dd835c0e6b4420ba59d81565b60006105446113f7565b60008061074460036112b9565b905060005b818110156107ac576000600281610761600385611071565b8152602081019190915260400160002060018101549091506001600160a01b0386811691161480156107965750838160020154115b156107a357806002015493505b50600101610749565b5050919050565b6207a12081565b60006060336107c761072d565b6001600160a01b03161461080c5760405162461bcd60e51b81526004018080602001828103825260268152602001806120cb6026913960400191505060405180910390fd5b60006108188585610505565b905061082560038261148d565b61084a5760405162461bcd60e51b815260040161084190611fb9565b60405180910390fd5b61085c856001600160a01b0316611499565b15610937576207a1205a10156108845760405162461bcd60e51b815260040161084190611f84565b846001600160a01b031663b0ccbf8c6207a1206040518263ffffffff1660e01b8152600401600060405180830381600088803b1580156108c357600080fd5b5087f1935050505080156108d5575060015b610932576108e1612025565b806108ec57506108f7565b60009350915061092d565b3d808015610921576040519150601f19603f3d011682016040523d82523d6000602084013e610926565b606091505b5060009350505b610937565b600192505b61094260038261149f565b61094857fe5b6000818152600260208190526040808320805473ffffffffffffffffffffffffffffffffffffffff199081168255600182018054909116905590910191909155517f5d48c8b472b6f0a3febb35fe2b008421cdfbe2dd7d042218ac8b749634dc8a44906109bc908790879087908790611e78565b60405180910390a1509250929050565b336109d561072d565b6001600160a01b031614610a1a5760405162461bcd60e51b81526004018080602001828103825260268152602001806120cb6026913960400191505060405180910390fd5b610a2d81610a2785610737565b906114ab565b6040516370a0823160e01b81526001600160a01b038516906370a0823190610a59903090600401611e40565b60206040518083038186803b158015610a7157600080fd5b505afa158015610a85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa99190611db6565b1015610ac75760405162461bcd60e51b815260040161084190611f27565b610ad2838383611505565b505050565b600080610ae460036112b9565b905060005b81811015610bb6576000600281610b01600385611071565b8152602081019190915260409081016000206002810154600182015492516370a0823160e01b8152919350916001600160a01b0316906370a0823190610b4b903090600401611e40565b60206040518083038186803b158015610b6357600080fd5b505afa158015610b77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9b9190611db6565b1015610bad57600093505050506104bf565b50600101610ae9565b50600191505090565b610bee7f8d081d812ea189de0af9ba525d04569d14ba76f44bb76dd835c0e6b4420ba59d3386866001546104c2565b82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250630b135d3f60e11b9250610c39915084905083610457565b6001600160e01b03191614610c95576040805162461bcd60e51b815260206004820152601a60248201527f455243313237313a20496e76616c6964207369676e6174757265000000000000604482015290519081900360640190fd5b6000610ca13388610505565b9050610cae60038261148d565b610cca5760405162461bcd60e51b815260040161084190611fb9565b60008181526002602081905260409091200154861015610d195760008181526002602081905260409091200154610d019087611671565b60008281526002602081905260409091200155610d64565b60008181526002602081905260408220805473ffffffffffffffffffffffffffffffffffffffff19908116825560018201805490911690550155610d5e60038261149f565b610d6457fe5b60018054810190556040517fe6e0ef9cd056ca98561ca60e347ada61e1ede2f1142a078951b7a52e1e508e6090610da09033908a908a90611e54565b60405180910390a150505050505050565b7f99f44e6d92879b0ecb41f31dfd2375411849ee710a4f55d3d17a6d02659b241581565b610e047f99f44e6d92879b0ecb41f31dfd2375411849ee710a4f55d3d17a6d02659b24153386866001546104c2565b82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250630b135d3f60e11b9250610e4f915084905083610457565b6001600160e01b03191614610eab576040805162461bcd60e51b815260206004820152601a60248201527f455243313237313a20496e76616c6964207369676e6174757265000000000000604482015290519081900360640190fd5b6000610eb73388610505565b9050610ec460038261148d565b15610efe5760008181526002602081905260409091200154610ee690876114ab565b60008281526002602081905260409091200155610f82565b610f096003826116ce565b610f0f57fe5b604080516060810182523381526001600160a01b0389811660208084019182528385018b81526000878152600292839052959095209351845490841673ffffffffffffffffffffffffffffffffffffffff1991821617855591516001850180549190941692169190911790915591519101555b600081815260026020819052604091829020015490516370a0823160e01b81526001600160a01b038916906370a0823190610fc1903090600401611e40565b60206040518083038186803b158015610fd957600080fd5b505afa158015610fed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110119190611db6565b101561102f5760405162461bcd60e51b815260040161084190611f27565b60018054810190556040517f989eaa915cbb416ea3d6f9a63b1a3de51770c7674b11fe21ecdf76b4e1d1391090610da09033908a908a90611e54565b60015490565b600061047f83836116da565b600061108884611499565b1561122a576000631626ba7e60e01b9050600080866001600160a01b03168387876040516024018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110ef5781810151838201526020016110d7565b50505050905090810190601f16801561111c5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199098169790971787525181519196909550859450925090508083835b602083106111805780518252601f199092019160209182019101611161565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146111e0576040519150601f19603f3d011682016040523d82523d6000602084013e6111e5565b606091505b50915091508180156112205750826001600160e01b03191681806020019051602081101561121257600080fd5b50516001600160e01b031916145b935050505061124b565b836001600160a01b031661123e848461173e565b6001600160a01b03161490505b9392505050565b600061125c6117b4565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b6000610482826117ef565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b602083106113105780518252601f1990920191602091820191016112f1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611372576040519150601f19603f3d011682016040523d82523d6000602084013e611377565b606091505b5050905080610ad25760405162461bcd60e51b81526004018080602001828103825260348152602001806121136034913960400191505060405180910390fd5b60006113c230611499565b15905090565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60008054604080517f6352211e00000000000000000000000000000000000000000000000000000000815230600482015290516001600160a01b0390921691636352211e91602480820192602092909190829003018186803b15801561145c57600080fd5b505afa158015611470573d6000803e3d6000fd5b505050506040513d602081101561148657600080fd5b5051905090565b600061047f83836117f3565b3b151590565b600061047f838361180b565b60008282018381101561047f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b03167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b6020831061159a5780518252601f19909201916020918201910161157b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146115fc576040519150601f19603f3d011682016040523d82523d6000602084013e611601565b606091505b509150915081801561162f57508051158061162f575080806020019051602081101561162c57600080fd5b50515b61166a5760405162461bcd60e51b815260040180806020018281038252602d8152602001806121b9602d913960400191505060405180910390fd5b5050505050565b6000828211156116c8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600061047f83836118d1565b8154600090821061171c5760405162461bcd60e51b81526004018080602001828103825260228152602001806120f16022913960400191505060405180910390fd5b82600001828154811061172b57fe5b9060005260206000200154905092915050565b60008151604114611796576040805162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6104fb8682858561191b565b60006105447f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6117e2611a99565b6117ea611abd565b611ae1565b5490565b60009081526001919091016020526040902054151590565b600081815260018301602052604081205480156118c7578354600019808301919081019060009087908390811061183e57fe5b906000526020600020015490508087600001848154811061185b57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061188b57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610482565b6000915050610482565b60006118dd83836117f3565b61191357508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610482565b506000610482565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561197c5760405162461bcd60e51b81526004018080602001828103825260228152602001806121476022913960400191505060405180910390fd5b8360ff16601b148061199157508360ff16601c145b6119cc5760405162461bcd60e51b81526004018080602001828103825260228152602001806121976022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611a28573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611a90576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000838383611aee611b43565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b03168152602001955050505050506040516020818303038152906040528051906020012090509392505050565b4690565b604080516060810182526000808252602082018190529181019190915290565b80356001600160a01b038116811461045257600080fd5b600060208284031215611b8f578081fd5b61047f82611b67565b60008060408385031215611baa578081fd5b611bb383611b67565b9150611bc160208401611b67565b90509250929050565b600080600060608486031215611bde578081fd5b611be784611b67565b9250611bf560208501611b67565b9150604084013590509250925092565b60008060408385031215611c17578182fd5b611c2083611b67565b946020939093013593505050565b60008060008060608587031215611c43578081fd5b611c4c85611b67565b935060208501359250604085013567ffffffffffffffff80821115611c6f578283fd5b818701915087601f830112611c82578283fd5b813581811115611c90578384fd5b886020828501011115611ca1578384fd5b95989497505060200194505050565b600080600080600060a08688031215611cc7578081fd5b85359450611cd760208701611b67565b9350611ce560408701611b67565b94979396509394606081013594506080013592915050565b60008060408385031215611d0f578182fd5b8235915060208084013567ffffffffffffffff80821115611d2e578384fd5b818601915086601f830112611d41578384fd5b813581811115611d4d57fe5b604051601f8201601f1916810185018381118282101715611d6a57fe5b6040528181528382018501891015611d80578586fd5b81858501868301378585838301015280955050505050509250929050565b600060208284031215611daf578081fd5b5035919050565b600060208284031215611dc7578081fd5b5051919050565b60008151808452815b81811015611df357602081850181015186830182015201611dd7565b81811115611e045782602083870101525b50601f01601f19169290920160200192915050565b6bffffffffffffffffffffffff19606093841b811682529190921b16601482015260280190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b0380871683528086166020840152508315156040830152608060608301526104fb6080830184611dce565b901515815260200190565b6000831515825260406020830152611ed26040830184611dce565b949350505050565b90815260200190565b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b6001600160e01b031991909116815260200190565b60208082526024908201527f556e6976657273616c5661756c743a20696e73756666696369656e742062616c60408201527f616e636500000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f556e6976657273616c5661756c743a20696e73756666696369656e7420676173604082015260600190565b6020808252601c908201527f556e6976657273616c5661756c743a206d697373696e67206c6f636b00000000604082015260600190565b81516001600160a01b039081168252602080840151909116908201526040918201519181019190915260600190565b60e01c90565b600060443d1015612035576104bf565b600481823e6308c379a0612049825161201f565b14612053576104bf565b6040513d600319016004823e80513d67ffffffffffffffff816024840111818411171561208357505050506104bf565b8284019250825191508082111561209d57505050506104bf565b503d830160208284010111156120b5575050506104bf565b601f01601f191681016020016040529150509056fe4f776e61626c654552433732313a2063616c6c6572206973206e6f7420746865206f776e6572456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64735472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c656445434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c75655472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564a26469706673582212203be9879f22110148c63f9d14d7bd98593fcb27a667917868b895cd344928992f64736f6c63430007060033'