import brand from "../brand";

const availableDocTypes = [
  {
    format: "pdf",
    name: "PDF",
    archiveDesc: "Archivar un documento PDF",
    color: brand.colors.pdf,
    background: brand.colors.pdf,
    icon: "/media/icons/aletheia/Formats/pdf.svg",
  },
  {
    format: "csv",
    name: "CSV",
    archiveDesc: "Archivar un documento CSV",
    color: brand.colors.csv,
    background: brand.colors.csv,
    icon: "/media/icons/aletheia/Formats/csv.svg",
  },
  {
    format: "xls",
    name: "XLS",
    archiveDesc: "Archivar un documento XLS",
    color: brand.colors.xls,
    background: brand.colors.xls,
    icon: "/media/icons/aletheia/Formats/xls.svg",
  },
  {
    format: "other",
    name: "Other",
    archiveDesc: "Archivar otro tipo de documento",
    color: brand.colors.other,
    background: brand.colors.other,
    icon: "/media/icons/aletheia/Formats/other.svg",
  },
];

export default {
  availableDocTypes,
};
