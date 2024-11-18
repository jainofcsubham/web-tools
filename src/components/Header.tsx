import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.png";
export function Header() {

  const navigate = useNavigate()

  const onHome = () => {
    navigate("/")
  };

  return (
    <header className="bg-white shadow-sm z-50 border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div onClick={onHome} className="flex items-center justify-between h-16 cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <img src={logo} alt="logo" className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WebTools</h1>
              {/* <p className="text-sm text-gray-500">Simple tools for everyday tasks</p> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}