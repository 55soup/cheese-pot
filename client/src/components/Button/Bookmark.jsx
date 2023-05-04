import styled, { css } from "styled-components";
import { useState } from "react";

// 향후 각 장소를 저장했을 때 사용자 DB에 들어가도록 해야함.
const ToggleBtn = styled.button`
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  cursor: pointer;
  /* background-color: ${(props) =>
    !props.toggle ? "none" : "rgb(51,30,190)"}; */
  background: transparent;
  /* toggle의 상태에 따라 이미지가 바뀜 */
  background-image: ${(props) =>
    !props.toggle
      ? `url(${process.env.PUBLIC_URL}/images/cheeseNonChk.png)`
      : `url(${process.env.PUBLIC_URL}/images/cheeseChk.png)`};
  background-position: center;
  background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Bookmark = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      {/* props로 isOn */}
      <ToggleBtn onClick={toggleHandler} toggle={isOn}></ToggleBtn>
    </>
  );
};

export default Bookmark;
