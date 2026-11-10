import React from 'react';
import { Phone } from 'lucide-react';

const FloatButtons = () => {
    return (
        <aside aria-label="Quick contact buttons" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            <div className="pointer-events-auto">
                {/* Call Now Button */}
                <a
                    href="tel:+918589909034"
                    className="fixed bottom-[70px] md:bottom-[106px] right-3 sm:right-5 md:right-8 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,99,235,0.45)] hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation"
                    title="Call Now: +91 85899 09034"
                    aria-label="Call B2P International now"
                >
                    <Phone className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/918589909034?text=Hi%20B2P%20International%2C%20I%20came%20from%20your%20website%20and%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-3 sm:bottom-4 md:bottom-8 right-3 sm:right-5 md:right-8 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation"
                    title="WhatsApp Us"
                    aria-label="Chat with B2P International on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 448 512" aria-hidden="true">
                        <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-2.1-3.6 2.1-3.2 7.6-14.1 1.4-2.8 2.8-5.6 1.4-8.4-1.4-2.8-12.5-30.2-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </a>
            </div>
        </aside>
    );
};

export default FloatButtons;
