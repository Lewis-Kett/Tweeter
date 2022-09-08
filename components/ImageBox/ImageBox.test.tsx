import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageBox } from "./ImageBox";

const addImage = jest.fn((e) => e.preventDefault());
const exampleURl = "www.somepicture.com/pic";

describe("ImageBox", () => {
  it("Shows the image box when toggled is true", () => {
    render(
      <ImageBox
        handleAddImage={addImage}
        showImage={exampleURl}
        toggleImageBox={true}
      />
    );

    const imageUrlInput = screen.getByPlaceholderText("Enter Image URL...");

    expect(imageUrlInput).toBeInTheDocument();
  });

  it("Shows the image preview before posting tweet", () => {
    render(
      <ImageBox
        handleAddImage={addImage}
        showImage={exampleURl}
        toggleImageBox={true}
      />
    );

    const imagePreview = screen.getByAltText("tweet-image");

    expect(imagePreview).toBeInTheDocument();
  });

  it("Should fire the event handler when button is clicked", async () => {
    render(
      <ImageBox
        handleAddImage={addImage}
        showImage={exampleURl}
        toggleImageBox={true}
      />
    );

    const addImageButton = screen.getByText("Add image");

    await userEvent.click(addImageButton);

    expect(addImage).toBeCalled();
  });
});
