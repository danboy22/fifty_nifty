import React from "react";
import AuthService from "../services/auth.service";
import NewEntry from "./NewEntry";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div>
    <NewEntry />
    </div>
  );
};
export default Profile;