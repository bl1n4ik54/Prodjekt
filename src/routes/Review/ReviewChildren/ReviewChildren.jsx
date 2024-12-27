import { useSelector } from "react-redux";
import { ReviewItem } from "./ReviewItem";
import s from "./ReviewChildren.module.css"

export const ReviewChildren = () => {
    const items = useSelector((state) => state.product.value);

    return (
        <div className={s.flex}>
            {items.map((item) => (
                <ReviewItem key={item.id} title={item.title} count={item.count} />
            ))}
        </div>
    );
};
