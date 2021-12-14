/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import noUiSlider from "nouislider";

type Props = {
  createProductBtnRef: React.MutableRefObject<HTMLButtonElement | null>;
  filterFormWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
  showProductAddForm: () => void;
};

const ProductFilterForm: React.FC<Props> = ({
  createProductBtnRef,
  filterFormWrapperRef,
  showProductAddForm,
}) => {
  const priceRangeSlideRef = useRef<HTMLDivElement | null>(null);
  const [categories, setCategories] = useState<Array<string>>(["Electronics"]);
  const [size, setSize] = useState<string>("M");
  const [price, setPrice] = useState<string>("0$ - 99$");
  const [pricingRange, setPricingRange] = useState<{
    min: number;
    max: number;
  }>({
    min: 20,
    max: 60,
  });

  const setCategory = (isChecked: boolean, value: string) => {
    setCategories((prevState) => {
      if (isChecked) {
        const newState = Array.from(prevState);
        newState.push(value);
        return newState;
      }

      const newState = Array.from(prevState);
      return newState.filter((el) => el !== value);
    });
  };

  useEffect(() => {
    if (!priceRangeSlideRef.current) {
      return;
    }

    const rangeSlider = noUiSlider.create(priceRangeSlideRef.current, {
      start: [pricingRange.min, pricingRange.max],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
    if (rangeSlider) {
      rangeSlider.on("change", (values) => {
        setPricingRange({
          min: values[0],
          max: values[1],
        });
      });
    }
    return () => {
      if (rangeSlider) {
        rangeSlider.destroy();
      }
    };
  }, [priceRangeSlideRef]);

  return (
    <div id="kt_sidebar_shop_filter_form" ref={filterFormWrapperRef}>
      {/* begin::Heading */}
      <div className="d-flex flex-column text-center bg-light   rounded py-8 px-5 mb-10">
        <h3 className="fs-2 fw-bolder mb-2">Add New Product</h3>
        <span className="text-muted fs-6 fw-bolder">Quick Create Form</span>
        <button
          ref={createProductBtnRef}
          id="kt_sidebar_shop_new_form_btn"
          onClick={() => showProductAddForm()}
          className="btn btn-primary fw-bolder mx-auto px-5 mt-6"
        >
          Create New
        </button>
      </div>
      {/*end::Heading*/}

      {/*begin::Form*/}
      <form className="form" method="post">
        {/*begin::Categories*/}
        <div className="mb-11">
          <label className="fs-2 fw-bolder text-dark mb-7">Categories</label>

          {/*begin::Categories list*/}
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="kt_checkbox_1"
              checked={categories.some((el) => el === "Electronics")}
              onChange={(e) => setCategory(e.target.checked, "Electronics")}
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_checkbox_1"
            >
              Electronics
            </label>
          </div>
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="kt_checkbox_2"
              checked={categories.some((el) => el === "Sports Equipments")}
              onChange={(e) =>
                setCategory(e.target.checked, "Sports Equipments")
              }
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_checkbox_2"
            >
              Sports Equipments
            </label>
          </div>
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="kt_checkbox_3"
              checked={categories.some((el) => el === "Appliances")}
              onChange={(e) => setCategory(e.target.checked, "Appliances")}
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_checkbox_3"
            >
              Appliances
            </label>
          </div>
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="kt_checkbox_4"
              checked={categories.some((el) => el === "Software Solutions")}
              onChange={(e) =>
                setCategory(e.target.checked, "Software Solutions")
              }
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_checkbox_4"
            >
              Software Solutions
            </label>
          </div>
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="kt_checkbox_5"
              checked={categories.some((el) => el === "Food & Groceries")}
              onChange={(e) =>
                setCategory(e.target.checked, "Food & Groceries")
              }
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_checkbox_4"
            >
              Food & Groceries
            </label>
          </div>
          {/*end::Categories list*/}
        </div>
        {/*end::Categories*/}

        {/*begin::Prices*/}
        <div className="mb-7">
          <label className="fs-2 fw-bolder text-dark mb-7">Price</label>

          {/*begin::Price Options*/}
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="radio"
              id="kt_radio_1"
              checked={price === "All"}
              onChange={() => setPrice("All")}
              name="prices"
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_radio_1"
            >
              All
            </label>
          </div>
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="radio"
              id="kt_radio_2"
              name="prices"
              checked={price === "0$ - 99$"}
              onChange={() => setPrice("0$ - 99$")}
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_radio_2"
            >
              0$ - 99$
            </label>
          </div>
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="radio"
              id="kt_radio_3"
              checked={price === "100$ - 999$"}
              name="prices"
              onChange={() => setPrice("100$ - 999$")}
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_radio_3"
            >
              100$ - 999$
            </label>
          </div>
          <div className="form-check form-check-custom form-check-solid mb-5">
            <input
              className="form-check-input"
              type="radio"
              id="kt_radio_4"
              checked={price === "1000$ & Above"}
              name="prices"
              onChange={() => setPrice("1000$ & Above")}
            />
            <label
              className="form-check-label fw-bold text-gray-600"
              htmlFor="kt_radio_4"
            >
              1000$ & Above
            </label>
          </div>
          {/*end::Price Options*/}
        </div>
        {/*end::Prices*/}

        {/*begin::Price Slider*/}
        <div className="mb-13">
          <div className="text-dark fw-bolder fs-6 mb-5">Pricing Range</div>
          <div
            ref={priceRangeSlideRef}
            id="kt_price_slider"
            className="nouislider nouislider-light nouislider-handle-primary nouislider-bg-dark-15 nouislider-shadowless nouislider-borderless"
          ></div>
        </div>
        {/*end::Price Slider*/}

        {/*begin::Prices*/}
        <div className="mb-11">
          <label className="fs-2 fw-bolder text-dark mb-7">Sizes</label>
          {/*begin::Button Group*/}
          <div className="d-flex" role="group">
            <input
              type="radio"
              className="btn-check"
              name="sizes"
              id="kt_size_1"
              checked={size === "XS"}
              onChange={() => setSize("XS")}
            />
            <label
              className="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
              htmlFor="kt_size_1"
            >
              XS
            </label>

            <input
              type="radio"
              className="btn-check"
              name="sizes"
              id="kt_size_2"
              checked={size === "S"}
              onChange={() => setSize("S")}
            />
            <label
              className="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
              htmlFor="kt_size_2"
            >
              S
            </label>

            <input
              type="radio"
              className="btn-check"
              name="sizes"
              id="kt_size_3"
              checked={size === "M"}
              onChange={() => setSize("M")}
            />
            <label
              className="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
              htmlFor="kt_size_3"
            >
              M
            </label>

            <input
              type="radio"
              className="btn-check"
              name="sizes"
              id="kt_size_4"
              checked={size === "L"}
              onChange={() => setSize("L")}
            />
            <label
              className="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
              htmlFor="kt_size_4"
            >
              L
            </label>

            <input
              type="radio"
              className="btn-check"
              name="sizes"
              id="kt_size_5"
              checked={size === "XL"}
              onChange={() => setSize("XL")}
            />
            <label
              className="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
              htmlFor="kt_size_5"
            >
              XL
            </label>
          </div>
          {/*end::Button Group*/}
        </div>
        {/*end::Prices*/}

        <button type="reset" className="btn btn-primary fw-bolder me-2 px-8">
          Reset
        </button>
        <button type="button" className="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-8">
          Setup
        </button>
      </form>
      {/*end::Form*/}
    </div>
  );
};

export { ProductFilterForm };
