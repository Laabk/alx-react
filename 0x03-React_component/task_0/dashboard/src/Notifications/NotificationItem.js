import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}

        </>
    );
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({ id: PropTypes.number, __html: PropTypes.string }),
    value: PropTypes.string,
};

export default NotificationItem;
