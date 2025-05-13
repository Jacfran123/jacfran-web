"use client";

export default function VideoPlayer() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label="A promotional video showcasing car detailing services"
      poster="/images/image_video.jpg"
    >
      <source src="/videos/jacfran.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" label="English" default />
      Your browser does not support the video tag.
    </video>
  );
}
