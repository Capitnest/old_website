import { db } from "../utils/init-firebase";
import { ref, set } from "firebase/database";
import { useAuth } from "../contexts/AuthContext";

// export default function signupFirebase(name) {
//   set(ref(db, "users/" + useAuth().uid)),
//     {
//       username: name,
//       balance: 0,
//     };
// }
