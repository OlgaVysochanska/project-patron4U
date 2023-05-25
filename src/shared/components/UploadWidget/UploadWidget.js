import { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import Spiner from 'components/Spiner/Spiner';

const UploadWidget = ({
  uriI,
  children,
  btnType = 'button',
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
  const [isLoading, setIsLOading] = useState(false);

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
        setIsLOading(false);
      }
    );
  }, [uriI]);

  const handleOpenWidget = () => {
    setIsLOading(true);
    widgetRef.current.open();
  };

  return (
    <Button
      onClick={handleOpenWidget}
      type={btnType}
      className={btnClassName}
      label={btnLabel}
      SVGComponent={btnSVGComponent}
      showLabelFirst={btnShowLabelFirst}
      buttonStyle={buttonStyle}
      disabled={btnDisabled || isLoading}
    >
      {isLoading ? <Spiner /> : children}
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
