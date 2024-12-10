import s from "./PhotosPage.module.css"

export const PhotosPage = () => {
  return (
    <div className={s.photosmaindiv}>
      <div>
        <img className={s.photos} src="./photos/PhotosPagePhoto1.png" alt="" />
        <img className={s.photos} src="./photos/PhotosPagePhoto2.png" alt="" />
        <img className={s.photos} src="./photos/PhotosPagePhoto3.png" alt="" />
      </div>
      <h2 className={s.title}>Горные озёра</h2>
      <button className={s.btnCol}>Перейти к колекции</button>
    </div>
  )
};