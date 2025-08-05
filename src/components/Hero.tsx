
import { Truck, Shield, Clock, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600 font-medium">5-Star Service</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium <span className="text-blue-600">White Glove</span> Mattress Delivery
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience hassle-free mattress delivery with our professional white glove service. 
              We handle everything from delivery to setup, so you can sleep easy.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <Truck className="h-6 w-6 text-blue-600 mr-3" />
                <span className="font-medium text-gray-700">Free Delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <span className="font-medium text-gray-700">Fully Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <span className="font-medium text-gray-700">Same Day Setup</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg text-center"
              >
                Get Free Quote
              </a>
              <a
                href="tel:2139807171"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg text-center"
              >
                Call Now: (213) 980-7171
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <img
                src="/lovable-uploads/feebaba1-d07d-404e-9772-3a59b81b332d.png"
                alt="Professional mattress delivery service team"
                className="w-full h-48 lg:h-64 object-cover rounded-xl"
              />
              
              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Amazing service! They were professional, careful, and set everything up perfectly."
                </p>
                <p className="text-xs font-semibold text-gray-800 mt-1">- Sarah M.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
