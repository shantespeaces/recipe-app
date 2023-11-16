import { useState, ChangeEvent } from "react";

interface ImageUploadProps {
  onImageUpload: (image: File | null) => void;
}

function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0] || null; // Use null if file is undefined
    setSelectedImage(file);
    onImageUpload(file);
  };

  return (
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
    </div>
  );
}

export default ImageUpload;
