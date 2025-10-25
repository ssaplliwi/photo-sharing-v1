import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import { Typography } from "@mui/material";


function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <div>
      <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {userId}. You can fetch the model for the user
        from models.photoOfUserModel(userId):
      </Typography>
      {photos.length === 0 && <p>No photos available for this user.</p>}
      {photos.map((photo) => (
        <div key={photo._id}>
          <img src={require(`../../images/${photo.file_name}`)} />
          <p>Date: {new Date(photo.date_time).toLocaleString()}</p>
          {photo.comments?.map((comment) => (
            <p key={comment._id}>
              <Link to={`/users/${comment.user._id}`}>
                {comment.user.first_name} {comment.user.last_name}
              </Link>
              ({new Date(comment.date_time).toLocaleString()}): {comment.comment}
            </p>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserPhotos;
