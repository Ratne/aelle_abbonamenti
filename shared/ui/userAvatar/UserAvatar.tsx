import React from 'react'

interface UserAvatarProps {
    user: any
    clickHandler?: () => void
    className?: string
}

const UserAvatar = ({user, clickHandler, className}: UserAvatarProps) => {
    return (
        <div className={`shared-user-avatar  ${className ? className : ''} ${clickHandler ? 'pointer' : ''}`}
             onClick={clickHandler}>
            {user?.match(/\b\w/g).join('').toUpperCase()}
        </div>
    )
}

export default UserAvatar
