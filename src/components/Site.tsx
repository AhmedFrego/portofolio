import { SiteClass } from "../models/SiteClass";
import { useAppDispatch } from "../store/hooks";
import { overlayActions } from "../store/slices/overlay-slice";

const Site = (data: SiteClass, onClick: (e: any) => void, className?: string) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(
      overlayActions.showOverlay(
        data.URL ? (
          <iframe src={data.URL} title={data.title} className="site__frame" />
        ) : (
          <img className="site__img" src={data.previewImg} alt={data.title} />
        )
      )
    );
  };
  return (
    <div className={className} onClick={clickHandler}>
      <p className="site__title" children={data.title} />
      <img className="site__img" src={data.previewImg} alt={data.title} />
    </div>
  );
};

export default Site;
