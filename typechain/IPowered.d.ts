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

interface IPoweredInterface extends ethers.utils.Interface {
  functions: {
    "getPowerController()": FunctionFragment;
    "getPowerSwitch()": FunctionFragment;
    "isOffline()": FunctionFragment;
    "isOnline()": FunctionFragment;
    "isShutdown()": FunctionFragment;
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

  events: {};
}

export class IPowered extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPoweredInterface;

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
  };
}
