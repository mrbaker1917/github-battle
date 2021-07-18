import React from "react"

export default class Loading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: "Loading"
    }
  }
  componentDidMount () {
    this.interval = window.setInterval(() => {
      this.state.content === 'Loading' + '...'
        ? this.setState({ content: "Loading" })
        : this.setState(({ content }) => ({ content: content + "." }))
    }, 300)
  }
  componentWillMount () {
    window.clearInterval(this.interval)
  }
  
  render() {
    return (
      <p>
        {this.state.content}
      </p>
    )
  }
}