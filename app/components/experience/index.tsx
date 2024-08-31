import GlowCard from '../helper/glow-card';
import { experiences } from '../../../utils/constants';

function Experience() {
  return (
    <section className="w-full py-8 flex justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>
        <div className="relative w-full">
          {/* Línea temporal */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 md:block hidden"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="w-full flex flex-col md:flex-row items-center relative">
              {/* Punto en la línea temporal */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-secondary rounded-full h-4 w-4 border-2 border-white md:block hidden"></div>

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                <span className="text-gray-400 text-sm">{exp.date}</span>
              </div>

              <div className={`w-full md:w-1/2 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <GlowCard identifier={exp.id.toString()}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                    <ul className="mt-2 text-gray-400 list-arrow list-inside">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-justify mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>
              </div>

              {/* Línea temporal en móviles como divisor, oculta en la última tarjeta */}
              {index !== experiences.length - 1 && (
                <div className="w-full h-2 border-t-2 border-gray-300 my-8 md:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
