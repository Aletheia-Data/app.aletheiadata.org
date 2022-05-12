/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap-v5";
import { StepperComponent } from "../../../../../_start/assets/ts/components";
import { Ktsvg, truncate } from "../../../../../_start/helpers";
import { defaultCreateAppData, ICreateAppData } from "./IAppModels";
import config from "../../../../../setup/config";
import Table from "_start/partials/components/Table";
import Web3 from "web3";

import {
  getAllSourcesByName,
  getAllDepartmentsByName,
} from "../../redux/DashboardCRUD";
import { validURL } from "_start/helpers/ValidateURL";
interface Props {
  show: boolean;
  handleClose: () => void;
}
declare let window: any;
const CreateAppModal: React.FC<Props> = ({ show, handleClose }) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  const [sources, setSources] = useState([]);
  const [srcSearchTerm, setSrcSearchTerm] = useState("");

  const [newSrc, setNewSrc] = useState(false);

  const [deps, setDeps] = useState([]);
  const [depSearchTerm, setDepSearchTerm] = useState("");

  const [newDep, setNewDep] = useState(false);

  const [resultNotFound, setResultNotFound] = useState(false);

  useEffect(() => {
    reset(3);
  }, [newSrc]);

  useEffect(() => {
    reset(4);
  }, [newDep]);

  const searchSource = async (term: string) => {
    setIsLoading(true);
    // const deps = await rapidAPI.get("/v2/open-data/departments/getAll", params);
    getAllSourcesByName(term)
      .then((deps) => {
        const body = JSON.parse(deps.body);
        // console.log(JSON.parse(deps.body));
        setSources(JSON.parse(deps.body));
        if (body.length === 0) {
          setResultNotFound(true);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setIsLoading(true);
      });
  };

  const searchDep = async (term: string) => {
    setIsLoading(true);
    // const deps = await rapidAPI.get("/v2/open-data/departments/getAll", params);
    getAllDepartmentsByName(term)
      .then((deps) => {
        const body = JSON.parse(deps.body);
        console.log(JSON.parse(deps.body));
        setDeps(JSON.parse(deps.body));
        if (body.length === 0) {
          setResultNotFound(true);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  };

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
  };

  const updateData = (fieldsToUpdate: Partial<ICreateAppData>) => {
    const updatedData = { ...data, ...fieldsToUpdate };
    setData(updatedData);
  };

  const submitData = () => {
    return new Promise((resolve, reject) => {
      const endpoint = `${process.env.REACT_APP_ALETHEIA_API}/v2/ops/assets/add`;
      // console.log('fetching data: ', endpoint)
      const formData = new FormData(); // Currently empty
      formData.append("proof", data.appBasic.proof);
      formData.append("fileUploaded", data.appBasic.fileUploaded);
      formData.append("asset", JSON.stringify(data.appBasic));
      console.log(data.appBasic.proof);

      fetch(endpoint, {
        method: "post",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log(data)
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const signTx = async (stepper: any) => {
    try {
      setIsSigning(true);
      if (window?.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const msg = "Confirm contribution to Aletheia!";
        const msgHash = web3.eth.accounts.hashMessage(msg);
        await web3.eth.sign(msgHash, accounts[0]);
        updateData({
          appBasic: {
            ...data.appBasic,
            owner: accounts[0],
          },
        });
        console.log(data.appBasic);
        submitData()
          .then((res: any) => {
            console.log(res);

            if (res.code === 200) {
              setCurrentStep(currentStep + 1);
              stepper.current.goNext();
            }

            setIsSigning(false);
          })
          .catch((err) => {
            console.log(err);
            setIsSigning(false);
          });
      } else {
        setIsSigning(false);

        return false;
      }
    } catch (error) {
      console.log(error);
      setIsSigning(false);
    }
  };

  const checkAppBasic = (step: number): boolean => {
    const checkSource = () => {
      if (newSrc) {
        // checking
        return !data.appBasic?.newSource?.name ||
          !data.appBasic?.newSource?.description ||
          !data.appBasic?.newSource?.url ||
          !validURL(data.appBasic?.newSource?.url)
          ? false
          : true;
      } else {
        return !data.appBasic.sourceId ? false : true;
      }
    };

    const checkDep = () => {
      if (newDep) {
        // checking
        return !data.appBasic?.newIssuer?.name ||
          !data.appBasic?.newIssuer?.description ||
          !data.appBasic?.newIssuer?.url ||
          !validURL(data.appBasic?.newIssuer?.url)
          ? false
          : true;
      } else {
        return !data.appBasic.issuerId ? false : true;
      }
    };

    switch (step) {
      case 1:
        if (
          !data.appBasic.title ||
          data.appBasic.title.length < 20 ||
          !data.appBasic.docType
        ) {
          return false;
        }
        break;
      case 2:
        if (
          !data.appBasic.description ||
          data.appBasic.description.length < 100
        ) {
          return false;
        }
        break;
      case 3:
        if (
          !data.appBasic.docSource ||
          !validURL(data.appBasic.docSource) ||
          !checkSource()
        ) {
          return false;
        }
        break;
      case 4:
        if (!checkDep()) {
          return false;
        }
        break;
      case 5:
        if (!data.appBasic.fileUploaded || !data.appBasic.proof) {
          return false;
        }
        break;
      case 6:
        // eslint-disable-next-line no-case-declarations
        signTx(stepper);

        return false;
      // break;
    }

    return true;
  };

  const prevStep = () => {
    if (!stepper.current) {
      return;
    }

    setCurrentStep(currentStep - 1);
    stepper.current.goPrev();
  };

  const nextStep = () => {
    setHasError(false);
    if (!stepper.current) {
      return;
    }

    if (!checkAppBasic(stepper.current.getCurrentStepIndex())) {
      setHasError(true);

      return;
    }

    setCurrentStep(currentStep + 1);
    stepper.current.goNext();
  };

  const close = () => {
    console.log(data.appBasic);
  };

  const _handleKeyDownSrc = (e: any) => {
    if (e.key === "Enter") {
      searchSource(srcSearchTerm);
    }
  };

  const _handleKeyDownDep = (e: any) => {
    if (e.key === "Enter") {
      searchDep(depSearchTerm);
    }
  };

  const reset = (step: number) => {
    setResultNotFound(false);

    switch (step) {
      case 3:
        setSrcSearchTerm("");
        setSources([]);
        updateData({
          appBasic: {
            ...data.appBasic,
            sourceId: "",
            sourceInfo: {},
            newSource: {},
          },
        });
        break;
      case 4:
        setDepSearchTerm("");
        setDeps([]);
        updateData({
          appBasic: {
            ...data.appBasic,
            issuerId: "",
            issuerInfo: {},
            newIssuer: {},
          },
        });
        break;
      default:
        break;
    }

    setHasError(false);
  };

  const records = [
    {
      id: 0,
      title: "Estadísticas de Estudiantes Matriculas...",
      cid: "tets5536",
    },
  ];

  const columns = [
    {
      title: "Últimos Archivos",
      cells: records?.map((recordItem: any) => (
        <Link
          key={`record-alexandria-${recordItem.cid}`}
          className={`text-gray-800 fw-bolder text-hover-primary fs-6 ${
            recordItem.cid ? "" : "disabled"
          }`}
          to="#"
        >
          {recordItem.title}
        </Link>
      )),
    },
    {
      title: "Action",
      cells: records?.map((recordItem: any) => (
        <Link
          key={`record-alexandria-${recordItem.cid}`}
          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm"
          to="#"
        >
          <Ktsvg
            className="svg-icon-4"
            path="/media/icons/duotone/General/Sad.svg"
          />
        </Link>
      )),
    },
  ];

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
                      <h3 className="stepper-title">Documento</h3>
                      <div className="stepper-desc">Información básica</div>
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
                      <h3 className="stepper-title">Detalles</h3>
                      <div className="stepper-desc">Detalles del documento</div>
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
                      <h3 className="stepper-title">Fuente</h3>
                      <div className="stepper-desc">
                        Detalles sobre la fuente
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
                      <h3 className="stepper-title">Emisor</h3>
                      <div className="stepper-desc">
                        Detalles sobre el emisor
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
                      <h3 className="stepper-title">Archivos</h3>
                      <div className="stepper-desc">
                        Subir archivo al sistema
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 5 */}

                {/*begin::Step 6 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon">
                      <i className="stepper-check fas fa-check" />
                      <span className="stepper-number">6</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Review</h3>
                      <div className="stepper-desc">Revisar y enviar</div>
                    </div>
                  </div>
                </div>
                {/*end::Step 6 */}

                {/*begin::Step 7 */}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  <div className="stepper-wrapper">
                    <div className="stepper-icon">
                      <i className="stepper-check fas fa-check" />
                      <span className="stepper-number">7</span>
                    </div>
                    <div className="stepper-label">
                      <h3 className="stepper-title">Completed!</h3>
                      <div className="stepper-desc">
                        Tu activo está en linea
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 7 */}
              </div>
              {/*end::Nav */}
            </div>
            {/*begin::Aside */}

            {/*begin::Content */}
            <div className="d-flex flex-row-fluid justify-content-center">
              {/*begin::Form */}
              <form
                noValidate
                className="pb-5 w-100 w-md-400px w-xl-500px d-flex flex-column justify-content-between"
                id="kt_modal_create_app_form"
              >
                {/*begin::Step 1 */}
                <div className="pb-5 current" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-5 pb-lg-10">
                      <h3 className="fw-bolder text-dark display-6">
                        Documento
                      </h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <label className="fs-6 fw-bolder text-dark form-label">
                        Titulo Documento
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid"
                        name="title"
                        placeholder="Nombre del documento"
                        type="text"
                        value={data.appBasic.title}
                        onChange={(e) =>
                          updateData({
                            appBasic: {
                              ...data.appBasic,
                              title: e.target.value,
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
                            Title is required
                          </div>
                        </div>
                      )}

                      {data.appBasic.title.length < 20 && hasError && (
                        <div className="fv-plugins-message-container">
                          <div
                            className="fv-help-block"
                            data-field="title"
                            data-validator="notEmpty"
                          >
                            Title must be at least 20 characters
                          </div>
                        </div>
                      )}
                    </div>
                    {/*end::Form Group */}

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      {/*begin:Option */}
                      {config.availableDocTypes.map((docType, i) => {
                        return (
                          <label
                            key={`doctype-${i}`}
                            className="d-flex align-items-center justify-content-between mb-6 cursor-pointer"
                          >
                            <span className="d-flex align-items-center me-2">
                              <span className="symbol symbol-50px me-6">
                                <span
                                  className="symbol-label"
                                  style={{
                                    backgroundColor: docType.background,
                                  }}
                                >
                                  <img
                                    alt="pdf"
                                    className="svg-icon-1"
                                    src={docType.icon}
                                  />
                                </span>
                              </span>

                              <span className="d-flex flex-column">
                                <span className="fw-bolder fs-6">
                                  {docType.name}
                                </span>
                                <span className="fs-7 text-muted">
                                  {docType.archiveDesc}
                                </span>
                              </span>
                            </span>

                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                checked={
                                  data.appBasic.docType === docType.format
                                }
                                className="form-check-input"
                                name="docType"
                                type="radio"
                                value={docType.format}
                                onChange={() =>
                                  updateData({
                                    appBasic: {
                                      ...data.appBasic,
                                      docType: docType.format,
                                    },
                                  })
                                }
                              />
                            </span>
                          </label>
                        );
                      })}
                      {/*end::Option */}
                    </div>
                    {/*end::Form Group */}
                    {!data.appBasic.docType && hasError && (
                      <div className="fv-plugins-message-container">
                        <div
                          className="fv-help-block"
                          data-field="title"
                          data-validator="notEmpty"
                        >
                          Document Type is required
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*end::Step 1 */}

                {/*begin::Step 2 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        Detalles
                      </h3>
                    </div>
                    {/*end::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      <label className="fs-6 fw-bolder text-dark mb-7">
                        Descripción del documento
                      </label>

                      {/*end::TextArea */}
                      <textarea
                        className="form-control form-control-solid form-control-lg"
                        rows={3}
                        value={data.appBasic.description}
                        onChange={(e) =>
                          updateData({
                            appBasic: {
                              ...data.appBasic,
                              description: e.target.value,
                            },
                          })
                        }
                      />
                      {/*end::TextArea */}
                    </div>
                    {/*end::Form Group */}
                    {!data.appBasic.description && hasError && (
                      <div className="fv-plugins-message-container">
                        <div
                          className="fv-help-block"
                          data-field="title"
                          data-validator="notEmpty"
                        >
                          Description is required
                        </div>
                      </div>
                    )}

                    {data.appBasic.description.length < 100 && hasError && (
                      <div className="fv-plugins-message-container">
                        <div
                          className="fv-help-block"
                          data-field="title"
                          data-validator="notEmpty"
                        >
                          Description must be at least 100 characters
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*end::Step 2 */}

                {/*begin::Step 3 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">Fuente</h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <label className="fs-6 fw-bolder text-dark form-label">
                        Fuente del documento
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid"
                        name="source"
                        placeholder="example: https://www.aletheia.org/very-important.pdf"
                        type="text"
                        value={data.appBasic.docSource}
                        onChange={(e) =>
                          updateData({
                            appBasic: {
                              ...data.appBasic,
                              docSource: e.target.value,
                            },
                          })
                        }
                      />
                      {!data.appBasic.docSource && hasError && (
                        <div className="fv-plugins-message-container">
                          <div
                            className="fv-help-block"
                            data-field="title"
                            data-validator="notEmpty"
                          >
                            Source URL is required
                          </div>
                        </div>
                      )}

                      {data.appBasic.docSource &&
                        !validURL(data.appBasic.docSource) &&
                        hasError && (
                          <div className="fv-plugins-message-container">
                            <div
                              className="fv-help-block"
                              data-field="title"
                              data-validator="notEmpty"
                            >
                              Source is not a valid URL
                            </div>
                          </div>
                        )}
                    </div>
                    {/*end::Form Group */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <div className="fv-row mb-2 d-flex justify-content-between">
                        <label className="fs-6 fw-bolder text-dark form-label">
                          ¿Cuál es la fuente de esta información?
                        </label>

                        <div>
                          <input
                            checked={newSrc}
                            className="form-check-input me-3"
                            id="newSrc"
                            type="checkbox"
                            onChange={() => setNewSrc(!newSrc)}
                          />
                          <label
                            className="form-check-label fw-bold text-gray-600"
                            htmlFor="kt_checkbox_1"
                          >
                            Crear nuevo
                          </label>
                        </div>
                      </div>

                      {!newSrc && (
                        <>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            name="sourceSearch"
                            placeholder="ejemplo: Ministerio de Relaciones Exteriores"
                            type="text"
                            value={srcSearchTerm}
                            onChange={(e) => {
                              reset(3);
                              setSrcSearchTerm(e.target.value);
                            }}
                            onKeyDown={_handleKeyDownSrc}
                          />

                          <label className="text-muted mt-2 fw-bold fs-6 mt-3">
                            Precione &apos;Enter&apos; para buscar
                          </label>

                          {!data.appBasic.sourceId && hasError && (
                            <div className="fv-plugins-message-container">
                              <div
                                className="fv-help-block"
                                data-field="title"
                                data-validator="notEmpty"
                              >
                                Source is required
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {newSrc && (
                        <>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            name="srcName"
                            placeholder="Nombre"
                            type="text"
                            value={data.appBasic.newSource?.name}
                            onChange={(e) => {
                              updateData({
                                appBasic: {
                                  ...data.appBasic,
                                  newSource: {
                                    ...data.appBasic.newSource,
                                    name: e.target.value,
                                  },
                                },
                              });
                            }}
                          />

                          <br />

                          <textarea
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Descripción"
                            rows={3}
                            value={data.appBasic.newSource?.description}
                            onChange={(e) => {
                              updateData({
                                appBasic: {
                                  ...data.appBasic,
                                  newSource: {
                                    ...data.appBasic.newSource,
                                    description: e.target.value,
                                  },
                                },
                              });
                            }}
                          />

                          <br />

                          <input
                            className="form-control form-control-lg form-control-solid"
                            name="newSrcUrl"
                            placeholder="Website"
                            type="text"
                            value={data.appBasic.newSource?.url}
                            onChange={(e) => {
                              updateData({
                                appBasic: {
                                  ...data.appBasic,
                                  newSource: {
                                    ...data.appBasic.newSource,
                                    url: e.target.value,
                                  },
                                },
                              });
                            }}
                          />

                          {(!data.appBasic?.newSource?.name ||
                            !data.appBasic?.newSource?.description ||
                            !data.appBasic?.newSource?.url) &&
                            hasError && (
                              <div className="fv-plugins-message-container">
                                <div
                                  className="fv-help-block"
                                  data-field="title"
                                  data-validator="notEmpty"
                                >
                                  All information is required
                                </div>
                              </div>
                            )}

                          {data.appBasic?.newSource?.url &&
                            !validURL(data.appBasic?.newSource?.url) &&
                            hasError && (
                              <div className="fv-plugins-message-container">
                                <div
                                  className="fv-help-block"
                                  data-field="title"
                                  data-validator="notEmpty"
                                >
                                  This URL is not valid
                                </div>
                              </div>
                            )}
                        </>
                      )}
                    </div>

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      {srcSearchTerm &&
                        sources.map((source: any, i) => {
                          console.log(data.appBasic.sourceId, source._id);

                          // limit to 5 results
                          if (i > 3) return;

                          return (
                            <label
                              key={`src_${i}`}
                              className="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                            >
                              <span className="d-flex align-items-center me-2">
                                <span className="d-flex flex-column">
                                  <span className="fw-bolder fs-6">
                                    {truncate(source.name, 50)}
                                  </span>
                                  <span className="fs-7 text-muted">
                                    {truncate(
                                      source?.description || source?.url,
                                      120
                                    )}
                                  </span>
                                </span>
                              </span>

                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  checked={
                                    data.appBasic.sourceId === source._id
                                  }
                                  className="form-check-input"
                                  name="sourceId"
                                  type="radio"
                                  value={source._id}
                                  onChange={() => {
                                    setSrcSearchTerm(source.name);
                                    updateData({
                                      appBasic: {
                                        ...data.appBasic,
                                        sourceId: source._id,
                                        sourceInfo: {
                                          name: source.name,
                                          description: source.description,
                                          url: source.url || source.website,
                                        },
                                      },
                                    });
                                  }}
                                />
                              </span>
                            </label>
                          );
                        })}

                      {isLoading && (
                        <span
                          className="indicator-progress"
                          style={{ display: "block" }}
                        >
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2" />
                        </span>
                      )}

                      {srcSearchTerm && resultNotFound && (
                        <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                          <span className="d-flex align-items-center me-2">
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">
                                No result matching
                              </span>
                              <span className="fs-7 text-muted">
                                no encontramos lo que buscas en nuestro sistema.
                                <br />
                                Intentalo nuevamente, o crea una{" "}
                                <span
                                  className="text-primary"
                                  onClick={() => setNewSrc(true)}
                                >
                                  nueva entrada
                                </span>
                              </span>
                            </span>
                          </span>
                        </label>
                      )}
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
                      <h3 className="fw-bolder text-dark display-6">Emisor</h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <div className="fv-row mb-2 d-flex justify-content-between">
                        <label className="fs-6 fw-bolder text-dark form-label">
                          ¿Quien emitió esta información?
                        </label>

                        <div>
                          <input
                            checked={newDep}
                            className="form-check-input me-3"
                            id="newDep"
                            type="checkbox"
                            onChange={() => setNewDep(!newDep)}
                          />
                          <label
                            className="form-check-label fw-bold text-gray-600"
                            htmlFor="kt_checkbox_1"
                          >
                            Crear nuevo
                          </label>
                        </div>
                      </div>

                      {!newDep && (
                        <>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            name="depSearch"
                            placeholder="ejemplo: Ministerio de Relaciones Exteriores"
                            type="text"
                            value={depSearchTerm}
                            onChange={(e) => {
                              reset(4);
                              setDepSearchTerm(e.target.value);
                            }}
                            onKeyDown={_handleKeyDownDep}
                          />

                          <label className="text-muted mt-2 fw-bold fs-6 mt-3">
                            Precione &apos;Enter&apos; para buscar
                          </label>

                          {!data.appBasic.issuerId && hasError && (
                            <div className="fv-plugins-message-container">
                              <div
                                className="fv-help-block"
                                data-field="title"
                                data-validator="notEmpty"
                              >
                                issuerId is required
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {newDep && (
                        <>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            name="depName"
                            placeholder="Nombre"
                            type="text"
                            value={data.appBasic.newIssuer?.name}
                            onChange={(e) => {
                              updateData({
                                appBasic: {
                                  ...data.appBasic,
                                  newIssuer: {
                                    ...data.appBasic.newIssuer,
                                    name: e.target.value,
                                  },
                                },
                              });
                            }}
                          />

                          <br />

                          <textarea
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Descripción"
                            rows={3}
                            value={data.appBasic.newIssuer?.description}
                            onChange={(e) => {
                              updateData({
                                appBasic: {
                                  ...data.appBasic,
                                  newIssuer: {
                                    ...data.appBasic.newIssuer,
                                    description: e.target.value,
                                  },
                                },
                              });
                            }}
                          />

                          <br />

                          <input
                            className="form-control form-control-lg form-control-solid"
                            name="newDepUrl"
                            placeholder="Website"
                            type="text"
                            value={data.appBasic.newIssuer?.url}
                            onChange={(e) => {
                              updateData({
                                appBasic: {
                                  ...data.appBasic,
                                  newIssuer: {
                                    ...data.appBasic.newIssuer,
                                    url: e.target.value,
                                  },
                                },
                              });
                            }}
                          />

                          {(!data.appBasic?.newIssuer?.name ||
                            !data.appBasic?.newIssuer?.description ||
                            !data.appBasic?.newIssuer?.url) &&
                            hasError && (
                              <div className="fv-plugins-message-container">
                                <div
                                  className="fv-help-block"
                                  data-field="title"
                                  data-validator="notEmpty"
                                >
                                  All information is required
                                </div>
                              </div>
                            )}

                          {data.appBasic?.newIssuer?.url &&
                            !validURL(data.appBasic?.newIssuer?.url) &&
                            hasError && (
                              <div className="fv-plugins-message-container">
                                <div
                                  className="fv-help-block"
                                  data-field="title"
                                  data-validator="notEmpty"
                                >
                                  This URL is not valid
                                </div>
                              </div>
                            )}
                        </>
                      )}
                    </div>

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      {depSearchTerm &&
                        deps.map((dep: any, i) => {
                          // limit to 5 results
                          if (i > 3) return;

                          return (
                            <label
                              key={`dep_${i}`}
                              className="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                            >
                              <span className="d-flex align-items-center me-2">
                                <span className="d-flex flex-column">
                                  <span className="fw-bolder fs-6">
                                    {truncate(dep.name, 50)}
                                  </span>
                                  <span className="fs-7 text-muted">
                                    {truncate(
                                      dep?.desciption || dep?.website,
                                      120
                                    )}
                                  </span>
                                </span>
                              </span>

                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  checked={data.appBasic.issuerId === dep._id}
                                  className="form-check-input"
                                  name="issuerId"
                                  type="radio"
                                  value={dep._id}
                                  onChange={() => {
                                    setDepSearchTerm(dep.name);
                                    updateData({
                                      appBasic: {
                                        ...data.appBasic,
                                        issuerId: dep._id,
                                        issuerInfo: {
                                          name: dep.name,
                                          description: dep.desciption,
                                          url: dep.url || dep.website,
                                        },
                                      },
                                    });
                                  }}
                                />
                              </span>
                            </label>
                          );
                        })}

                      {isLoading && (
                        <span
                          className="indicator-progress"
                          style={{ display: "block" }}
                        >
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2" />
                        </span>
                      )}

                      {depSearchTerm && resultNotFound && (
                        <label className="d-flex align-items-center justify-content-between cursor-pointer mb-6">
                          <span className="d-flex align-items-center me-2">
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">
                                No result matching
                              </span>
                              <span className="fs-7 text-muted">
                                no encontramos lo que buscas en nuestro sistema.
                                <br />
                                Intentalo nuevamente, o crea una{" "}
                                <span
                                  className="text-primary"
                                  onClick={() => setNewDep(true)}
                                >
                                  nueva entrada
                                </span>
                              </span>
                            </span>
                          </span>
                        </label>
                      )}
                    </div>
                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 4 */}

                {/*begin::Step 4 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        Archivos
                      </h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <div className="fv-row mb-2 d-flex justify-content-between">
                        <label className="fs-6 fw-bolder text-dark form-label">
                          Ingrese el archivo que desea compartir
                        </label>
                      </div>

                      <input
                        className="form-control form-control-lg form-control-solid"
                        name="file"
                        placeholder="File"
                        type="file"
                        onChange={(e) => {
                          const file = (e.target as HTMLInputElement)
                            .files?.[0];
                          updateData({
                            appBasic: {
                              ...data.appBasic,
                              fileUploaded: file,
                            },
                          });
                        }}
                      />

                      {!data.appBasic?.fileUploaded && hasError && (
                        <div className="fv-plugins-message-container">
                          <div
                            className="fv-help-block"
                            data-field="title"
                            data-validator="notEmpty"
                          >
                            File is required
                          </div>
                        </div>
                      )}
                    </div>

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <div className="fv-row mb-2 d-flex justify-content-between">
                        <label className="fs-6 fw-bolder text-dark form-label">
                          Ingrese un screenshot de la fuente
                        </label>
                      </div>

                      <input
                        accept="image/*"
                        className="form-control form-control-lg form-control-solid"
                        name="proof"
                        placeholder="File"
                        type="file"
                        onChange={(e) => {
                          const file = (e.target as HTMLInputElement)
                            .files?.[0];
                          updateData({
                            appBasic: {
                              ...data.appBasic,
                              proof: file,
                            },
                          });
                        }}
                      />

                      {!data.appBasic?.proof && hasError && (
                        <div className="fv-plugins-message-container">
                          <div
                            className="fv-help-block"
                            data-field="title"
                            data-validator="notEmpty"
                          >
                            File is required
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/*end::Step 4 */}

                {/*begin::Step 5 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/* begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">Review</h3>
                      <div className="text-muted fw-bold fs-3">
                        ¡Casi listos para compartir tu archivo!
                      </div>
                    </div>
                    {/* end::Heading */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Documento</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <h5 className="text-truncate">{data.appBasic.title}</h5>
                      <div>{data.appBasic.docType}</div>
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Detalles</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <h5 className="text-truncate">
                        {data.appBasic.description}
                      </h5>
                    </div>
                    {/* end::Section */}

                    <h4 className="fw-bolder mb-3">Fuente</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <h5 className="fw-bolder mb-3">
                        {data.appBasic.newSource?.name ||
                          data.appBasic.sourceInfo?.name}
                      </h5>
                      <div className="text-truncate mb-3">
                        {data.appBasic.newSource?.description ||
                          data.appBasic.sourceInfo?.description}
                      </div>
                      <a
                        href={data.appBasic.docSource}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {data.appBasic.docSource}
                      </a>
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Emisor</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <h5 className="fw-bolder mb-3">
                        {data.appBasic.newIssuer?.name ||
                          data.appBasic.issuerInfo?.name}
                      </h5>
                      <div className="text-truncate mb-3">
                        {data.appBasic.newIssuer?.description ||
                          (data.appBasic.issuerInfo?.description &&
                            truncate(
                              data.appBasic.newIssuer?.description ||
                                data.appBasic.issuerInfo?.description,
                              150
                            ))}
                      </div>
                      <a
                        href={
                          data.appBasic.newIssuer?.url ||
                          data.appBasic.issuerInfo?.url
                        }
                        rel="noreferrer"
                        target="_blank"
                      >
                        {data.appBasic.newIssuer?.url ||
                          data.appBasic.issuerInfo?.url}
                      </a>
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Archivos</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <h5>{data.appBasic.fileUploaded.name}</h5>
                      <div>{data.appBasic.proof.name}</div>
                    </div>
                    {/* end::Section */}
                  </div>
                </div>
                {/*end::Step 5 */}

                {/*begin::Step 5 */}
                <div className="pb-5" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/* begin::Heading */}
                    <div className="pb-10 pb-lg-15">
                      <h3 className="fw-bolder text-dark display-6">
                        ¡Gracias!
                      </h3>
                      <div className="text-muted fw-bold fs-3">
                        Todos juntos podemos llegar a la verdad
                      </div>
                    </div>
                    {/* end::Heading */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Link al documento</h4>
                    <div className="text-gray-600 fw-bold lh-lg mb-8">
                      <input
                        readOnly
                        className="form-control form-control-lg form-control-solid"
                        name="title"
                        placeholder=""
                        type="text"
                        value="url asset"
                      />
                    </div>
                    {/* end::Section */}

                    {/* begin::Section */}
                    <h4 className="fw-bolder mb-3">Detalles</h4>
                    <Table
                      hideButton
                      cardClassName={`table-custom card-stretch mb-5 mb-xxl-8 ${
                        isLoading ? "table-loading" : ""
                      }`}
                      columns={columns} // change this with the actual count from DB
                      connectionLength={columns.length}
                      emptyMessage="No hay registros disponibles para esta categoria"
                      id="collection-data-list"
                    />
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
                      onClick={close}
                    >
                      Close{" "}
                      <Ktsvg
                        className="svg-icon-3 ms-2"
                        path="/media/icons/duotone/Navigation/Right-2.svg"
                      />
                    </button>

                    <button
                      className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="next"
                      disabled={isSigning}
                      type="button"
                      onClick={nextStep}
                    >
                      {currentStep === 5 ? (
                        isSigning ? (
                          <span
                            className="indicator-progress"
                            style={{ display: "block" }}
                          >
                            Please wait...{" "}
                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                          </span>
                        ) : (
                          "Submit"
                        )
                      ) : (
                        "Next Step"
                      )}{" "}
                      {!isSigning && (
                        <Ktsvg
                          className="svg-icon-3 ms-1"
                          path="/media/icons/duotone/Navigation/Right-2.svg"
                        />
                      )}
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
