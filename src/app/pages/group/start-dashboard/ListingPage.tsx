/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  EngageWidget3,
  TablesWidget1,
  Pagination1,
  TablesWidget7
} from "../../../../_start/partials/widgets";
import {
  useParams
} from "react-router-dom";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const ListingPage = (data: any) => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [entityCount, setEntityCount] = useState(0);
  const [dataTable, setDataTable] = useState('');

  let params: any = useParams();
  const { entity, id } = params;
  console.log(entity, id);
  let entityName: any;
  switch (entity) {
    case 'src':
      entityName = 'sources';
      break;
    case 'dep':
      entityName = 'departments';
      break;
    case 'cat':
      entityName = 'categorys';
      break;
  }

  const getQuery = (id: string, entity: string, page: number) => {
    console.log(`getting query for ${entity} - ${id}`);

    let query = `
    query DepartmentsTTT {
      departments(
        start: ${(page - 1) * 10},
        limit: 10,
        sort: "updatedAt:desc"
      ) {
        id,
        name, 
        website,
        updatedAt,
        alexandrias{
        title,
        description,
        status,
        cid,
        type,
        aletheias{
          id,
          proof {
            id,
            url
          }
        }
        }
      }
    }
    `;

    return query;
  }

  const handlePagination = (page: any) => {
    setLoading(true);
    // console.log(page);
    getNewRecords(entity, id, page.newPage)
      .then((res: any) => {
        console.log(res);
        let items = res.data.departments;
        let oldData: any = dataTable;
        console.log(res);

        if (items.length > 0) {
          // console.log(data);
          oldData[entityName] = res.data[entityName];
          console.log(oldData);
          setDataTable('');
          setDataTable(oldData);
          setLoading(false);
        } else {
          oldData[entityName] = [];
          setDataTable('');
          setDataTable(oldData);
          setLoading(false);
        }
      })

    return;
  }

  const getNewRecords = (entity: string, id: string, page: number) => {
    return new Promise((resolve, reject) => {

      let query = getQuery(id, entity, page);

      // console.log(query);

      const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/graphql`;

      fetch(endpoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query
        })
      })
        .then(response => response.json())
        .then(newData => {
          resolve(newData);
        })
        .catch(err => {
          console.log(err)
          reject(err);
        });

    });
  }

  const init = (info: any) => {
    let showData: any = info;
    console.log(showData);

    setDataTable(showData)

    const entity = showData.entity;
    const type = showData.type;

    let connection: any;
    let totalConn: any;

    switch (entity) {
      case 'src':
        connection = showData.sourcesConnection.groupBy.id;
        break;
      case 'dep':
        connection = showData.departmentsConnection.groupBy.id;
        break;
      case 'cat':
        connection = showData.categoriesConnection.groupBy.id;
        break;
    }

    totalConn = connection[0].connection.aggregate.totalCount;

    setEntityCount(totalConn);
  }

  useEffect(() => {

    init(data.data ? data.data : data);

  }, []);

  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <EngageWidget3
            data={data}
            color="white"
            className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <TablesWidget7 data={data} className={`table-custom card-stretch mb-5 mb-xxl-8 ${isLoading ? 'table-loading' : ''}`} />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-12">
        <div className="col-xl-12">
          <Pagination1 handleClick={handlePagination} totalItems={entityCount} />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Modals */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
      {/* end::Modals */}
    </>
  );
};
