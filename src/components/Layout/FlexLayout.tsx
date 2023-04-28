import { FC } from 'react'
import cx from 'classnames'
import './FlexLayout.css'
import { useCurrentUser, useLogout } from '../../context/contextStore'

export const FlexLayout: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  const user = useCurrentUser()
  const logout = useLogout()

  return (
    <div className={cx('flexLayout-maincontainer', className)} {...props}>
      {user && (
        <div className="flexLayout-floatingUserInformation">
          Logged as: {user.name}
          <button onClick={logout}>Logout</button>
        </div>
      )}
      {children}
    </div>
  )
}
