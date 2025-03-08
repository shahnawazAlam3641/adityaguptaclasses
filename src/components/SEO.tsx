import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function SEO({ 
  title = "AGC - #1 Commerce Coaching in Kolkata | Aditya Gupta Classes",
  description = "Best commerce coaching in Kolkata for Class 11, 12, B.Com, MBA, BBA. Join Aditya Gupta Classes (AGC) for expert guidance in commerce education. Top-rated institute with 10,000+ successful students.",
  image = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://www.agc.com${location.pathname}`;

  React.useEffect(() => {
    // Update meta tags
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', image);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
  }, [title, description, image, canonicalUrl]);

  return null;
}