import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
<div className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-blue-400 to-purple-600">
  <h1 className="text-white text-2xl font-bold">SkillEarn - Demo Platform</h1>

  <div className="flex space-x-2 ml-auto">
    <Link to="/signin">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Sign In
      </button>
    </Link>
    <Link to="/signup">
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
        Sign Up
      </button>
    </Link>
  </div>
</div>
    )
};

export default Navbar;