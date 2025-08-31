import './Header.css'
import github from '../../assets/images/icon-github.svg'
import linkedin from '../../assets/images/icon-linkedin.svg'
import frontendMentor from '../../assets/images/icon-frontend-mentor.svg'
import twitter from '../../assets/images/icon-twitter.svg'
// import profilMobile from '../../assets/images/image-profile-mobile.webp'
// import profilTablet from '../../assets/images/image-profile-tablet.webp'
// import ring from '../../assets/images/pattern-rings.svg'
// import circle from '../../assets/images/pattern-circle.svg'


function Header(){
   return (
        <>
            <header className="flex flex-col items-center">
                <section className='flex flex-col items-center md:grid md:grid-cols-2 md:items-start md:mb-16'>
                    <h1 className='mb-3 heading-m md:mt-4 md:ml-4'>adamkeyes</h1>
                    <div className='flex flex-col items-center bg-[url(../../assets/images/image-profile-mobile.webp)] bg-contain bg-no-repeat w-[174px] h-[383px] md:row-span-3 md:ml-auto md:w-[322px] md:h-[600px] md:bg-[url(../../assets/images/image-profile-tablet.webp)]'>
                        <div className='flex flex-row justify-around text-center md:flex md:justify-end'>
                            <a href="" className='mr-4 md:mt-6 md:ml-14'><img src={github} alt="github-logo"/></a>
                            <a href="" className='mr-4 md:mt-6 md:mr-'><img src={frontendMentor} alt="frontendMentor-logo" /></a>
                            <a href="" className='mr-4 md:mt-6 md:mr-'><img src={linkedin} alt="linkedin-logo" /></a>
                            <a href="" className='md:mt-6'><img src={twitter} alt="twitter-logo" /></a>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center md:text-left md:items-start md:ml-4 md:relative'>
                        <p className='md:text-left md:text-[72px] md:tracking-[-2.05px] md:font-bold '>Nice to meet you! I'm <strong className=''>Adam Keyes</strong></p>
                        <p className='md:mb-'>Based in the UK , I'm front-end developer passionate about buildings accessible web apps that users love.</p>
                        <button className='underline decoration-2 underline-offset-14 decoration-[#4EE1A0] md:mt- md:text-[16px] md:tracking-[2.29px] md:font-bold'>CONTACT ME</button>
                    </div>
                </section>
                <section className='mt-5 text-center border-t-1 border-b-1 md:grid md:grid-cols-2 md:gap-6 md:mb-16'>
                    <div>
                        <p className='heading-l mb-1 mt-10'>HTML</p>
                        <p className='mb-4 '>4 Years Experience</p>
                    </div>
                    <div>
                        <p className='heading-l mb-1 mb-1 md:mt-10'>CSS</p>
                        <p className='mb-4'>4 Years Experience</p>
                    </div>
                    <div>
                        <p className='heading-l mb-1'>Javascript</p>
                        <p className='mb-4'>4 Years Experience</p>
                    </div>
                    <div>
                        <p className='heading-l mb-1'>Accessibility</p>
                        <p className='mb-4'>4 Years Experience</p>
                    </div>
                    <div>
                        <p className='heading-l mb-1'>React</p>
                        <p className='mb-4'>3 Years Experience</p>
                    </div>
                    <div>
                        <p className='heading-l mb-1'>Sass</p>
                        <p className='mb-8'>3 Years Experience</p>
                    </div>
                </section>
            </header>
        </>
   )
}

export default Header;