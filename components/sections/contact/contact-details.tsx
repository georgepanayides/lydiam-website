"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight, Globe2 } from "lucide-react";
import Link from "next/link";

const locations = [
  {
    country: "United Kingdom",
    city: "London",
    address: "17 Hannover Square, London, W1S 1BN",
    timezone: "GMT/BST",
    coordinates: "51.5074° N, 0.1278° W"
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    address: "Meydan Freezone, Nad Al Sheba, P.O. Box 9305",
    timezone: "GST (UTC+4)",
    coordinates: "25.2048° N, 55.2708° E"
  },
  {
    country: "India",
    city: "Kerala",
    address: "Fajariah Square, Pillar 105, Companypadi, Aluva, 683106",
    timezone: "IST (UTC+5:30)",
    coordinates: "10.8505° N, 76.2711° E"
  },
];

export const ContactDetails = () => {
  return (
    <section id="offices" className="py-24 bg-gray-50 dark:bg-dark-800/30 border-y border-gray-100 dark:border-dark-800">
      <div className="container mx-auto px-4">
        
        {/* Global Presence Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
                <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                    Global Presence
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Strategically positioned across key financial hubs to serve our clients worldwide.
                </p>
            </FadeIn>
        </div>

        {/* Office Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20">
            {locations.map((loc, index) => (
            <FadeIn key={index} className="group relative bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-100 dark:border-dark-700 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe2 className="w-24 h-24 text-primary-500" />
                </div>
                
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                        <MapPin className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-bold text-2xl text-dark-900 dark:text-white mb-1">{loc.city}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{loc.country}</p>
                    
                    <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                        <p className="leading-relaxed border-l-2 border-gray-100 dark:border-dark-700 pl-4">
                            {loc.address}
                        </p>
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-dark-700">
                            <span className="bg-gray-100 dark:bg-dark-700 px-3 py-1 rounded-full text-xs font-medium">
                                {loc.timezone}
                            </span>
                            <span className="text-xs font-mono opacity-70">
                                {loc.coordinates}
                            </span>
                        </div>
                    </div>
                </div>
            </FadeIn>
            ))}
        </StaggerContainer>

        {/* Direct Contact Methods */}
        <div className="mt-20">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                
                <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-2">Email Us</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">For general inquiries and support</p>
                    <a href="mailto:Info@lydiamgroup.com" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                        Info@lydiamgroup.com
                    </a>
                </div>

                <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                        <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-2">Call Us</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Mon-Fri from 9am to 6pm GMT</p>
                    <a href="tel:+442035820078" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                        +44 (0) 20 3582 0078
                    </a>
                </div>

                <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                        <Linkedin className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-2">Follow Us</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Stay updated with our latest news</p>
                    <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/company/lydiam-group/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                            LinkedIn
                        </Link>
                        <span className="text-gray-300 dark:text-dark-600">•</span>
                        <Link href="https://www.instagram.com/lydiamgroup/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                            Instagram
                        </Link>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};
