import React, { useEffect, useState } from "react";
import { Ktsvg } from "../../../helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import axios from "axios";

const TablesWidget1 = ({ className, innerPadding = "" }: any) => {
  const [formats, setFormats] = useState([]);
  const [formatsTotals, setFormatsTotals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/v2/api/alexandrias/getAll?status=under_review`);
        console.log('res: ', response);
        
        setFormats(response.data.groupBy.type);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchAllData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/v2/api/alexandrias/getAll?status=on_line`);
        console.log('res 2 : ', response);
        setFormatsTotals(response.data.groupBy.type);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchAllData();
  }, []);

  if (loading) {
    return <div className={`card ${className}`}>Cargando Archivos...</div>;
  }

  return (
    <div className={`card ${className}`}>
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Archivos Depositados
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {formatsTotals.length} Archivos
          </span>
        </h3>
      </div>
      {/* Aquí puedes agregar la representación de los datos */}
    </div>
  );
};

export default TablesWidget1;