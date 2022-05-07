/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap-v5";
import { StepperComponent } from "../../../../../_start/assets/ts/components";
import { Ktsvg } from "../../../../../_start/helpers";
import { defaultCreateAppData, ICreateAppData } from "./IAppModels";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const CreateAppModal: React.FC<Props> = ({ show, handleClose }) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData);
  const [hasError, setHasError] = useState(false);

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
  };

  const updateData = (fieldsToUpdate: Partial<ICreateAppData>) => {
    const updatedData = { ...data, ...fieldsToUpdate };
    setData(updatedData);
  };

  const checkAppBasic = (): boolean => {
    if (!data.appBasic.title || !data.appBasic.docType) {
      return false;
    }

    return true;
  };

  const checkAppDataBase = (): boolean => {
    if (!data.appDatabase.databaseName || !data.appDatabase.databaseSolution) {
      return false;
    }

    return true;
  };

  const prevStep = () => {
    if (!stepper.current) {
      return;
    }

    stepper.current.goPrev();
  };

  const nextStep = () => {
    setHasError(false);
    if (!stepper.current) {
      return;
    }

    if (stepper.current.getCurrentStepIndex() === 1) {
      if (!checkAppBasic()) {
        setHasError(true);

        return;
      }
    }

    if (stepper.current.getCurrentStepIndex() === 3) {
      if (!checkAppDataBase()) {
        setHasError(true);

        return;
      }
    }

    stepper.current.goNext();
  };

  const submit = () => {
    window.location.reload();
  };

  return (
    <Modal
      aria-hidden="true"
      dialogClassName="modal-dialog-centered mw-1000px h-auto"
      id="kt_modal_create_app"
      show={show}
      tabIndex={-1}
      onEntered={loadStepper}
      onHide={handleClose}
    >
      <div className="container px-10 py-10">
        <div className="modal-header py-2 d-flex justify-content-end border-0">
          {/* begin::Close */}
          <div
            className="btn btn-icon btn-sm btn-light-primary"
            onClick={handleClose}
          >
            <Ktsvg
              className="svg-icon-2"
              path="/media/icons/duotone/Navigation/Close.svg"
            />
          </div>
          {/* end::Close */}
        </div>

        <div className="modal-body">
          {/*begin::Stepper */}
          <div
            ref={stepperRef}
            className="stepper stepper-1 d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_app_stepper"
          >
            {/*begin::Aside */}
            <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              {/*begin::Nav */}
              <div className="stepper-nav d-flex flex-column pt-5">
                {/*begin::Step 1 */}
                <div
                  className="stepper-item current"
                  data-kt-stepper-element="nav"
                >
                  <div className="stepper-wrapper">
                    <div className="stepper-icon">
                      <i className="stepper-check fas fa-check" />
                      <span className="stepper-number">1</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">App Basics</h3>
                      <div className="stepper-desc">Name your App</div>
                    </div>
                  </div>
                </div>
                {/*end::Step 1 */}

                {/*begin::Step 2 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon">
                      <i className="stepper-check fas fa-check" />
                      <span className="stepper-number">2</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">App Framework</h3>
                      <div className="stepper-desc">
                        Define your app framework
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 2 */}

                {/*begin::Step 3 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon">
                      <i className="stepper-check fas fa-check" />
                      <span className="stepper-number">3</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">App Database</h3>
                      <div className="stepper-desc">
                        Select the app database type
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 3 */}

                {/*begin::Step 4 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon">
                      <i className="stepper-check fas fa-check" />
                      <span className="stepper-number">4</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">App Storage</h3>
                      <div className="stepper-desc">
                        Select the app storage type
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 4 */}

                {/*begin::Step 5 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon">
                      <i className="stepper-check fas fa-check" />
                      <span className="stepper-number">5</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Completed!</h3>
                      <div className="stepper-desc">Review and Submit</div>
                    </div>
                  </div>
                </div>
                {/*end::Step 5 */}
              </div>
              {/*end::Nav */}
            </div>
            {/*begin::Aside */}

            {/*begin::Content */}
            <div className="d-flex flex-row-fluid justify-content-center">
              {/*begin::Form */}
              <form
                noValidate
                className="pb-5 w-100 w-md-400px w-xl-500px"
                id="kt_modal_create_app_form"
              >
                {/*begin::Step 1 */}
                <div className="pb-5 current" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-5 pb-lg-10">
                      <h3 className="fw-bolder text-dark display-6">
                        App Basics
                      </h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <label className="fs-6 fw-bolder text-dark form-label">
                        Your App Name
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid"
                        name="title"
                        placeholder=""
                        type="text"
                        value={data.appBasic.title}
                        onChange={(e) =>
                          updateData({
                            appBasic: {
                              title: e.target.value,
                              docType: data.appBasic.docType,
                            },
                          })
                        }
                      />
                      {!data.appBasic.title && hasError && (
                        <div className="fv-plugins-message-container">
                          <div
                            className="fv-help-block"
                            data-field="title"
                            data-validator="notEmpty"
                          >
                            App name is required
                          </div>
                        </div>
                      )}
                    </div>
                    {/*end::Form Group */}

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between mb-6 cursor-pointer">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                              <Ktsvg
                                className="svg-icon-1 svg-icon-primary"
                                path="/media/icons/duotone/Home/Globe.svg"
                              />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">
                              Quick Online Courses
                            </span>
                            <span className="fs-7 text-muted">
                              Creating a clear text structure is just one SEO
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={
                              data.appBasic.docType === "Quick Online Courses"
                            }
                            className="form-check-input"
                            name="docType"
                            type="radio"
                            value="Quick Online Courses"
                            onChange={() =>
                              updateData({
                                appBasic: {
                                  title: data.appBasic.title,
                                  docType: "Quick Online Courses",
                                },
                              })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between mb-6 cursor-pointer">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <Ktsvg
                                className="svg-icon-1 svg-icon-danger"
                                path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                              />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">
                              Face to Face Discussions
                            </span>
                            <span className="fs-7 text-muted">
                              Creating a clear text structure is just one aspect
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={
                              data.appBasic.docType ===
                              "Face to Face Discussions"
                            }
                            className="form-check-input"
                            name="docType"
                            type="radio"
                            value="Face to Face Discussions"
                            onChange={() =>
                              updateData({
                                appBasic: {
                                  title: data.appBasic.title,
                                  docType: "Face to Face Discussions",
                                },
                              })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between mb-6 cursor-pointer">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <Ktsvg
                                className="svg-icon-1 svg-icon-success"
                                path="/media/icons/duotone/Devices/Watch1.svg"
                              />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">
                              Full Intro Training
                            </span>
                            <span className="fs-7 text-muted">
                              Creating a clear text structure copywriting
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={
                              data.appBasic.docType === "Full Intro Training"
                            }
                            className="form-check-input"
                            name="docType"
                            type="radio"
                            value="Full Intro Training"
                            onChange={() =>
                              updateData({
                                appBasic: {
                                  title: data.appBasic.title,
                                  docType: "Full Intro Training",
                                },
                              })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}
                    </div>
                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 1 */}

                {/*begin::Step 2 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        App Framework
                      </h3>
                    </div>
                    {/*end::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      <label className="fs-6 fw-bolder text-dark mb-7">
                        Select your app framework
                      </label>

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-html5 text-warning fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">HTML5</span>
                            <span className="fs-7 text-muted">
                              Base Web Projec
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={data.appFramework === "HTML5"}
                            className="form-check-input"
                            name="appFramework"
                            type="radio"
                            value="HTML5"
                            onChange={() =>
                              updateData({ appFramework: "HTML5" })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fab fa-react text-success fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">ReactJS</span>
                            <span className="fs-7 text-muted">
                              Robust and flexible app framework
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={data.appFramework === "ReactJS"}
                            className="form-check-input"
                            name="appFramework"
                            type="radio"
                            value="ReactJS"
                            onChange={() =>
                              updateData({ appFramework: "ReactJS" })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-angular text-danger fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Angular</span>
                            <span className="fs-7 text-muted">
                              Powerful data mangement
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={data.appFramework === "Angular"}
                            className="form-check-input"
                            name="appFramework"
                            type="radio"
                            value="Angular"
                            onChange={() =>
                              updateData({ appFramework: "Angular" })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                              <i className="fab fa-vuejs text-primary fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Vue</span>
                            <span className="fs-7 text-muted">
                              Lightweight and responsive framework
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={data.appFramework === "Vue"}
                            className="form-check-input"
                            name="appFramework"
                            type="radio"
                            value="Vue"
                            onChange={() => updateData({ appFramework: "Vue" })}
                          />
                        </span>
                      </label>
                      {/*end::Option */}
                    </div>
                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 2 */}

                {/*begin::Step 3 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        App Database
                      </h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <label className="fs-6 fw-bolder text-dark form-label">
                        App Databse Name Name
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid"
                        name="dbname"
                        type="text"
                        value={data.appDatabase.databaseName}
                        onChange={(e) =>
                          updateData({
                            appDatabase: {
                              databaseName: e.target.value,
                              databaseSolution:
                                data.appDatabase.databaseSolution,
                            },
                          })
                        }
                      />
                      {!data.appDatabase.databaseName && hasError && (
                        <div className="fv-plugins-message-container">
                          <div
                            className="fv-help-block"
                            data-field="title"
                            data-validator="notEmpty"
                          >
                            Database name is required
                          </div>
                        </div>
                      )}
                    </div>
                    {/*end::Form Group */}

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      <label className="fs-6 fw-bolder text-dark mb-7">
                        Select your app database solution
                      </label>

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fas fa-database text-success fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">MySQL</span>
                            <span className="fs-7 text-muted">
                              Basic MySQL database
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={
                              data.appDatabase.databaseSolution === "MySQL"
                            }
                            className="form-check-input"
                            name="databaseSolution"
                            type="radio"
                            value="MySQL"
                            onChange={() =>
                              updateData({
                                appDatabase: {
                                  databaseName: data.appDatabase.databaseName,
                                  databaseSolution: "MySQL",
                                },
                              })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-google text-danger fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Firebase</span>
                            <span className="fs-7 text-muted">
                              Google based app data management
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={
                              data.appDatabase.databaseSolution === "Firebase"
                            }
                            className="form-check-input"
                            name="databaseSolution"
                            type="radio"
                            value="Firebase"
                            onChange={() =>
                              updateData({
                                appDatabase: {
                                  databaseName: data.appDatabase.databaseName,
                                  databaseSolution: "Firebase",
                                },
                              })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-amazon text-warning fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">DynamoDB</span>
                            <span className="fs-7 text-muted">
                              Amazon Fast NoSQL Database
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={
                              data.appDatabase.databaseSolution === "DynamoDB"
                            }
                            className="form-check-input"
                            name="databaseSolution"
                            type="radio"
                            value="DynamoDB"
                            onChange={() =>
                              updateData({
                                appDatabase: {
                                  databaseName: data.appDatabase.databaseName,
                                  databaseSolution: "DynamoDB",
                                },
                              })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}
                    </div>
                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 3 */}

                {/*begin::Step 4 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        App Storage
                      </h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      <label className="fs-6 fw-bolder text-dark mb-7">
                        Select your app storage solution
                      </label>

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                              <i className="fab fa-linux text-primary fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Basic Server</span>
                            <span className="fs-7 text-muted">
                              Linux based server storage
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={data.appStorage === "Basic Server"}
                            className="form-check-input"
                            name="appStorage"
                            type="radio"
                            value="Basic Server"
                            onChange={() =>
                              updateData({ appStorage: "Basic Server" })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-aws text-warning fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">AWS</span>
                            <span className="fs-7 text-muted">
                              Amazon Web Services
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={data.appStorage === "AWS"}
                            className="form-check-input"
                            name="appStorage"
                            type="radio"
                            value="AWS"
                            onChange={() => updateData({ appStorage: "AWS" })}
                          />
                        </span>
                      </label>
                      {/*end::Option */}

                      {/*begin:Option */}
                      <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success  ">
                              <i className="fab fa-google text-success fs-2x" />
                            </span>
                          </span>

                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Google</span>
                            <span className="fs-7 text-muted">
                              Google Cloud Storage
                            </span>
                          </span>
                        </span>

                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            checked={data.appStorage === "Google"}
                            className="form-check-input"
                            name="appStorage"
                            type="radio"
                            value="Google"
                            onChange={() =>
                              updateData({ appStorage: "Google" })
                            }
                          />
                        </span>
                      </label>
                      {/*end::Option */}
                    </div>
                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 4 */}

                {/*begin::Step 5 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/* begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        Complete
                      </h3>
                      <div className="text-muted fw-bold fs-3">
                        Review your setup to kickstart your app!
                      </div>
                    </div>
                    {/* end::Heading */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">App Basics</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{data.appBasic.title}</div>
                      <div>{data.appBasic.docType}</div>
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">App Framework</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{data.appFramework}</div>
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">App Database</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{data.appDatabase.databaseName}</div>
                      <div>{data.appDatabase.databaseSolution}</div>
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">App Storage</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{data.appStorage}</div>
                    </div>
                    {/* end::Section */}
                  </div>
                </div>
                {/*end::Step 5 */}

                {/*begin::Actions */}
                <div className="d-flex justify-content-between pt-10">
                  <div className="mr-2">
                    <button
                      className="btn btn-lg btn-light-primary fw-bolder py-4 pe-8 me-3"
                      data-kt-stepper-action="previous"
                      type="button"
                      onClick={prevStep}
                    >
                      <Ktsvg
                        className="svg-icon-3 me-1"
                        path="/media/icons/duotone/Navigation/Left-2.svg"
                      />{" "}
                      Previous
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="submit"
                      type="button"
                      onClick={submit}
                    >
                      Submit{" "}
                      <Ktsvg
                        className="svg-icon-3 ms-2"
                        path="/media/icons/duotone/Navigation/Right-2.svg"
                      />
                    </button>

                    <button
                      className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="next"
                      type="button"
                      onClick={nextStep}
                    >
                      Next Step{" "}
                      <Ktsvg
                        className="svg-icon-3 ms-1"
                        path="/media/icons/duotone/Navigation/Right-2.svg"
                      />
                    </button>
                  </div>
                </div>
                {/*end::Actions */}
              </form>
              {/*end::Form */}
            </div>
            {/*end::Content */}
          </div>
          {/* end::Stepper */}
        </div>
      </div>
    </Modal>
  );
};

export { CreateAppModal };
