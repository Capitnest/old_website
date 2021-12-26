// this function will get the current 
// price of the coin from the database

import { auth, database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const []

if (auth.currentUser !== null) {
      database
        .ref("users/" + auth.currentUser.uid + "/balance")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setBalance(data);
        });
}