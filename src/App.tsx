import './App.css'
import { AddSection } from './components/ui/AdevertiseSection'
import { CardSection } from './components/ui/CardSection'
import { CoreFeatures } from './components/ui/CoreFeatures'
import { FeatureSection } from './components/ui/FeatureSection'
import { FeatureSection2 } from './components/ui/FeatureSection2'
import { FeatureSection3 } from './components/ui/FeatureSection3'
import { HeroSection } from './components/ui/HeroSection'
import { Navbar } from './components/ui/Navbar'

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
    </div>
  )
}

export default App
