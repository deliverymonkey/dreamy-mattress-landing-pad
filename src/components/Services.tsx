
import { Truck, Home, Recycle, Shield, Clock, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "White Glove Delivery",
      description: "Professional delivery team brings your mattress directly to your bedroom with care and precision."
    },
    {
      icon: Home,
      title: "Room of Choice Setup",
      description: "We'll place and set up your new mattress exactly where you want it, including bed frame assembly."
    },
    {
      icon: Recycle,
      title: "Old Mattress Removal",
      description: "Eco-friendly disposal of your old mattress included with every delivery at no extra cost."
    },
    {
      icon: Shield,
      title: "Damage Protection",
      description: "Fully insured service with comprehensive protection for your home and new mattress."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose your preferred delivery window, including evenings and weekends for your convenience."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Trained, uniformed, and background-checked delivery specialists committed to excellence."
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our <span className="text-blue-600">White Glove Service?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond basic delivery to provide a premium experience that makes getting your new mattress effortless and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="bg-blue-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready for Premium Delivery Service?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their mattress delivery needs.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg inline-block"
            >
              Schedule Your Delivery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
