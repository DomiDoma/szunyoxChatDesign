import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState, useRef, useEffect } from "react";

import ChatPartnerInfo from "@components/Chat/ChatPartnerInfo";
import Message from "@components/Chat/Message";

/* temp data until we have db */
import { msgData, UserData } from "lib/temp/messageData";
import { EVENTS } from "@lib/constants";

import { io } from "socket.io-client";

interface iMsgData {
  content: string;
  isSentByUser: boolean;
  id: number;
}


const socket = io("http://localhost:9898");

//@FIXME: fix design on ChatPartnerInfo, not full width on short bio
//@TODO: basic page interactions funcitonality,implement next/head for SEO
//@TODO: lib/types & import interfaces and types
const Dater: NextPage = () => {
  const { push, asPath } = useRouter();
  const textInputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<iMsgData[]>(msgData as iMsgData[]);
  const [roomId, setRoomId] = useState<string>(asPath.split("/")[2]);

  useEffect(() => {
    joinRoom();
  }, []);

  socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ id, content }) => {
    const newMessage = { content, id, isSentByUser: false };
    setMessages([newMessage, ...messages]);
  });

  socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
    setRoomId(value);
  });

  const handleMessageSend = () => {
    if (textInputRef.current?.value === "") return;
    const newMessage = {
      content: textInputRef.current?.value!,
      isSentByUser: true,
      id: Math.random() * 1235123 - 123,
      roomId: roomId,
    };
    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, newMessage);
    setMessages([newMessage, ...messages]);
    if (textInputRef.current) textInputRef.current.value = "";
  };
  const handleEnter = ({ charCode }: { charCode: number }) => {
    if (charCode === 13) return handleMessageSend();
  };
  const joinRoom = () => {
    //place holder until we figure out how to handle room names
    const roomName = "room1";
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, { roomName });
  };
  return (
    <>
      <header>
        <button title="Back" className="header-btn" onClick={() => push("/")}>
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/back.png"
          />
        </button>
        Chats
        <button title="More" className="header-btn">
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/more.png"
          />
        </button>
      </header>
      <main>
        <section className="candidate">
          <ChatPartnerInfo {...UserData} />

          <div className="chat">
            <div className="chat-area">
              {messages.map((x) => (
                <Message {...x} key={x.id} />
              ))}
            </div>
            <div className="message-input">
              <div className="input-elements">
                <input
                  placeholder="Say something nice!"
                  type="text"
                  ref={textInputRef}
                  onKeyPress={(e) => handleEnter(e)}
                />
                <a className="send-btn" onClick={handleMessageSend}>
                  <Image
                    alt=""
                    src="https://img.icons8.com/material-rounded/96/000000/send-letter.png"
                    width={96}
                    height={96}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="reaction">
            <button id="dislike">Not my type</button>
            <button id="save">Save chat</button>
            <button id="like">Interesting</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dater;
