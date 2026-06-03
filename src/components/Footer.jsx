import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();

    const socialLinkClass = `w-10 h-10 rounded-full flex items-center
        justify-center hover:scale-110 transition-all
        hover:bg-gradient-to-r hover:from-orange-500
        hover:to-amber-500 hover:text-white
        bg-[#374151] dark:bg-[#f3f4f6]
        text-white dark:text-[#374151]`

    return (
        <footer
            style={{
                background: darkMode
                    ? 'linear-gradient(to bottom, #000000, #111827)'
                    : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
                borderColor: darkMode ? '#374151' : '#d1d5db'
            }}
            className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* LEFT — Name & Role */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-1 text-orange-500">
                            Portfolio
                        </h3>
                        <p className="text-sm"
                            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                            Full Stack Developer & Data Analyst
                        </p>
                    </div>

                    {/* CENTER — Social Icons */}
                    <div className="flex gap-4">
                        <a href="https://github.com/patilradhey" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/radhey-patil/" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/radheypatil_18/" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                            <FaInstagram />
                        </a>
                    </div>

                    {/* RIGHT — Year & Name */}
                    <div className="text-center md:text-right">
                        <p className="text-sm flex items-center justify-center md:justify-end gap-1"
                            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                            @ {currentYear} Made with
                            <FaHeart className="text-red-500" />
                            by
                            <span className="text-orange-500 font-medium">
                                Radhey
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer