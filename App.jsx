import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import MenuSection from './Components/Menu/MenuSection'
import DealSection from './Components/Menu/DealSection'
import LocationSection from './Components/Menu/LocationSection'
import AboutSection from './Components/Menu/AboutSection'
import Footer from './Components/Footer/Footer'
import CartSidebar from './Components/Hero/CartSidebar'
import CartButton from './Components/Hero/CartButton'
import ReviewsSection from './Components/Menu/ReviewSection'


function App() {
  const [count, setCount] = useState(0)
  const addToCart = "add to cart"
  const cartOpen = false
  const closeCart = false
  const openCart = false
  const cartItems =[ "apple" , "banana" , "fool" ,"muichiro is the best"]

  return (
    <>
    <div className="h-full bg-gray-50">
      <Header />
      <Hero />
      <MenuSection addToCart={addToCart} />
      <DealSection addToCart={addToCart} />
      <AboutSection />
      <LocationSection />
      <ReviewsSection />
      <Footer />
      
      {/* <CartButton itemCount={cartItems.length} onClick={openCart} />
      <CartSidebar isOpen={cartOpen} onClose={closeCart} items={cartItems} /> */}
    </div>
    </>
  )
}

export default App
