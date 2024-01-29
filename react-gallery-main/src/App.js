import React, { useState } from "react";
import data from "./data/images.json";
import Modal from "./components/Modal";
import { Box, Typography } from '@mui/material';

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <Box sx={{
      maxWidth: 1350,
      padding: '0px 60px',
      margin: '50px auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2em',
    }}>
      {data.data.map((item, index) => (
        <Box key={index} className="wrapper-images">
          <img
            src={item.link}
            alt={item.text}
            width='30%'
            onClick={() => handleClick(item, index)}
          />
          <Typography variant="h2">{item.text}</Typography>
        </Box>
      ))}
      <Box>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </Box>
    </Box>
  );
}

export default App;
