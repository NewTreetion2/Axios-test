import { useRecoilState, useRecoilValue } from "recoil";
import { modalOpen } from "store";
import { Button } from "component/Button";

import "css/Modal.css";
import { userData } from "store";
import { focusUserId } from "store";
import { Title } from "component/Title";

function Modal() {
  const userDetail = [...useRecoilValue(userData)];
  const [isOpen, setIsOpen] = useRecoilState(modalOpen);
  const focusId = useRecoilValue(focusUserId);
  const modalClose = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return (
      <>
        <div className="modalBackground" onClick={modalClose}></div>
        <div className="modal">
          <Title title="UserId" content={userDetail[focusId].userId} />
          <Title title="ID" content={userDetail[focusId].id - 1} />
          <Title title="제목" content={userDetail[focusId].title} />
          <Title title="내용" content={userDetail[focusId].body} />
          <div className="closeButton">
            <Button onClickHandler={modalClose} title="X" />
          </div>
        </div>
      </>
    );
  } else {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }
}

export default Modal;
