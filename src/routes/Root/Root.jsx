import { Outlet, NavLink } from "react-router-dom";
import s from "./Root.module.css"

export const Root = () => {
  return (
    <>
      <div className={s.flex}>
        <div className={s.menu}>
          <h2 className={s.title}>WildernessWonders</h2>
          <nav>
            <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'home'}>
              <div className={s.qwerty}> Г Л А В Н А Я</div>
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'photo'}>
              <div className={s.qwerty}>Ф О Т О</div>
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'review'}>
              <div className={s.qwerty}>О Т З Ы В Ы</div>
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'contact'}>
              <div className={s.qwerty}>К О Н Т А К Т Ы</div>
            </NavLink>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  )
};