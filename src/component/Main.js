import { GetData } from "Lib/Apis/GetData";

import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userData } from "store";

import { Button } from "component/Button";
import { focusUserId, modalOpen } from "store/atom";

import "css/Main.css";

function Main() {
  const [userDetail, setUserDetail] = useRecoilState(userData);
  const userInfo = [...userDetail];
  const [isOpen, setIsOpen] = useRecoilState(modalOpen);
  const setFocusId = useSetRecoilState(focusUserId);

  // 유저정보를 get해서 전역state userData에 넣어주는 함수
  const getUserDetail = async () => {
    const res = await GetData();
    setUserDetail(res);
  };

  // useEffect를 통해 최초 렌더링 시 1회만 유저정보를 get해온다
  useEffect(() => {
    getUserDetail();
  }, []);

  const modalStateChanger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {userInfo.map((item) => (
        <div key={item.id}>
          <Button
            onClickHandler={() => {
              modalStateChanger();
              setFocusId(item.id);
            }}
            title={item.id}
          ></Button>
        </div>
      ))}
    </div>
  );
}

export default Main;
