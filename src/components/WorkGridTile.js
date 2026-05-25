import '../styles/WorkGridTile.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const WorkGridTile = ({ item }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="work-tile"
            onClick={() => navigate(item.page)}
        >
            {item.video ? (
                <video
                    className="work-tile-video"
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : (
                <div
                    className="work-tile-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
            )}

            {/* Default state: thin title strip at the bottom */}
            <div className="work-tile-caption">
                <span className="work-tile-caption-title">{item.title}</span>
            </div>

            {/* Hover state: full detail panel slides up from the bottom over the image */}
            <div className="work-tile-details">
                <div className="work-tile-scope">{item.scope}</div>
                <h3 className="work-tile-details-title">{item.title}</h3>
                <div className="work-tile-tools">
                    {item.tools.map((t, i) => (
                        <span key={i} className="work-tile-tool">{t}</span>
                    ))}
                </div>
                <p className="work-tile-blurb">{item.blurb}</p>
            </div>
        </motion.div>
    )
}

export default WorkGridTile
