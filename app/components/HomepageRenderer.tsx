'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Cake, Coffee, Clock, Heart, Star, Award, MapPin, Phone, Mail } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const communityLife = [
  { icon: Cake, title: 'Artisan Breads', description: 'Handcrafted sourdough, rye, and specialty loaves baked fresh every morning' },
  { icon: Coffee, title: 'Cafe & Espresso', description: 'Locally roasted coffee and specialty drinks to complement our baked goods' },
  { icon: Clock, title: 'Baked Fresh Daily', description: 'Everything is made from scratch each morning using time-honored techniques' },
  { icon: Heart, title: 'Made with Love', description: 'Every recipe passed down through generations of dedicated bakers' },
  { icon: Star, title: 'Custom Cakes', description: 'Beautifully designed celebration cakes for weddings, birthdays, and special events' },
  { icon: Award, title: 'Award Winning', description: 'Recognized for excellence in artisan baking and pastry craftsmanship' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop', alt: 'Fresh baked croissants' },
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&fit=crop', alt: 'Artisan bread loaves' },
  { src: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80&fit=crop', alt: 'Bakery pastry display' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80&fit=crop', alt: 'Coffee and pastries' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Content Preview */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              From Our Ovens
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every morning, our bakers craft these favorites with the finest ingredients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sourdough Collection', desc: 'Our signature sourdough, crafted with a 20-year-old starter and slow-fermented for 48 hours for unparalleled flavor and texture.' },
              { title: 'Morning Pastries', desc: 'Buttery croissants, pain au chocolat, and seasonal Danish pastries made with imported French butter.' },
              { title: 'Celebration Cakes', desc: 'Custom-designed cakes for every occasion, from elegant wedding tiers to whimsical birthday creations.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border-l-4 border-primary-600 p-8 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <Link href="/menu" className="text-primary-700 font-medium text-sm hover:text-primary-800 transition-colors">
                  View Menu &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Life / Icon Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              The Golden Crust Difference
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Crafted with passion, served with warmth
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityLife.map((item) => {
              const IconComponent = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-[#faf8f5] border-l-4 border-primary-400 p-8 group hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-5 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              From Our Kitchen
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A taste of what awaits you at Golden Crust
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2">Visit Our Bakery</h2>
            <div className="w-16 h-0.5 bg-accent-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <Clock className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Bakery Hours</h3>
              <p className="text-primary-200 text-sm">Mon-Sat: 6am - 7pm</p>
              <p className="text-primary-200 text-sm">Sunday: 7am - 3pm</p>
            </div>
            <div>
              <Coffee className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Cafe Hours</h3>
              <p className="text-primary-200 text-sm">Daily: 6am - 5pm</p>
            </div>
            <div>
              <Cake className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Custom Orders</h3>
              <p className="text-primary-200 text-sm">48 hours advance notice</p>
            </div>
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Rich Footer */}
      <footer className="bg-[#f5f0eb] border-t border-primary-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-4">Golden Crust Bakery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Handcrafted breads, pastries, and celebration cakes made fresh daily with love and the finest ingredients.
              </p>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-sm">428 Baker Street, Portland, OR 97201</span>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/menu" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Menu Items</Link></li>
                <li><Link href="/specials" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Specials</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Services</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Custom Cakes</li>
                <li>Catering</li>
                <li>Wholesale</li>
                <li>Gift Cards</li>
                <li>Baking Classes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">(503) 555-0142</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">hello@goldencrust.com</span>
                </li>
                <li className="flex items-start space-x-2 mt-4">
                  <Clock className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm">
                    <p>Mon-Sat: 6am - 7pm</p>
                    <p>Sunday: 7am - 3pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Golden Crust Bakery. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              Baked fresh every morning
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
