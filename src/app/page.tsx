"use client"

import { useContext } from "react";
import { HomeContext } from "./context/HomeContext";
import { useDropzone } from "react-dropzone";

export default function Home() {
  const {
    upperText,
    lowerText,
    images,
    canvasRef,
    setUpperText,
    setLowerText,
    onDrop
  } = useContext(HomeContext);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg", ".jpeg"]
    }}
  )

  return (
    <main className="w-[60vw] m-auto">
      <h1 className="w-full text-center bg-[#dddddd]">Criador de Memes</h1>
      
      <canvas className="h-[60vh] w-full  bg-[#dddddd] mt-[10px]"
          {...getRootProps()} ref={canvasRef}>
            <div {...getInputProps()}></div>
      </canvas>
{

images[0] &&
      <img src={images[0].src} alt="" />
}

      <label htmlFor="superior">Informe o  texto superior</label>
      <textarea className="border-[1px] border-black w-full"
          id="superior"
          name="superior"
      />
      <label htmlFor="inferior">Informe o  texto inferior</label>
      <textarea className="border-[1px] border-black w-full"
          id="inferior"
          name="inferior"
      />
    </main>
  );
}
