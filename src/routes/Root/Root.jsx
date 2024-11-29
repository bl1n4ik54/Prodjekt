import { Outlet, NavLink } from "react-router-dom";
import s from "./Root.module.css"

export const Root = () => {
  return (
    <div className={s.menu}>
      <h2 className={s.title}>WildernessWonders</h2>
      <nav className={s.div}>
        <NavLink className={({ isActive, isPending, qwerty}) => isActive ? s.active : isPending ? s.loading : s.btn} to={'home'}>
          Г Л А В Н А Я
        </NavLink>
        <NavLink className={({ isActive, isPending, qwerty }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'photo'}>
          Ф О Т О
        </NavLink>
        <NavLink className={({ isActive, isPending, qwerty }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'review'}>
          О Т З Ы В Ы
        </NavLink>
        <NavLink className={({ isActive, isPending, qwerty }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'contact'}>
          К О Н Т А К Т Ы
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
};