import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <Helmet>
        <title>Page Not Found | BVM</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-[#050B18] text-white text-center px-5">
        <div className="max-w-xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Error 404
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Page Not Found
          </h1>

          <p className="text-slate-400 text-lg mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
