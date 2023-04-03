import React, { Component, useRef } from 'react'

// useRef写法
function App() {
  // 使用ref实现计数，react不会重新渲染组件
  let countRef = useRef(0);

  function handleClick() {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <button onClick={handleClick}>you click {countRef.current} times</button>
    </div>
  )
}

// class函数写法
class Apps extends Component {

  constructor(props) {
    super(props)
    this.countRef = React.createRef(0);
  }
  handleClick = () => {
    this.countRef.current = this.countRef.current + 1;
  }

  render() {
    return (
      <button onClick={this.handleClick}>you click {this.countRef.current} time</button>
    )
  }
}



export { App, Apps }