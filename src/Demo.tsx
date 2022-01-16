import React from "react";

interface DemoProps {
  width: number;
  height: number;
}

interface DemoStates {
  area: number;
}

class Demo extends React.Component<DemoProps, DemoStates> {
  constructor(props: DemoProps) {
    console.log("生命周期  constructor");
    super(props);
    this.state = {
      area: 0,
    };
  }

  // static getDerivedStateFromProps(props: DemoProps, state: DemoStates) {
  //   console.log(
  //     "生命周期  static getDerivedStateFromProps",
  //     {
  //       width: props.width,
  //       height: props.height,
  //     },
  //     state
  //   );
  //   if (props.width && props.height && state.area === 0) {
  //     return {
  //       area: props.width * props.height,
  //     };
  //   }
  //   return null;
  // }

  componentDidMount() {
    console.log("生命周期  componentDidMount");
    setTimeout(() => {
      // 组件内部调用 this.setState 不会执行 componentWillReceiveProps
      this.setState({
        area: 800,
      });
    }, 6000);
  }

  componentWillReceiveProps(nextProps: DemoProps) {
    console.log("生命周期  componentWillReceiveProps");
    if (nextProps.width && nextProps.height) {
      this.setState({
        area: nextProps.width * nextProps.height,
      });
    }
  }

  render() {
    console.log("生命周期  render this.state.area  ", this.state.area);
    return <div>例子</div>;
  }
}

export default Demo;
