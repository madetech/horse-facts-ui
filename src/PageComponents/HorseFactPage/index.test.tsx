import React from "react"
import { shallow } from "enzyme";
import HorseFactPage from "./";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const sleep = () => new Promise(accept => setTimeout(accept, 1))

describe("HorseFactPage", () => {
  it("displays a fact with content", async () => {
    const getRandomHorseFactStub = {
      async execute(){
        return {text: "Horses are cool."}
      }
    }

    const component = shallow(<HorseFactPage getRandomHorseFact={getRandomHorseFactStub} />);

    await sleep()

    expect(component.find("Fact").prop("content")).toBe("Horses are cool.")
  });

  it("displays random horse fact", async () => {
    const getRandomHorseFactStub = {
      async execute(){
        return {text: "Horses hate water."}
      }
    }

    const component = shallow(<HorseFactPage getRandomHorseFact={getRandomHorseFactStub}/>);

    await sleep()

    expect(component.find("Fact").prop("content")).toBe("Horses hate water.")
  })
});
