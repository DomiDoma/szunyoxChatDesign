import { createContext } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "@lib/constants";

//export const socket = io(SOCKET_URL);
//export const socket = new WebSocket(SOCKET_URL);
export const SocketContext = createContext(false);

export const isBrowser = typeof window !== "undefined";
export const socket = isBrowser ? new WebSocket(SOCKET_URL) : null;