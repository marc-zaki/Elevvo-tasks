import { Link } from 'react-router-dom';
import { FiHome, FiFolder, FiUser, FiDollarSign } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-gray-800 text-white">
        <div className="flex items-center h-16 px-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Freelance Dashboard</h1>
        </div>
        <nav className="flex-1 px-2 py-4">
          <Link to="/" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded">
            <FiHome className="mr-3" /> Overview
          </Link>
          <Link to="/projects" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 rounded">
            <FiFolder className="mr-3" /> Projects
          </Link>
          <Link to="/profile" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 rounded">
            <FiUser className="mr-3" /> Profile
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
