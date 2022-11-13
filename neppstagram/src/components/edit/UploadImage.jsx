import { useState } from "react";
import styled, { css } from "styled-components";

function UploadImage({ onChangeImages }) {
  const [previewUrl, setPreviewUrl] = useState("");
  const handleChange = (e) => {
    if (e.target.files.length > 5) {
      alert("사진은 5개까지만 등록 가능합니다.");
      return;
    }
    const reader = new FileReader();

    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      setPreviewUrl(reader.result);
    };

    onChangeImages(e.target.files);
  };
  return (
    <div>
      <PreviewBox htmlFor="preview" previewUrl={previewUrl} />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleChange}
        id="preview"
        style={{ display: "none" }}
      />
    </div>
  );
}

const PreviewBox = styled.label`
  display: block;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  ${({ previewUrl }) => css`
    background-image: url(${previewUrl});
    background-size: cover;
    background-position: center;
  `}
`;

export default UploadImage;
