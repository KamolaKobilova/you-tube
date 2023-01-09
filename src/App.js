import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import {Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail} from './components';


function App() {
  return (
  <BrowserRouter>
     <Box sx={{backgroundColor: 'black'}}> 
        <Navbar/>  
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={ <VideoDetail/>}/>
          <Route path='/channel/:id' element={ <ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={ <SearchFeed/>}/>
        </Routes>
     </Box>
  </BrowserRouter>
  )
}

export default App;
