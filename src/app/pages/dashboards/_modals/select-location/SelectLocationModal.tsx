import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "react-bootstrap-v5";
import { Ktsvg } from "../../../../../_start/helpers";

interface Props {
  data: { location: string; setLocation: Dispatch<SetStateAction<string>> };
  show: boolean;
  handleClose: () => void;
}

const SelectLocationModal: React.FC<Props> = ({ show, handleClose, data }) => {
  // useEffect(() => {
  //   initMap();
  // }, []);

  const [location, setLocation] = useState(data.location);
  const dissmissLocation = () => {
    setLocation(data.location);
    handleClose();
  };
  const applyLocation = () => {
    data.setLocation(location);
    handleClose();
  };
  //const initMap = () => {};

  return (
    <Modal
      aria-hidden="true"
      className="modal fade"
      data-backdrop="static"
      dialogClassName="modal-xl"
      id="kt_modal_select_location"
      role="dialog"
      show={show}
      tabIndex={-1}
      onHide={dissmissLocation}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Select Location</h5>

          <div
            className="btn btn-icon btn-sm btn-active-light-primary ms-2"
            onClick={dissmissLocation}
          >
            <Ktsvg
              className="svg-icon-2x"
              path="/media/icons/duotone/Navigation/Close.svg"
            />
          </div>
        </div>
        <div className="modal-body">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="map h-450px" id="kt_modal_select_location_map" />
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-light-primary"
            type="button"
            onClick={dissmissLocation}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            id="submit"
            type="button"
            onClick={applyLocation}
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { SelectLocationModal };
