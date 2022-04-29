/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { DepartmentModel } from "../models/DepartmentModel";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const API_URL = process.env.REACT_APP_API_ENDPOINT || "api";

export const GET_ALL_DEPARTMENTS = `${API_URL}/departments`;
export const GET_ALL_SOURCES = `${API_URL}/sources`;
export const GET_ALL_FILES = `${API_URL}/alexandrias`;
export const GET_ALL_PDF = `${API_URL}/alexandrias?type=pdf`;
export const GET_ALL_IMPORTS = `${API_URL}/imports`;
export const GET_ALL_IMPORTS_COUNT = `${API_URL}/imports/count`;
export const DEFAULT_PAGINATION = `?_start=0&_limit=15`;
export const START = `_start=1`;
export const LIMIT = `_limit=15`;
export const LIMIT_SHORT = `_limit=5`;
export const NO_LIMIT = `_limit=0`;
export const SORTING = `_sort=desc`;

// Get information from API 

// source
export function getAllSources() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return fetch(`${GET_ALL_SOURCES}${DEFAULT_PAGINATION}`)
    .then(response => response.json())
    .then(data => data);
}

// departments
export function getAllDepartments() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return fetch(`${GET_ALL_DEPARTMENTS}${DEFAULT_PAGINATION}`)
    .then(response => response.json())
    .then(data => data);
}

export function getDepartment(id: string) {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return fetch(`${GET_ALL_DEPARTMENTS}/${id}`)
    .then(response => response.json())
    .then(data => data);
}

// get all files
export function getArchive() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return fetch(`${GET_ALL_FILES}?${NO_LIMIT}&${START}&${SORTING}`)
    .then(response => response.json())
    .then(data => data);
}

// get all files
export function getPDF() {
  const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      slug
      name
    }
  }
  `;

  const { data, loading, error } = useQuery(CATEGORIES_QUERY, {
    variables: { slug: '' }
  });

  // if (loading) return 'Loading...';
  // if (error) return JSON.stringify(error);

  // console.log(data);

  return data;

  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return fetch(`${GET_ALL_PDF}?${NO_LIMIT}&${START}&${SORTING}`)
    .then(response => response.json())
    .then(data => data);
}

// get all imports
export function getImports() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return fetch(`${GET_ALL_IMPORTS}?${START}&${LIMIT_SHORT}&${'_sort=aletheias'}`)
    .then(response => response.json())
    .then(data => data);
}

// get all imports count
export function getImportsCount() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return fetch(`${GET_ALL_IMPORTS_COUNT}`)
    .then(response => response.json())
    .then(data => data);
}
