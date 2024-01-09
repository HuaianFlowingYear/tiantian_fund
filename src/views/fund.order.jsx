import React from "react";
import { CapsuleTabs } from "antd-mobile";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { getFundRank } from "@/service";
// const WapperUl = styled.ul`
//   background-color: #ffffff;
// `;
const incomeDuration = {
  近1周: "SYL_Z",
  近1月: "SYL_Y",
  近3月: "SYL_3Y",
  近6月: "SYL_6Y",
  今年来: "SYL_JN",
  近1年: "SYL_1N",
  近2年: "SYL_2N",
  近3年: "SYL_3N",
  近5年: "SYL_5N",
  成立以来: "SYL_LN",
};
const WrapperTable = styled.table`
  th,
  tr {
    height: 70px;
    border-bottom: 1px solid #e5e7eb;
  }
  td {
    width: 20%;
    font-size: 14px;
  }
  th {
    color: #999;
    font-weight: 800;
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;
class FundOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      fundlist: [],
      defaultValue: "SYL_JN",
    };
  }

  // 返回布尔值 逻辑返回布尔值控制更新是否继续true代表继续false代表终止
  // 控制更新流程是否开始的阀门
  // shouldComponentUpdate(_, nextState) {
  //   // 如果组件的incomeDuration状态发生改变组件的更新流程开始
  //   // shouldComponentUpdate→componentWillUpdate→render→componentDidUpdate
  //   // 否则忽略本次没必要的更新
  //   // shouldComponentUpdate→终止
  //   // 通过shouldComponentUpdate中的逻辑判断组件的更新与那些状态有关 与哪些状态无关
  //   // 与incomeDuration有关 与其他无关
  //   if (this.state.fundlist.length === 0 && nextState.fundlist.length > 0) {
  //     return true;
  //   }
  //   return this.state.defaultValue !== nextState.defaultValue;
  // }
  render() {
    const { fundlist } = this.state;
    return (
      <div className="bg-blue-400 w-[100%] mb-[60px] overflow-hidden">
        <div className="h-[20vh] w-[100%] flex flex-col justify-around p-[10px]">
          <div className="flex justify-between items-center text-[18px] text-white">
            <Icon icon="ion:chevron-back-sharp" />
            <p>基金排行榜</p>
            <Icon icon="clarity:search-line" />
          </div>
          <div className="text-white flex justify-between">
            <p className="flex items-center">
              基金类型{" "}
              <Icon
                icon="material-symbols-light:arrow-drop-down-rounded"
                className="text-[20px]"
              />
            </p>
            <p className="flex items-center bg-[rgba(0, 0, 0)] rounded-[15px]">
              <Icon icon="jam:book" className="text-[20px]" />
              使用指南
            </p>
          </div>
        </div>
        {/* <WrapperTable></WrapperTable> */}
        <div className="bg-white rounded-t-[20px] p-[10px] overflow-hidden">
          <WrapperTable>
            <thead>
              <tr>
                <th>基金名称</th>
                <th>涨跌幅</th>
                <th>夏普比率</th>
                <th>最大回撤</th>
              </tr>
            </thead>
            <tbody>
              {fundlist.map((item) => (
                <tr key={item.FCODE}>
                  <td>
                    <p className="font-black">{item.SHORTNAME}</p>
                    <span className="text-gray-300 flex items-center">
                      {item.FCODE}
                      <Icon icon="basil:add-outline" />
                    </span>
                  </td>
                  <td className="text-[red] text-center">{item.SYL_1N}%</td>
                  <td className="text-center">{item.SYL_JN}</td>
                  <td className="text-center">{item.SYL_Z}%</td>
                </tr>
              ))}
            </tbody>
          </WrapperTable>
        </div>

        <div className="bg-white w-[100%] h-[70px] fixed bottom-0 left-0">
          <CapsuleTabs
            defaultActiveKey={this.state.defaultValue}
            onChange={(e) => {
              this.setState({ defaultValue: e });
            }}
          >
            {Object.entries(incomeDuration).map(([title, value]) => {
              return <CapsuleTabs.Tab title={title} key={value} />;
            })}
          </CapsuleTabs>
        </div>
      </div>
    );
  }
  componentDidUpdate(_, nextState) {
    if (this.state.defaultValue !== nextState.defaultValue) {
      this.getFund();
    }
  }
  componentDidMount() {
    this.getFund();
  }
  getFund() {
    getFundRank({ SortColumn: this.state.defaultValue })
      .then((res) => {
        console.log(res.data.Datas);
        this.setState({ fundlist: res.data.Datas });
      })
      .catch((err) => console.log(err));
  }
}
export default FundOrder;
