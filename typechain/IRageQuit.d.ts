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

interface IRageQuitInterface extends ethers.utils.Interface {
  functions: {
    'rageQuit()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'rageQuit', values?: undefined): string

  decodeFunctionResult(functionFragment: 'rageQuit', data: BytesLike): Result

  events: {}
}

export class IRageQuit extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IRageQuitInterface

  functions: {
    rageQuit(overrides?: Overrides): Promise<ContractTransaction>

    'rageQuit()'(overrides?: Overrides): Promise<ContractTransaction>
  }

  rageQuit(overrides?: Overrides): Promise<ContractTransaction>

  'rageQuit()'(overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    rageQuit(overrides?: CallOverrides): Promise<void>

    'rageQuit()'(overrides?: CallOverrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    rageQuit(overrides?: Overrides): Promise<BigNumber>

    'rageQuit()'(overrides?: Overrides): Promise<BigNumber>
  }

  populateTransaction: {
    rageQuit(overrides?: Overrides): Promise<PopulatedTransaction>

    'rageQuit()'(overrides?: Overrides): Promise<PopulatedTransaction>
  }
}
