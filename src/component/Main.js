// 서버로부터 가져온 json데이터를 GET해 뿌려주는 부분
import axios from "axios";
import { useEffect, useState } from "react";

function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.id}>
            userId: {data.userId}
            <tr />
            title: {data.title}
            <tr />
            body: {data.body}
          </div>
        );
      })}
    </div>
  );
}

export default Main;
