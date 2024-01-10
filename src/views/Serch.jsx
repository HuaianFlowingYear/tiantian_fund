import React from "react";
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

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  render() {
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
            value={this.state.searchValue}
            clearOnCancel={false}
            onChange={(value) => this.setState({ searchValue: value })}
            onSubmit={this.getSearch}
          />
        </div>
      </>
    );
  }

  componentDidMount() {
    this.getSearch();
  }

  getSearch() {
    const { searchValue } = this.state;
    getFundSearch(searchValue) // 传递搜索关键词
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
}

export default Bar;
