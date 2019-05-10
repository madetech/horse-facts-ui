import axios from "axios";
import IGetRandomHorseFact from "../../Boundary/RemoteUseCaseInterfaces/IGetRandomHorseFact";

export default class GetRandomHorseFact implements IGetRandomHorseFact {
  public constructor(private hostname: string) {}

  public async execute() {
    const response = await axios.get(`${this.hostname}/api/facts/random`);

    return { text: response.data.horseFact };
  }
}
