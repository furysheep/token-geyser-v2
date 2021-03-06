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
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface MockSmartWalletInterface extends ethers.utils.Interface {
  functions: {
    'isValidSignature(bytes32,bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'isValidSignature',
    values: [BytesLike, BytesLike],
  ): string

  decodeFunctionResult(
    functionFragment: 'isValidSignature',
    data: BytesLike,
  ): Result

  events: {}
}

export class MockSmartWallet extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: MockSmartWalletInterface

  functions: {
    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>

    'isValidSignature(bytes32,bytes)'(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>
  }

  isValidSignature(
    permissionHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>

  'isValidSignature(bytes32,bytes)'(
    permissionHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>

  callStatic: {
    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>

    'isValidSignature(bytes32,bytes)'(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'isValidSignature(bytes32,bytes)'(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'isValidSignature(bytes32,bytes)'(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
  }
}
