import { BaseUrl } from "../utils/api_config";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import z from "zod";

const fetchContent = async <T>(path: string) => {
  const options: AxiosRequestConfig = {
    url: BaseUrl + "/" + path,
    method: "GET"
  }
  const data = axios(options).then((res: AxiosResponse<T>) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
    return null;
  })
  return data;
}

export {
  fetchContent,
}