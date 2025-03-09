import React, { FC, useEffect, useState } from "react";
import {
  EngageWidget3,
  Pagination1,
} from "../../../../_start/partials/widgets";
import { useParams } from "react-router-dom";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";
import Table from "../../../../_start/partials/components/Table";
import { getListingPageColumns } from "../../../../_start/helpers";

export const ListingPage: FC<any> = ({ data, dataCount }: any) => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState<any>({});
  const params: any = useParams();
  const { entity, id } = params;

  let entityName: any;
  let tableName: any;
  switch (entity) {
    case "src":
      entityName = "sources";
      tableName = "source";
      break;
    case "dep":
      entityName = "departments";
      tableName = "department";
      break;
    case "cat":
      entityName = "categories";
      tableName = "category";
      break;
  }

  const fetchData = async (entity: string, id: string, page: number) => {
    setLoading(true);
    try {
      const query = `${
        process.env.REACT_APP_API_ENDPOINT
      }v2/api/${entityName}/getAll?_start=${
        (page - 1) * 10
      }&fields=${entityName}.id&join=alexandrias:${entityName}._id:${tableName}&sum=alexandrias.id.alexandrias_count&groupBy=${entityName}.id&_limit=10&_sort=alexandrias_count:desc`;
      const response = await fetch(query);
      const result = await response.json();
      console.log("query: ", query);

      setDataTable((prevData: any) => ({ ...prevData, [entityName]: result }));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePagination = (page: any) => {
    fetchData(entity, id, page.newPage);
  };

  useEffect(() => {
    console.log("dddd: ", data);

    setDataTable(data.data);
  }, [data]);

  const { type } = data;
  console.log("dataTable: ", dataTable, data);
  const columns = getListingPageColumns(data.data, entity, type);
  console.log("records: ", columns);

  return (
    <>
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <EngageWidget3
            className="card-stretch mb-5 mb-xxl-8"
            color="white"
            data={data}
            dataCount={dataCount}
          />
        </div>
      </div>

      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <Table
            cardClassName={`table-custom card-stretch mb-5 mb-xxl-8 ${
              isLoading ? "table-loading" : ""
            }`}
            columns={columns}
            emptyMessage="No hay registros para esta categoria"
            id="listing-list"
          />
        </div>
      </div>

      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <Pagination1 handleClick={handlePagination} totalItems={dataCount} />
        </div>
      </div>

      <CreateAppModal handleClose={() => setShow(false)} show={show} />
    </>
  );
};
