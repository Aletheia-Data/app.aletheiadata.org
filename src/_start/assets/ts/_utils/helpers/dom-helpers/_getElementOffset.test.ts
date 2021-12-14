import { screen } from "@testing-library/dom";
import { withHTMLDocument } from "../test-helpers/_setupDocument";
import { getElementOffset } from "./_getElementOffset";

describe("getElementOffset", () => {
  const div: HTMLElement = document.createElement("div");
  div.innerHTML = "<div>TestTest</div>";

  beforeEach(() => {
    withHTMLDocument(div);
  });

  it("should get top:0 and left:0", () => {
    const internalDiv = screen.getByText(/testtest/i);
    expect(JSON.stringify(getElementOffset(internalDiv))).toEqual(
      JSON.stringify({ top: 0, left: 0 })
    );
  });
});
