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

interface PowerSwitchInterface extends ethers.utils.Interface {
  functions: {
    'emergencyShutdown()': FunctionFragment
    'getPowerController()': FunctionFragment
    'getStatus()': FunctionFragment
    'isOffline()': FunctionFragment
    'isOnline()': FunctionFragment
    'isShutdown()': FunctionFragment
    'owner()': FunctionFragment
    'powerOff()': FunctionFragment
    'powerOn()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'emergencyShutdown',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'getPowerController',
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: 'getStatus', values?: undefined): string
  encodeFunctionData(functionFragment: 'isOffline', values?: undefined): string
  encodeFunctionData(functionFragment: 'isOnline', values?: undefined): string
  encodeFunctionData(functionFragment: 'isShutdown', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'powerOff', values?: undefined): string
  encodeFunctionData(functionFragment: 'powerOn', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string

  decodeFunctionResult(
    functionFragment: 'emergencyShutdown',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getPowerController',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'getStatus', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isOffline', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isOnline', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isShutdown', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'powerOff', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'powerOn', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result

  events: {
    'EmergencyShutdown()': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'PowerOff()': EventFragment
    'PowerOn()': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'EmergencyShutdown'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PowerOff'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PowerOn'): EventFragment
}

export class PowerSwitch extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: PowerSwitchInterface

  functions: {
    emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>

    'emergencyShutdown()'(overrides?: Overrides): Promise<ContractTransaction>

    getPowerController(
      overrides?: CallOverrides,
    ): Promise<[string] & { controller: string }>

    'getPowerController()'(
      overrides?: CallOverrides,
    ): Promise<[string] & { controller: string }>

    getStatus(overrides?: CallOverrides): Promise<[number] & { status: number }>

    'getStatus()'(
      overrides?: CallOverrides,
    ): Promise<[number] & { status: number }>

    isOffline(
      overrides?: CallOverrides,
    ): Promise<[boolean] & { status: boolean }>

    'isOffline()'(
      overrides?: CallOverrides,
    ): Promise<[boolean] & { status: boolean }>

    isOnline(
      overrides?: CallOverrides,
    ): Promise<[boolean] & { status: boolean }>

    'isOnline()'(
      overrides?: CallOverrides,
    ): Promise<[boolean] & { status: boolean }>

    isShutdown(
      overrides?: CallOverrides,
    ): Promise<[boolean] & { status: boolean }>

    'isShutdown()'(
      overrides?: CallOverrides,
    ): Promise<[boolean] & { status: boolean }>

    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    powerOff(overrides?: Overrides): Promise<ContractTransaction>

    'powerOff()'(overrides?: Overrides): Promise<ContractTransaction>

    powerOn(overrides?: Overrides): Promise<ContractTransaction>

    'powerOn()'(overrides?: Overrides): Promise<ContractTransaction>

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>
  }

  emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>

  'emergencyShutdown()'(overrides?: Overrides): Promise<ContractTransaction>

  getPowerController(overrides?: CallOverrides): Promise<string>

  'getPowerController()'(overrides?: CallOverrides): Promise<string>

  getStatus(overrides?: CallOverrides): Promise<number>

  'getStatus()'(overrides?: CallOverrides): Promise<number>

  isOffline(overrides?: CallOverrides): Promise<boolean>

  'isOffline()'(overrides?: CallOverrides): Promise<boolean>

  isOnline(overrides?: CallOverrides): Promise<boolean>

  'isOnline()'(overrides?: CallOverrides): Promise<boolean>

  isShutdown(overrides?: CallOverrides): Promise<boolean>

  'isShutdown()'(overrides?: CallOverrides): Promise<boolean>

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  powerOff(overrides?: Overrides): Promise<ContractTransaction>

  'powerOff()'(overrides?: Overrides): Promise<ContractTransaction>

  powerOn(overrides?: Overrides): Promise<ContractTransaction>

  'powerOn()'(overrides?: Overrides): Promise<ContractTransaction>

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  callStatic: {
    emergencyShutdown(overrides?: CallOverrides): Promise<void>

    'emergencyShutdown()'(overrides?: CallOverrides): Promise<void>

    getPowerController(overrides?: CallOverrides): Promise<string>

    'getPowerController()'(overrides?: CallOverrides): Promise<string>

    getStatus(overrides?: CallOverrides): Promise<number>

    'getStatus()'(overrides?: CallOverrides): Promise<number>

    isOffline(overrides?: CallOverrides): Promise<boolean>

    'isOffline()'(overrides?: CallOverrides): Promise<boolean>

    isOnline(overrides?: CallOverrides): Promise<boolean>

    'isOnline()'(overrides?: CallOverrides): Promise<boolean>

    isShutdown(overrides?: CallOverrides): Promise<boolean>

    'isShutdown()'(overrides?: CallOverrides): Promise<boolean>

    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    powerOff(overrides?: CallOverrides): Promise<void>

    'powerOff()'(overrides?: CallOverrides): Promise<void>

    powerOn(overrides?: CallOverrides): Promise<void>

    'powerOn()'(overrides?: CallOverrides): Promise<void>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>
  }

  filters: {
    EmergencyShutdown(): EventFilter

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null,
    ): EventFilter

    PowerOff(): EventFilter

    PowerOn(): EventFilter
  }

  estimateGas: {
    emergencyShutdown(overrides?: Overrides): Promise<BigNumber>

    'emergencyShutdown()'(overrides?: Overrides): Promise<BigNumber>

    getPowerController(overrides?: CallOverrides): Promise<BigNumber>

    'getPowerController()'(overrides?: CallOverrides): Promise<BigNumber>

    getStatus(overrides?: CallOverrides): Promise<BigNumber>

    'getStatus()'(overrides?: CallOverrides): Promise<BigNumber>

    isOffline(overrides?: CallOverrides): Promise<BigNumber>

    'isOffline()'(overrides?: CallOverrides): Promise<BigNumber>

    isOnline(overrides?: CallOverrides): Promise<BigNumber>

    'isOnline()'(overrides?: CallOverrides): Promise<BigNumber>

    isShutdown(overrides?: CallOverrides): Promise<BigNumber>

    'isShutdown()'(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    powerOff(overrides?: Overrides): Promise<BigNumber>

    'powerOff()'(overrides?: Overrides): Promise<BigNumber>

    powerOn(overrides?: Overrides): Promise<BigNumber>

    'powerOn()'(overrides?: Overrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    emergencyShutdown(overrides?: Overrides): Promise<PopulatedTransaction>

    'emergencyShutdown()'(overrides?: Overrides): Promise<PopulatedTransaction>

    getPowerController(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getPowerController()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getStatus()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isOffline(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isOffline()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isOnline(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isOnline()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isShutdown(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isShutdown()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    powerOff(overrides?: Overrides): Promise<PopulatedTransaction>

    'powerOff()'(overrides?: Overrides): Promise<PopulatedTransaction>

    powerOn(overrides?: Overrides): Promise<PopulatedTransaction>

    'powerOn()'(overrides?: Overrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>
  }
}
