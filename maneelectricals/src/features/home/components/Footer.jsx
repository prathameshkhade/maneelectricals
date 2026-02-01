import { PhoneCall, MapPinIcon, MailIcon } from "lucide-react";
import Lottie from 'lottie-react';
import heartAnimation from '../../../assets/animations/heart.json';

const Footer = () => {
    return (
        <footer 
            id="about"
            className="relative py-16 px-6 border-t border-border"
            style={{background: 'hsl(220 15% 5%)'}}
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div 
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                            style={{ boxShadow: '0 0 15px hsl(38 95% 55% / 0.4)' }}
                            >
                            <span className="text-primary-foreground font-bold">⚡</span>
                            </div>
                            <span className="text-xl font-bold">
                            <span className="text-foreground">MANE</span>{' '}
                            <span className="text-primary">ELECTRICALS</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Your trusted partner for all electrical needs. 
                            Quality products, expert advice, and reliable service since 1998.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">LED Bulbs</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Ceiling Fans</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Wiring & Cables</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Switches & Boards</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-4 hover:underline hover:duration-1000">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPinIcon className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>Shop No 1, Rajarampuri 14<sup>th</sup> Lane, near Police Station, Poorvarang, Mahalaxminagar, Kolhapur, Maharashtra 416008</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneCall className="w-5 h-5 shrink-0" />
                                <a href="tel:+919284731515">+91 92847 31515</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MailIcon className="w-5 h-5 shrink-0" />
                                <a href="mailto:info@maneelectricals.com">info@maneelectricals.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center font-semibold">
                    <p className="">
                        © 2024 Mane Electricals. All rights reserved. | Powering homes with excellence.
                    </p>
                    <div className="flex items-center justify-center">
                        <span>Made with</span>
                        <Lottie 
                            loop autoplay
                            animationData={heartAnimation} draggable={true}
                            style={{ width: '65px', height: '65px', display: 'inline-block' }} 
                        />
                        <span>
                            by {' '}
                            <a href="https://prathameshkhade.github.io/portfolio" target="_blank">
                                Prathamesh Khade
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;