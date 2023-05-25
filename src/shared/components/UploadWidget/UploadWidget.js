import { useEffect, useRef } from 'react';
import Button from '../Button/Button';

const UploadWidget = ({
  uriI,
  children,
  btnType = "button",
  btnClassName,
  btnLabel,
  btnSVGComponent,
  btnShowLabelFirst,
  buttonStyle = {
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        backgroundColor: 'inherit',
        // ...children.props,
      },
  btnDisabled,
}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dxn6zicnw',
        uploadPreset: 'kh518qvf',
        multiple: false,
        cropping: true,
        croppingCoordinatesMode: 'custom',
        gravity: 'custom',
        croppingAspectRatio: 1,
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
          uriI(result.info.secure_url);
        }
      }
    );
  }, [uriI]);
  return (
    <Button
      onClick={() => widgetRef.current.open()}
      type={btnType}
      className={btnClassName}
      label={btnLabel}
      SVGComponent={btnSVGComponent}
      showLabelFirst={btnShowLabelFirst}
      buttonStyle={buttonStyle}
      disabled={btnDisabled}
    >
      {children}
    </Button>

    // <p className={styles.btnPhoto}>
    //   <CameraIconTuned />

    // </p>
    // <button
    //   type="button"
    //   style={{
    //     cursor: 'pointer',
    //     outline: 'none',
    //     border: 'none',
    //     backgroundColor: 'inherit',
    //     ...children.props,
    //   }}
    //   onClick={() => widgetRef.current.open()}
    // >

    // </button>
  );
};

export default UploadWidget;
