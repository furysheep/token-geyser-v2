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

interface MockDelegateInterface extends ethers.utils.Interface {
  functions: {
    'lock(address,address,uint256,bytes)': FunctionFragment
    'rageQuit()': FunctionFragment
    'setDelegateType(uint8)': FunctionFragment
    'unlock(address,address,uint256,bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'lock',
    values: [string, string, BigNumberish, BytesLike],
  ): string
  encodeFunctionData(functionFragment: 'rageQuit', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setDelegateType',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'unlock',
    values: [string, string, BigNumberish, BytesLike],
  ): string

  decodeFunctionResult(functionFragment: 'lock', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'rageQuit', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setDelegateType',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'unlock', data: BytesLike): Result

  events: {}
}

export class MockDelegate extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: MockDelegateInterface

  functions: {
    lock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'lock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    rageQuit(overrides?: CallOverrides): Promise<[void]>

    'rageQuit()'(overrides?: CallOverrides): Promise<[void]>

    setDelegateType(
      delegateType: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'setDelegateType(uint8)'(
      delegateType: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    unlock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'unlock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>
  }

  lock(
    vault: string,
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'lock(address,address,uint256,bytes)'(
    vault: string,
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  rageQuit(overrides?: CallOverrides): Promise<void>

  'rageQuit()'(overrides?: CallOverrides): Promise<void>

  setDelegateType(
    delegateType: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'setDelegateType(uint8)'(
    delegateType: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  unlock(
    vault: string,
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'unlock(address,address,uint256,bytes)'(
    vault: string,
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  callStatic: {
    lock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    'lock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    rageQuit(overrides?: CallOverrides): Promise<void>

    'rageQuit()'(overrides?: CallOverrides): Promise<void>

    setDelegateType(
      delegateType: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    'setDelegateType(uint8)'(
      delegateType: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    unlock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    'unlock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    lock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'lock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    rageQuit(overrides?: CallOverrides): Promise<BigNumber>

    'rageQuit()'(overrides?: CallOverrides): Promise<BigNumber>

    setDelegateType(
      delegateType: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'setDelegateType(uint8)'(
      delegateType: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    unlock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'unlock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    lock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'lock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    rageQuit(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'rageQuit()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setDelegateType(
      delegateType: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'setDelegateType(uint8)'(
      delegateType: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    unlock(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'unlock(address,address,uint256,bytes)'(
      vault: string,
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>
  }
}
