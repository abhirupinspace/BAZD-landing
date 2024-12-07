'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Coinbase Developer Platform',
    logo: '/cb.png',
    description: 'Leading innovator in AI and machine learning technologies.',
  },
  {
    name: 'BASE',
    logo: '/placeholder.svg?height=60&width=200',
    description: 'Pioneering sustainable energy solutions for a greener future.',
  },
  {
    name: 'Anon AADHAR',
    logo: '/placeholder.svg?height=60&width=200',
    description: 'Revolutionizing financial services with blockchain technology.',
  },
  {
    name: 'Bandada',
    logo: '/placeholder.svg?height=60&width=200',
    description: 'Advancing healthcare through cutting-edge medical devices.',
  },
  {
    name: 'The Graph',
    logo: '/placeholder.svg?height=60&width=200',
    description: 'Advancing healthcare through cutting-edge medical devices.',
  },
  {
    name: 'EthIndia 2K24 ',
    logo: '/placeholder.svg?height=60&width=200',
    description: 'Advancing healthcare through cutting-edge medical devices.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

export default function Partners(){
  return (
    <section className="py-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-white">
            BUILT AND PARTNERED WITH
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={60}
                    className="max-w-[200px] h-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-grey-600 flex-grow">{partner.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

