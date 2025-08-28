import { Image, Send, X } from "lucide-react";
import { useRef, useState } from "react";
import { useChatStore } from "../../store/useChatStore";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessages } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessages({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("failed to send message", error);
    }
  };

  return (
    <div className="bg-bg-light rounded-md mx-1 p-2 my-1 w-full transition-all duration-300">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2 transition-all duration-300  p-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border-1 border-border"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute -top-1.5 -right-2.5 w-5 h-5 rounded-full bg-border flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-200 text-text"
            >
              <X className="size-3"></X>
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-3 transition-all duration-300">
        <>
          <input
            type="text"
            value={text}
            className="flex-1 text-text-muted rounded-md bg-bg-dark focus:outline-none transition-all duration-300 text-sm p-3"
            placeholder="Type a message"
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            type="button"
            className={`hidden sm:flex cursor-pointer hover:scale-105 transition-all duration-200 ${
              imagePreview ? "text-success" : "text-text/50"
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
        </>
        <button
          type="submit"
          className="p-2 bg-highlight/30 rounded-md hover:bg-highlight transition cursor-pointer"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
