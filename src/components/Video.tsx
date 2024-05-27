import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setVideos } from "../store/video/videoSlice";
import styles from "./video.module.scss";
import ReactPlayer from "react-player";

function Video(props: { src: string }) {
  const dispatch = useAppDispatch();
  const { videos } = useAppSelector((state) => state.video);
  return (
    <div className={styles["video"]}>
      <ReactPlayer
        playing={false}
        onReady={() => dispatch(setVideos({ ...videos, [props.src]: false }))}
        pip={true}
        width="100%"
        controls={true}
        url={props.src}
      />
    </div>
  );
}

export default Video;
