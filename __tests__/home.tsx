import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmailSection from "@/app/contact/page";
import "@testing-library/jest-dom";

describe("EmailSection component", () => {
  it("renders social buttons correctly", () => {
    const { getByText } = render(<EmailSection />);

    const githubButton = getByText("Github");
    const linkedinButton = getByText("linkedin");
    const emailButton = getByText("Email");

    expect(githubButton).toBeInTheDocument();
    expect(linkedinButton).toBeInTheDocument();
    expect(emailButton).toBeInTheDocument();
  });
});
