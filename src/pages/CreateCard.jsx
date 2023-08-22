import React from 'react';
import { Box, Button, Container, Paper, Typography } from '@material-ui/core';
import { Stack, TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import AddIcon from '@mui/icons-material/Add';
import "../../theme/style.css";
import bg1 from '../../public/images/bg-blue.png';
import bg2 from '../../public/images/bg-green.png';
import bg3 from '../../public/images/bg-pink.png';
import bg4 from '../../public/images/bg-red.png';
import bg5 from '../../public/images/bg-white.png';
import bg6 from '../../public/images/bg-yellow.png';
import bg7 from '../../public/images/bg-flower1.png';
import bg8 from '../../public/images/bg-flower2.png';
import bg9 from '../../public/images/bg-flower3.png';
import bg10 from '../../public/images/bg-flower4.png';
import bg11 from '../../public/images/bg-flower5.png';
import bg12 from '../../public/images/bg-flower6.png';
import dmyImg from '../../public/images/dmy.png'


const imageList = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];

const CreateCard = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box 
        maxWidth="sm"
        // sx={{ width: '80%'}}
        
      >
        <Paper
          style={{
            marginTop: '60px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${bg1})`,
            marginBottom: '60px'
          }}
          elevation={3}
          square
        >
          <Paper
            style={{
              margin: 0,
              width: '100%',
              height: '80%',
              textAlign: 'center',
              backgroundColor: 'white',
              opacity: 0.7,
              borderRadius: 0,
            }}
            elevation={2}
            square
          >
            <Box sx={{ width: '80%'}}>
              <TextField 
                style={{ 
                  width: '85%',
                  marginTop: '4%',
                }}
                label="Title" 
                id='TextField-title'
              />
              <Button variant="contained" component="label"
                style={{ 
                  width: '85%',
                  height: '25rem',
                  margin: '2% 0',
                  backgroundImage: `url(${dmyImg})`,
                  backgroundPosition: 'center',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }} 
              >
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Box sx={{ width: '80%'}}>
                <TextField
                    style={{ 
                      width: '85%',
                      marginBottom: '4%'
                    }}
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={5}
                />
              </Box>
            </Box>
          </Paper>
        </Paper>
      </Box>

      <Box sx={{ width: '80%'}}>
        <Typography
          variant="h3"
          gutterBottom
          className="Typography-title"
        >
          Select a background image
        </Typography>
      </Box>

      <Box sx={{ width: '80%' }}>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
            '@media (min-width: 768px)': {
              justifyContent: 'space-between', // PC画面では4列
              '& > :nth-child(n)': {
                width: 'calc(25% - 10px)',
                marginBottom: '10px',
              },
            },
            '@media (max-width: 767px)': {
              justifyContent: 'space-between', // スマホ画面では2列
              '& > :nth-child(n)': {
                width: 'calc(50% - 10px)',
                marginBottom: '10px',
              },
            },
          }}
        >
          {imageList.map((image, index) => (
            <ListItemButton key={index}>
              <img src={image} alt={`bgImg-${index}`} width="100%" style={{ height: '100%' }} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box style={{ textAlign: 'center' }}>
      <button className='button-large'>
        Done
      </button>
      </Box>
    </Container>
  );
};

export default CreateCard;
