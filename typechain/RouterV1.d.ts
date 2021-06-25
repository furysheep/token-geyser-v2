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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RouterV1Interface extends ethers.utils.Interface {
  functions: {
    "create2VaultAndStake(address,address,address,uint256,bytes32,bytes)": FunctionFragment;
    "create2VaultPermitAndStake(address,address,address,bytes32,tuple,bytes)": FunctionFragment;
    "permitAndStake(address,address,tuple,bytes)": FunctionFragment;
    "stakeMulti(tuple[])": FunctionFragment;
    "unstakeMulti(tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "create2VaultAndStake",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "create2VaultPermitAndStake",
    values: [
      string,
      string,
      string,
      BytesLike,
      {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permitAndStake",
    values: [
      string,
      string,
      {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeMulti",
    values: [
      {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeMulti",
    values: [
      {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "create2VaultAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "create2VaultPermitAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permitAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeMulti", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unstakeMulti",
    data: BytesLike
  ): Result;

  events: {};
}

export class RouterV1 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RouterV1Interface;

  functions: {
    create2VaultAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "create2VaultAndStake(address,address,address,uint256,bytes32,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    create2VaultPermitAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "create2VaultPermitAndStake(address,address,address,bytes32,tuple,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    permitAndStake(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "permitAndStake(address,address,tuple,bytes)"(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unstakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unstakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  create2VaultAndStake(
    geyser: string,
    vaultFactory: string,
    vaultOwner: string,
    amount: BigNumberish,
    salt: BytesLike,
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "create2VaultAndStake(address,address,address,uint256,bytes32,bytes)"(
    geyser: string,
    vaultFactory: string,
    vaultOwner: string,
    amount: BigNumberish,
    salt: BytesLike,
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  create2VaultPermitAndStake(
    geyser: string,
    vaultFactory: string,
    vaultOwner: string,
    salt: BytesLike,
    permit: {
      owner: string;
      spender: string;
      value: BigNumberish;
      deadline: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "create2VaultPermitAndStake(address,address,address,bytes32,tuple,bytes)"(
    geyser: string,
    vaultFactory: string,
    vaultOwner: string,
    salt: BytesLike,
    permit: {
      owner: string;
      spender: string;
      value: BigNumberish;
      deadline: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  permitAndStake(
    geyser: string,
    vault: string,
    permit: {
      owner: string;
      spender: string;
      value: BigNumberish;
      deadline: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "permitAndStake(address,address,tuple,bytes)"(
    geyser: string,
    vault: string,
    permit: {
      owner: string;
      spender: string;
      value: BigNumberish;
      deadline: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    permission: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakeMulti(
    requests: {
      geyser: string;
      vault: string;
      amount: BigNumberish;
      permission: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stakeMulti(tuple[])"(
    requests: {
      geyser: string;
      vault: string;
      amount: BigNumberish;
      permission: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unstakeMulti(
    requests: {
      geyser: string;
      vault: string;
      amount: BigNumberish;
      permission: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unstakeMulti(tuple[])"(
    requests: {
      geyser: string;
      vault: string;
      amount: BigNumberish;
      permission: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    create2VaultAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "create2VaultAndStake(address,address,address,uint256,bytes32,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    create2VaultPermitAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "create2VaultPermitAndStake(address,address,address,bytes32,tuple,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    permitAndStake(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "permitAndStake(address,address,tuple,bytes)"(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "stakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "unstakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    create2VaultAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "create2VaultAndStake(address,address,address,uint256,bytes32,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    create2VaultPermitAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "create2VaultPermitAndStake(address,address,address,bytes32,tuple,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    permitAndStake(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "permitAndStake(address,address,tuple,bytes)"(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "stakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    unstakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "unstakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create2VaultAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "create2VaultAndStake(address,address,address,uint256,bytes32,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      amount: BigNumberish,
      salt: BytesLike,
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    create2VaultPermitAndStake(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "create2VaultPermitAndStake(address,address,address,bytes32,tuple,bytes)"(
      geyser: string,
      vaultFactory: string,
      vaultOwner: string,
      salt: BytesLike,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    permitAndStake(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "permitAndStake(address,address,tuple,bytes)"(
      geyser: string,
      vault: string,
      permit: {
        owner: string;
        spender: string;
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      permission: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unstakeMulti(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unstakeMulti(tuple[])"(
      requests: {
        geyser: string;
        vault: string;
        amount: BigNumberish;
        permission: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
