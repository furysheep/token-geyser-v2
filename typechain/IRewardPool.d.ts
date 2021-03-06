/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IRewardPoolInterface extends ethers.utils.Interface {
  functions: {
    'rescueERC20(address[],address)': FunctionFragment
    'sendERC20(address,address,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'rescueERC20',
    values: [string[], string],
  ): string
  encodeFunctionData(
    functionFragment: 'sendERC20',
    values: [string, string, BigNumberish],
  ): string

  decodeFunctionResult(functionFragment: 'rescueERC20', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'sendERC20', data: BytesLike): Result

  events: {}
}

export class IRewardPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IRewardPoolInterface

  functions: {
    rescueERC20(
      tokens: string[],
      recipient: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'rescueERC20(address[],address)'(
      tokens: string[],
      recipient: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    sendERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'sendERC20(address,address,uint256)'(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>
  }

  rescueERC20(
    tokens: string[],
    recipient: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'rescueERC20(address[],address)'(
    tokens: string[],
    recipient: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  sendERC20(
    token: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'sendERC20(address,address,uint256)'(
    token: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  callStatic: {
    rescueERC20(
      tokens: string[],
      recipient: string,
      overrides?: CallOverrides,
    ): Promise<void>

    'rescueERC20(address[],address)'(
      tokens: string[],
      recipient: string,
      overrides?: CallOverrides,
    ): Promise<void>

    sendERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    'sendERC20(address,address,uint256)'(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    rescueERC20(
      tokens: string[],
      recipient: string,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'rescueERC20(address[],address)'(
      tokens: string[],
      recipient: string,
      overrides?: Overrides,
    ): Promise<BigNumber>

    sendERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'sendERC20(address,address,uint256)'(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    rescueERC20(
      tokens: string[],
      recipient: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'rescueERC20(address[],address)'(
      tokens: string[],
      recipient: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    sendERC20(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'sendERC20(address,address,uint256)'(
      token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>
  }
}
