/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail ,VideoList} from "./components";
// import SearchBar from "./components/SearchBar";
// import VideoDetail from "./components/VideoDetail";
// import VideoList from "./components/VideoList";
import "./App.css";


function App() {
  
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <h1>יצחק מנשה האח יקר!</h1>
          <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const {data : {items:videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyB4GJa8GukujeSzdkzHLlDLXlZFsTmancE",
        q: searchTerm,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
    
  }
}

export default App;
