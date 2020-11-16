import React, { PureComponent } from "react"
import styled from "styled-components"
import ConfettiContainer from "./confettiContainer"
import Clap from "./clap"

class ToggleConfetti extends PureComponent {
  constructor() {
    super()
    this.state = {
      confetti: 1,
      confettiContainer: [],
    }
    this.clearToggleConfetti = this.clearToggleConfetti.bind(this)
    this.toggleConfettiHandler = this.toggleConfettiHandler.bind(this)
  }
  clearToggleConfetti(confetti) {
    this.setState({
      confettiContainer: this.state.confettiContainer.filter(
        shape => shape !== confetti
      ),
    })
  }
  toggleConfettiHandler() {
    try {
      const confetti = this.state.confetti
      this.setState(
        prevState => ({
          confettiContainer: [...this.state.confettiContainer, confetti],
          confetti: prevState.confetti + 1,
        }),
        () => {
          console.log(this.state.confetti, "----")
        }
      )
      setTimeout(() => {
        this.clearToggleConfetti(confetti)
      }, 5000)
    } catch (error) {
      console.log(
        error,
        "This is the error from toggleConfettiHandler clicking in ToggleConfetti component"
      )
    }
  }
  render() {
    const { confettiContainer } = this.state
    return (
      <Container>
        {confettiContainer.map(container => (
          <ConfettiContainer key={container} density={150} />
        ))}
        <ClapBtn onClick={e => this.toggleConfettiHandler(e)}>
          <Clap />
        </ClapBtn>
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  top: calc(50vh - 250px);
  left: calc(50vw - 300px);
  border: 1px solid #c7c2c2af;
  border-radius: 20px;
  width: 600px;
  height: 500px;
`
const ClapBtn = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50% 50% 0 50%;
  width: 60px;
  height: 60px;
`
export default ToggleConfetti
