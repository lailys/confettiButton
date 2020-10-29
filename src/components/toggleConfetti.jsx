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
          <ConfettiContainer
            key={container}
            density={Math.floor(window.innerWidth / 10)}
          />
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
  position: relative;
  width: 100%;
  height: 100%;
`
const ClapBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 45%;
  left: 45%;
  border: 1px solid #f27c42;
  border-radius: 50%;
  width: 8vmin;
  height: 8vmin;
`
export default ToggleConfetti
