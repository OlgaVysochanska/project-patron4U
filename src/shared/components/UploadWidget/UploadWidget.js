import { useEffect, useRef } from "react";

const UploadWidget = ({ uriI, children }) => {
  const cloudinaryRef = useRef();
    const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dxn6zicnw",
        uploadPreset: "kh518qvf",
        multiple: false,
        cropping: true,
        croppingCoordinatesMode: "custom",
        gravity: "custom",
        croppingAspectRatio: 1,
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          uriI(result.info.secure_url);
        }
      }
    );
  }, [uriI]);
    return <button style={{ cursor:'pointer', outline: 'none', border: 'none', backgroundColor: 'inherit', ...children.props }} onClick={() => widgetRef.current.open()}>{children}</button>;
};

export default UploadWidget;
