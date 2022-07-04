import React, { useState, FC } from "react";

const HeaderBanner: FC = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);

  const handleBanner = () => {
    setShowHeader(false);
  };

  return showHeader ? (
    <div className="d-flex d-inline-flex w-100 bg-dark banner" role="alert">
      <div className="d-flex w-100 align-items-center justify-content-center">
        {children}
      </div>
      <button className="btn btn-icon align-self-end" onClick={handleBanner}>
        <i className="fas fa-times text-light"></i>
      </button>
    </div>
  ) : null;
};

export default HeaderBanner;
