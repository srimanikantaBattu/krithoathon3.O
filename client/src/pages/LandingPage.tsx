"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Globe,
  Search,
  Users,
  CheckCircle,
  MessageCircle,
  FileText,
  ArrowRight,
  Star,
  Factory,
  ShoppingBag,
  Truck,
  Shield,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Add custom animation class
const pulseAnimation = {
  "animate-pulse-slow": {
    animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: 0.7,
    },
    "50%": {
      opacity: 0.3,
    },
  },
}

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="border-b border-zinc-800 backdrop-blur-md bg-black/80 fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Bharat Vyaaapar
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to={"/"} className="text-zinc-400 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link to={"/"} className="text-zinc-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link to={"/"} className="text-zinc-400 hover:text-white transition-colors">
              Benefits
            </Link>
            <Link to={"/"} className="text-zinc-400 hover:text-white transition-colors">
              Use Cases
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50"
            >
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-zinc-800 text-emerald-400 hover:bg-zinc-800">
              Connecting Global Buyers with Indian Expertise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              Streamline Your Global Sourcing from India
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Connect with verified Indian sourcing agents to facilitate procurement, manufacturing coordination, and
              supplier discovery across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg py-6 px-8 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                Post a Sourcing Request
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50 text-lg py-6 px-8 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
              >
                Become a Sourcing Agent
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Glowing orb decorations */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-zinc-800 text-emerald-400 hover:bg-zinc-800">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bharat Vyaaapar Works</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our platform streamlines communication, ensures quality control, and allows agents to handle local
              logistics while keeping buyers informed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-emerald-500" />,
                title: "Post Your Requirements",
                description:
                  "International buyers post their sourcing needs, including product specifications, quantity, quality standards, and delivery expectations.",
              },
              {
                icon: <Users className="h-10 w-10 text-emerald-500" />,
                title: "Connect with Verified Agents",
                description:
                  "Verified Indian sourcing agents, listed by region and category expertise, respond with proposals tailored to your needs.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
                title: "Track Progress & Delivery",
                description:
                  "The platform facilitates structured communication, documentation, and progress tracking between buyers and agents.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-zinc-800/50 border-zinc-700 overflow-hidden group hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="mb-6 p-4 rounded-full bg-zinc-700/50 inline-block group-hover:bg-emerald-900/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl"></div>
            <Card className="bg-zinc-800/30 border-zinc-700 overflow-hidden relative">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-5 gap-4 items-center">
                  {[
                    { icon: <ShoppingBag className="h-6 w-6" />, text: "Buyer Creates Request" },
                    { icon: <ArrowRight className="h-6 w-6" /> },
                    { icon: <Users className="h-6 w-6" />, text: "Agent Selection" },
                    { icon: <ArrowRight className="h-6 w-6" /> },
                    { icon: <Factory className="h-6 w-6" />, text: "Local Procurement" },
                    { icon: <ArrowRight className="h-6 w-6" /> },
                    { icon: <CheckCircle className="h-6 w-6" />, text: "Quality Checks" },
                    { icon: <ArrowRight className="h-6 w-6" /> },
                    { icon: <Truck className="h-6 w-6" />, text: "International Shipping" },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center ${step.text ? "" : "hidden md:flex"}`}
                    >
                      {step.text && (
                        <>
                          <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mb-2 text-emerald-400">
                            {step.icon}
                          </div>
                          <span className="text-sm text-center">{step.text}</span>
                        </>
                      )}
                      {!step.text && step.icon}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-zinc-800 text-emerald-400 hover:bg-zinc-800">Platform Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tools for Global Sourcing</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Our platform offers comprehensive features to make your sourcing experience seamless and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-6 w-6 text-emerald-400" />,
                title: "Verified Agent Profiles",
                description: "Detailed profiles including experience, industries served, languages, and sample work.",
              },
              {
                icon: <MessageCircle className="h-6 w-6 text-emerald-400" />,
                title: "Request & Proposal System",
                description: "Structured system for sourcing jobs and receiving detailed proposals.",
              },
              {
                icon: <MessageCircle className="h-6 w-6 text-emerald-400" />,
                title: "Internal Communication",
                description: "Chat, file sharing, and milestone tracking for complete transparency.",
              },
              {
                icon: <Search className="h-6 w-6 text-emerald-400" />,
                title: "Advanced Search Filters",
                description: "Filter by region, product category, certifications, or factory size.",
              },
              {
                icon: <Star className="h-6 w-6 text-emerald-400" />,
                title: "Rating & Review System",
                description: "Evaluate agents based on past performance and client satisfaction.",
              },
              {
                icon: <FileText className="h-6 w-6 text-emerald-400" />,
                title: "Document Management",
                description: "Integrated system for product specs, quality checklists, compliance, and contracts.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-zinc-800/30 border-zinc-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-zinc-700/50">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-zinc-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 relative bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-zinc-800 text-emerald-400 hover:bg-zinc-800">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Bharat Vyaaapar</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Our platform offers unique advantages for international buyers looking to source from India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-xl blur-xl"></div>
              <Card className="h-full bg-zinc-800/30 border-zinc-700 relative z-10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                    For International Buyers
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Reduces miscommunication and cultural friction with Indian suppliers",
                      "Access to localized expertise without building in-house India teams",
                      "Greater accountability and visibility into the supply chain process",
                      "Tap into India's vast and varied manufacturing ecosystem effectively",
                      "Diversify or de-risk your supply chain by adding Indian vendors",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-xl blur-xl"></div>
              <Card className="h-full bg-zinc-800/30 border-zinc-700 relative z-10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
                    For Sourcing Agents
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Connect with international clients seeking your expertise",
                      "Showcase your regional and industry specializations",
                      "Build your reputation through verified reviews and ratings",
                      "Streamlined communication and documentation tools",
                      "Expand your business beyond local networks to global markets",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-zinc-800 text-emerald-400 hover:bg-zinc-800">Real World Applications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              See how businesses are leveraging Bharat Vyaaapar to transform their sourcing operations.
            </p>
          </div>

          <Card className="bg-zinc-800/30 border-zinc-700 mb-8 overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-video rounded-lg bg-zinc-700/50 flex items-center justify-center">
                    <ShoppingBag className="h-16 w-16 text-emerald-400/50" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <Badge className="mb-2 bg-zinc-700 text-emerald-400 hover:bg-zinc-700">Featured Case Study</Badge>
                  <h3 className="text-xl font-bold mb-3">Canadian Retail Brand: Custom Organic Cotton Tote Bags</h3>
                  <p className="text-zinc-300 mb-4">
                    A Canadian retail brand needed custom organic cotton tote bags. They created a request on the
                    platform. An Indian sourcing agent with textile experience in Tamil Nadu connected them to two
                    manufacturers, arranged samples, managed quality checks, and coordinated export logistics on the
                    buyer's behalf.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      Textiles
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      Organic Materials
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      Tamil Nadu
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      Export Logistics
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Small-to-Medium Businesses",
                description:
                  "Small-to-medium international businesses needing reliable suppliers in India without the resources for a dedicated procurement team.",
                tags: ["SMEs", "Cost Efficiency", "New Markets"],
              },
              {
                title: "Supply Chain Diversification",
                description:
                  "Buyers looking to diversify or de-risk their supply chain by adding Indian vendors alongside existing suppliers from other regions.",
                tags: ["Risk Management", "Diversification", "Resilience"],
              },
              {
                title: "Market Entry",
                description:
                  "Companies entering the Indian market for the first time, requiring on-ground knowledge of local regulations and business practices.",
                tags: ["Market Entry", "Local Knowledge", "Compliance"],
              },
              {
                title: "Language & Cultural Bridge",
                description:
                  "Procurement teams seeking agents fluent in local languages and cultural nuances to facilitate smoother business relationships.",
                tags: ["Communication", "Cultural Expertise", "Negotiation"],
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="bg-zinc-800/30 border-zinc-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-zinc-300 text-sm mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-zinc-700 text-zinc-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="bg-zinc-800/30 border-zinc-700 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                    Ready to Transform Your Sourcing Process?
                  </h2>
                  <p className="text-zinc-300 mb-6">
                    Join Bharat Vyaaapar today and connect with verified Indian sourcing agents to streamline your
                    procurement, manufacturing coordination, and supplier discovery across India.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                      Get Started Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                    >
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Globe className="h-5 w-5 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Join Our Network</h3>
                          <p className="text-sm text-zinc-400">5,000+ Agents & 10,000+ Buyers</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Access verified sourcing agents",
                          "Streamline communication",
                          "Ensure quality control",
                          "Track progress in real-time",
                          "Simplify international logistics",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm text-zinc-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Bharat Vyaaapar
                </span>
              </div>
              <p className="text-zinc-400 mb-4">
                Connecting international buyers with verified Indian sourcing agents for seamless procurement.
              </p>
              <div className="flex gap-4">
                <Link to={"/"} className="text-zinc-500 hover:text-emerald-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link to={"/"} className="text-zinc-500 hover:text-emerald-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link to={"/"} className="text-zinc-500 hover:text-emerald-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.047-1.023-.058-1.351-.058-3.807v-.468zM12 5.834c-3.314 0-6.002 2.688-6.002 6.002 0 3.314 2.688 6.002 6.002 6.002 3.314 0 6.002-2.688 6.002-6.002 0-3.314-2.688-6.002-6.002-6.002zm0 1.802c2.323 0 4.2 1.879 4.2 4.2 0 2.323-1.879 4.2-4.2 4.2-2.323 0-4.2-1.879-4.2-4.2 0-2.323 1.879-4.2 4.2-4.2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to={"/"} className="text-zinc-400 hover:text-emerald-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-zinc-400 hover:text-emerald-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-zinc-400 hover:text-emerald-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to={"/"} className="text-zinc-400 hover:text-emerald-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-zinc-400 hover:text-emerald-400">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-zinc-400 hover:text-emerald-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-zinc-400 hover:text-emerald-400">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-zinc-400 mb-4">Subscribe to our newsletter for the latest news and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-zinc-800 border border-zinc-700 rounded-l-md py-2 px-4 text-zinc-400 focus:outline-none focus:border-emerald-500"
                />
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-r-md">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-zinc-500">
            &copy; {new Date().getFullYear()} Bharat Vyaaapar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
