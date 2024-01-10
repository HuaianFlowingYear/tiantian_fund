// 轻质重新执行
import { reRenderUI } from "..";
// 保存数据
let data = {
  value: undefined,
};
// 数据初始化
function init(value) {
  data.value = value;
}

function useData(initValue) {
  // 避免数据重复初始化
  if (!data.value) {
    init(initValue);
  }
  let update = function (value) {
    data.value = value;
    reRenderUI();
  };
  return [data, update];
}
export default useData;
