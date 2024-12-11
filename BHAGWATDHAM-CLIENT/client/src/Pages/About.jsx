import { motion } from 'framer-motion';
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { colors } from '../../utils/colors'
import { Image } from '../components/ui/Image';
import About1 from '../images/AboutUsImage/About1.jpg';
import About2 from '../images/AboutUsImage/About2.jpg';
import Gallery8 from '../images/Gallery/Gallery8.jpg';
import History from '../images/AboutUsImage/History2.png';
import facilities1 from '../images/AboutUsImage/facilities1.jpg';
import facilities2 from '../images/AboutUsImage/facilities2.avif';
import facilities3 from '../images/AboutUsImage/facilities3.webp';
import facilities4 from '../images/AboutUsImage/facilities4.jpg';
// import { Title } from '@radix-ui/react-dialog';


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section with Breadcrumb */}
            <section className="relative h-[300px] overflow-hidden">
                <Image
                    src={About2}
                    alt="Temple Hero"
                    width={1920}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover object-center bg-black bg-opacity-50 "
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-white text-center"
                    >
                        <div className="flex items-center justify-center space-x-2 text-sm mb-4">
                            <a href="/" className="hover:text-accent">HOME</a>
                            <span>{'>'}</span>
                            <span>ABOUT US</span>
                        </div>
                        <h1 className="text-4xl font-bold">About Us</h1>
                    </motion.div>
                </div>
            </section>

            {/* Shlok Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={About1}
                                alt="Temple Image"
                                width={600}
                                height={600}
                                className="rounded-lg shadow-lg  "
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="p-8 bg-secondary text-white rounded-lg">
                                <h2 className="text-2xl font-bold mb-4 text-center">॥ श्लोक ॥</h2>
                                <p className="text-center italic">
                                    "धर्मो ज्ञानं च वैराग्यं भक्तिश्चेति चतुष्टयम् ।
                                    <br />
                                    स्वधर्मे च स्थिता नित्यं कुर्वन्ति स्म सदाऽखिलाः ॥"
                                </p>
                            </div>
                            <div className="p-8 bg-primary text-white rounded-lg">
                                <h3 className="text-2xl font-bold mb-4 text-center">
                                    "The fourfold path is religion, knowledge, detachment and devotion.
                                    They remained steadfast in their own religious duties and always performed their duties.</h3>
                                <p className="text-center">
                                    - LORD SWAMINARAYAN
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">HISTORY</h2>
                            <div className="prose prose-lg text-white">
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was a very holy day of March 9, 1997 Sunday, 10.15 am, the place of today's Sanskar Dham Gurukul and the place were full of the footfall of many saints and devotees, who were eager to sit on the lap of the almighty Lord, Purushottam Narayan Lord Shri Swaminarayan.
                                </p> <br />
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shri Harilal Ramjibhai Thakkar (Bachu Bapa) (a native of Ramgadh, resident of: Dhrangadhra), who was the owner of the land, was sitting beneath the tree of Rayan (yellow grapes) before H.H. Guruji; and both were in a deep discussion. The subject of their discussion was the seven-day Satsang-Shibir and its planning, to be held there. While talking, H.H. Swami Shir suddenly, by an inspiration of the Lord, said, “Bachu Bapa, this your garden… the land… can you give it to us for Gurukul?” Before Swami concludes his sentence, Bachu Bapa exclaimed with joy, saying, “Swami, let it be offered to the Lord Swaminarayan… You won't believe, last night I had dreamt of Lord Maharaj, who took my word and told me: 'see, if Swami asks you for the land to build a Gurukul, do not hesitate even for a moment, and do offer the whole…!' I gave Him a word in the dream…! Swami, you have kept my word. The land is donated from this very moment. Not even a handful of soil I can take from this land from today…!”
                                </p>
                                <br />
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was the very short and sweet 'land-acquisition' process for the Gurukul, which was fully inspired by Shri Hari. The place then was converted into a Gurukul to inculcate a great Sanskars in our future generations of India from 10/06/2001, morning 10.30, where cultivation of wheat, sorghum, brinjal, cotton and rice etc. was done previously. A billion salutes to Shri Bachu Bapa.
                                </p> <br />
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swami asked him, after he saw Bachu Bapa in a thoughtful gesture,“What are you thinking of, Bachu Bhai?” Bachu Bapa replied “I have some conditions in offering this land to you…”
                                    “Just do not hesitate, please, speak out freely…” Swami said.
                                </p> 
                            </div>
                        </motion.div>
                        <div className="space-y-6">
                            {[
                                { title: 'LORD SWAMINARAYAN', image: History },
                                { title: 'THE FOUNDER', image: Gallery8 }
                            ].map((history, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Card className="bg-background">
                                        <CardContent className="p-6 text-center">
                                            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                                                <Image
                                                    src={history.image}
                                                    alt={history.title}
                                                    width={96}
                                                    height={96}
                                                    className="w-full h-full object-cover object-center object-top"
                                                />
                                            </div>
                                            <h3 className="text-lg font-bold text-primary">{history.title}</h3>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enrollment Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                            ENROLL YOUR SON IN A HOLISTIC LEARNING JOURNEY
                        </h2>
                        <p className="text-text">
                            OUR COMMITMENT TO SWASTHYA, SHIKSHANA, SANSKAR AND
                            <br />
                            SAMARPANA ENSURES A WELL-ROUNDED EDUCTION
                        </p>
                        <Button
                            className="bg-primary text-white hover:bg-secondary"
                            size="lg"
                        >
                            APPLY FOR ADMISSION
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: 'PRATHNA MANDIR', image: facilities1 },
                            { title: 'YAGNSHALA', image: facilities2 },
                            { title: 'GAUSHALA', image: facilities3 },
                            { title: 'HOSTEL', image: facilities4 }
                        ].map((facility, index) => (
                            <motion.div
                                key={facility.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4">
                                    <Image
                                        src={facility.image}
                                        alt={facility.title}
                                        width={162}
                                        height={162}
                                        className="rounded-full img-fluid"
                                    />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-secondary me-5">{facility.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

