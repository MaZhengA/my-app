import React from "react";

function CloneDemo({dom=<div/>,...props}){
  return React.cloneElement(dom,{...props})
}

// 以 element 元素为样板克隆并返回新的 React 元素
// 返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。
// 新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。
function ContainerBox(){
  return <CloneDemo dom={<div></div>}><h1>这是在父组件添加的元素</h1></CloneDemo>
}
export default ContainerBox;