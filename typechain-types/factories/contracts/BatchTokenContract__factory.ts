/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BatchTokenContract,
  BatchTokenContractInterface,
} from "../../contracts/BatchTokenContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fromAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address[]",
        name: "toAddress",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "recipientAmount",
        type: "uint256[]",
      },
    ],
    name: "BatchTransfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "batchTransferToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c84806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806320651d5d14610030575b600080fd5b61004a6004803603810190610045919061071e565b61004c565b005b818190508484905014610094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161008b90610836565b60405180910390fd5b60008590506003858590501161024a5760005b858590508110156102445760008273ffffffffffffffffffffffffffffffffffffffff16338888858181106100df576100de610856565b5b90506020020160208101906100f49190610885565b87878681811061010757610106610856565b5b90506020020135604051602401610120939291906108da565b6040516020818303038152906040527f23b872dd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516101aa9190610982565b6000604051808303816000865af19150503d80600081146101e7576040519150601f19603f3d011682016040523d82523d6000602084013e6101ec565b606091505b5050905080610230576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610227906109e5565b60405180910390fd5b50808061023c90610a34565b9150506100a7565b50610574565b6000805b868690508110156102935784848281811061026c5761026b610856565b5b905060200201358261027e9190610a7c565b9150808061028b90610a34565b91505061024e565b5060008273ffffffffffffffffffffffffffffffffffffffff163330846040516024016102c2939291906108da565b6040516020818303038152906040527f23b872dd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161034c9190610982565b6000604051808303816000865af19150503d8060008114610389576040519150601f19603f3d011682016040523d82523d6000602084013e61038e565b606091505b50509050806103d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c9906109e5565b60405180910390fd5b60005b878790508110156105705760008473ffffffffffffffffffffffffffffffffffffffff1689898481811061040c5761040b610856565b5b90506020020160208101906104219190610885565b88888581811061043457610433610856565b5b9050602002013560405160240161044c929190610ab0565b6040516020818303038152906040527fa9059cbb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516104d69190610982565b6000604051808303816000865af19150503d8060008114610513576040519150601f19603f3d011682016040523d82523d6000602084013e610518565b606091505b505090508061055c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610553906109e5565b60405180910390fd5b50808061056890610a34565b9150506103d5565b5050505b8484604051610584929190610b96565b60405180910390208673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd8a8aad52af675829a21c3a0a2677ec3d6cd3a56f1ba7c20d66162643cee010686866040516105eb929190610c2a565b60405180910390a4505050505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061063082610605565b9050919050565b61064081610625565b811461064b57600080fd5b50565b60008135905061065d81610637565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261068857610687610663565b5b8235905067ffffffffffffffff8111156106a5576106a4610668565b5b6020830191508360208202830111156106c1576106c061066d565b5b9250929050565b60008083601f8401126106de576106dd610663565b5b8235905067ffffffffffffffff8111156106fb576106fa610668565b5b6020830191508360208202830111156107175761071661066d565b5b9250929050565b60008060008060006060868803121561073a576107396105fb565b5b60006107488882890161064e565b955050602086013567ffffffffffffffff81111561076957610768610600565b5b61077588828901610672565b9450945050604086013567ffffffffffffffff81111561079857610797610600565b5b6107a4888289016106c8565b92509250509295509295909350565b600082825260208201905092915050565b7f54686520696e70757420617272617973206d757374206861766520746865207360008201527f616d65206c656e67746800000000000000000000000000000000000000000000602082015250565b6000610820602a836107b3565b915061082b826107c4565b604082019050919050565b6000602082019050818103600083015261084f81610813565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561089b5761089a6105fb565b5b60006108a98482850161064e565b91505092915050565b6108bb81610625565b82525050565b6000819050919050565b6108d4816108c1565b82525050565b60006060820190506108ef60008301866108b2565b6108fc60208301856108b2565b61090960408301846108cb565b949350505050565b600081519050919050565b600081905092915050565b60005b8381101561094557808201518184015260208101905061092a565b60008484015250505050565b600061095c82610911565b610966818561091c565b9350610976818560208601610927565b80840191505092915050565b600061098e8284610951565b915081905092915050565b7f42617463685472616e7366657220546f6b656e206661696c6564000000000000600082015250565b60006109cf601a836107b3565b91506109da82610999565b602082019050919050565b600060208201905081810360008301526109fe816109c2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a3f826108c1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610a7157610a70610a05565b5b600182019050919050565b6000610a87826108c1565b9150610a92836108c1565b9250828201905080821115610aaa57610aa9610a05565b5b92915050565b6000604082019050610ac560008301856108b2565b610ad260208301846108cb565b9392505050565b600081905092915050565b6000819050919050565b610af781610625565b82525050565b6000610b098383610aee565b60208301905092915050565b6000610b24602084018461064e565b905092915050565b6000602082019050919050565b6000610b458385610ad9565b9350610b5082610ae4565b8060005b85811015610b8957610b668284610b15565b610b708882610afd565b9750610b7b83610b2c565b925050600181019050610b54565b5085925050509392505050565b6000610ba3828486610b39565b91508190509392505050565b600082825260208201905092915050565b600080fd5b82818337505050565b6000610bda8385610baf565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610c0d57610c0c610bc0565b5b602083029250610c1e838584610bc5565b82840190509392505050565b60006020820190508181036000830152610c45818486610bce565b9050939250505056fea264697066735822122026a547fdbba940c0de23e40b3dbfafaf9e62cfa1b3fa6a0c97f038ae784072ec64736f6c63430008110033";

type BatchTokenContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BatchTokenContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BatchTokenContract__factory extends ContractFactory {
  constructor(...args: BatchTokenContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BatchTokenContract> {
    return super.deploy(overrides || {}) as Promise<BatchTokenContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BatchTokenContract {
    return super.attach(address) as BatchTokenContract;
  }
  override connect(signer: Signer): BatchTokenContract__factory {
    return super.connect(signer) as BatchTokenContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BatchTokenContractInterface {
    return new utils.Interface(_abi) as BatchTokenContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchTokenContract {
    return new Contract(address, _abi, signerOrProvider) as BatchTokenContract;
  }
}
