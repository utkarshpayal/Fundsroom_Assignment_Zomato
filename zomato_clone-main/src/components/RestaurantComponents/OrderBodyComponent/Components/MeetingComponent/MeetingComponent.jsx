import React, { useRef, useState } from 'react';
import io from 'socket.io-client';
import './MeetingComponent.css';


const socket = io('http://localhost:8080'); 
const App = () => {
  const videoRef = useRef();
  const [isStreaming, setIsStreaming] = useState(false);
  const [showEndMessage, setShowEndMessage] = useState(false);

  const startStream = () => {
    setIsStreaming(true);
    setShowEndMessage(false);
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        socket.emit('stream', stream);
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
  };

  const endStream = () => {
    setIsStreaming(false);
    setShowEndMessage(true); 
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className="container">
      <div className="zomato-theme-cont">
      <div className="zomato-theme">
        <h1 className="zomato-title">Cooking Live Stream</h1>
        <div className="video-container">
          {isStreaming ? (
            <>
              <video ref={videoRef} className="zomato-video" controls autoPlay playsInline muted />
              <button className="end-button" onClick={endStream}>Leave Live Stream</button>
            </>
          ) : (
            <>
            <button className="start-button" onClick={startStream}>Join Live Stream</button>
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card Image" className="card-image" />
</>
          )}
        </div>
        {showEndMessage && <p className="end-message">The live stream has ended.</p>}
      </div>
    </div>
    </div>
  );
};

export default App;