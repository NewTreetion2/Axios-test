// 서버로부터 가져온 json데이터를 GET해 뿌려주는 부분
import { GetData } from "Lib/Apis/GetData";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userData } from "store";

function Main() {
  const data = useRecoilValue(userData);

  console.log(data);
  return <div>{data.title}</div>;
}

export default Main;
