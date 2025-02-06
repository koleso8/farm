const Video_1 = () => {
  return (
    <video
      width="88%"
      height="100%"
      controls
      className="absolute top-[78px] left-[20px]   md:top-[90px]  md:left-[26px] rounded-b-[40px]"
      autoPlay
      loop
      muted
    >
      <source src="video1.MP4" type="video/mp4" />
    </video>
  );
};

export default Video_1;
