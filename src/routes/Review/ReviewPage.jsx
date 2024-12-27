import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Product/productSlice";
import { ReviewChildren } from "./ReviewChildren/ReviewChildren";
import s from "./ReviewPage.module.css";

export const ReviewPage = () => {
    const [title, setTitle] = useState("");
    const [count, setCount] = useState(1);

    const disp = useDispatch();

    const handleAdd = () => {
        if (title.trim()) {
            disp(add({ title, count }));
            setTitle("");
        } else {
            alert("Напишите комментарий");
        }
    };


    const dec = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const inc = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    return (
        <div className={s.container}>
            <ReviewChildren />
            <div className={s.flex}>
                <div className={s.flexText}>
                    <textarea
                        className={s.otz}
                        placeholder="Напишите отзыв"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={2500}
                    />
                    <span>Оцените работу</span>
                    <div className={s.divBtn}>
                        <button className={s.btnCount} onClick={() => dec()}>-</button>
                        <span>{count}</span>
                        <button className={s.btnCount} onClick={() => inc()}>+</button>
                    </div>
                </div>
                <button className={s.btnAdd} onClick={handleAdd}>Добавить</button>
            </div>
        </div>
    );
};
