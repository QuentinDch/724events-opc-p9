import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import PeopleCard from "../../components/PeopleCard";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  });
  it("a list of people is displayed", () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    const nameElement = screen.getByText(/test name/);
    const positionElement = screen.getByText(/test position/);
    const imageElement = screen.getByTestId("card-image-testid");
    expect(nameElement).toBeInTheDocument();
    expect(positionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });
  it("a footer is displayed", () => {
    // to implement
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
  });
});
