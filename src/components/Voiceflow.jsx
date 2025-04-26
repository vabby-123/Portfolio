import { useEffect } from "react";

const Voiceflow = () => {
  useEffect(() => {
    // Check if script is already loaded to avoid duplicates
    if (window.voiceflow?.chat) {
      console.log("Voiceflow already loaded");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.async = true;

    script.onload = () => {
      console.log("Voiceflow script loaded, initializing...");
      
      if (!window.voiceflow) {
        console.error("Voiceflow object not found!");
        return;
      }

      window.voiceflow.chat.load({
        verify: { projectID: "680d1d83ad1fd33749d5c94c" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: { url: "https://runtime-api.voiceflow.com" },
      }).then(() => {
        console.log("Voiceflow initialized successfully!");
      }).catch((err) => {
        console.error("Voiceflow failed to load:", err);
      });
    };

    script.onerror = () => {
      console.error("Failed to load Voiceflow script!");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="vf-chat-container" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }} />;
};

export default Voiceflow;