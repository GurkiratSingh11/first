import React from 'react';
import {Paper, Typography, IconButton} from '@mui/material'



const Modal = ({ clickedImg, setClickedImg, handelRotationRight, handelRotationLeft }) => {
  const handleClick = (e) => {
    console.log(e.target);
    if (e.target.classList.contains('dismiss')) {
      setClickedImg(null);
    }
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(27, 27, 27, 0.541)',
    display: 'flex',
    alignItems: 'center',
  };

  const overlayImgStyle = {
    display: 'block',
    maxWidth: '60%',
    maxHeight: '80%',
    margin: '60px auto',
    boxShadow: '3px 5px 7px rgba(0, 0, 0, 0.5)',
  };

  const closeIconStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '30px',
    color: '#ffffff',
    zIndex: 999,
    cursor: 'pointer',
  };

  const overlayArrowsStyle = {
    display: 'flex',
    backgroundColor: '#6d6d6d',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '30px',
    height: '30px',
    zIndex: 999,
  };

  const overlayArrowsLeftStyle = {
    ...overlayArrowsStyle,
    left: 0,
    top: '50%',
  };

  const overlayArrowsRightStyle = {
    ...overlayArrowsStyle,
    right: 0,
    top: '50%',
  };

  return (
    <>
      <Paper style={overlayStyle} className="dismiss" onClick={handleClick}>
        <img style={overlayImgStyle} src={clickedImg} alt="bigger pic" />
        <IconButton style={closeIconStyle} className="dismiss" onClick={handleClick}>
          <Typography variant="h6" className="dismiss">x</Typography>
        </IconButton>
        <div onClick={handelRotationLeft} style={overlayArrowsLeftStyle}>
          <div>
            {/* Left arrow SVG */}
          </div>
        </div>
        <div onClick={handelRotationRight} style={overlayArrowsRightStyle}>
          <div>
            {/* Right arrow SVG */}
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Modal;
