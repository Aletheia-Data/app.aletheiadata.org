/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";

type Props = {
  createProductFormWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
  discardCreateProductRef: React.MutableRefObject<HTMLButtonElement | null>;
  showProductsFilterForm: () => void;
};

const NewProductForm: React.FC<Props> = ({
  createProductFormWrapperRef,
  discardCreateProductRef,
  showProductsFilterForm,
}) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("Mens");
  const [size, setSize] = useState<string>("M");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  return (
    <div
      className="d-none"
      ref={createProductFormWrapperRef}
      id="kt_sidebar_shop_new_form"
    >
      {/* begin::Heading */}
      <div className="d-flex flex-column text-center mb-10">
        <h3 className="fs-2 fw-bolder mb-2">Add New Product</h3>
        <span className="text-muted fs-6 fw-bolder">Quick Create Form</span>
      </div>
      {/* end::Heading*/}

      {/* begin::Form*/}
      <form className="form" method="post">
        {/* begin::Product images*/}
        <div className="d-flex mb-8 justify-content-between">
          {/* begin::Symbol*/}
          <div className="symbol symbol-70px me-4 bg-light">
            <div
              className="symbol-label"
              style={{
                backgroundImage: `url('${toAbsoluteUrl(
                  "/media/products/11.png"
                )}')`,
              }}
            ></div>
          </div>
          {/* end::Symbol*/}

          {/* begin::Symbol*/}
          <div className="symbol symbol-70px me-4">
            <div
              className="symbol-label"
              style={{
                backgroundImage: `url('${toAbsoluteUrl(
                  "/media/products/12.png"
                )}')`,
              }}
            ></div>
          </div>
          {/* end::Symbol*/}

          {/* begin::Symbol*/}
          <div className="symbol symbol-70px">
            <a
              href="#"
              className="h-70px w-70px btn btn-light d-flex flex-column flex-center fw-bolder p-0"
            >
              <KTSVG
                path="/media/icons/duotone/Design/Image.svg"
                className="svg-icon-1 svg-icon-gray-600 m-0"
              />
              Upload
            </a>
          </div>
          {/* end::Symbol*/}
        </div>
        {/* end::Product images*/}

        {/* begin::Product Info*/}
        <div className="mt-5">
          <div className="mb-4 fw-bolder fs-6">Product Info</div>
          {/* begin::Input*/}
          <div className="mb-8">
            <label className="fw-bolder">Name</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label className="fw-bolder">Category</label>
            <select
              className="form-select form-select-solid form-select-lg"
              data-control="select2"
              data-placeholder="Select Category..."
              data-hide-search="true"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="mens">Mens</option>
              <option value="womens">Womens</option>
              <option value="accessories">Accessories</option>
              <option value="technology">Technology</option>
              <option value="appliances">Appliances</option>
            </select>
          </div>
          <div className="mb-8">
            <label className="fw-bolder">Size</label>
            <select
              className="form-select form-select-solid form-select-lg"
              data-control="select2"
              data-placeholder="Select Size..."
              data-hide-search="true"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="mb-8">
            <label className="fw-bolder">Description</label>
            <textarea
              className="form-control form-control-solid form-control-lg"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-8">
            <label className="fw-bolder">Price (Euro)</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="button" className="btn btn-primary fw-bolder me-2 px-8">
            Save
          </button>
          <button
            ref={discardCreateProductRef}
            onClick={() => showProductsFilterForm()}
            type="reset"
            id="kt_sidebar_shop_filter_form_btn"
            className="btn  btn-color-gray-600 btn-active-light-primary fw-bolder px-8"
          >
            Discard
          </button>
          {/* end::Input*/}
        </div>
        {/* end::Product Info*/}
      </form>
      {/* end::Form*/}
    </div>
  );
};

export { NewProductForm };
