import React from "react";
import { Link, useParams } from "react-router-dom";
import { pullFollow } from "../../redux/slice/users/usersSlice";
import { useDispatch } from "react-redux";

export const FollowingsList = ({ user }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const onClickUnfollow = () => {
    dispatch(pullFollow({ userId: user._id, paramsId: params.id }));
  };
  return (
    <>
      <div className="flex items-center justify-center px-5 py-5 mt-10">
        <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
          <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
            <Link to={`/profile/${user.user._id}`}>
              <img
                alt=""
                src={user.user.picture}
                className="object-cover rounded-full h-14 w-14 "
              />
            </Link>
            <div className="font-bold -mt-12 flex m-16">
              {user.user.username}
            </div>
            <div className="-mt-16 flex m-16">{user.user.profile}</div>
          </div>
          <div className="w-full mb-10">
            <p className=" -order-1 text-base text-black-600 -mt-12 m-24">
              {user.user.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
