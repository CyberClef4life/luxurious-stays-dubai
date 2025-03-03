
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="glass-card rounded-xl p-12 mx-6 text-center max-w-lg">
          <h1 className="text-8xl font-bold text-brand-teal mb-6">404</h1>
          <p className="text-2xl font-semibold mb-4">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-brand-teal hover:bg-brand-teal/90 py-6 px-8">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
