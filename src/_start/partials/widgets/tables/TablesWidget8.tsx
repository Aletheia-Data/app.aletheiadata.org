/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { KTSVG } from "../../../helpers";
import moment from 'moment';
import { Link } from "react-router-dom";

import MiniSearch from 'minisearch';
import Papa from 'papaparse';
import numeral from 'numeral';

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

const TablesWidget8: React.FC<Props> = ({
  className,
  data:dataFile,
  getPagination,
  paginationPage,
  handleExit,
  type,
  innerPadding = "",
  color = "primary",
}) => {

  let [miniSearch, setMiniSearch] = useState<MiniSearch>();
  let [data, setData] = useState([]);
  let [cid, setCid] = useState('');
  let [header, setHeader] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [entityCount, setEntityCount] = useState(1);

  dataFile = dataFile.data;
  const entity = dataFile.entity;

  let title;
  let desc;
  let records: any;

  // sort by aletheias count +
  // get first record (most aletheias)
  dataFile = dataFile.alexandrias[0];

  title = "Search";
  desc = dataFile.description;

  var response_index:any = '';
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    const cid: any  = dataFile.file[0] ? dataFile.file[0].url : dataFile.cid ? dataFile.cid : null;

    setCid(cid);

    console.log(`loading CID: ${cid}`);
    
    Papa.parse(cid, {
      download: true,
      encoding: "ISO-8859-1",
      header: true,
      complete: response => {
        
        let data:any = response.data;
        // console.log(data);
        if (data){
          setData(data);
          let fields:any = response.meta.fields;
          setHeader(fields);
          let errors = response.meta;
          // console.log('GET Data: ', response, errors);
          response_index = response;
          // add ids
          data.map((r:any, i:any) => { r.id = i; if (r.Nombre) return r; });
          // init minisearch
          miniSearch = new MiniSearch({
            fields: fields, // fields to index for full-text search
            storeFields: fields, // fields to return with search results
            searchOptions: {
              boost: { Nombre: 2 },
              fuzzy: 0.15
            }
          })
          // Index all documents
          miniSearch.addAll(data);
          // console.log(miniSearch);
          setMiniSearch(miniSearch);
          setEntityCount(data.length);
          
        } else {
          console.log('invalid file');
          
        }
      }
    });
  }, []);

  useEffect(()=>{
    
    if (paginationPage > currentPage){
      nextPage();
    } else {
      prevPage();
    }
    setCurrentPage(paginationPage);
    // changePage(paginationPage);
  }, [paginationPage])

  let loading = false;

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState([]);
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(20);
  let [pageCount, setPageCount] = useState(1);
  let [noResult, setNoResult] = useState(false);
  let [itemsPerPage] = useState(20);
  
  let [openSearch, setOpenSearch] = useState(false);
  
  const _handleKeyDown = (e:any) => {
    if (e.key === 'Enter') {
      setOpenSearch(false);
      if (miniSearch){
        let res:any = miniSearch.search(search);
        // console.log('setting query result: ', res);
        setResults(res);
        if (res.length > 0){
          changePage(page, res);
        } else {
          setResultsPerPage(res);
          setNoResult(true);
        }
      }
    }
  }
  
  const isServiceField = (key: string) =>{
    switch (key) {
      case 'highlight':
        return true
      case '_index':
        return true
      case '_type':
        return true
      case '_doc':
        return true
      case '_id':
        return true
      case '_score':
        return true
      case '_click_id':
        return true
      default:
        return false
    }
  }

  const getLabelInfo = (key:string, value:any) =>{
    //console.log(key, value);
    if (!isServiceField(key)){
      let skip = false;
      let isLink = false;
      // make minuscule
      key = key.toLowerCase();
      switch (key) {
        case 'id':
          skip=true
          value = 0;
          key = 'id'
          break;
        case 'ano':
          key = 'Año'
          break;
        case 'funci�n':
          key = 'Función'
          break;
        case 'a�o':
          key = 'Año'
          break;
        case 'sueldo bruto':
          value = `RD$ ${ numeral(value).format('0,0.00') }`
          key = 'Sueldo bruto'
          break;
        case 'sueldo':
          value = `RD$ ${ numeral(value).format('0,0.00') }`
          key = 'Sueldo'
          break;
        case 'sueldo base':
          value = `RD$ ${ numeral(value).format('0,0.00') }`
          key = 'Sueldo Base'
          break;
        case 'monto':
          value = `RD$ ${ numeral(value).format('0,0.00') }`
          key = 'Monto'
          break;
        case 'terms':
          skip=true
          value = 0;
          key = 'terms'
          break;
        case 'estatus':
          key = 'estatus'
          break;
        case 'score':
          skip=true
          value = 0;
          key = 'score'
          break;
        case 'match':
          skip=true
          value = 0;
          key = 'match'
          break;
        default:
      }
      // console.log(value);
      // make capitalized
      key = key.charAt(0).toUpperCase() + key.slice(1);
      if (!skip){
        if (isLink) return <li key={key} style={{ display: 'flex',alignItems: 'flex-start', whiteSpace: 'break-spaces' }}><b>{ key }:</b> <p style={{ margin: 0,marginLeft: 10 }}><a href={value} target='_blank' >{ 'Portal' }</a></p></li>;
        return <li key={key} style={{ display: 'flex',alignItems: 'flex-start', whiteSpace: 'break-spaces' }}><b>{ key }:</b> <p style={{ margin: 0,marginLeft: 10 }}>{ value }</p></li>;
      }
    }
  }

  /**
   * 
    APELLIDOS: "OGANDO BATISTA"
    DEFINICION CARGO: "SUPERVISOR SOCIAL"
    LUGAR DESIGNADO: "OFIC. PROV. MARIA TRINIDAD SANCHEZ"
    MUNICIPIO: "NAGUA"
    NOMBRES: "MARIO JORGE"
    PERIODO: "2018"
    PERIODO MES: "FEBRERO"
    PROVINCIA: "MARIA TRINIDAD SANCHEZ"
    REGION: "REGION 3"
    SUELDO BASE: "18150"
    TIPO EMPLEADO: "FIJO"
   */


  const Card = (result:any, i:number) =>{

    // set variables
    let subtitle = result.Estatus || result.ESTATUS || result['TIPO EMPLEADO'] || result['MEDIO'];
    let title = result['NOMBRES'] ? result['NOMBRES'] + ' ' + result['APELLIDOS'] : result['Nombre'] || result['NOMBRE'];
    let departamento = result.Departamento;

    return(
      <div className="card" key={`card_${i}}`}>
          <div className="courses-container col-xs-6">
              <div className="course">
                  <div className="course-preview">
                    <h6>{ subtitle }</h6>
                    <h2>{ title }</h2>
                  </div>
                  <div className="course-info">
                    <h6>{ 
                      departamento
                    }</h6>
                    <pre>
                      <ul>
                        {
                          Object.keys(result).map((k, v) => {
                            let val = result[k];
                            let label = getLabelInfo(k,val);
                            return label
                          })
                        }
                    </ul></pre>
                    <button className="btn">{ `RD$ ${ numeral(
                      result['Sueldo Bruto'] || 
                      result['Sueldo bruto'] || 
                      result['SUELDO BRUTO'] || 
                      result['SUELDO BASE'] || 
                      result['MONTO'] || 
                      result['SUELDO'] ||
                      result['Sueldo Bruto (RD$)'] ||
                      result['TOTAL']
                    ).format('0,0.00') }` }</button>
                </div>
              </div>
          </div>
      </div>
    )
  }

  const EmptyCard = (title:string, description:string, body:string, button:any) =>{
    return(
      <div className="card">
          <div className="courses-container col-xs-6">
              <div className="course">
                  <div className="course-preview">
                      <h6>{ title }</h6>
                      <h2>{ description }</h2>
                  </div>
                  <div className="course-info">
                    <h6>{ body }</h6>
                    <button className="btn">{ button }</button>
                </div>
              </div>
          </div>
      </div>
    )
  }

  const searchChange = (e:any) =>{
    loading = true;
    let value = e.target.value;
    setSearch(value);
    
    if (miniSearch){
      let res:any = miniSearch.search(search);
      console.log('setting query result: ', res);
      setResults(res);
    }

    if (!value){
      setResults([])
      setResultsPerPage([])
      setPage(1);
      setPerPage(20);
    }
  }

  const handlePageClick = (data:any) =>{
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);
  };

  const prevPage = () =>
  {
      if (page > 1) {
        page--;
        changePage(page, results);
      }
  }

  const nextPage = () =>
  {
      if (page < numPages(results, itemsPerPage)) {
        page++;
        changePage(page, results);
      }
  }

  const changePage = (page:any, results:any) =>
  {
      // console.log('changing page: ', page);

      /**
       * var btn_next:any = document.getElementById("btn_next");
      var btn_prev:any = document.getElementById("btn_prev");
       */

      // console.log(page, results);
      let pageCount:any = numPages(results, itemsPerPage);
      setPageCount(pageCount);
      getPagination(pageCount);
      // console.log(pageCount);
      
      // Validate page
      if (page < 1) page = 1;
      if (page > pageCount) page = pageCount;

      // console.log(results);
      let res:any = [];
      for (var i = (page-1) * perPage; i < (page * perPage); i++) {
        // console.log('i: ', i);
        // console.log('from: ', (page-1) * perPage);
        // console.log('to: ', page * perPage);
        // console.log('res: ', results[Math.abs(i)]);
        let item = results[Math.abs(i)];
        if (item){
          res.push(item);
        }
      }
      
      // setResults(results)
      // console.log(results.length);
      setResultsPerPage(res);

      /*
      if (page == 1) {
          btn_prev.style.visibility = "hidden";
      } else {
          btn_prev.style.visibility = "visible";
      }

      if (page == pageCount) {
          btn_next.style.visibility = "hidden";
      } else {
          btn_next.style.visibility = "visible";
      }
      */

      // set new page
      if (page > 0){
        setPage(page);
      } else {
        resetSearch();
      }
  }

  const resetSearch = () =>
  {
    setPage(1);
    setPageCount(1)
  }

  const numPages = (res:any, page:any) =>{
      return Math.ceil(res.length / page);
  }
 
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
          <a 
          onClick={handleExit}
          className="btn btn-primary fw-bolder fs-7">
            Exit
          </a>
        </div>
      </div>
      {/* end::Header*/}

      {/* begin::Body*/}
      <div className="card-body py-0">
        {/* begin::Table*/}
        <div className="table-responsive">
          <div className="mb-3">
            <label className="form-label">Buscador</label>
            <input
              type="text"
              className="form-control"
              onChange={searchChange}
              onKeyDown={_handleKeyDown} 
              value={search}
              placeholder={header.join(', ')}
            />
          </div>
          <span className="text-muted fw-bold fs-7">
            {`presione ENTER para buscar`}
          </span>
          <table
            className="table align-middle border-gray-100 mt-5"
            id="kt_advance_table_widget_4"
          >
            <thead>
              <tr className="text-start text-muted fw-bolder text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
              {
                header.map(h => {
                  if (!h) return;
                  return (
                    <td key={`header_${h}`} className="ps-0 min-w-250px py-5">{h}</td>
                  )  
                })
              }
              </tr>
            </thead>
            <tbody>
              {
                resultsPerPage && resultsPerPage.map((rec: any) => {
                  // console.log(rec);
                  
                  return (
                    <tr key={`item_${rec.id}`}>
                      {
                        header.map(h => {
                          if (!rec[h]) return;
                          return(
                            <td className="ps-0">
                              <Link
                                to={'#'}
                                className="text-gray-800 fw-bolder text-hover-primary fs-6"
                              >
                                {rec[h]}
                              </Link>
                            </td>
                          )
                        })
                      }
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
        {/* end::Table*/}
      </div>
      {/* end::Body*/}
    </div>
  );
};

export { TablesWidget8 };
