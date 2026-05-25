import '../styles/WorkGridTile.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const WorkGridTile = ({ item }) => {
    const navigate = useNavigate()
    const isUnlisted = !!item.unlisted

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className={`work-tile${isUnlisted ? ' is-unlisted' : ''}`}
            onClick={() => {
                if (!isUnlisted) navigate(item.page)
            }}
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

            {item.logo && (
                <div className="work-tile-logo">
                    <img src={item.logo} alt={`${item.scope} logo`} />
                </div>
            )}

            {isUnlisted && (
                <div className="work-tile-lock-badge" aria-label="Unlisted">
                    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                        <path
                            fill="currentColor"
                            d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"
                        />
                    </svg>
                </div>
            )}

            {/* Default state: title + tool chips strip at the bottom */}
            <div className="work-tile-caption">
                <span className="work-tile-caption-title">{item.title}</span>
                <div className="work-tile-caption-tools">
                    {item.tools.map((t, i) => (
                        <span key={i} className="work-tile-caption-tool">{t}</span>
                    ))}
                </div>
            </div>

            {/* Hover state: full detail panel slides up from the bottom over the image */}
            <div className="work-tile-details">
                {isUnlisted ? (
                    <div className="work-tile-unlisted">
                        <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
                            <path
                                fill="currentColor"
                                d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"
                            />
                        </svg>
                        <div className="work-tile-unlisted-title">{item.title}</div>
                        <p className="work-tile-unlisted-note">
                            {item.unlistedNote || 'Unlisted — please request access for the full case study.'}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="work-tile-scope">{item.scope}</div>
                        <h3 className="work-tile-details-title">{item.title}</h3>
                        <div className="work-tile-tools">
                            {item.tools.map((t, i) => (
                                <span key={i} className="work-tile-tool">{t}</span>
                            ))}
                        </div>
                        <p className="work-tile-blurb">{item.blurb}</p>
                    </>
                )}
            </div>
        </motion.div>
    )
}

export default WorkGridTile
