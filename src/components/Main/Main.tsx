import Hero from './Hero'
import Services from './Services'
import SpecializedIndustries, { OurClients } from './SpecializedIndustries'
import Testimonial from './Testimonial'
import Cta from './cta'
const Main = () => {
  return (
    <main>
      <Hero />
      <Services />
      <SpecializedIndustries />
  <Testimonial />
  <OurClients />
  <Cta />
    </main>
  )
}

export default Main