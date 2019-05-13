import React from "react"
import IGetRandomHorseFact from "../../Boundary/RemoteUseCaseInterfaces/IGetRandomHorseFact";
import Fact from "../../Components/Fact"

class HorseFactPage extends React.Component<IHorseFactPageProps> {
  state = {
    factContent: ""
  };

  async componentDidMount() {
    const fact = await this.props.getRandomHorseFact.execute();

    this.setState({ factContent: fact.text });
  }

  render() {
    return <Fact content={this.state.factContent} />
  }
}

interface IHorseFactPageProps {
  getRandomHorseFact: IGetRandomHorseFact
}

export default HorseFactPage
