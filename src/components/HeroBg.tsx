import cover from '@/assets/images/cover.png'
import Hero from './Hero'

function HeroBg() {
  return (
    <section className="h-screen w-full bg-cover bg-center flex flex-col text-white items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${cover.src})`}}>
        <Hero/>
    </section>
  )
}

export default HeroBg