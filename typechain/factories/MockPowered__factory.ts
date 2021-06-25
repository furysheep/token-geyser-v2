/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockPowered } from "../MockPowered";

export class MockPowered__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(powerSwitch: string, overrides?: Overrides): Promise<MockPowered> {
    return super.deploy(powerSwitch, overrides || {}) as Promise<MockPowered>;
  }
  getDeployTransaction(
    powerSwitch: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(powerSwitch, overrides || {});
  }
  attach(address: string): MockPowered {
    return super.attach(address) as MockPowered;
  }
  connect(signer: Signer): MockPowered__factory {
    return super.connect(signer) as MockPowered__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPowered {
    return new Contract(address, _abi, signerOrProvider) as MockPowered;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "powerSwitch",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getPowerController",
    outputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPowerSwitch",
    outputs: [
      {
        internalType: "address",
        name: "powerSwitch",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOffline",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOnline",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isShutdown",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "notShutdownCall",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyOfflineCall",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyOnlineCall",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyShutdownCall",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105153803806105158339818101604052602081101561003357600080fd5b50516100498161004f602090811b6102c017901c565b50610071565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b610495806100806000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063766f13bc11610076578063bf86d6901161005b578063bf86d6901461010a578063c1b1d55014610112578063dcc7c01a1461011a576100a3565b8063766f13bc146100de5780638531a63614610102576100a3565b80632a68ba36146100a8578063438cae7e146100b2578063468f3b8d146100ce578063664ab18e146100d6575b600080fd5b6100b0610122565b005b6100ba61012c565b604080519115158252519081900360200190f35b6100b06101ac565b6100ba6101b4565b6100e6610203565b604080516001600160a01b039092168252519081900360200190f35b6100e6610252565b6100ba610261565b6100b06102b0565b6100b06102b8565b61012a6102fa565b565b60008060009054906101000a90046001600160a01b03166001600160a01b031663438cae7e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017b57600080fd5b505afa15801561018f573d6000803e3d6000fd5b505050506040513d60208110156101a557600080fd5b5051905090565b61012a610354565b60008060009054906101000a90046001600160a01b03166001600160a01b031663664ab18e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017b57600080fd5b60008060009054906101000a90046001600160a01b03166001600160a01b031663766f13bc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017b57600080fd5b6000546001600160a01b031690565b60008060009054906101000a90046001600160a01b03166001600160a01b031663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b15801561017b57600080fd5b61012a6103ad565b61012a610406565b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b610302610261565b1561012a576040805162461bcd60e51b815260206004820152601460248201527f506f77657265643a2069732073687574646f776e000000000000000000000000604482015290519081900360640190fd5b61035c61012c565b61012a576040805162461bcd60e51b815260206004820152601760248201527f506f77657265643a206973206e6f74206f66666c696e65000000000000000000604482015290519081900360640190fd5b6103b5610261565b61012a576040805162461bcd60e51b815260206004820152601860248201527f506f77657265643a206973206e6f742073687574646f776e0000000000000000604482015290519081900360640190fd5b61040e6101b4565b61012a576040805162461bcd60e51b815260206004820152601660248201527f506f77657265643a206973206e6f74206f6e6c696e6500000000000000000000604482015290519081900360640190fdfea26469706673582212207359a49e47918d765b696c369021c5693397d74619984feabad517209c1639ca64736f6c63430007060033";
