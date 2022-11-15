import React, { FC, useEffect, useState } from "react";
import {
  EngageWidget3,
  Pagination1,
} from "../../../../_start/partials/widgets";
import { useParams } from "react-router-dom";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";
import Table from "_start/partials/components/Table";
import { getCollectionPageColumns } from "_start/helpers/GetCollectionPageColumns";

export const FormatPage: FC<any> = (pageData: any) => {
  const params: any = useParams();
  const { entity, id } = params;
  // console.log(entity, id);
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [entityCount, setEntityCount] = useState(0);
  const [dataTable, setDataTable] = useState("");

  const getQuery = (entity: string, page: number) => {
    // console.log(`getting query for ${entity} - ${id}`);

    const query = `
    query SourceFromAlexandria {
      alexandrias(
        start: ${(page - 1) * 10},
        limit: 10,
        where:{
          type: "${entity}"
        }
      ) {
        id, 
        title,
        description,
        status,
        cid,
        type,
        department {
          id,
          name
        },
        aletheias{
          id,
          proof {
            id,
            url
          }
        }
      }
    }
    `;

    return query;
  };

  const handlePagination = (page: any) => {
    setLoading(true);
    // console.log(page);
    getNewRecords(entity, id, page.newPage).then((res: any) => {
      // console.log(res.data.alexandrias);
      const items = res.data.alexandrias;
      const oldData = dataTable;

      if (items.length > 0) {
        // console.log(data);
        oldData["alexandrias"] = res.data.alexandrias;
        // console.log(oldData);
        setDataTable("");
        setDataTable(oldData);
        setLoading(false);
      } else {
        oldData["alexandrias"] = [];
        setDataTable("");
        setDataTable(oldData);
        setLoading(false);
      }
    });

    return;
  };

  const getNewRecords = (entity: string, id: string, page: number) => {
    return new Promise((resolve, reject) => {
      const query = getQuery(entity, page);
      // console.log(query);
      const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/graphql`;

      fetch(endpoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      })
        .then((response) => response.json())
        .then((newData) => {
          resolve(newData);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const init = (info: any) => {
    const showData: any = info;
    setDataTable(showData);
    const connection = showData.alexandriasConnection.groupBy.id;
    setEntityCount(connection.length);
  };

  useEffect(() => {
    init(pageData.data);
  }, [pageData.data]);

  const records = dataTable?.["alexandrias"];
  // eslint-disable-next-line prefer-destructuring
  const type = dataTable["type"];
  const columns = getCollectionPageColumns(records, entity, type);

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          {pageData && (
            <EngageWidget3
              className="card-stretch mb-5 mb-xxl-8"
              color="white"
              data={pageData.data}
            />
          )}
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          {dataTable && (
            <Table
              cardClassName={`table-custom card-stretch mb-5 mb-xxl-8 ${
                isLoading ? "table-loading" : ""
              }`}
              columns={columns}
              connectionLength={entityCount}
              emptyMessage="No hay registros disponibles para esta categoria"
              id="collection-data-list"
            />
          )}
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <Pagination1
            handleClick={handlePagination}
            totalItems={entityCount}
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal handleClose={() => setShow(false)} show={show} />
      {/* end::Modals */}
    </>
  );
};
