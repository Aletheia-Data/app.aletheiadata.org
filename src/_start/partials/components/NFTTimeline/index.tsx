/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Ktsvg, truncate } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";
import { OPENSEA } from "setup/web3js";

type Props = {
  className: string;
};

const NFTTimeline: React.FC<Props> = ({ className }) => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [nftCount, setNftCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the latest NFTs
  const fetchNFTs = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/v2/api/nfts/getAll?limit=5&sort=createdAt:desc`);
      const data = await response.json();
      setNfts(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch NFTs");
      setLoading(false);
    }
  };

  // Fetch NFT count
  const fetchNFTCount = async () => {
    try {
      const response = await fetch("/api/nfts/count");
      const data = await response.json();
      setNftCount(data.totalCount);
      setLoadingCount(false);
    } catch (err) {
      setError("Failed to fetch NFT count");
      setLoadingCount(false);
    }
  };

  useEffect(() => {
    fetchNFTs();
    fetchNFTCount();
  }, []);

  if (loading || loadingCount) {
    return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className="card-header align-items-center border-0 mt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">PDNFTs</span>
            <span className="text-muted mt-2 fw-bold fs-6">Loading ...</span>
          </h3>
          <div className="card-toolbar">
            {/* begin::Dropdown */}
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <Ktsvg
                path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                className="svg-icon-1"
              />
            </button>
            <Dropdown1 />
            {/* end::Dropdown */}
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-3">
          {/* <begin::Timeline */}
          <div className="timeline-label">
            {/* begin::Item */}
            <div className="timeline-item">
              {/* begin::Label */}
              <div className="timeline-label fw-bolder text-gray-800 fs-6">
                00:00
              </div>
              {/* end::Label */}

              {/* begin::Badge */}
              <div className="timeline-badge">
                <i className="fa fa-genderless text-success fs-1"></i>
              </div>
              {/* end::Badge */}

              {/* begin::Content */}
              <div className="timeline-content d-flex">
                <span className="fw-bolder text-gray-800 ps-3">
                  Loading ...
                </span>
              </div>
              {/* end::Content */}
            </div>
            {/* end::Item */}
          </div>
          {/* <end::Timeline */}
        </div>
        {/* <end: Card Body */}
      </div>
    );
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">PDNFTs</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {nftCount} NFTs
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown */}
          {/* The dropdown code here */}
          <Dropdown1 />
          {/* end::Dropdown */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-3">
        {/* <begin::Timeline */}
        <div className="timeline-label">
          {nfts.map((item: any) => {
            const txReceipt = item.txReceipt;
            const cid = item.cid;
            const time = new Date(item.createdAt);
            const asset = item.asset;

            const getLinkAsset = (cid: string, item: any) => {
              const url = item?.id ? `/single/src/${cid}?assetId=${item.id}` : "";
              return (
                <a href={url} target={""}>
                  {`${truncate(`${cid}`, 15)}`}
                </a>
              );
            };

            const message = `NFT creado para CID:`;
            const badge_color = `color-xls`;

            const getLinkOpensea = (item: any) => {
              const url = `${OPENSEA}/${item.events["Transfer"]["address"]}/${item.events["Transfer"]["returnValues"].tokenId}`;
              return (
                <a href={url} target={"_blank"}>
                  {`${truncate(`${item.transactionHash}`, 15)}`}
                </a>
              );
            };

            return (
              <div className="timeline-item" key={`import_${item.id}`}>
                {/* begin::Label */}
                <div className="timeline-label fw-bolder text-gray-800 fs-6">
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                {/* end::Label */}

                {/* begin::Badge */}
                <div className="timeline-badge">
                  <i className={`fa fa-genderless ${badge_color} fs-1`}></i>
                </div>
                {/* end::Badge */}

                {/* begin::Content */}
                <div className="timeline-content d-flex">
                  <span className="fw-bolder text-gray-800 ps-3">
                    {`${message}`} {getLinkAsset(cid, asset)} <br />
                    {txReceipt ? getLinkOpensea(txReceipt) : null}
                  </span>
                </div>
                {/* end::Content */}
              </div>
            );
          })}
        </div>
        {/* <end::Timeline */}
      </div>

      {/* <end: Card Body */}
    </div>
  );
};

export { NFTTimeline };
