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

interface VaultFactoryInterface extends ethers.utils.Interface {
  functions: {
    'addressToUint(address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'baseURI()': FunctionFragment
    'create(bytes)': FunctionFragment
    'create2(bytes32)': FunctionFragment
    'getApproved(uint256)': FunctionFragment
    'getTemplate()': FunctionFragment
    'instanceAt(uint256)': FunctionFragment
    'instanceCount()': FunctionFragment
    'isApprovedForAll(address,address)': FunctionFragment
    'isInstance(address)': FunctionFragment
    'name()': FunctionFragment
    'ownerOf(uint256)': FunctionFragment
    'predictCreate2Address(bytes32)': FunctionFragment
    'safeTransferFrom(address,address,uint256)': FunctionFragment
    'setApprovalForAll(address,bool)': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
    'symbol()': FunctionFragment
    'tokenByIndex(uint256)': FunctionFragment
    'tokenOfOwnerByIndex(address,uint256)': FunctionFragment
    'tokenURI(uint256)': FunctionFragment
    'totalSupply()': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'uint256ToAddress(uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'addressToUint',
    values: [string],
  ): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'baseURI', values?: undefined): string
  encodeFunctionData(functionFragment: 'create', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'create2', values: [BytesLike]): string
  encodeFunctionData(
    functionFragment: 'getApproved',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'getTemplate',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'instanceAt',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'instanceCount',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string],
  ): string
  encodeFunctionData(functionFragment: 'isInstance', values: [string]): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'ownerOf',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'predictCreate2Address',
    values: [BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom',
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean],
  ): string
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'tokenByIndex',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'tokenOfOwnerByIndex',
    values: [string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'tokenURI',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'uint256ToAddress',
    values: [BigNumberish],
  ): string

  decodeFunctionResult(
    functionFragment: 'addressToUint',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'baseURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'create', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'create2', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getTemplate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'instanceAt', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'instanceCount',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'isInstance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'predictCreate2Address',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'tokenByIndex',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'tokenOfOwnerByIndex',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'uint256ToAddress',
    data: BytesLike,
  ): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'ApprovalForAll(address,address,bool)': EventFragment
    'InstanceAdded(address)': EventFragment
    'InstanceRemoved(address)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'InstanceAdded'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'InstanceRemoved'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export class VaultFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: VaultFactoryInterface

  functions: {
    addressToUint(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { tokenId: BigNumber }>

    'addressToUint(address)'(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { tokenId: BigNumber }>

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'balanceOf(address)'(
      owner: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    baseURI(overrides?: CallOverrides): Promise<[string]>

    'baseURI()'(overrides?: CallOverrides): Promise<[string]>

    'create(bytes)'(
      arg0: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'create()'(overrides?: Overrides): Promise<ContractTransaction>

    'create2(bytes32)'(
      salt: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'create2(bytes,bytes32)'(
      arg0: BytesLike,
      salt: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    getTemplate(
      overrides?: CallOverrides,
    ): Promise<[string] & { template: string }>

    'getTemplate()'(
      overrides?: CallOverrides,
    ): Promise<[string] & { template: string }>

    instanceAt(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { instance: string }>

    'instanceAt(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { instance: string }>

    instanceCount(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { count: BigNumber }>

    'instanceCount()'(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { count: BigNumber }>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    isInstance(
      instance: string,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { validity: boolean }>

    'isInstance(address)'(
      instance: string,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { validity: boolean }>

    name(overrides?: CallOverrides): Promise<[string]>

    'name()'(overrides?: CallOverrides): Promise<[string]>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    predictCreate2Address(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string] & { instance: string }>

    'predictCreate2Address(bytes32)'(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string] & { instance: string }>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    'symbol()'(overrides?: CallOverrides): Promise<[string]>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    'tokenURI(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>

    uint256ToAddress(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { vault: string }>

    'uint256ToAddress(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { vault: string }>
  }

  addressToUint(vault: string, overrides?: CallOverrides): Promise<BigNumber>

  'addressToUint(address)'(
    vault: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'approve(address,uint256)'(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

  'balanceOf(address)'(
    owner: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  baseURI(overrides?: CallOverrides): Promise<string>

  'baseURI()'(overrides?: CallOverrides): Promise<string>

  'create(bytes)'(
    arg0: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'create()'(overrides?: Overrides): Promise<ContractTransaction>

  'create2(bytes32)'(
    salt: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'create2(bytes,bytes32)'(
    arg0: BytesLike,
    salt: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  'getApproved(uint256)'(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  getTemplate(overrides?: CallOverrides): Promise<string>

  'getTemplate()'(overrides?: CallOverrides): Promise<string>

  instanceAt(index: BigNumberish, overrides?: CallOverrides): Promise<string>

  'instanceAt(uint256)'(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  instanceCount(overrides?: CallOverrides): Promise<BigNumber>

  'instanceCount()'(overrides?: CallOverrides): Promise<BigNumber>

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>

  'isApprovedForAll(address,address)'(
    owner: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>

  isInstance(instance: string, overrides?: CallOverrides): Promise<boolean>

  'isInstance(address)'(
    instance: string,
    overrides?: CallOverrides,
  ): Promise<boolean>

  name(overrides?: CallOverrides): Promise<string>

  'name()'(overrides?: CallOverrides): Promise<string>

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  'ownerOf(uint256)'(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  predictCreate2Address(
    salt: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>

  'predictCreate2Address(bytes32)'(
    salt: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>

  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'setApprovalForAll(address,bool)'(
    operator: string,
    approved: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>

  'supportsInterface(bytes4)'(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>

  symbol(overrides?: CallOverrides): Promise<string>

  'symbol()'(overrides?: CallOverrides): Promise<string>

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  'tokenByIndex(uint256)'(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  'tokenOfOwnerByIndex(address,uint256)'(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  'tokenURI(uint256)'(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  'transferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>

  uint256ToAddress(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  'uint256ToAddress(uint256)'(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>

  callStatic: {
    addressToUint(vault: string, overrides?: CallOverrides): Promise<BigNumber>

    'addressToUint(address)'(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      owner: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    baseURI(overrides?: CallOverrides): Promise<string>

    'baseURI()'(overrides?: CallOverrides): Promise<string>

    'create(bytes)'(arg0: BytesLike, overrides?: CallOverrides): Promise<string>

    'create()'(overrides?: CallOverrides): Promise<string>

    'create2(bytes32)'(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>

    'create2(bytes,bytes32)'(
      arg0: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    getTemplate(overrides?: CallOverrides): Promise<string>

    'getTemplate()'(overrides?: CallOverrides): Promise<string>

    instanceAt(index: BigNumberish, overrides?: CallOverrides): Promise<string>

    'instanceAt(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    instanceCount(overrides?: CallOverrides): Promise<BigNumber>

    'instanceCount()'(overrides?: CallOverrides): Promise<BigNumber>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>

    isInstance(instance: string, overrides?: CallOverrides): Promise<boolean>

    'isInstance(address)'(
      instance: string,
      overrides?: CallOverrides,
    ): Promise<boolean>

    name(overrides?: CallOverrides): Promise<string>

    'name()'(overrides?: CallOverrides): Promise<string>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    predictCreate2Address(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>

    'predictCreate2Address(bytes32)'(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides,
    ): Promise<void>

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides,
    ): Promise<void>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>

    symbol(overrides?: CallOverrides): Promise<string>

    'symbol()'(overrides?: CallOverrides): Promise<string>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    'tokenURI(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    uint256ToAddress(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>

    'uint256ToAddress(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>
  }

  filters: {
    Approval(
      owner: string | null,
      approved: string | null,
      tokenId: BigNumberish | null,
    ): EventFilter

    ApprovalForAll(
      owner: string | null,
      operator: string | null,
      approved: null,
    ): EventFilter

    InstanceAdded(instance: null): EventFilter

    InstanceRemoved(instance: null): EventFilter

    Transfer(
      from: string | null,
      to: string | null,
      tokenId: BigNumberish | null,
    ): EventFilter
  }

  estimateGas: {
    addressToUint(vault: string, overrides?: CallOverrides): Promise<BigNumber>

    'addressToUint(address)'(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      owner: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    baseURI(overrides?: CallOverrides): Promise<BigNumber>

    'baseURI()'(overrides?: CallOverrides): Promise<BigNumber>

    'create(bytes)'(arg0: BytesLike, overrides?: Overrides): Promise<BigNumber>

    'create()'(overrides?: Overrides): Promise<BigNumber>

    'create2(bytes32)'(
      salt: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'create2(bytes,bytes32)'(
      arg0: BytesLike,
      salt: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getTemplate(overrides?: CallOverrides): Promise<BigNumber>

    'getTemplate()'(overrides?: CallOverrides): Promise<BigNumber>

    instanceAt(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'instanceAt(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    instanceCount(overrides?: CallOverrides): Promise<BigNumber>

    'instanceCount()'(overrides?: CallOverrides): Promise<BigNumber>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    isInstance(instance: string, overrides?: CallOverrides): Promise<BigNumber>

    'isInstance(address)'(
      instance: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    'name()'(overrides?: CallOverrides): Promise<BigNumber>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    predictCreate2Address(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'predictCreate2Address(bytes32)'(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    'symbol()'(overrides?: CallOverrides): Promise<BigNumber>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'tokenURI(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>

    uint256ToAddress(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    'uint256ToAddress(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>
  }

  populateTransaction: {
    addressToUint(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'addressToUint(address)'(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    balanceOf(
      owner: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'balanceOf(address)'(
      owner: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'baseURI()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'create(bytes)'(
      arg0: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'create()'(overrides?: Overrides): Promise<PopulatedTransaction>

    'create2(bytes32)'(
      salt: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'create2(bytes,bytes32)'(
      arg0: BytesLike,
      salt: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getTemplate()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    instanceAt(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'instanceAt(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    instanceCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'instanceCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    isInstance(
      instance: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'isInstance(address)'(
      instance: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'name()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    predictCreate2Address(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'predictCreate2Address(bytes32)'(
      salt: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'symbol()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'tokenURI(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>

    uint256ToAddress(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    'uint256ToAddress(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>
  }
}