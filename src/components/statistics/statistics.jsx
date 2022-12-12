import PropTypes from "prop-types";
import css from "../statistics/statistics.module.css"

export function Statistics({ title, stats }) {

    return <section className={css.statistics}> {
        <h2 className={css.title}>{title}</h2>
    }

        <ul className={css.statList}>{
            stats.map(({id, label, percentage}) => {
                return <li className={css.item} key={ id }>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
            </li>
        })}
  </ul>
</section>
}

Statistics.PropTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
}