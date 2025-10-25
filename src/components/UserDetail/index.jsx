import React from "react";
import {Typography} from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";
import {useParams, Link} from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const {userId} = useParams();
    const user = models.userModel(userId);
    return (
        <>
          <Typography variant="body1">
            This should be the UserDetail view of the PhotoShare app. Since it is
            invoked from React Router the params from the route will be in property match.
            So this should show details of user: {userId}.
            You can fetch the model for the user from models.userModel.
          </Typography>
            <h2>{user.first_name} {user.last_name}</h2>
            <p>Location: {user.location}</p>
            <p>Description: {user.description}</p>
            <p>Occupation: {user.occupation}</p>
            <p><Link to={`/photos/${user._id}`}>View Photos</Link></p>
        </>
    );
}

export default UserDetail;
