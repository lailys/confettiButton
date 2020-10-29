import React, { PureComponent } from "react"
import ReactDOM from "react-dom"
import { RandomNumbergenerator } from "../../helper/helpers"
import { COLORS } from "../../helper/info"

class Circle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      size: RandomNumbergenerator(1, 15),
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
    const { size, color } = this.state
    return (
      <svg
        height={size}
        width={size}
        ref={ref => (this.ref = ref)}
        style={this.style}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          strokeWidth="0"
          fill={color}
        />
      </svg>
    )
  }
}

export default Circle
