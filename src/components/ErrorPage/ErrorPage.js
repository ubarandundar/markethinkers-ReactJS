import { useEffect } from 'react';
import "@lottiefiles/lottie-player";
import classes from './ErrorPage.module.css';

function ErrorPage() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://unpkg.com/@lottiefiles/lottie-player@1.5.7/dist/lottie-player.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

  return (
    <div>
        <lottie-player src="./404-edited.json" speed="1" style={{width: '638px', height: '387px', background: "transparent"}} loop autoplay></lottie-player>
    </div>
  )
}

export default ErrorPage;