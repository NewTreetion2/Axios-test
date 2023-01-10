//axios
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userData } from "store";

export async function GetData() {
  try {
    const setUserData = useSetRecoilState(userData);
    setUserData(await axios.get("https://jsonplaceholder.typicode.com/posts"));
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
