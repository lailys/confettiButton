import React, { PureComponent } from "react"
import styled from "styled-components"
import ClapSvg from "./clapSvg"

class ConfettiContainer extends PureComponent {
  constructor() {
    super()
    this.renderConfettiShapes = this.renderConfettiShapes.bind(this)
  }
  renderConfettiShapes() {
    const addedShapes = []
    let density = this.props.density
    while (density--) {
      addedShapes.push(<ClapSvg key={density} />)
    }
    return <>{addedShapes}</>
  }
  render() {
    return <Container id="yes">{this.renderConfettiShapes()}</Container>
  }
}
const Container = styled.div`
  background: yellow;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`
export default ConfettiContainer
