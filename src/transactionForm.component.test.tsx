import { render } from "@testing-library/react";
import TransactionForm from "./transactionForm.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByTestId } = render(<TransactionForm name="Testapp" />);
    const inputDescription = getByTestId("description");
    const inputAmount = getByTestId("amount");
    const inputSubmit = getByTestId("submit");
    expect(inputDescription).toBeInTheDocument();
    expect(inputAmount).toBeInTheDocument();
    expect(inputSubmit).toBeInTheDocument();
  });
});
