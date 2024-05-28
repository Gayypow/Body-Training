import ReactPlayer from "react-player";
import { useAppSelector } from "../store/hooks";
import { Pagination } from "antd";
import { useState } from "react";

const Player = () => {
  const [index, setIndex] = useState(0);
  const { videos } = useAppSelector((state) => state.video);
  const videoUrls = Object.keys(videos);
  return (
    <div>
      <ReactPlayer
        height="90vh"
        width="100%"
        playing
        controls={true}
        url={videoUrls[index]}
        onEnded={() => setIndex(index + 1 === videoUrls.length ? 0 : index + 1)}
      />
      <Pagination
        current={index + 1 === videoUrls.length ? 1 : index + 1}
        onChange={(e) => setIndex(e)}
        style={{ marginTop: "30px" }}
        total={videoUrls.length}
        pageSize={1}
      />
    </div>
  );
};

export default Player;
