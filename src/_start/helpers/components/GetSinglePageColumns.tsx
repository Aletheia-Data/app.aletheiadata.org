import React from "react";
import StatusBadge from "../../partials/components/StatusBadge";
import moment from "moment";
import { Ktsvg } from "_start/helpers";
import { Record, NFT } from "_start/types";
import { Link } from "react-router-dom";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import { CHAIN_ID } from "../../../app/contracts/config";
import { POLYSCAN, OPENSEA } from "../../../setup/web3js";

const customNodeOptions = {
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
  chainId: CHAIN_ID,
};

const magic = new Magic(`${process.env.REACT_APP_MAGIC_LINK_API_KEY}`, {
  network: customNodeOptions,
  locale: "en_US",
  extensions: [new ConnectExtension()],
});
const web3 = new Web3(magic.rpcProvider);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getSinglePageColumns = (data: any) => {
  return [
    {
      title: "Titulo",
      cells: data?.map((recordItem: Record) => (
        <Link
          key={`record-alexandria-${recordItem.cid}`}
          className="text-gray-800 fw-bolder text-hover-primary fs-6"
          to={`/single/cat/${recordItem.cid}?assetId=${recordItem.id}`}
        >
          {recordItem.title}
        </Link>
      )),
    },
    {
      title: "Ultimo Cambio",
      cells: data?.map((recordItem: Record) => (
        <span
          key={`record-alexandria-${recordItem.cid}`}
          className="text-primary fw-bolder d-block fs-6"
        >
          {moment(recordItem?.updatedAt).format("DD/MM/YYYY")}
        </span>
      )),
    },
    {
      title: "Estatus",
      cells: data?.map((recordItem: Record) => (
        <StatusBadge
          key={`record-alexandria-${recordItem.cid}`}
          status={recordItem.status}
        />
      )),
    },
    {
      title: "Action",
      cells: data?.map((recordItem: Record) => (
        <Link
          key={`record-alexandria-${recordItem.cid}`}
          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
          to={`/single/cat/${recordItem.cid}?assetId=${recordItem.id}`}
        >
          <Ktsvg
            className="svg-icon-4"
            path="/media/icons/duotone/General/Sad.svg"
          />
        </Link>
      )),
    },
  ];
};

export const getSinglePageColumnsNFT = (user: string, data: any) => {
  return [
    {
      title: "TX Hash",
      cells: data?.map((recordItem: NFT) => {
        const isOwner =
          user.toLowerCase() === recordItem.txReceipt.from.toLowerCase();

        return (
          <a
            key={`record-alexandria-${recordItem.cid}`}
            className="text-gray-800 fw-bolder text-hover-primary fs-6"
            href={`${POLYSCAN}/${recordItem.txReceipt.transactionHash}`}
            target="_blank"
          >
            {recordItem.txReceipt.transactionHash}
            {"  "}
            {isOwner ? (
              <span className="badge bg-danger" style={{ marginLeft: 5 }}>
                Owned
              </span>
            ) : null}
          </a>
        );
      }),
    },
    {
      title: "Fecha Mint",
      cells: data?.map((recordItem: NFT) => (
        <span
          key={`record-alexandria-${recordItem.cid}`}
          className="text-primary fw-bolder d-block fs-6"
        >
          {moment(recordItem?.createdAt).format("DD/MM/YYYY")}
        </span>
      )),
    },
    {
      title: "Action",
      cells: data?.map((recordItem: NFT) => (
        <a
          key={`record-alexandria-${recordItem.cid}`}
          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
          href={`${OPENSEA}/${recordItem.txReceipt.events["Transfer"]["address"]}/${recordItem.txReceipt.events["Transfer"]["returnValues"].tokenId}`}
          target="_blank"
        >
          <Ktsvg
            className="svg-icon-4"
            path="/media/icons/duotone/NFT/opensea.svg"
          />
        </a>
      )),
    },
  ];
};
