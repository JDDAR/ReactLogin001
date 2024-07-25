import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const InputPassword = () => {
  const [type, setType] = useState();
  const [show, setShow] = useState(false);

  const switchVisibility = (visibility) => {
    setShow(visibility);
    setType(visibility ? "text" : "password");
  };

  return (
    <>
      <div className="inputPassword">
        <input type={type} />
        {!show && (
          <IoMdEye
            className="passwordIcon"
            onClick={() => switchVisibility(true)}
          />
        )}
        {show && (
          <IoIosEyeOff
            className="passwordIcon"
            onClick={() => switchVisibility(false)}
          />
        )}
      </div>
    </>
  );
};
export default InputPassword;
