import html from '../assets/html.webp'
import css from '../assets/css.webp'
import react from '../assets/react.png'
import JavaScript from '../assets/JavaScript.png'
import Bootstrap from '../assets/bootstrap.webp'
import Tailwind from '../assets/tailwind.webp'
import Node from '../assets/nodejs.png'
import Express from '../assets/express.png'
import MongoDB from '../assets/mongodb.png'
import MySQL from '../assets/mysql.png'
import Postman from '../assets/postman.webp'
import Github from '../assets/github.png'
import Python from '../assets/python.png'
import PowerBi from '../assets/powerbi.png'
import Tableau from '../assets/Tableau.png'
import Excel from '../assets/excel.png'

const Skills = ({darkMode}) => {
    const skills = [
        {name:'HTML', icon:html, level:80, color:'from-orange-500 to-amber-500'},
        {name:'CSS', icon:css, level:85, color:'from-orange-500 to-amber-500'},
        {name:'React', icon:react, level:65, color:'from-orange-500 to-amber-500'},
        {name:'JavaScript', icon:JavaScript, level:75, color:'from-orange-500 to-amber-500'},
        {name:'Bootstrap', icon:Bootstrap, level:90, color:'from-orange-500 to-amber-500'},
        {name:'Tailwind', icon:Tailwind, level:90, color:'from-orange-500 to-amber-500'},
        {name:'Node', icon:Node, level:80, color:'from-orange-500 to-amber-500'},
        {name:'Express', icon:Express, level:75, color:'from-orange-500 to-amber-500'},
        {name:'MongoDB', icon:MongoDB, level:80, color:'from-orange-500 to-amber-500'},
        {name:'MySQL', icon:MySQL, level:92, color:'from-orange-500 to-amber-500'},
        {name:'Postman', icon:Postman, level:95, color:'from-orange-500 to-amber-500'},
        {name:'Github', icon:Github, level:90, color:'from-orange-500 to-amber-500'},
        {name:'Python', icon:Python, level:75, color:'from-orange-500 to-amber-500'},
        {name:'Power BI', icon:PowerBi, level:85, color:'from-orange-500 to-amber-500'},
        {name:'Tableau', icon:Tableau, level:70, color:'from-orange-500 to-amber-500'},
        {name:'Excel', icon:Excel, level:80, color:'from-orange-500 to-amber-500'},
    ]

  return (
    <section
      id="skills"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1
            className="sm:text-4xl text-3xl font-bold title-font mb-4"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Skills
            </span>
          </h1>
        </div>

        {/* Skills Grid — 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 80}`}
            >
              <div
                style={{
                  background: darkMode
                    ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                  borderColor: darkMode ? '#374151' : '#e5e7eb'
                }}
                className="h-full p-5 rounded-2xl border hover:border-orange-500/50
                  transition-all duration-300 hover:-translate-y-2 group
                  hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]"
              >
                {/* Icon + Name Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      background: darkMode
                        ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                        : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                    }}
                    className="w-12 h-12 rounded-xl p-2 flex items-center justify-center
                      flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    className="text-base font-extrabold"
                    style={{ color: darkMode ? 'white' : '#1f2937' }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Proficiency Label + % */}
                <div className="mb-2 flex justify-between items-center">
                  <span
                    className="text-base font-semibold"
                    style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                  >
                    Proficiency
                  </span>
                  <span
                    className="text-base font-semibold"
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full rounded-full h-2 overflow-hidden"
                  style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb' }}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}
                      transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Bottom accent line */}
                <div className={`mt-4 pt-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div
                    className="h-1 rounded-full opacity-70 w-1/3 group-hover:w-full
                      transition-all duration-500"
                    style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills