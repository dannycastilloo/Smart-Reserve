import './index.scss'

export const ProfileButton = ({ onClick }) => {
    return (
        <button className="no-style-button" onClick={onClick}>
            <img className="user-icon" src="../src/assets/Avatar.svg" alt="User" />
            <div className='user-info'>
                <span>Danny Castillo</span>
                <span>Administrador</span>
            </div>
        </button>
    )
}  