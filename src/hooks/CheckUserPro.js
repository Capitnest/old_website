import React, { useState } from "react";
import { db } from "../utils/init-firebase";
import { ref, onValue, get, child } from "firebase/database";
import { useAuth } from "../contexts/AuthContext";

export default function CheckUserPro() {
  const { currentUser } = useAuth();
  const [plan, setPlan] = useState("");
  const [check, setCheck] = useState(true);

  const dbRef = ref(db);

  get(child(dbRef, `users/${currentUser.uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setPlan(snapshot.val().plan);

        console.log(snapshot.val().plan);
        console.log("plan " + plan);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  if (plan === "pro") {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
