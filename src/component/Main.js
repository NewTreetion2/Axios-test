import { GetData } from "Lib/Apis/GetData";
import { useEffect } from "react";

import { useRecoilValue } from "recoil";
import { userData } from "store";

function Main() {
  useEffect(() => {
    GetData();
  }, []);
  const userDetail = useRecoilValue(userData);

  console.log(userDetail);
  return <div></div>;
}

export default Main;
