import nock from "nock";
import faker from "faker";
import GetRandomHorseFact from "./";

describe("GetRandomHorseFact", () => {
  it("returns horse fact from API", async () => {
    const hostname = "https://" + faker.internet.domainName();
    const factText = faker.lorem.sentence();

    // console.log(hostname);

    nock(hostname)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get("/api/facts/random")
      .reply(200, { horseFact: factText });

    const subject = new GetRandomHorseFact(hostname);
    const fact = await subject.execute();

    expect(fact.text).toEqual(factText);
  });
});
