"use client";

import Image from "next/image";
import userImg from "@/common/assets/images/user-img.png";
import Button from "@/common/components/button/button";
import { useEffect, useState } from "react";
import send from "@/common/assets/svgs/send.svg";

export default function Comments() {
  const [post, setPost] = useState("");
  const [getPost, setGetPost] = useState([]);
  const [reply, setReply] = useState("");

    const handleChange = (e) => {
        setPost(e.target.value);
    };

    const handleReplyChange = (e) => {
        setReply(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let existingComments = JSON.parse(localStorage.getItem("comments")) || [];
        const commentData = {
            comment: post,
            id: existingComments.length > 0 ? existingComments.length + 1 : 1,
            replies: [],
        };

        existingComments.push(commentData);
        localStorage.setItem("comments", JSON.stringify(existingComments));
        setPost("");
        e.target.reset();
        GetData();
    };

    const replySubmit = (e, commentId) => {
        e.preventDefault();
        let existingComments = JSON.parse(localStorage.getItem("comments")) || [];

        existingComments = existingComments.map((comment) => {
        if (comment.id === commentId) {
            comment.replies = comment.replies || [];
            const newReply = {
                id: comment.replies.length > 0 ? comment.replies.length + 1 : 1,
                text: reply,
            };
            comment.replies.push(newReply);
        }
        return comment;
        });

        localStorage.setItem("comments", JSON.stringify(existingComments));
        setReply("");
        e.target.reset();
        GetData();
    };

    const GetData = () => {
        let getExistingComments = JSON.parse(localStorage.getItem("comments"));
        setGetPost(getExistingComments || []);
    };

    useEffect(() => {
        GetData();
    }, []);

  return (
    <>
        <div className="bg-secondary rounded-md p-5 flex">
            <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
                <Image src={userImg} alt="" />
                <input
                    type="text"
                    onChange={handleChange}
                    name="commentPost"
                    className="bg-[#1C1F2D] text-white py-[10px] border border-[#a4acb933] outline-none rounded-[4px] px-4 w-full"
                    placeholder="Post a New Comment"
                />
                <Button text="Post" type="submit" isbg="#6122B3" />
            </div>
            </form>
        </div>

        {getPost?.map((item) => (
            <div
                className="bg-secondary rounded-md p-5 flex mt-3 flex-col"
                key={item.id}
            >
                <div className="flex items-center gap-2">
                    <Image src={userImg} alt="" />
                    <div>
                        <p className="text-white">{item.comment}</p>
                        <span className="text-white opacity-[0.6] text-xs">2d ago</span>
                    </div>
                </div>

                {/* Display replies */}
                {item.replies &&
                    item.replies.map((reply, i) => (
                        <div
                            className="flex items-center gap-2 ml-10 mt-2"
                            key={i.toString()}
                        >
                            <Image src={userImg} alt="" />
                            <div>
                                <p className="text-white">{reply.text}</p>
                                <span className="text-white opacity-[0.6] text-xs">
                                    2h ago
                                </span>
                            </div>
                        </div>
                ))}

            {/* reply */}
                <div className="border-t border-[#a4acb933] pt-4 mt-3">
                    <form className="w-full" onSubmit={(e) => replySubmit(e, item.id)}>
                        <div className="flex items-center gap-2">
                            <Image src={userImg} alt="" />
                            <input
                                type="text"
                                name="commentReply"
                                className="bg-[#1C1F2D] text-white py-[10px] border border-[#a4acb933] outline-none rounded-[4px] px-4 w-full"
                                placeholder="Post a reply..."
                                onChange={handleReplyChange}
                            />
                            <Button icon={<Image src={send} alt="" />} type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        ))}
    </>
  );
}
