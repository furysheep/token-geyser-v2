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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUniversalVaultInterface extends ethers.utils.Interface {
  functions: {
    "calculateLockID(address,address)": FunctionFragment;
    "checkBalances()": FunctionFragment;
    "getBalanceDelegated(address,address)": FunctionFragment;
    "getBalanceLocked(address)": FunctionFragment;
    "getLockAt(uint256)": FunctionFragment;
    "getLockSetCount()": FunctionFragment;
    "getNonce()": FunctionFragment;
    "getPermissionHash(bytes32,address,address,uint256,uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "lock(address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "rageQuit(address,address)": FunctionFragment;
    "transferERC20(address,address,uint256)": FunctionFragment;
    "transferETH(address,uint256)": FunctionFragment;
    "unlock(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateLockID",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkBalances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalanceDelegated",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalanceLocked",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockSetCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPermissionHash",
    values: [BytesLike, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rageQuit",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferETH",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateLockID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalanceDelegated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalanceLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLockAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLockSetCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPermissionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rageQuit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;

  events: {
    "Locked(address,address,uint256)": EventFragment;
    "RageQuit(address,address,bool,string)": EventFragment;
    "Unlocked(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Locked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RageQuit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlocked"): EventFragment;
}

export class IUniversalVault extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUniversalVaultInterface;

  functions: {
    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { lockID: string }>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { lockID: string }>;

    checkBalances(
      overrides?: CallOverrides
    ): Promise<[boolean] & { validity: boolean }>;

    "checkBalances()"(
      overrides?: CallOverrides
    ): Promise<[boolean] & { validity: boolean }>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        }
      ] & {
        lockData: [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        };
      }
    >;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        }
      ] & {
        lockData: [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        };
      }
    >;

    getLockSetCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    "getLockSetCount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    getNonce(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    "getNonce()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { permissionHash: string }>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { permissionHash: string }>;

    initialize(overrides?: Overrides): Promise<ContractTransaction>;

    "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(
      overrides?: CallOverrides
    ): Promise<[string] & { ownerAddress: string }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<[string] & { ownerAddress: string }>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  calculateLockID(
    delegate: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "calculateLockID(address,address)"(
    delegate: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  checkBalances(overrides?: CallOverrides): Promise<boolean>;

  "checkBalances()"(overrides?: CallOverrides): Promise<boolean>;

  getBalanceDelegated(
    token: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBalanceDelegated(address,address)"(
    token: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBalanceLocked(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBalanceLocked(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLockAt(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      delegate: string;
      token: string;
      balance: BigNumber;
    }
  >;

  "getLockAt(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      delegate: string;
      token: string;
      balance: BigNumber;
    }
  >;

  getLockSetCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getLockSetCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  getPermissionHash(
    eip712TypeHash: BytesLike,
    delegate: string,
    token: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPermissionHash(bytes32,address,address,uint256,uint256)"(
    eip712TypeHash: BytesLike,
    delegate: string,
    token: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(overrides?: Overrides): Promise<ContractTransaction>;

  "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

  lock(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lock(address,uint256,bytes)"(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  rageQuit(
    delegate: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "rageQuit(address,address)"(
    delegate: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferERC20(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferERC20(address,address,uint256)"(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferETH(
    to: string,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "transferETH(address,uint256)"(
    to: string,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  unlock(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unlock(address,uint256,bytes)"(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    checkBalances(overrides?: CallOverrides): Promise<boolean>;

    "checkBalances()"(overrides?: CallOverrides): Promise<boolean>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        delegate: string;
        token: string;
        balance: BigNumber;
      }
    >;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        delegate: string;
        token: string;
        balance: BigNumber;
      }
    >;

    getLockSetCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getLockSetCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { notified: boolean; error: string }>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { notified: boolean; error: string }>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Locked(delegate: null, token: null, amount: null): EventFilter;

    RageQuit(
      delegate: null,
      token: null,
      notified: null,
      reason: null
    ): EventFilter;

    Unlocked(delegate: null, token: null, amount: null): EventFilter;
  };

  estimateGas: {
    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkBalances(overrides?: CallOverrides): Promise<BigNumber>;

    "checkBalances()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockSetCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getLockSetCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides): Promise<BigNumber>;

    "initialize()"(overrides?: Overrides): Promise<BigNumber>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkBalances(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "checkBalances()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLockSetCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLockSetCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initialize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
