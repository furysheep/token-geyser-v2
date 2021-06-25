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

interface InstanceRegistryInterface extends ethers.utils.Interface {
  functions: {
    "instanceAt(uint256)": FunctionFragment;
    "instanceCount()": FunctionFragment;
    "isInstance(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "instanceAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "instanceCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isInstance", values: [string]): string;

  decodeFunctionResult(functionFragment: "instanceAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "instanceCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isInstance", data: BytesLike): Result;

  events: {
    "InstanceAdded(address)": EventFragment;
    "InstanceRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InstanceAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InstanceRemoved"): EventFragment;
}

export class InstanceRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: InstanceRegistryInterface;

  functions: {
    instanceAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { instance: string }>;

    "instanceAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { instance: string }>;

    instanceCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    "instanceCount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    isInstance(
      instance: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { validity: boolean }>;

    "isInstance(address)"(
      instance: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { validity: boolean }>;
  };

  instanceAt(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "instanceAt(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  instanceCount(overrides?: CallOverrides): Promise<BigNumber>;

  "instanceCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  isInstance(instance: string, overrides?: CallOverrides): Promise<boolean>;

  "isInstance(address)"(
    instance: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    instanceAt(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "instanceAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    instanceCount(overrides?: CallOverrides): Promise<BigNumber>;

    "instanceCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    isInstance(instance: string, overrides?: CallOverrides): Promise<boolean>;

    "isInstance(address)"(
      instance: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    InstanceAdded(instance: null): EventFilter;

    InstanceRemoved(instance: null): EventFilter;
  };

  estimateGas: {
    instanceAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "instanceAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    instanceCount(overrides?: CallOverrides): Promise<BigNumber>;

    "instanceCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    isInstance(instance: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isInstance(address)"(
      instance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    instanceAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "instanceAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    instanceCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "instanceCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isInstance(
      instance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isInstance(address)"(
      instance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
