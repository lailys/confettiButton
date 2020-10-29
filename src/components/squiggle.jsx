import React, { PureComponent } from "react"
import ReactDOM from "react-dom"
import { RandomNumbergenerator } from "../../helper/helpers"
import { COLORS } from "../../helper/info"

class Squiggle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      size: RandomNumbergenerator(5, 35),
      color: COLORS[RandomNumbergenerator(0, 6)],
    }
    this.style = {
      transform: `rotateZ(${RandomNumbergenerator(0, 40)})`,
      position: " absolute",
      transition: "all 5s ease-out",
      left: RandomNumbergenerator(0, window.innerWidth),
      top: RandomNumbergenerator(-window.innerHeight, 0),
    }
  }
  componentDidMount() {
    const { left } = this.style
    setTimeout(() => {
      const node = ReactDOM.findDOMNode(this.ref)
      node.style.top =
        window.innerHeight + RandomNumbergenerator(0, window.innerHeight) + "px"
      node.style.left =
        left +
        RandomNumbergenerator(-window.innerWidth, window.innerWidth) +
        "px"
    }, 0)
  }
  render() {
    const { color, size } = this.state
    return (
      <svg
        height={size}
        width={size}
        ref={ref => (this.ref = ref)}
        className="particle"
        style={this.style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill={color}
          d="M428.127,0l-12.716,10.062l12.718-10.06c8.785,11.101,19.716,24.917,19.716,51.051 s-10.932,39.951-19.716,51.053c-7.382,9.331-12.716,16.072-12.716,30.927c0,14.854,5.334,21.594,12.716,30.925   c8.784,11.101,19.716,24.917,19.716,51.05c0,26.135-10.931,39.949-19.715,51.051c-7.383,9.331-12.717,16.072-12.717,30.927   c0,14.855,5.332,21.593,12.711,30.919l-25.435,20.124c-8.781-11.097-19.708-24.909-19.708-51.042 c0-26.135,10.931-39.949,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.927c0-14.855-5.335-21.595-12.717-30.926 c-8.784-11.101-19.715-24.916-19.715-51.049s10.931-39.95,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.928 c0-14.855-5.335-21.596-12.718-30.927L428.127,0z"
        />
      </svg>
    )
  }
}

export default Squiggle
