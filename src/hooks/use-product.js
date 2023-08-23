import { fetcher, fetchAndCache } from "../utils/fetcher";
import useSWR from "swr";

const key = "http://localhost:8000/Product";

export default function useProduct() {
  return useSWR(key, fetcher);
}

export function getPRoduct() {
  return fetchAndCache(key);
}