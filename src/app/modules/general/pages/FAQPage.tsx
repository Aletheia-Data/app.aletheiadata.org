import React from "react";
import { Ktsvg } from "../../../../_start/helpers";

export function FAQPage(): JSX.Element {
  return (
    <div className="d-flex flex-column flex-md-row">
      {/*begin::Aside */}
      <div className="flex-column flex-md-row-auto w-100 w-md-250px w-xxl-350px">
        {/*begin::FAQs*/}
        <div className="card card-custom mb-10 mb-md-0">
          {/*begin::Body*/}
          <div className="card-body py-10 px-6">
            {/*begin::Search Input*/}
            <div className="d-flex flex-column mb-10 px-3">
              {/*begin::Form*/}
              <form>
                <div
                  className="input-group input-group-solid"
                  id="kt_chat_aside_search"
                >
                  <span className="input-group-text" id="basic-addon1">
                    <Ktsvg
                      className="svg-icon-1 svg-icon-dark"
                      path="/media/icons/duotone/General/Search.svg"
                    />
                  </span>
                  <input
                    className="form-control ps-0 py-4 h-auto"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Search Input*/}

            {/*begin::Faqs List*/}
            <ul className="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold mb-10 nav nav-tabs ">
              <li className="menu-content fw-bold pb-2 px-3">
                <span className="fs-3 fw-bolder">Introductions</span>
              </li>
              <li className="menu-item px-3 pb-1">
                <a
                  className="menu-link fs-6 px-3 active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1"
                >
                  Getting Started
                </a>
              </li>
              <li className="menu-item px-3 pb-1">
                <a
                  className="menu-link fs-6 px-3"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2"
                >
                  What is public information?
                </a>
              </li>
            </ul>
            {/*end::Faqs List*/}
          </div>
          {/*end::Body*/}
        </div>
        {/*end::FAQs*/}
      </div>
      {/*end::Aside*/}

      {/*begin::Layout*/}
      <div className="flex-md-row-fluid ms-md-12">
        {/*begin::Card*/}
        <div className="card card-custom">
          <div className="card-body py-10">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="kt_tab_pane_1"
                role="tabpanel"
              >
                <h2 className="text-dark fw-bolder fs-1 mb-5">
                  Getting Started
                </h2>

                {/*begin::Accordion*/}
                <div
                  className="accordion accordion-icon-toggle"
                  id="kt_accordion_1"
                >
                  {/*begin::Item*/}
                  <div className="mb-5">
                    {/*begin::Header*/}
                    <div
                      className="accordion-header py-3 d-flex"
                      data-bs-target="#kt_accordion_1_item_1"
                      data-bs-toggle="collapse"
                    >
                      <span className="accordion-icon">
                        <Ktsvg
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Right-2.svg"
                        />
                      </span>
                      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        What&apos;s Aletheia Data?
                      </h3>
                    </div>
                    {/*end::Header*/}

                    {/*begin::Body*/}
                    <div
                      className="fs-6 collapse show ps-10"
                      data-bs-parent="#kt_accordion_1"
                      id="kt_accordion_1_item_1"
                    >
                      <div className="mb-5">
                        Aletheia is an Open Source project that seeks to
                        encourage both public and private entities to facilitate
                        access to public information, so that it can have a more
                        relevant social impact. As developers we have seen the
                        need to make use of public information (information in
                        the public domain that should be available and
                        accessible by law), but in the search we quickly
                        realized that although the information is (in part)
                        available, it is not organized in a way that is easy to
                        use (uses that can range from the simple consultation of
                        the data, to statistical use or to create computer smart
                        products oriented to citizens.
                        <br />
                        <br /> Another problem that we frequently find is the
                        lack of a standard in the format of these files. As well
                        as the use of formats that DO NOT allow the extraction
                        of the information. We know that, like us, there are
                        other Citizens who need to access this data and this is
                        why we decided to develop an Open API to facilitate
                        access and distribution of resourceful public
                        information. <br />
                        <br />
                        Our objective is to create an ecosystem where these
                        files are ALWAYS available, accessible 24 hours a day
                        and accompanied by APIs to facilitate the consumption
                        and exchange of this information while providing an
                        immutable and reliable{" "}
                        <b>&lsquo;single source of truth&lsquo;</b>.
                      </div>
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Item*/}

                  {/*begin::Item*/}
                  <div className="mb-5">
                    {/*begin::Header*/}
                    <div
                      className="accordion-header py-3 d-flex collapsed"
                      data-bs-target="#kt_accordion_1_item_2"
                      data-bs-toggle="collapse"
                    >
                      <span className="accordion-icon">
                        <Ktsvg
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Right-2.svg"
                        />
                      </span>
                      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        What to do with this tool?
                      </h3>
                    </div>
                    {/*end::Header*/}

                    {/*begin::Body*/}
                    <div
                      className="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                      id="kt_accordion_1_item_2"
                    >
                      <div className="mb-5">
                        Well, you can use our API to access to public
                        information for different purpose: check what is being
                        done with your taxes, or use the data for analytical or
                        research purposes.
                      </div>
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Item*/}

                  {/*begin::Item*/}
                  <div className="mb-5">
                    {/*begin::Header*/}
                    <div
                      className="accordion-header py-3 d-flex collapsed"
                      data-bs-target="#kt_accordion_1_item_3"
                      data-bs-toggle="collapse"
                    >
                      <span className="accordion-icon">
                        <Ktsvg
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Right-2.svg"
                        />
                      </span>
                      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        Why use a decentralized solution?
                      </h3>
                    </div>
                    {/*end::Header*/}

                    {/*begin::Body*/}
                    <div
                      className="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                      id="kt_accordion_1_item_3"
                    >
                      Using a decentralized platform gives us the guarantee that
                      the information will not be modified, hacked, or
                      corrupted. It also gives us the best option to keep this
                      information safe and always available (24/7).
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Item*/}

                  {/*begin::Item*/}
                  <div className="mb-5">
                    {/*begin::Header*/}
                    <div
                      className="accordion-header py-3 d-flex collapsed"
                      data-bs-target="#kt_accordion_1_item_4"
                      data-bs-toggle="collapse"
                    >
                      <span className="accordion-icon">
                        <Ktsvg
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Right-2.svg"
                        />
                      </span>
                      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        What do you mean by making the information
                        &apos;unstoppable&apos;?
                      </h3>
                    </div>
                    {/*end::Header*/}

                    {/*begin::Body*/}
                    <div
                      className="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                      id="kt_accordion_1_item_4"
                    >
                      Unstoppable or decentralized information means that the
                      information is not located in a fixed location (or server)
                      but is distributed in the{" "}
                      <a
                        href="https://app.gitbook.com/s/-MBnGVUgP271l1PWguNX/getting-started/ipfs"
                        rel="noreferrer"
                        target="_blank"
                      >
                        IPFS P2P network
                      </a>
                      . Once a file enters the system, it cannot be modified or
                      canceled, since it will live in each of our computers.
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Item*/}
                </div>
                {/*end::Accordion*/}
              </div>
              <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                <h2 className="text-dark fw-bolder fs-1 mb-5">
                  Public Information
                </h2>

                {/*begin::Accordion*/}
                <div
                  className="accordion accordion-icon-toggle"
                  id="kt_accordion_1"
                >
                  {/*begin::Item*/}
                  <div className="mb-5">
                    {/*begin::Header*/}
                    <div
                      className="accordion-header py-3 d-flex"
                      data-bs-target="#kt_accordion_1_item_1"
                      data-bs-toggle="collapse"
                    >
                      <span className="accordion-icon">
                        <Ktsvg
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Right-2.svg"
                        />
                      </span>
                      <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        What is public information?
                      </h3>
                    </div>
                    {/*end::Header*/}

                    {/*begin::Body*/}
                    <div
                      className="fs-6 collapse show ps-10"
                      data-bs-parent="#kt_accordion_1"
                      id="kt_accordion_1_item_1"
                    >
                      <div className="mb-5">
                        based on its definition, the term &apos;Public
                        Information&apos; means any information, regardless of
                        form or format, that an agency discloses, disseminates,
                        or makes available to the public. <br />
                        <br />
                        In general, this information represents a series of
                        knowledge, structured in an organized and clear body,
                        contained in a document or file, whose purpose is to
                        nourish the population on the subject that deepens
                        according to the nature of the information.
                        <br />
                        <br /> In the Dominican Republic, the Law 200-04-Art. 6-
                        Paragraph I says: For the purposes of this law, is
                        considered Public Information any type of financial
                        documentation related to the public budget or from
                        private financial institutions that serves as the basis
                        for a decision of an administrative nature.
                      </div>
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Item*/}
                </div>
                {/*end::Accordion*/}
              </div>
            </div>
          </div>
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Layout*/}
    </div>
  );
}
