import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessages: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  subscribeToMessage: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = useAuthStore.getState().socket;
    const { authUser } = useAuthStore.getState();

    // Remove any existing listeners first to prevent duplicates
    socket.off("newMessage");

    socket.on("newMessage", (newMessage) => {
      const currentMessages = get().messages;
      const currentSelectedUser = get().selectedUser; 
      
      // Only add the message if:
      // 1. It's not from the current user (to avoid duplicates from local state)
      // 2. It's for the currently selected conversation
      // 3. It's not already in the messages array (prevent duplicates)
      if (newMessage.senderId !== authUser._id && 
          currentSelectedUser && 
          (newMessage.senderId === currentSelectedUser._id || newMessage.receiverId === currentSelectedUser._id) &&
          !currentMessages.some(msg => msg._id === newMessage._id)) {
        set({
          messages: [...currentMessages, newMessage],
        });
      }
    });
  },

  unsubscribeFromMessage: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
