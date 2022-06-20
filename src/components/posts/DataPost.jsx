import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  pullLike,
  pushLike,
} from "../../redux/slice/posts/postSlice";
import { AiFillHeart, AiOutlineFileText, AiOutlineHeart } from "react-icons/ai";

export const DataPost = ({ post }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const onClickDelete = () => {
    dispatch(deletePost(post._id));
  };
  const onClickPushLike = () => {
    dispatch(pushLike({ paramsId: post._id, userId: user._id }));
    setIsLike(user._id);
  };
  const onClickPullLike = () => {
    dispatch(pullLike({ paramsId: post._id, userId: user._id }));
    setIsLike("");
  };
  const [isLike, setIsLike] = useState(post.likes);
  return (
    <>
      <div className="flex items-center justify-center px-5 py-5 mt-10">
        <div className="w-full mx-auto max-w-lg rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
          <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
            <Link to={`/profile/${post.user._id}`}>
              <img
                alt=""
                src={post.user.picture}
                className="object-cover rounded-full h-14 w-14 hover:opacity-75 cursor-pointer "
              />
            </Link>
            <div className="font-bold -mt-12 flex m-16">
              {post.user.username}
            </div>
            <div className="-mt-16 flex m-16">
              {new Date(post.createdAt).toLocaleString({
                timeZone: "Asia/Tokyo",
              })}
            </div>
            {user?._id === post.user._id ? (
              <div className="flex justify-end -mb-14 item relative bottom-28">
                <button
                  onClick={onClickDelete}
                  className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >
                  削除
                </button>
              </div>
            ) : null}
          </div>
          <div className="w-full mb-10">
            <p className=" -order-1 text-base text-black-600 -mt-14 m-10">
              {post.desc}
            </p>
          </div>
          <div className="w-full">
            {post.img ? (
              <div className="flex justify-center">
                <img className="h-60 " src={post.img} alt="" />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="flex justify-around  items-center">
            <Link to={`/findPost/${post._id}`}>
              <div className="flex">
                <AiOutlineFileText size={25} />
                <div className="ml-1">{post?.comments?.length}</div>
              </div>
            </Link>

            {post.likes.includes(user?._id) ? (
              <div className="flex">
                <button onClick={onClickPullLike}>
                  <AiFillHeart size={25} />
                </button>
                <div className="ml-1">{post?.likes?.length}</div>
              </div>
            ) : (
              <div className="flex">
                <button onClick={onClickPushLike}>
                  <AiOutlineHeart size={25} />
                </button>
                <div className="ml-1">{post?.likes?.length}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
