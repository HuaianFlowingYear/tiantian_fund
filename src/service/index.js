import request from "../utils/http";
// fundMNRank
export const getFundRank = (params) =>
  request.get("/api/fundMNRank", { params });

// /fundSearch 搜索 key:关键字
export const getFundSearch = (params) =>
  request.get("/api/fundSearch", { params });
