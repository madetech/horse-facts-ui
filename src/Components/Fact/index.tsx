import React from "react"
import styles from "./index.module.css"

class Fact extends React.Component<IFactProps> {
  render(){
    return (
      <div id="fact" className={styles.fact}>
        {this.props.content}
      </div>
    )
  }
}

interface IFactProps {
  content: string
}

export default Fact
