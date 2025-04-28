import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HandleLoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        AOS.init({
          once: true, 
          duration: 3000, 
        });
        AOS.refresh();
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? <Loader /> : <div></div>}
    </>
  );
}
