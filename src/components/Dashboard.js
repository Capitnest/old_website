import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navbarr from "../components/Navbar/Navbarr";
import { auth, database } from "../firebase";
import styled from "styled-components";
import { Alert, Container, Button } from "react-bootstrap";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    if (auth.currentUser !== null) {
      database
        .ref("users/" + auth.currentUser.uid + "/username")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setUsername(data);
        });
    }
  }, []);

  return (
    <>
      <Navbarr />
     
        <div style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
        
           <Card>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <p>
                <strong>Wallet Id:</strong> {currentUser.uid}
              </p>
              <p>
                <strong>Username:</strong> {username}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.email}
              </p>
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            
              <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>

          </Card>
          
        </div>
     
  
    </>
  );
}

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 20px 20px 20px;
  border-color: gray;
  background-color: rgba(26,26,94);
  color: white;
  margin-top: 5%;
  margin-right: 3%;
  margin-left: 3%;
  width: 30%;
`;
