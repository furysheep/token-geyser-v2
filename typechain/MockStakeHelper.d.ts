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

interface MockStakeHelperInterface extends ethers.utils.Interface {
  functions: {
    'flashStake(address,address,uint256,bytes,bytes)': FunctionFragment
    'stakeBatch(address[],address[],uint256[],bytes[])': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'flashStake',
    values: [string, string, BigNumberish, BytesLike, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'stakeBatch',
    values: [string[], string[], BigNumberish[], BytesLike[]],
  ): string

  decodeFunctionResult(functionFragment: 'flashStake', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stakeBatch', data: BytesLike): Result

  events: {}
}

export class MockStakeHelper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: MockStakeHelperInterface

  functions: {
    flashStake(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'flashStake(address,address,uint256,bytes,bytes)'(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    stakeBatch(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'stakeBatch(address[],address[],uint256[],bytes[])'(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>
  }

  flashStake(
    geyser: string,
    vault: string,
    amount: BigNumberish,
    lockPermission: BytesLike,
    unstakePermission: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'flashStake(address,address,uint256,bytes,bytes)'(
    geyser: string,
    vault: string,
    amount: BigNumberish,
    lockPermission: BytesLike,
    unstakePermission: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  stakeBatch(
    geysers: string[],
    vaults: string[],
    amounts: BigNumberish[],
    permissions: BytesLike[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'stakeBatch(address[],address[],uint256[],bytes[])'(
    geysers: string[],
    vaults: string[],
    amounts: BigNumberish[],
    permissions: BytesLike[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  callStatic: {
    flashStake(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    'flashStake(address,address,uint256,bytes,bytes)'(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    stakeBatch(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<void>

    'stakeBatch(address[],address[],uint256[],bytes[])'(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    flashStake(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'flashStake(address,address,uint256,bytes,bytes)'(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    stakeBatch(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: Overrides,
    ): Promise<BigNumber>

    'stakeBatch(address[],address[],uint256[],bytes[])'(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: Overrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    flashStake(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'flashStake(address,address,uint256,bytes,bytes)'(
      geyser: string,
      vault: string,
      amount: BigNumberish,
      lockPermission: BytesLike,
      unstakePermission: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    stakeBatch(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'stakeBatch(address[],address[],uint256[],bytes[])'(
      geysers: string[],
      vaults: string[],
      amounts: BigNumberish[],
      permissions: BytesLike[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>
  }
}
