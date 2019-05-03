import axios from "axios";

interface IGetRandomHorseFactResponse {
 text: string;
}

export default class GetRandomHorseFact {
  public constructor(private hostname: string) {}

  public async execute(): Promise<IGetRandomHorseFactResponse> {
    const response = await axios.get(`${this.hostname}/api/facts/random`);

    return { text: response.data.horseFact };
  }
}
