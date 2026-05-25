import '../styles/WorkGrid.scss'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import selectedWork from '../selected-work'
import WorkSidebar from './WorkSidebar'
import WorkGridTile from './WorkGridTile'

const WorkGrid = () => {
    const [activeCategory, setActiveCategory] = useState('All')

    const visible = activeCategory === 'All'
        ? selectedWork
        : selectedWork.filter((w) => w.categories.includes(activeCategory))

    return (
        <section className="WorkGrid">
            <div className="work-grid-header">
                <div className="work-grid-eyebrow">SELECTED WORK</div>
                <h2 className="work-grid-title">Work</h2>
            </div>

            <div className="work-grid-layout">
                <WorkSidebar
                    activeCategory={activeCategory}
                    onSelect={setActiveCategory}
                />

                <div className="work-grid">
                    <AnimatePresence mode="popLayout">
                        {visible.map((item) => (
                            <WorkGridTile key={item.page} item={item} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default WorkGrid
