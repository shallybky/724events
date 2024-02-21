import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";

describe("When Form is created", () => {
  it("a list of input is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      // Ajoutez une attente pour le texte "En cours"
      await waitFor(() => {
        expect(screen.getByText("En cours")).toBeInTheDocument();
      });

      // Ajoutez une attente pour le texte "Envoyer"
      await waitFor(() => {
        expect(screen.getByText("Envoyer")).toBeInTheDocument();
      });

      expect(onSuccess).toHaveBeenCalled();
  });
});
});
