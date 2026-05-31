/*  VideoPlayer.js  */
import React, { useRef } from "react";

function VideoPlayer({
  src="https://content-marketing.rtlcdn.com/video/2025/11/5045ca03-7438-4851-9331-e2a5fa9ba5d8.mp4",
  poster = "",
  controls = true,
  autoPlay = false,
  loop = false,
  className = "",
}) {
  const videoRef = useRef(null);

  // توابع نمونه برای کنترل پخش/متوقف کردن (اختیاری)
  const play = () => videoRef.current && videoRef.current.play();
  const pause = () => videoRef.current && videoRef.current.pause();

  return (
    <div className={`video__wrapper ${className}`}>
      <video
        ref={videoRef}
        tabIndex={0}
        preload="metadata"
        className="video__content-inner"
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
      >
        <source src={src} type="video/mp4" />
        مرورگر شما از تگvideo پشتیبانی نمی‌کند.
      </video>
    </div>
  );
}

export default VideoPlayer;
