import React from "react";

interface ImageBoxProps {
  imageRef?: React.RefObject<HTMLInputElement>;
  handleAddImage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showImage: string;
  toggleImageBox: boolean;
}

export const ImageBox = ({
  imageRef,
  handleAddImage,
  showImage,
  toggleImageBox
}: ImageBoxProps) => {

  return (
    <>
      {toggleImageBox && (
        <form className="flx mt-5 rounded-lg bg-twitter/80 py-2 px-4">
          <input
            ref={imageRef}
            className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
            type="text"
            placeholder="Enter Image URL..."
          />
          <button
            type="submit"
            onClick={handleAddImage}
            className="font-bold text-white"
          >
            Add image
          </button>
        </form>
      )}

      {showImage && (
        <img
          className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
          src={showImage}
          alt="tweet-image"
        />
      )}
    </>
  );
};
