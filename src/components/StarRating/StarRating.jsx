import s from "./StarRating.module.css";

export const StarRating = () => {

    const stars = Array(count).fill(0)

    return (
        <div className={s.container}>
            {stars.map((i, item) => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
    );
};
