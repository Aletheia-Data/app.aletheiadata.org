import { toAbsoluteUrl } from "../../../helpers";

const Pro = () => (
  <>
    <div className="mb-3">
      {/* begin::Heading */}
      <div className="d-flex flex-stack mb-5">
        {/* begin::Title */}
        <h3 className="fw-bolder text-dark me-2 mb-0">Start Licenses</h3>
        {/* end::Title */}
        {/* begin::Link */}
        <a
          href="https://keenthemes.com/licensing"
          target="_black"
          className="fs-6 fw-bold explore-link"
        >
          License Terms
        </a>
        {/* end::Link */}
      </div>
      {/* end::Heading */}
      {/* begin::Options */}
      <div className="mb-0">
        {/* begin::Option */}
        <div className="d-flex flex-stack rounded border border-dashed border-gray-300 py-3 px-6 mb-3">
          {/* begin::Label */}
          <div className="d-flex flex-column">
            <span className="fs-6 fw-bolder text-gray-800">Regular</span>
            <span className="fs-7 fw-bold text-gray-400">Single site</span>
          </div>
          {/* end::Label */}
          {/* begin::Price */}
          <div className="d-flex align-items-baseline ms-1">
            <span className="text-muted fs-7 me-0">$</span>
            <span className="fw-bolder text-dark fs-2">39</span>
          </div>
          {/* end::Price */}
        </div>
        {/* end::Option */}
        {/* begin::Option */}
        <div className="d-flex flex-stack rounded border border-dashed border-gray-300 py-3 px-6 mb-3">
          {/* begin::Label */}
          <div className="d-flex flex-column">
            <span className="fs-6 fw-bolder text-gray-800">Multisite</span>
            <span className="fs-7 fw-bold text-gray-400">Unlimited sites</span>
          </div>
          {/* end::Label */}
          {/* begin::Price */}
          <div className="d-flex align-items-baseline ms-1">
            <span className="text-muted fs-7 me-0">$</span>
            <span className="fw-bolder text-dark fs-2">129</span>
          </div>
          {/* end::Price */}
        </div>
        {/* end::Option */}
        {/* begin::Option */}
        <div className="d-flex flex-stack rounded border border-dashed border-gray-300 py-3 px-6">
          {/* begin::Label */}
          <div className="d-flex flex-column">
            <span className="fs-6 fw-bolder text-gray-800">Extended</span>
            <span className="fs-7 fw-bold text-gray-400">For paying users</span>
          </div>
          {/* end::Label */}
          {/* begin::Price */}
          <div className="d-flex align-items-baseline ms-1">
            <span className="text-muted fs-7 me-0">$</span>
            <span className="fw-bolder text-dark fs-2">429</span>
          </div>
          {/* end::Price */}
        </div>
        {/* end::Option */}
      </div>
      {/* end::Options */}
    </div>

    <div className="d-flex flex-center flex-column rounded border border-dashed border-gray-300 py-6">
      {/* begin::Heading */}
      <div className="mb-4 text-gray-500 fw-bold fs-6">
        Secured Payment by{" "}
        <a
          href="https://www.2checkout.com/"
          target="_black"
          className="fw-bolder text-dark explore-link-hover me-1"
        >
          2Checkout
        </a>
        with:
      </div>
      {/* end::Heading */}
      {/* begin::Payment methods */}
      <div className="mb-3">
        <img
          alt=""
          src={toAbsoluteUrl("/media/svg/payment-methods/paypal.svg")}
          className="h-30px me-3 rounded-1"
        />

        <img
          alt=""
          src={toAbsoluteUrl("/media/svg/payment-methods/visa.svg")}
          className="h-30px me-3 rounded-1"
        />
        <img
          src={toAbsoluteUrl("/media/svg/payment-methods/mastercard.svg")}
          alt=""
          className="h-30px me-3 rounded-1"
        />
        <img
          src={toAbsoluteUrl("/media/svg/payment-methods/americanexpress.svg")}
          alt=""
          className="h-30px rounded-1"
        />
      </div>
      {/* end::Payment methods */}
      {/* begin::Notice */}
      <div className="text-gray-400 fs-7">100% money back guarantee!</div>
      {/* end::Notice */}
    </div>
  </>
);

export { Pro };
