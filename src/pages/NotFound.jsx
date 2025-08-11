import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center">
      {/* Animated 404 */}
      <h1 className="text-[8rem] font-extrabold leading-none mb-4 animate-pulse">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-6">
        Oops! The page you are looking for might have been removed, renamed, or
        is temporarily unavailable.
      </p>

      {/* Action Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
      >
        ⬅ Back to Home
      </Link>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl" />
    </div>
  );
}
