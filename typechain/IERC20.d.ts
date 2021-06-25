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

interface IERC20Interface extends ethers.utils.Interface {
  functions: {
    'approve(address,uint256)': FunctionFragment
    'totalSupply()': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'allowance(address,address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'allowance',
    values: [string, string],
  ): string

  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result

  events: {
    'Transfer(address,address,uint256)': EventFragment
    'Approval(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
}

export class IERC20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IERC20Interface

  functions: {
    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'approve(address,uint256)'(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    balanceOf(who: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'balanceOf(address)'(
      who: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'transfer(address,uint256)'(
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>
  }

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'approve(address,uint256)'(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'transferFrom(address,address,uint256)'(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>

  'balanceOf(address)'(
    who: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'transfer(address,uint256)'(
    to: string,
    value: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  'allowance(address,address)'(
    owner: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  callStatic: {
    approve(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>

    'approve(address,uint256)'(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      who: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>

    'transfer(address,uint256)'(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
  }

  filters: {
    Transfer(from: string | null, to: string | null, value: null): EventFilter

    Approval(
      owner: string | null,
      spender: string | null,
      value: null,
    ): EventFilter
  }

  estimateGas: {
    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'approve(address,uint256)'(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      who: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'transfer(address,uint256)'(
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'approve(address,uint256)'(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    balanceOf(
      who: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'balanceOf(address)'(
      who: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'transfer(address,uint256)'(
      to: string,
      value: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
  }
}
