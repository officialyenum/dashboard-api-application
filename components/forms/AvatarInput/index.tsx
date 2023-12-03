import Image from "next/image";
import { useState } from "react";
import image from "../../../public/assets/profile.png";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
  onChange?: (event: any) => void;
}

const convertToString = (image) => {
  return image as string;
}
export const AvatarInput = ({
  className,
  onChange
}: IProps) => {

  const [temp, setTemp] = useState({
    preview: null,
    src: image
  })
  const onClose = () => {
    setTemp(prevState => ({
      ...prevState,
      preview: null,
    }))
    console.log(temp);
  }

  const onCrop = (preview) => {
    setTemp(prevState => ({
      ...prevState,
      preview: preview,
    }))
    console.log(temp);

  }

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  return (
    <div className={twMerge("cursor-pointer", className)}>
      <div className="w-full p-2 rounded-md flex items-center gap-3 py-4">
        <Image
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid gray',
          }}
          src={image}
          width={'100'}
          height={'100'}
          alt="Avatar"
        />
      </div>
    </div>
  );
};
