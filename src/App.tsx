import './App.css'
import { AddSection } from './components/ui/AdevertiseSection'
import { CardSection } from './components/ui/CardSection'
import { Carousoul } from './components/ui/CarosoulSection'
import { CoreFeatures } from './components/ui/CoreFeatures'
import { FeatureSection } from './components/ui/FeatureSection'
import { FeatureSection2 } from './components/ui/FeatureSection2'
import { FeatureSection3 } from './components/ui/FeatureSection3'
import { Footer } from './components/ui/FooterSection'
import { HeroSection } from './components/ui/HeroSection'
import MyImage from './components/ui/MyImage'
import { Navbar } from './components/ui/Navbar'
import { Testomonial } from './components/ui/TestomonialSection'

function App() {

  return (
    <div className=''>
       <Navbar />
       <HeroSection />
       <FeatureSection />
       <CardSection />
       <FeatureSection2 />
       <FeatureSection3 />
       <CoreFeatures />
       <AddSection />
       <Carousoul />
       <Testomonial />
       <Footer />
    {/* <MyImage /> */}
       
    </div>
  )
}

export default App
