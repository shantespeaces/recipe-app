import React, { useState, ChangeEvent } from "react";

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          <h3>Upload your Image</h3>
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleImageUpload}
        />
        {selectedImage && (
          <div className="mt-3">
            <strong>Selected Image:</strong> {selectedImage.name}
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default ImageUpload;
