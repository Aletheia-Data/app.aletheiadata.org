import React, { useState, useEffect } from "react";
import MiniSearch from "minisearch";
import Papa from "papaparse";
import numeral from "numeral";

type Props = {
  className: string;
  type: string;
  innerPadding?: string;
  data: any;
  color?: string;
  getPagination: any;
  paginationPage: number;
  handleExit: any;
};

const MiniSearchService: React.FC<Props> = ({
  className,
  data: dataFile,
  getPagination,
  paginationPage,
  handleExit
}) => {
  let [miniSearch, setMiniSearch] = useState<MiniSearch>();
  let [data, setData] = useState([]);
  let [cid, setCid] = useState("");
  let [header, setHeader] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [entityCount, setEntityCount] = useState(1);

  dataFile = dataFile.data;
  
  let title;
  let desc;

  // sort by aletheias count +
  // get first record (most aletheias)
  dataFile = dataFile.alexandrias[0];

  title = "Search";
  desc = dataFile.description;

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const cid: any = dataFile.cid ? dataFile.cid : null;
    setCid(cid);
    // console.log(`loading CID: ${cid}`);

    Papa.parse(`https://${cid}.ipfs.dweb.link/`, {
      download: true,
      encoding: "UTF8", // encoding UTF8 as standard
      header: true,
      complete: (response) => {
        let data: any = response.data;
        // console.log(data);
        if (data.length > 0) {
          setData(data);
          let fields: any = response.meta.fields;
          const filtered = fields.filter((n: any) => n); // remove all empty values
          setHeader(filtered);          

          // add ids
          data.map((r: any, i: any) => {
            r.id = i;
          });
          // init minisearch
          miniSearch = new MiniSearch({
            fields: fields, // fields to index for full-text search
            storeFields: fields, // fields to return with search results
            searchOptions: {
              // boost: { <field>: 2 },
              fuzzy: 0.15
            },
          });
          // Index all documents
          miniSearch.addAll(data);
          // console.log(miniSearch);
          setMiniSearch(miniSearch);
          setEntityCount(data.length);
        } else {
          console.log("invalid file");
          setLoading(false);
        }
      },
    });
  }, []);

  useEffect(() => {
    if (paginationPage > currentPage) {
      nextPage();
    } else {
      prevPage();
    }
    setCurrentPage(paginationPage);
    // changePage(paginationPage);
  }, [paginationPage]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState([]);
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(20);
  let [pageCount, setPageCount] = useState(1);
  let [noResult, setNoResult] = useState(false);
  let [itemsPerPage] = useState(20);

  const _handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      if (miniSearch) {
        let res: any = miniSearch.search(search);
        // console.log('setting query result: ', res);
        setResults(res);
        if (res.length > 0) {
          changePage(page, res);
        } else {
          setResultsPerPage(res);
          setNoResult(true);
        }
      }
    }
  };

  const searchChange = (e: any) => {
    setLoading(true);
    let value = e.target.value;
    setSearch(value);

    if (miniSearch) {
      let res: any = miniSearch.search(search);
      // console.log("setting query result: ", res);
      setResults(res);
    }

    if (!value) {
      setResults([]);
      setResultsPerPage([]);
      setPage(1);
      setPerPage(20);
    }
  };

  const clickItemTable = (e: any) => {
    let value = e.target.id;
    setSearch(value);
    e.key = "Enter";
    _handleKeyDown(e);
  };

  const prevPage = () => {
    if (page > 1) {
      page--;
      changePage(page, results);
    }
  };

  const nextPage = () => {
    if (page < numPages(results, itemsPerPage)) {
      page++;
      changePage(page, results);
    }
  };

  const changePage = (page: any, results: any) => {
    let pageNum: any = numPages(results, itemsPerPage);
    setPageCount(pageNum);
    getPagination(pageNum);

    // Validate page
    if (page < 1) page = 1;
    if (page > pageNum) page = pageNum;

    let res: any = [];
    for (var i = (page - 1) * perPage; i < page * perPage; i++) {
      let item = results[Math.abs(i)];
      if (item) {
        res.push(item);
      }
    }

    setResultsPerPage(res);

    // set new page
    if (page > 0) {
      setPage(page);
    } else {
      resetSearch();
    }
  };

  const resetSearch = () => {
    setPage(1);
    setPageCount(1);
  };

  const numPages = (res: any, page: any) => {
    return Math.ceil(res.length / page);
  };

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">{title}</span>
          <span className="text-muted mt-3 fw-bold fs-7">
            {`${entityCount} elementos`}
          </span>
        </h3>
        <div className="card-toolbar">
          <a onClick={handleExit} className="btn btn-primary fw-bolder fs-7">
            Exit
          </a>
        </div>
      </div>
      {/* end::Header*/}

      {/* begin::Body*/}
      <div className="card-body py-0">
        {/* begin::Table*/}
        <div className="mb-3">
          <label className="form-label">Buscador</label>
          <input
            type="text"
            className="form-control"
            onChange={searchChange}
            onKeyDown={_handleKeyDown}
            disabled={header.length > 0 ? false : true }
            value={search}
            placeholder={header.length > 0 ? header.join(", ") : loading ? "Loading ..." : "File not valid. Try using another method."}
          />
        </div>
        <span className="text-muted fw-bold fs-7">
          {`presione ENTER para buscar`}
        </span>
        <div className="table-responsive">
          <table
            className="table align-middle border-gray-100 mt-5"
            id="kt_advance_table_widget_4"
          >
            <thead>
              <tr className="text-start text-muted fw-bolder text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                {header.map((h) => {
                  if (!h) return;
                  return (
                    <td key={`header_${h}`} className="ps-0 min-w-250px py-5">
                      {h}
                    </td>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {resultsPerPage &&
                resultsPerPage.map((rec: any) => {
                  return (
                    <tr key={`item_${rec.id}`}>
                      {header.map((h, i) => {
                        if (!rec[h]) return;

                        return (
                          <td className="ps-0" key={`item_single_${i}`}>
                            <a
                              onClick={clickItemTable}
                              id={`${rec[h]}`}
                              className="text-gray-800 fw-bolder text-hover-primary fs-6"
                            >
                              {rec[h]}
                            </a>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* end::Table*/}
      </div>
      {/* end::Body*/}
    </div>
  );
};

export { MiniSearchService };
