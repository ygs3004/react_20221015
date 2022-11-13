import { useState } from "react";
import { postEdit } from "../../api";
import UploadImage from "./UploadImage";

function Edit() {
  const [inputs, setInputs] = useState({
    body: "",
    images: {},
  });

  const onChangeImages = (files) => {
    setInputs({
      ...inputs,
      images: files,
    });
  };

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      body: e.target.value,
    });
  };

  const handleSubmit = () => {
    const form = new FormData();

    console.log(inputs.images);

    for (let i = 0; i < inputs.images.length; i++) {
      form.append("images", inputs.images[i]);
    }
    form.append("body", inputs.body);

    postEdit(form).then((res) => console.log(res));
  };

  return (
    <div>
      <UploadImage onChangeImages={onChangeImages} />
      <input type="text" onChange={handleInput} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default Edit;
