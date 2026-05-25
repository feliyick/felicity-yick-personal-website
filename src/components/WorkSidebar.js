import '../styles/WorkSidebar.scss'
import selectedWork, { CATEGORIES } from '../selected-work'

const countForCategory = (cat) => {
    if (cat === 'All') return selectedWork.length
    return selectedWork.filter((w) => w.categories.includes(cat)).length
}

const WorkSidebar = ({ activeCategory, onSelect }) => {
    return (
        <aside className="work-sidebar">
            <div className="work-sidebar-title">Filter</div>
            <ul className="work-sidebar-list">
                {CATEGORIES.map((cat) => {
                    const count = countForCategory(cat)
                    const isActive = cat === activeCategory
                    return (
                        <li
                            key={cat}
                            className={`work-sidebar-item${isActive ? ' is-active' : ''}`}
                            onClick={() => onSelect(cat)}
                        >
                            <span className="work-sidebar-label">{cat}</span>
                            <span className="work-sidebar-count">{count}</span>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default WorkSidebar
