import { Link } from 'react-router-dom'
import './directory-item.style.scss'

const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category
    return (
        <div className="directory-container">
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
            }} />
            <Link className='body' to={`/shop/${title}`}>
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </Link>
        </div>
    )
}

export default DirectoryItem