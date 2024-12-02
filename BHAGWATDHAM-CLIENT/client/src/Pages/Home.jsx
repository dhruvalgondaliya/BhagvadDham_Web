import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Loader } from '../components/ui/Loader';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Image } from '../components/ui/Image';

const sliderImages = [
    "https://images.pexels.com/photos/18362066/pexels-photo-18362066/free-photo-of-baps-shri-swaminarayan-mandir-temple-in-atlanta-united-states.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17297746/pexels-photo-17297746/free-photo-of-shri-swaminarayan-mandir-temple-in-london-england.jpeg",
    "https://images.unsplash.com/photo-1609619385525-18e1e5e0d0ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
]
export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
    }

    return (
        <div className='min-h-screen bg-background'>
            {isLoading && <Loader />}
            <div className={`${isLoading ? 'hidden' : ''}`}>
                <Header />

                <main>
                    {/* Hero Section with Image Slider */}
                    <section className="relative h-[600px] overflow-hidden">
                        <AnimatePresence initial={false}>
                            <motion.img
                                key={currentSlide}
                                src={sliderImages[currentSlide]}
                                alt={`Slide ${currentSlide + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center">
                                <motion.h1
                                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Welcome to Our Temple
                                </motion.h1>
                                <motion.p
                                    className="text-xl text-white mb-8"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    A place of peace, spirituality, and community
                                </motion.p>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Button className="bg-accent text-text hover:bg-primary hover:text-white transition-colors">
                                        Explore Our Sanctuary
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                            {sliderImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-accent' : 'bg-white bg-opacity-50'
                                        }`}
                                />
                            ))}
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-16">
                        <div className="container mx-auto px-4">
                            <motion.h2
                                className="text-3xl font-bold text-center text-secondary mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                About Our Temple
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src="https://source.unsplash.com/random/600x400?temple"
                                        alt="About Our Temple"
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-lg"
                                    />
                                </motion.div>
                                <motion.div
                                    className="space-y-4"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <p className='text-text'>
                                        Our temple is a sacred space dedicated to spiritual growth, community service, and the preservation of ancient wisdom. Founded in 1985, we have been serving the community for over three decades.
                                    </p>
                                    <p className='text-text'>
                                        We offer a sanctuary for worship, meditation, and cultural activities. Our temple is not just a place of worship, but a center for learning, healing, and community engagement.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section id="services" className='py-16 bg-secondary'>
                        <div className="container mx-auto px-4">
                            <motion.h2
                                className="text-3xl font-bold text-center text-white mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Our Services
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {['Daily Prayers', 'Meditation Classes', 'Cultural Events'].map((service, index) => (
                                    <motion.div
                                        key={service}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="bg-white">
                                            <CardContent className="p-6">
                                                <h3 className='text-xl font-semibold text-primary mb-2'>{service}</h3>
                                                <p className='text-text'>Join us for our {service.toLowerCase()} and experience spiritual growth.</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section id="gallery" className="py-16">
                        <div className="container mx-auto px-4">
                            <motion.h2
                                className='text-3xl font-bold text-center text-secondary mb-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Temple Gallery
                            </motion.h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image
                                            src={`https://source.unsplash.com/random/300x300?temple&sig=${i}`}
                                            alt={`Gallery Image ${i}`}
                                            width={300}
                                            height={300}
                                            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Activities Section */}
                    <section id="activities" className='py-16 bg-primary text-white'>
                        <div className="container mx-auto px-4">
                            <motion.h2
                                className="text-3xl font-bold text-center mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Temple Activities
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {['Yoga Classes', 'Spiritual Retreats', 'Community Service'].map((activity, index) => (
                                    <motion.div
                                        key={activity}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className='bg-secondary'>
                                            <CardContent className="p-6">
                                                <h3 className='text-xl font-semibold text-accent mb-2'>{activity}</h3>
                                                <p className="text-white">Experience spiritual growth and community connection through our {activity.toLowerCase()}.</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Publications Section */}
                    <section id="publications" className="py-16">
                        <div className="container mx-auto px-4">
                            <motion.h2
                                className='text-3xl font-bold text-center text-secondary mb-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Our Publications
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: 'Monthly Newsletter', description: 'Stay updated with temple events and spiritual insights.' },
                                    { title: 'Sacred Texts', description: 'Explore our collection of ancient wisdom and teachings.' },
                                    { title: 'Meditation Guide', description: 'Learn various meditation techniques for inner peace.' }
                                ].map((publication, index) => (
                                    <motion.div
                                        key={publication.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className='bg-background'>
                                            <CardContent className="p-6">
                                                <h3 className='text-xl font-semibold text-primary mb-2'>{publication.title}</h3>
                                                <p className='text-text'>{publication.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Events Section */}
                    <section id="events" className="py-16">
                        <div className="container mx-auto px-4">
                            <motion.h2
                                className='text-3xl font-bold text-center text-secondary mb-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Upcoming Events
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: 'Annual Festival', date: 'July 15-17, 2024' },
                                    { title: 'Meditation Retreat', date: 'August 5-7, 2024' },
                                    { title: 'Community Service Day', date: 'September 1, 2024' }
                                ].map((event, index) => (
                                    <motion.div
                                        key={event.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className='bg-background'>
                                            <CardContent className="p-6">
                                                <h3 className='text-xl font-semibold text-primary mb-2'>{event.title}</h3>
                                                <p className='text-colors.text'>{event.date}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Donation Section */}
                    <section id="donate" className='py-16 bg-primary'>
                        <div className="container mx-auto px-4 text-center">
                            <motion.h2
                                className="text-3xl font-bold text-white mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Support Our Temple
                            </motion.h2>
                            <motion.p
                                className="text-white text-lg mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Your generous donations help us maintain our sacred space and continue our community services.
                            </motion.p>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Button className='bg-accent text-text hover:bg-white hover:text-primary transition-colors'>
                                    Make a Donation
                                </Button>
                            </motion.div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    )
}

