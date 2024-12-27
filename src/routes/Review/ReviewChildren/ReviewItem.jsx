import s from "./ReviewItem.module.css";

export const ReviewItem = ({ title, count }) => {

  const star = () => {
    if (count === 1) {
      return (
        <div className={s.starDiv}>
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
        </div>
      )
    } else if (count === 2) {
      return (
        <div className={s.starDiv}>
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
        </div>
      )
    } else if (count === 3) {
      return (
        <div className={s.starDiv}>
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
        </div>
      )
    } else if (count === 4) {
      return (
        <div className={s.starDiv}>
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com (1).png" alt="" />
        </div>
      )
    } else {
      return (
        <div className={s.starDiv}>
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
          <img className={s.star} src="/photos/pngwing.com.png" alt="" />
        </div>
      )
    }
  }

  return (
    <div className={s.container}>
      <span>{star()}</span>
      <div className={s.title}>
        <span>{title}</span>
      </div>
    </div>
  );
};
