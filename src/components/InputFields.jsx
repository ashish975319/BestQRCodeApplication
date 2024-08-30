import React, { useContext } from "react";
import { InputContext } from "./QRCodeWithTigerLibrary";

const InputFields = () => {
  const { InputValue, setInputValue } = useContext(InputContext);
  console.log(InputValue);

  const handleOnCahnge = (e) =>
    setInputValue({ ...InputValue, url: e.target.value });

  return (
    <>
      <div>
        <label className="font-semibold text-md">YOUR URL</label>
        <input
          type="url"
          className="w-full border-2 py-1 px-3 text-gray-700 rounded-md"
          placeholder="https://example.com"
          value={InputValue.url}
          onChange={handleOnCahnge}
        />
      </div>
    </>
  );
};

export default InputFields;
