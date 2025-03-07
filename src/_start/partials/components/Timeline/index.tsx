import React, { useEffect, useState } from "react";
import { Ktsvg, truncate } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
};

const Timeline: React.FC<Props> = ({ className }) => {
  const [data, setData] = useState<any>(null);
  const [dataCount, setDataCount] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingCount, setLoadingCount] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    // Fetch Imports Data
    const fetchImports = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/imports/getAll?limit=5`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        console.log('response: ', result);
        setData(result.body.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };    

    // Fetch Import Count
    const fetchImportCount = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}v2/api/imports/getAll?count=true&limit=5`);
        const result = await response.json();
        console.log('set count: ', result);
        
        setDataCount(result.body.totalCount);
      } catch (err) {
        setError(err);
      } finally {
        setLoadingCount(false);
      }
    };

    fetchImports();
    fetchImportCount();
  }, []);

  if (loading || loadingCount) {
    return (
      <div className={`card ${className}`}>
        <div className="card-header align-items-center border-0 mt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">Timeline</span>
            <span className="text-muted mt-2 fw-bold fs-6">Loading ...</span>
          </h3>
          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <Ktsvg path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg" className="svg-icon-1" />
            </button>
            <Dropdown1 />
          </div>
        </div>

        <div className="card-body pt-3">
          <div className="timeline-label">
            <div className="timeline-item">
              <div className="timeline-label fw-bolder text-gray-800 fs-6">
                00:00
              </div>
              <div className="timeline-badge">
                <i className="fa fa-genderless text-success fs-1"></i>
              </div>
              <div className="timeline-content d-flex">
                <span className="fw-bolder text-gray-800 ps-3">Loading ...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log('dataddd: ', data);

  return (
    <div className={`card ${className}`}>
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">Timeline</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {dataCount} Importaciones
          </span>
        </h3>
        <div className="card-toolbar">
          {/* Dropdown logic removed for simplicity */}
        </div>
      </div>

      <div className="card-body pt-3">
        <div className="timeline-label">
          {data.length > 0 && data.map((item: any) => {
            let docs = 0;
            let time = new Date(item.updatedat);
            let message;
            let badge_color;
            
            switch (item.status) {
              case "in_progress":
                message = `importando ${docs} ${docs === 1 ? 'documento' : 'documentos'}`;
                badge_color = `text-warning`;
                break;
              case "done":
                message = `${docs} ${docs === 1 ? 'documento importado' : 'documentos importados'}`;
                badge_color = `color-xls`;
                break;
              default:
                break;
            }

            const getLink = (item: any) => {
              let url = `${item.source}`;
              return (
                <a href={url} target={ '_blank'}>
                  {truncate(`${item.wallet}`, 15)}
                </a>
              );
            };

            return (
              <div className="timeline-item" key={`import_${item.id}`}>
                <div className="timeline-label fw-bolder text-gray-800 fs-6">
                  {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
                <div className="timeline-badge">
                  <i className={`fa fa-genderless ${badge_color} fs-1`}></i>
                </div>
                <div className="timeline-content d-flex">
                  <span className="fw-bolder text-gray-800 ps-3">
                    {`${message}`} <br />
                    {getLink(item)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Timeline };
