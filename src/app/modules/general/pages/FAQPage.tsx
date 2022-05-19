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
              <li className="menu-item px-3 pb-1">
                <a
                  className="menu-link fs-6 px-3"
                  href="https://docs.aletheiadata.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Learn More
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
                        Aletheia is an <b>Open Source</b> project that seeks to
                        encourage both private and public entities to{" "}
                        <b>facilitate access to public information</b>, and make
                        sure this information has a{" "}
                        <b>relevant impact on society</b>. As developers we has
                        ourselves in need of hight quality public information (
                        <b>
                          information of public interest that should be
                          available and accessible by law
                        </b>
                        ), but in the endeavor we quickly realized that although
                        the information (<b>in part</b>) is available, it is not
                        organized in a way that is easy to use (use cases that
                        range from the simple <b>consultation of the data</b>,
                        to
                        <b>statistical use</b> or to create{" "}
                        <b>smart products oriented to citizens.</b>
                        <br />
                        <br /> Another problem that we encounter is the{" "}
                        <b>lack of standards</b> on the format of the assets. As
                        well as using formats that{" "}
                        <b>DO NOT allow the extraction of the information</b>.
                        We know that, like us, there are many Citizens who need
                        to <b>access to their public data</b> and this is why we
                        decided to develop an <b>Open System</b> to facilitate
                        access and distribution of resourceful public
                        information. <br />
                        <br />
                        <b>Our objective</b> is to create an ecosystem where
                        these assets are <b>ALWAYS</b> available, accessible{" "}
                        <b>24 hours</b> a day and accompanied by <b>APIs</b> to
                        facilitate consumption and exchange information while
                        providing an immutable and reliable{" "}
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
                        Well, you can use our <b>Tools</b> to access to public
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
                      Using a <b>decentralized platform</b> gives us the
                      guarantee that the information will <b>NOT</b> be{" "}
                      <b>modified</b>,<b>hacked</b>, or <b>corrupted</b>. It
                      also gives us the best option to keep this information{" "}
                      <b>safe</b> and <b>always available</b> (24/7).
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
                        What do you mean by making the information{" "}
                        <b>&apos;unstoppable&apos;</b>?
                      </h3>
                    </div>
                    {/*end::Header*/}

                    {/*begin::Body*/}
                    <div
                      className="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                      id="kt_accordion_1_item_4"
                    >
                      <b>Unstoppable</b> or <b>decentralized information</b>{" "}
                      means that the information is <b>not</b> located in a{" "}
                      <b>fixed location</b> (server) but instead is{" "}
                      <b>distributed</b>
                      on the{" "}
                      <a
                        href="https://app.gitbook.com/s/-MBnGVUgP271l1PWguNX/getting-started/ipfs"
                        rel="noreferrer"
                        target="_blank"
                      >
                        IPFS P2P network
                      </a>
                      . Once an asset enters the system, it <b>CANNOT</b> be{" "}
                      <b>modified</b> or
                      <b>canceled</b>, as it will be <b>distributed</b> among
                      all the participants of the network.
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
                        based on its definition, the term{" "}
                        <b>&apos;Public Information&apos;</b> means any
                        information, <b>regardless of form or format</b>, that
                        an agency <b>discloses</b>, <b>disseminates</b>, or{" "}
                        <b>makes available to the public</b>. <br />
                        <br />
                        In general, this information represents a{" "}
                        <b>series of knowledge</b>,{" "}
                        <b>structured in an organized and clear body</b>,
                        contained in a <b>document or file</b>, whose purpose is{" "}
                        <b>to nourish the population</b> on the subject that
                        deepens according to{" "}
                        <b>the nature of the information</b>.
                        <br />
                        <br /> In the Dominican Republic, the{" "}
                        <b>Law 200-04-Art. 6- Paragraph I</b> says:{" "}
                        <b>
                          For the purposes of this law, is considered Public
                          Information any type of financial documentation
                          related to the public budget or from private financial
                          institutions that serves as the basis for a decision
                          of an administrative nature.
                        </b>
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
