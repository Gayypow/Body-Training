import styles from "../components/video.module.scss";
import Video from "../components/Video";
import { useAppSelector } from "../store/hooks";

const Videos = () => {
  const { videos } = useAppSelector((state) => state.video);
  const videoUrls = Object.keys(videos);

  return (
    <div className={styles["cards-container"]}>
      {videoUrls.map((e) => (
        <Video src={e} />
      ))}
    </div>
  );
};

export default Videos;
