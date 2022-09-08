import { PhotographIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { ImageBox } from "./ImageBox";

export default {
  title: "Components/ImageBox",
  component: ImageBox,
};

export const Primary = () => {
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const imageInputRef = useRef<HTMLInputElement>(null);


  const addImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!imageInputRef.current?.value) return;

    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageBoxOpen(false);
  }

  return (
    <>
      <p>
        Example Url
        "https://twilert.com/wp-content/uploads/2020/03/Twitter-Image-Search.jpg"
      </p>
      <PhotographIcon
        className="tweetBox-icon h-5 w-5"
        onClick={() => setImageBoxOpen(!imageBoxOpen)}
      />

      <ImageBox
        handleAddImage={addImage}
        showImage={image}
        toggleImageBox={imageBoxOpen}
        imageRef={imageInputRef}
      />
    </>
  );
};
