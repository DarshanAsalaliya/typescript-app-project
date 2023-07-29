import axios, { AxiosInstance } from 'axios';
import { ApiUrl } from '../constant';

/**
 * Api axios instance
 */
const Api: AxiosInstance = axios.create({
  baseURL: ApiUrl.mainUrl,
  headers: ApiUrl.header,
});

export default Api;
