"use client"

import Exclamation from "@/common/components/excalmation";
import { useState } from "react";
import { INDENTIFY_LIST } from "../treatment-stepper.constant";
import Card from "@/common/components/steper-card";

const IndentifyProof = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState({});
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      const updatedFiles = [...selectedFiles, ...files];
      setSelectedFiles(updatedFiles);
      files.forEach((file) => uploadFile(file));
    };
  
    const uploadFile = (file) => {
      const formData = new FormData();
      formData.append("file", file);
  
      // Simulate upload progress for each file
      const simulateUpload = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = { ...prevProgress };
          newProgress[file.name] = (newProgress[file.name] || 0) + 10;
          if (newProgress[file.name] >= 100) {
            clearInterval(simulateUpload);
            newProgress[file.name] = 100;
          }
          return newProgress;
        });
      }, 200);
    };
  
    const handleDelete = (fileName) => {
      setSelectedFiles(selectedFiles.filter((file) => file.name !== fileName));
      setUploadProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        delete newProgress[fileName];
        return newProgress;
      });
    };
  
    const renderPreview = (file) => {
      const url = URL.createObjectURL(file);
      return <img src={url} alt={file.name} className="w-full" />;
    };
  
  
    return (
      <div>
        <h6 className="text-white text-xl mb-2 font-semibold">
          Driving License Detials
        </h6>
        <p className="text-white text-sm mb-5">
          Please provide the exact name, date of birth and address as it appears
          on your license.
        </p>
  
        <div className="flex gap-5">
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8]">
              Your Privacy Matters
            </p>
            <Card>
              <div className="flex gap-4 items-center mb-5">
                <div className="block">
                  <Exclamation />
                </div>
                <h6 className="text-white font-semibold text-base">
                  The TGA requires us to sight your license and then delete it to
                  ensure valid proof of identity.
                </h6>
              </div>
  
              <ul className="identi__list ml-[21px]">
                {INDENTIFY_LIST.map((item, i) => {
                  return (
                    <li
                      className="text-white opacity-[0.8] text-sm font-normal mb-3 leading-[1.7] list-disc"
                      key={i.toString()}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8]">Upload File</p>
  
            <div className="bg-[#1C1F2D] p-5 rounded mt-3 border-[1.5px] border-dashed border-[#A4ACB933]">
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  className="absolute w-full h-full cursor-pointer opacity-0"
                />
                <p className="text-white text-center h-[150px] flex justify-center items-center">
                  Click or Drag & Drop the File to Upload
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-white opacity-[0.8]">Max size: 50 mb</p>
              <p className="text-white opacity-[0.8]">Format: .png, .jpg, .pdf</p>
            </div>
  
            {selectedFiles.length > 0 &&
              selectedFiles.map((file, index) => (
                <div key={index} className="mt-5 bg-[#242735] py-3 px-3 rounded-md">
                  <div className="flex justify-between items-center ">
                   <div className="flex gap-3 items-center">
                    <span className="w-[42px]">{renderPreview(file)}</span>
                    <span className="text-white">{file.name}</span>
                   </div>
                    <div className="flex gap-2">
                      <span className="text-white">{(file.size / 1024 / 1024).toFixed(1)} mb</span>
                      <button onClick={() => handleDelete(file.name)}>
                        <RiDeleteBin5Line className="text-[#FF788A]" />
                      </button>
                    </div>
                  </div>
                  {/* <div className="bg-[#333] rounded-md h-2 mt-[10px]">
                    <div
                      className={`h-full rounded-md bg-[#6a5acd]`}
                      style={{
                        width: `${uploadProgress[file.name] || 0}%`,
                      }}
                    ></div>
                  </div> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
};

export default IndentifyProof;
  