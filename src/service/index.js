import request from "../utils/http";
// fundMNRank
export const getFundRank = (params) =>
  request.get("/api/fundMNRank", { params });
