import { toAbsoluteUrl } from "../../../helpers";

const RelatedProducts = () => (
  <div className="pt-15 mb-0">
    {/* begin::Heading */}
    <div className="d-flex flex-stack mb-5">
      {/* begin::Title */}
      <h3 className="fw-bolder text-dark me-2 mb-0">Related Products</h3>
      {/* end::Title */}
      {/* begin::Link */}
      <a
        href="https://keenthemes.com"
        target="_black"
        className="fs-6 fw-bold explore-link"
      >
        All Products
      </a>
      {/* end::Link */}
    </div>
    {/* end::Heading */}
    {/* begin::Products */}
    <div className="mb-0">
      {/* begin::Product */}
      <a
        href="https://keenthemes.com/products/start-html-pro"
        className="btn btn-flex explore-btn-outline w-100 flex-stack  px-4 mb-4"
      >
        {/* begin::Info */}
        <div className="d-flex align-items-center me-1">
          <img
            alt=""
            src={toAbsoluteUrl("/media/technology-logos/Html5.png")}
            className="h-30px me-3"
          />
          <div className="d-flex flex-column align-items-start">
            <h3 className="text-gray-800 fs-6 fw-bold mb-0">Start HTML Pro</h3>
            <div className="text-gray-400 fs-7 fw-bold">
              HTML5, CSS3, JS, Bootstrap 5
            </div>
          </div>
        </div>
        {/* end::Info */}
        {/* begin::Label */}
        <span className="badge badge-inline explore-label-pro py-2">Pro</span>
        {/* end::Label */}
      </a>
      {/* end::Product */}
      {/* begin::Product */}
      <a
        href="https://keenthemes.com/products/start-vuejs-pro"
        className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4"
      >
        {/* begin::Info */}
        <div className="d-flex align-items-center me-1">
          <img
            alt=""
            src={toAbsoluteUrl("/media/technology-logos/VueJS.png")}
            className="h-30px me-3"
          />
          <div className="d-flex flex-column align-items-start">
            <h3 className="text-gray-800 fs-6 fw-bold mb-0">Start Vue Pro</h3>
            <div className="text-gray-400 fs-7 fw-bold">
              VueJS 3, Typescript, Bootstrap 5
            </div>
          </div>
        </div>
        {/* end::Info */}
        {/* begin::Label */}
        <span className="badge badge-inline explore-label-pro py-2">Pro</span>
        {/* end::Label */}
      </a>
      {/* end::Product */}
      {/* begin::Product */}
      <a
        href="https://keenthemes.com/products/start-react-pro"
        className="btn btn-flex explore-btn-outline w-100 flex-stack active px-4 mb-4"
      >
        {/* begin::Info */}
        <div className="d-flex align-items-center me-1">
          <img
            alt=""
            src={toAbsoluteUrl("/media/technology-logos/React.png")}
            className="h-30px me-3"
          />
          <div className="d-flex flex-column align-items-start">
            <h3 className="text-gray-800 fs-6 fw-bold mb-0">Start React Pro</h3>
            <div className="text-gray-400 fs-7 fw-bold">
              React, Typescript, Bootstrap 5
            </div>
          </div>
        </div>
        {/* end::Info */}
        {/* begin::Label */}
        <span className="badge badge-inline explore-label-pro py-2">Pro</span>
        {/* end::Label */}
      </a>
      {/* end::Product */}
    </div>
    {/* end::Products */}
  </div>
);

export { RelatedProducts };
