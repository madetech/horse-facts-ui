interface IGetRandomHorseFactResponse {
  text: string;
}

export default interface IGetRandomHorseFact {
  execute: () => Promise<IGetRandomHorseFactResponse>
}
