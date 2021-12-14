import React, { useRef } from "react";
import {
  ElementAnimateUtil,
  ElementStyleUtil,
} from "../../../assets/ts/_utils";
import { NewProductForm } from "../shop/NewProductForm";
import { ProductFilterForm } from "../shop/ProductFilterForm";

type Props = {
  sidebarRef: React.MutableRefObject<HTMLDivElement | null>;
};

const SidebarShop: React.FC<Props> = ({ sidebarRef }) => {
  const createProductBtnRef = useRef<HTMLButtonElement | null>(null);
  const discardCreateProductRef = useRef<HTMLButtonElement | null>(null);
  const createProductFormWrapperRef = useRef<HTMLDivElement | null>(null);
  const filterFormWrapperRef = useRef<HTMLDivElement | null>(null);

  const showProductAddForm = () => {
    if (!createProductFormWrapperRef.current) {
      return;
    }

    createProductFormWrapperRef.current?.classList.remove("d-none");
    filterFormWrapperRef.current?.classList.add("d-none");
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }

    if (createProductFormWrapperRef.current) {
      ElementStyleUtil.set(
        createProductFormWrapperRef.current,
        "animationDuration",
        "0.3s"
      );
      ElementAnimateUtil.animateClass(
        createProductFormWrapperRef.current,
        "animate__animated animate__slideInRight"
      );
    }
  };

  const showProductsFilterForm = () => {
    filterFormWrapperRef.current?.classList.remove("d-none");
    createProductFormWrapperRef.current?.classList.add("d-none");
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }

    if (filterFormWrapperRef.current) {
      ElementStyleUtil.set(
        filterFormWrapperRef.current,
        "animationDuration",
        "0.3s"
      );
      ElementAnimateUtil.animateClass(
        filterFormWrapperRef.current,
        "animate__animated animate__slideInLeft"
      );
    }
  };

  return (
    <div id="kt_sidebar_content" className="py-10 px-7 px-lg-12">
      <div
        className="hover-scroll-y me-lg-n7 pe-lg-5"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-offset="10px"
        data-kt-scroll-wrappers="#kt_sidebar_content"
      >
        <NewProductForm
          showProductsFilterForm={showProductsFilterForm}
          discardCreateProductRef={discardCreateProductRef}
          createProductFormWrapperRef={createProductFormWrapperRef}
        />
        <ProductFilterForm
          showProductAddForm={showProductAddForm}
          filterFormWrapperRef={filterFormWrapperRef}
          createProductBtnRef={createProductBtnRef}
        />
      </div>
    </div>
  );
};

export { SidebarShop };
