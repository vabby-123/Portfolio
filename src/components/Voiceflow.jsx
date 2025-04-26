import { useEffect } from "react";

const Voiceflow = () => {
  useEffect(() => {
   


    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.async = true;
    
    script.onload = () => {
      window.voiceflow?.chat.load({
        verify: { projectID: "680d1d83ad1fd33749d5c94c" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI, just loads the chatbot
};

export default Voiceflow;
