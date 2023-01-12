//axios
import axios from "axios";

export async function GetData() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
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
