import s from "./PhotosPage.module.css"

export const PhotosPage = () => {
  return (
    <div className={s.container}>
      <div className={s.divImg}>
        <img className={s.photos} src="./photos/PhotosPagePhoto1.png" alt="" />
        <img className={s.photos} src="./photos/PhotosPagePhoto2.png" alt="" />
        <img className={s.photos} src="./photos/PhotosPagePhoto3.png" alt="" />
      </div>
      <div className={s.flexBtn}>
        <h2 className={s.title}>Горные озёра</h2>
        <button className={s.btnCol}>Перейти к колекции</button>
      </div>
      <div className={s.divImg}>
        <img className={s.photos} src="./photos/image 5.png" alt="" />
        <img className={s.photos} src="./photos/image 6.png" alt="" />
        <img className={s.photos} src="./photos/image 7.png" alt="" />
      </div>
      <div className={s.flexBtn}>
        <h2 className={s.title}>Летние цветы</h2>
        <button className={s.btnCol}>Перейти к колекции</button>
      </div>
    </div>
  )
};