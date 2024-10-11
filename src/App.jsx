import { Button, Container, IconButton, Slider, Tab, Tabs, TextField, Typography } from '@mui/material';
import React from 'react';
import { theme } from './config/mui-config';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CustomButton } from './components/ui/button/button';
import { CustomLinkButton } from './components/ui/button/button';
import { CustomIput } from './components/ui/input/input';

function App() {
  const [value, setValue] = React.useState('one');
  const md = useMediaQuery("(max-width:1100px)");
  console.log(md);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="xl">
        <CustomIput placeholder='Поиск по товарам' variant='filled' />
        <CustomLinkButton>Custom link</CustomLinkButton>
        <CustomButton>custom button</CustomButton>
        <Button variant='contained'>lorem</Button>
        <Button variant='outlined'>lorem</Button>
        <Button variant='text'>lorem</Button>
        {!md && <>
          <Typography variant='h2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eos, unde voluptas id minus vitae minima. Repellendus excepturi, illum veniam suscipit voluptatibus, soluta assumenda beatae laboriosam quaerat architecto molestias ea?
          </Typography>

          <Typography variant='h2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eos, unde voluptas id minus vitae minima. Repellendus excepturi, illum veniam suscipit voluptatibus, soluta assumenda beatae laboriosam quaerat architecto molestias ea?
          </Typography>

          <Typography variant='h2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eos, unde voluptas id minus vitae minima. Repellendus excepturi, illum veniam suscipit voluptatibus, soluta assumenda beatae laboriosam quaerat architecto molestias ea?
          </Typography>

          <Typography variant='h2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eos, unde voluptas id minus vitae minima. Repellendus excepturi, illum veniam suscipit voluptatibus, soluta assumenda beatae laboriosam quaerat architecto molestias ea?
          </Typography>

        </>}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
        <TextField size='small' variant='outlined' placeholder='lorem' />

        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />

        <Typography variant='h1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quasi placeat rem eum tempore, vitae quis, repellendus ut velit praesentium ad? Incidunt maiores temporibus dolorum labore dolore fugiat tempora? Obcaecati.
        </Typography>
      </Container>
    </>
  );
}

export default App;
