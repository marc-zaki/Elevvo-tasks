const NotificationDropdown = () => {
    const notifications = [
        "Project A has been updated.",
        "You have a new message from Client B.",
        "Task C is due tomorrow."
    ];

    return (
        <div className="relative">
            <button className="p-2">Notifications</button>
            <div className="absolute right-0 bg-white shadow-lg mt-2 w-48 rounded">
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index} className="p-2 border-b">{notification}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NotificationDropdown;
