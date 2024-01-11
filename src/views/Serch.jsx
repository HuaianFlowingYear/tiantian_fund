import React, { useState, useEffect } from "react";
import { SearchBar } from "antd-mobile";
import { LeftOutline } from "antd-mobile-icons";
import styled from "styled-components";
import { getFundSearch } from "@/service";

const StyleSearch = styled(SearchBar)`
  border: 1px solid #999;
  overflow: hidden;
  border-radius: 10px;
  .adm-search-bar-input-box {
    background: #fff;
    border: unset;
  }
  button {
    border-radius: 0;
    font-size: 12px;
    border-left: 1px solid #999;
    color: #1677ff;
  }
`;

const Bar = () => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getSearch();
  }, []);

  const getSearch = () => {
    getFundSearch(searchValue) // 传递搜索关键词
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = () => {
    getSearch();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LeftOutline style={{ width: "10%", fontSize: "1.5rem" }} />
        <StyleSearch
          placeholder="请输入内容"
          showCancelButton={() => true}
          style={{ width: "90%", placeholderColor: "#1677ff" }}
          cancelText="搜索"
          value={searchValue}
          clearOnCancel={false}
          onChange={(value) => setSearchValue(value)}
          onSubmit={handleSearch} // 调用handleSearch函数进行搜索
        />
      </div>
      <div>dasd</div>
    </>
  );
};

export default Bar;
