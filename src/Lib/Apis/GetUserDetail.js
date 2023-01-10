import { GetData } from "./GetData";

export async function GetUserDetail({ id }) {
  try {
    const res = await GetData();
    return res.data[{ id }];
  } catch (err) {
    alert("잘못된 접근입니다");
    throw err;
  }
}
