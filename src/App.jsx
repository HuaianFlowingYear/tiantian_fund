import React from "react";
// import FundOrder from "./views/fund.order";
import SerchM from "@/views/Serch";
// import LifeTiems from "./views/LifeTiems";

class App extends React.Component {
  state = { index: 123, total: 234 };
  render() {
    return (
      <>
        {/* <LifeTiems index={this.state.index}>
          <p>123</p>
          <span>wolcom to 东北</span>
        </LifeTiems>
        <button onClick={() => this.setState({ index: this.state.index + 1 })}>
          点击更改{this.state.index}
        </button>
        <button
          type="warning"
          onClick={() => this.setState({ total: this.state.total + 1 })}
        >
          修改app的{this.state.total}
        </button> */}
        {/* <FundOrder /> */}
        <SerchM />
      </>
    );
  }
}
export default App;
