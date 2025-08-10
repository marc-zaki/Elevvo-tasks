import { useState } from 'react';
import { FiBell, FiMenu, FiSearch } from 'react-icons/fi';

const Header = () => {
  const [notifications] = useState([
    { id: 1, message: 'Project A has been updated', time: '2 mins ago' },
    { id: 2, message: 'New message from Client B', time: '1 hour ago' },
    { id: 3, message: 'Payment received for Project C', time: '3 hours ago' }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="z-10 bg-white border-b border-gray-200 flex-shrink-0">
      <div className="flex justify-between items-center px-4 py-3 h-16">
        <div className="flex items-center md:hidden">
          <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-1 max-w-md ml-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="ml-4 flex items-center">
          <div className="relative ml-3">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <FiBell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            {showNotifications && (
              <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
                </div>
                {notifications.map(note => (
                  <div key={note.id} className="px-4 py-3 hover:bg-gray-100">
                    <p className="text-sm text-gray-700">{note.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{note.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
