import './Footer.css';
import github from '../../assets/images/icon-github.svg'
import linkedin from '../../assets/images/icon-linkedin.svg'
import frontendMentor from '../../assets/images/icon-frontend-mentor.svg'
import twitter from '../../assets/images/icon-twitter.svg'

function Footer(){
    return (
        <>
            <footer className='bg-grey1'>
                <section className='md:mx-30'>
                    <section className='text-center mb-10'>
                        <h3 className='heading-l pt-15 mb-6'>Contact</h3>
                        <p className='body-text text-center ml-4 mr-4'>  I would love to hear about your project and how I could help. Please 
                        fill in the form, and I’ll get back to you as soon as possible.</p>
                    </section>
                    <form className='pb-18' action="/" method="POST">
                        <ul className='ml-4 mr-4'>
                            <li className='border-b-1 mb-6 flex flex-col'>
                            <label className='ml-4 color-grey-light leading-[26px] tracking-[-0.22px] text-[16px]' for="name">NAME</label>
                            <input className='' type="text" id="name" name="user_name" />
                            </li>
                            <li className='border-b-1 flex flex-col mb-6'>
                            <label className='ml-4 color-grey-light leading-[26px] tracking-[-0.22px] text-[16px]' for="mail">EMAIL</label>
                            <input type="email" id="mail" name="user_mail" />
                            </li>
                            <li className='border-b-1 flex flex-col mb-6'>
                            <label className='ml-4 color-grey-light leading-[26px] tracking-[-0.22px] text-[16px]' for="msg">MESSAGE</label>
                            <textarea id="msg" name="user_message"></textarea>
                            </li>
                        </ul>
                        <div className='flex justify-end mr-4'>
                            <button className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]' type="submit">SEND MESSAGE</button>
                        </div>
                        </form>
                </section>
                <section className="border-t border-[#D9D9D9] mx-4 pb-20 md:pb-10 md:flex md:justify-around">
                    <h1 className="heading-m text-center mb-6 pt-15 md:pt-5 md:mb-0">adamkeyes</h1>
                    <div className="flex justify-center items-center md:pt-5">
                        <a href="https://github.com/NMokhmad" className="shrink-0 mr-6 inline-block">
                        <img src={github} alt="logo-github" className="block w-auto h-auto" />
                        </a>
                        <a href="https://github.com/NMokhmad" className="shrink-0 mr-6 inline-block">
                        <img src={frontendMentor} alt="logo-frontend-mentor" className="block w-auto h-auto" />
                        </a>
                        <a href="https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/" className="shrink-0 mr-6 inline-block">
                        <img src={linkedin} alt="logo-linkedin" className="block w-auto h-auto" />
                        </a>
                        <a href="https://github.com/NMokhmad" className="shrink-0 inline-block">
                        <img src={twitter} alt="logo-twitter" className="block w-auto h-auto" />
                        </a>
                    </div>
                </section>

            </footer>
        </>

    );
};

export default Footer;