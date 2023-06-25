import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/images.jpg';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const Question = () => {
  const urlAPI =
    'Wearing white or silver-colored clothes on Monday calms your mind. if you are not getting peace of mind then these colors would be best for you. When you start wearing them, you will gradually start getting positive results.';

  const [sentences, setSentences] = useState([]);
  // const [images, setImages] = useState([]);
  const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
  useEffect(() => {
    axios
      .get(urlAPI, {
        params: {
          type: 'meat-and-filler',
          sentences: 1,
        },
      })
      .then((res) => {
        setSentences(res.data);
      });

    // axios.get(urlAPI_image).then((res) => {
    // console.log(res.data);
    // setImages(res.data);
    // });
  }, []);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Question
        </Typography>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Question: {sentences[0]}
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="outlined" component={RouterLink} to="/main">
            Previous Queston
          </Button>
          <Button variant="contained" component={RouterLink} to="/main">
            Next Question
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Question;
