import React, { PureComponent } from "react"
import styled from "styled-components"
import Square from "./square"
import Circle from "./circle"
import Triangle from "./triangle"
import Squiggle from "./squiggle"
import { RandomNumbergenerator } from "../../helper/helpers"

class ConfettiContainer extends PureComponent {
  constructor() {
    super()
    this.renderConfettiShapes = this.renderConfettiShapes.bind(this)
  }
  renderConfettiShapes() {
    const addedShapes = []
    const shapes = [Square, Circle, Triangle, Squiggle]
    let density = this.props.density
    while (density--) {
      const Shape = shapes[RandomNumbergenerator(0, 4)]
      addedShapes.push(<Shape key={density} />)
    }
    return <>{addedShapes}</>
  }
  render() {
    return <Container id="yes">{this.renderConfettiShapes()}</Container>
  }
}
const Container = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export default ConfettiContainer
