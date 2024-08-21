import React from 'react';
import '../Notifications/Notifications.css'
import closeIcon from '../assets/close-icon.svg';
// import { getLatestNotification } from '../Utils/utils';
import PropTypes from "prop-types";
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';


function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div className='menu'>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
      <div className="Notifications">
        {listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
        <ul >
        {listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
            {listNotifications.map((val, idx) => {
              return <NotificationItem type={val.type} value={val.value} html={{__html: val.html}} key={val.id} />;
            })}
        </ul>
        <button aria-label='Close' style={{ position: 'absolute', top: '10px', right: '5px', border: 'none', background: 'none' }}><img src={closeIcon} alt="close icon" /></button>
      </div>
      ) : null}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};


export default Notifications;
