import React, { PureComponent } from "react"
import ReactDOM from "react-dom"
import { RandomNumbergenerator } from "../../helper/helpers"
import { COLORS } from "../../helper/info"

class Square extends PureComponent {
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
        width={size}
        height={size}
        ref={ref => (this.ref = ref)}
        style={this.style}
      >
        <rect x="0" y="0" width={size} height={size} fill={color} />
      </svg>
    )
  }
}

export default Square
