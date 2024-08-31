import GlowCard from '../helper/glow-card';
import { experiences } from '../../../utils/constants';

function Experience() {
  return (
    <section className="w-full py-8 flex justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>
        <div className="relative w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 hidden lg:block"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-8 w-full flex flex-col lg:flex-row items-center relative ${index === experiences.length - 1 ? '' : 'lg:mb-8'}`}>
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-secondary rounded-full h-4 w-4 border-2 border-white hidden lg:block"></div>

              {index % 2 === 0 ? (
                <>
                  <div className="w-full lg:w-1/2 text-center lg:text-right lg:pr-8 mb-4 lg:mb-0">
                    <span className="text-gray-400 text-sm">{exp.date}</span>
                  </div>
                  <div className="w-full lg:w-1/2 lg:pl-8">
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
                </>
              ) : (
                <>
                  <div className="w-full lg:w-1/2 lg:pr-8">
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
                  <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8 mt-4 lg:mt-0">
                    <span className="text-gray-400 text-sm">{exp.date}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
