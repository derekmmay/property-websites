import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MetaTags from '@/components/SEO/MetaTags';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  showNavigation?: boolean;
  showFooter?: boolean;
}

const PageLayout = ({ 
  children, 
  title, 
  description, 
  image, 
  showNavigation = true, 
  showFooter = true 
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title={title} 
        description={description} 
        image={image} 
      />
      
      {showNavigation && <Navigation />}
      
      <main>
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;