import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp3");
  const [resolution, setResolution] = useState("1080");

  const download = () => {
    const baseUrl = "http://localhost:3000";
    const endpoint = format === "mp3" ? "downloadmp3" : "downloadmp4";
    const fullUrl = `${baseUrl}/${endpoint}?url=${encodeURIComponent(url)}${
      format === "mp4" ? `&res=${resolution}` : ""
    }`;
    window.location.href = fullUrl;
  };

  return (
    <>
      <h1>Mu-Download</h1>
      <input
        type="text"
        placeholder="Enter YouTube link"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="mp3">MP3</option>
        <option value="mp4">MP4</option>
      </select>

      {format === "mp4" && (
        <select
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        >
          <option value="1080">1080p</option>
          <option value="720">720p</option>
          <option value="360">360p</option>
        </select>
      )}
      <button onClick={download}>Download</button>
    </>
  );
}
export default App;
