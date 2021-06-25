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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockPoweredInterface extends ethers.utils.Interface {
  functions: {
    "getPowerController()": FunctionFragment;
    "getPowerSwitch()": FunctionFragment;
    "isOffline()": FunctionFragment;
    "isOnline()": FunctionFragment;
    "isShutdown()": FunctionFragment;
    "notShutdownCall()": FunctionFragment;
    "onlyOfflineCall()": FunctionFragment;
    "onlyOnlineCall()": FunctionFragment;
    "onlyShutdownCall()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPowerController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPowerSwitch",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isOffline", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOnline", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "notShutdownCall",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onlyOfflineCall",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onlyOnlineCall",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onlyShutdownCall",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getPowerController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPowerSwitch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOffline", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOnline", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isShutdown", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notShutdownCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onlyOfflineCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onlyOnlineCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onlyShutdownCall",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockPowered extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockPoweredInterface;

  functions: {
    getPowerController(
      overrides?: CallOverrides
    ): Promise<[string] & { controller: string }>;

    "getPowerController()"(
      overrides?: CallOverrides
    ): Promise<[string] & { controller: string }>;

    getPowerSwitch(
      overrides?: CallOverrides
    ): Promise<[string] & { powerSwitch: string }>;

    "getPowerSwitch()"(
      overrides?: CallOverrides
    ): Promise<[string] & { powerSwitch: string }>;

    isOffline(
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    "isOffline()"(
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    isOnline(
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    "isOnline()"(
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    isShutdown(
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    "isShutdown()"(
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    notShutdownCall(overrides?: CallOverrides): Promise<[void]>;

    "notShutdownCall()"(overrides?: CallOverrides): Promise<[void]>;

    onlyOfflineCall(overrides?: CallOverrides): Promise<[void]>;

    "onlyOfflineCall()"(overrides?: CallOverrides): Promise<[void]>;

    onlyOnlineCall(overrides?: CallOverrides): Promise<[void]>;

    "onlyOnlineCall()"(overrides?: CallOverrides): Promise<[void]>;

    onlyShutdownCall(overrides?: CallOverrides): Promise<[void]>;

    "onlyShutdownCall()"(overrides?: CallOverrides): Promise<[void]>;
  };

  getPowerController(overrides?: CallOverrides): Promise<string>;

  "getPowerController()"(overrides?: CallOverrides): Promise<string>;

  getPowerSwitch(overrides?: CallOverrides): Promise<string>;

  "getPowerSwitch()"(overrides?: CallOverrides): Promise<string>;

  isOffline(overrides?: CallOverrides): Promise<boolean>;

  "isOffline()"(overrides?: CallOverrides): Promise<boolean>;

  isOnline(overrides?: CallOverrides): Promise<boolean>;

  "isOnline()"(overrides?: CallOverrides): Promise<boolean>;

  isShutdown(overrides?: CallOverrides): Promise<boolean>;

  "isShutdown()"(overrides?: CallOverrides): Promise<boolean>;

  notShutdownCall(overrides?: CallOverrides): Promise<void>;

  "notShutdownCall()"(overrides?: CallOverrides): Promise<void>;

  onlyOfflineCall(overrides?: CallOverrides): Promise<void>;

  "onlyOfflineCall()"(overrides?: CallOverrides): Promise<void>;

  onlyOnlineCall(overrides?: CallOverrides): Promise<void>;

  "onlyOnlineCall()"(overrides?: CallOverrides): Promise<void>;

  onlyShutdownCall(overrides?: CallOverrides): Promise<void>;

  "onlyShutdownCall()"(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    getPowerController(overrides?: CallOverrides): Promise<string>;

    "getPowerController()"(overrides?: CallOverrides): Promise<string>;

    getPowerSwitch(overrides?: CallOverrides): Promise<string>;

    "getPowerSwitch()"(overrides?: CallOverrides): Promise<string>;

    isOffline(overrides?: CallOverrides): Promise<boolean>;

    "isOffline()"(overrides?: CallOverrides): Promise<boolean>;

    isOnline(overrides?: CallOverrides): Promise<boolean>;

    "isOnline()"(overrides?: CallOverrides): Promise<boolean>;

    isShutdown(overrides?: CallOverrides): Promise<boolean>;

    "isShutdown()"(overrides?: CallOverrides): Promise<boolean>;

    notShutdownCall(overrides?: CallOverrides): Promise<void>;

    "notShutdownCall()"(overrides?: CallOverrides): Promise<void>;

    onlyOfflineCall(overrides?: CallOverrides): Promise<void>;

    "onlyOfflineCall()"(overrides?: CallOverrides): Promise<void>;

    onlyOnlineCall(overrides?: CallOverrides): Promise<void>;

    "onlyOnlineCall()"(overrides?: CallOverrides): Promise<void>;

    onlyShutdownCall(overrides?: CallOverrides): Promise<void>;

    "onlyShutdownCall()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getPowerController(overrides?: CallOverrides): Promise<BigNumber>;

    "getPowerController()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPowerSwitch(overrides?: CallOverrides): Promise<BigNumber>;

    "getPowerSwitch()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOffline(overrides?: CallOverrides): Promise<BigNumber>;

    "isOffline()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOnline(overrides?: CallOverrides): Promise<BigNumber>;

    "isOnline()"(overrides?: CallOverrides): Promise<BigNumber>;

    isShutdown(overrides?: CallOverrides): Promise<BigNumber>;

    "isShutdown()"(overrides?: CallOverrides): Promise<BigNumber>;

    notShutdownCall(overrides?: CallOverrides): Promise<BigNumber>;

    "notShutdownCall()"(overrides?: CallOverrides): Promise<BigNumber>;

    onlyOfflineCall(overrides?: CallOverrides): Promise<BigNumber>;

    "onlyOfflineCall()"(overrides?: CallOverrides): Promise<BigNumber>;

    onlyOnlineCall(overrides?: CallOverrides): Promise<BigNumber>;

    "onlyOnlineCall()"(overrides?: CallOverrides): Promise<BigNumber>;

    onlyShutdownCall(overrides?: CallOverrides): Promise<BigNumber>;

    "onlyShutdownCall()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getPowerController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPowerController()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPowerSwitch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPowerSwitch()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOffline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOffline()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOnline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOnline()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isShutdown(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isShutdown()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notShutdownCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "notShutdownCall()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onlyOfflineCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "onlyOfflineCall()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onlyOnlineCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "onlyOnlineCall()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onlyShutdownCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "onlyShutdownCall()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
