import HelpSection from '../components/HelpSection';
import Hero from '../components/Hero'
import Product from '../components/Product';
import Whychooseus from '../components/Whychooseus';
import ProductSection from '../components/ProductSection';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

function Home(){
    return (
        <>
            <Hero />
            <Product />
            <Whychooseus />
            <HelpSection />
            <ProductSection />
            <Testimonials />
            <BlogSection />
        </>
    )
}

export default Home;