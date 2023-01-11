//axios
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userData } from "store";

export async function GetData() {
  const setUserDetail = useSetRecoilState(userData);
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    setUserDetail(res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
}
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }, []);
