import React from "react";
import { Utensils } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="relative grid grid-cols-2 gap-6">
              <div className="relative h-80 rounded-2xl overflow-hidden ">
                <img
                  src="/c.jpg"
                  alt="Chef team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 mt-12 rounded-2xl overflow-hidden ">
                <img
                  src="/vegies.jpg"
                  alt="Fresh ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 mt-6 rounded-2xl overflow-hidden ">
                <img
                  src="/b.jpg"
                  alt="b.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl">
                <img
                  src="/couple.jpg"
                  alt="Signature dish"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg lg:ml-auto">
              <span className="inline-block mb-4 text-amber-600 text-3xl font-bold">
                About Us
              </span>
              <h2 className="mb-8 text-4xl lg:text-5xl font-bold text-gray-800">
                <Utensils className="inline-block mr-3 h-12 w-12 text-amber-600" />
                <span className="text-amber-400">Restoran </span>

                Crafting Culinary Excellence
              </h2>
              <p className="mb-10 text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci inventore dolorem quas repellendus rerum officia a consequatur saepe natus, dolores, cumque similique, cupiditate et numquam. Saepe ducimus autem laborum obcaecati.
              </p>
              <p className="mb-10 text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident exercitationem nobis fuga natus assumenda unde quas iste, ex quidem explicabo perspiciatis earum. Aspernatur, quos.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap -mx-4 mb-10">
                <div className="w-1/2 px-4 mb-8">
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
                <div className="w-1/2 px-4 mb-8">
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                    <div className="text-gray-600">Famous Master Chefs</div>
                  </div>
                </div>
              </div>

              <button className="inline-flex justify-center items-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all h-16 w-48">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;