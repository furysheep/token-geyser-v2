/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPowerSwitch } from "../IPowerSwitch";

export class IPowerSwitch__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPowerSwitch {
    return new Contract(address, _abi, signerOrProvider) as IPowerSwitch;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyShutdown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "PowerOff",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "PowerOn",
    type: "event",
  },
  {
    inputs: [],
    name: "emergencyShutdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "getStatus",
    outputs: [
      {
        internalType: "enum IPowerSwitch.State",
        name: "status",
        type: "uint8",
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
    name: "powerOff",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "powerOn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
