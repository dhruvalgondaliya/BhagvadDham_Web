import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, GraduationCap, School, Clock } from 'lucide-react'
import { Button } from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Image } from '../components/ui/Image'
import About2 from '../images/AboutUsImage/About2.jpg';
import building from '../images/School/School-building.jpg';
const features = [
  {
    icon: BookOpen,
    title: "Rich Curriculum",
    description: "Blend of academic excellence and spiritual wisdom"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Dedicated teachers with extensive experience"
  },
  {
    icon: Trophy,
    title: "Achievement",
    description: "Consistent academic and co-curricular excellence"
  }
]

const stats = [
  { number: "1000+", label: "Students" },
  { number: "50+", label: "Teachers" },
  { number: "25+", label: "Years Experience" },
  { number: "100%", label: "Results" }
]

export default function SchoolPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src={About2}
          alt="School Hero"
          width={1920}
          height={300}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-sm mb-4">
              <a
                href="/"
                className='hover:text-accent transition-colors'
              >
                HOME
              </a>
              <span>{'>'}</span>
              <span>SCHOOL</span>
            </div>
            <h1 className="text-4xl font-bold">Our School</h1>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className='text-3xl md:text-4xl font-bold text-secondary'>
                WELCOME TO SWAMINARAYAN HIGH SCHOOL
              </h2>
              <p className='text-text text-lg leading-relaxed'>
                Our school provides a unique blend of modern education and traditional values,
                nurturing students to become well-rounded individuals with strong academic
                foundations and moral character.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className='bg-primary text-white hover:bg-secondary'
                >
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  className='border-primary text-primary hover:bg-primary hover:text-white'
                >
                  Virtual Tour
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={building}
                alt="School Building"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-secondary'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <feature.icon className='w-12 h-12 mx-auto mb-4 text-primary' />
                    <h3 className='text-xl font-bold text-secondary mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-text'>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className='text-4xl font-bold text-primary mb-2'>
                  {stat.number}
                </div>
                <div className='text-text'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className='py-16 bg-primary relative overflow-hidden'>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ENROLL YOUR SON IN HOLISTIC LEARNING JOURNEY
            </h2>
            <p className="text-white/90 mb-8">
              Join our community where academic excellence meets spiritual growth
            </p>
            <Button
              className='bg-accent text-text hover:bg-white'
              size="lg"
            >
              APPLY FOR ADMISSION
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl font-bold text-center text-secondary mb-12'
          >
            Our Facilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: School, title: "Modern Classrooms" },
              { icon: BookOpen, title: "Well-stocked Library" },
              { icon: Users, title: "Sports Complex" },
              { icon: GraduationCap, title: "Science Labs" },
              { icon: Clock, title: "Computer Lab" },
              { icon: Trophy, title: "Auditorium" }
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className='group hover:border-primary transition-colors'>
                  <CardContent className="p-6">
                    <facility.icon className='w-8 h-8 text-primary mb-4' />
                    <h3 className='text-xl font-bold text-secondary group-hover:text-primary transition-colors'>
                      {facility.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

