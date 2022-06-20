import React from "react";
import AuthService from "../services/auth.service";
import NewEntry from "./NewEntry";
import MyEntries from "./MyEntries";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
    <div>
    <NewEntry />
    </div>
    <div>
      <h2>My Travelogues</h2>
     <MyEntries />
    </div>
    </>
  );
};
export default Profile;