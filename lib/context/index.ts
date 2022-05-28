import { createContext } from "react";
import { SOCKET_URL } from "@lib/constants";

export const isBrowser = typeof window !== "undefined";
export const socket = isBrowser ? new WebSocket(SOCKET_URL) : null;