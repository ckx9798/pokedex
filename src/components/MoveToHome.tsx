/** @format */

import { useNavigate } from "react-router-dom";

export default function MoveToHome() {
  const navigate = useNavigate();
  const navigatToHome = () => navigate("/");
  return (
    <button
      className="w-full bg-red-500 text-white py-3 font-bold hover:bg-red-600 transition duration-200"
      onClick={navigatToHome}
    >
      Back to PokeDex
    </button>
  );
}
