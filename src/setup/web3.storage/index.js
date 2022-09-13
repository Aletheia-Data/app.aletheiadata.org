import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

function getAccessToken () {
  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.REACT_APP_WEB3_STORAGE_API_KEY
}

export function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}