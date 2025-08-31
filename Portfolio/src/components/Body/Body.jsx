import './Body.css'
import project1 from '../../assets/images/thumbnail-project-1-small.webp'
import project2 from '../../assets/images/thumbnail-project-2-small.webp'
import project3 from '../../assets/images/thumbnail-project-3-small.webp'
import project4 from '../../assets/images/thumbnail-project-4-small.webp'
import project5 from '../../assets/images/thumbnail-project-5-small.webp'
import project6 from '../../assets/images/thumbnail-project-6-small.webp'


function Body(){
    return(
        <>
        <section className='flex flex-col mr-4 ml-4 mb-20'>
            <div className='flex flex-row justify-between mb-8'>
                <h2 className='heading-l'>Projects</h2>
                <button className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]'>CONTACT ME</button>
            </div>
            <section className='md:grid md:grid-cols-2 md:gap-5'>
                <article className='mb-8'>
                    <img className='mb-6' src={project1} alt="" />
                    <h3 className='mb-4 heading-m'>DESIGN PORTFOLIO</h3>
                    <div className='flex flex-row mb-4' >
                        <p className='mr-4 body-text'>HTML</p>
                        <p className='body-text'>CSS</p>
                    </div>
                    <div className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]'>
                        <a className='mr-6' href="">VIEW PROJECT</a>
                        <a href="">VIEW CODE</a>
                    </div>
                </article>
                <article className='mb-8'>
                    <img className='mb-6' src={project2} alt="" />
                    <h3 className='mb-4 heading-m'>E-LEARNING PAGE</h3>
                    <div className='flex flex-row mb-4' >
                        <p className='mr-4 body-text'>HTML</p>
                        <p className='body-text'>CSS</p>
                    </div>
                    <div className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]'>
                        <a className='mr-6' href="">VIEW PROJECT</a>
                        <a href="">VIEW CODE</a>
                    </div>
                </article>
                <article className='mb-8'>
                    <img className='mb-6' src={project3} alt="" />
                    <h3 className='mb-4 heading-m'>TODO WEB APP</h3>
                    <div className='flex flex-row mb-4' >
                        <p className='mr-4 body-text'>HTML</p>
                        <p className='body-text'>CSS</p>
                        <p className='body-text ml-4'>JAVASCRIPT</p>
                    </div>
                    <div className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]'>
                        <a className='mr-6' href="">VIEW PROJECT</a>
                        <a href="">VIEW CODE</a>
                    </div>
                </article>
                <article className='mb-8'>
                    <img className='mb-6' src={project4} alt="" />
                    <h3 className='mb-4 heading-m'>ENTERTAINMENT WEB APP</h3>
                    <div className='flex flex-row mb-4' >
                        <p className='mr-4 body-text'>HTML</p>
                        <p className='body-text'>CSS</p>
                        <p className='body-text ml-4'>JAVASCRIPT</p>
                    </div>
                    <div className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]'>
                        <a className='mr-6' href="">VIEW PROJECT</a>
                        <a href="">VIEW CODE</a>
                    </div>
                </article>
                <article className='mb-8'>
                    <img className='mb-6' src={project5} alt="" />
                    <h3 className='mb-4 heading-m'>MEMORY GAME</h3>
                    <div className='flex flex-row mb-4' >
                        <p className='mr-4 body-text'>HTML</p>
                        <p className='body-text'>CSS</p>
                        <p className='body-text ml-4'>JAVASCRIPT</p>
                    </div>
                    <div className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]'>
                        <a className='mr-6' href="">VIEW PROJECT</a>
                        <a href="">VIEW CODE</a>
                    </div>
                </article>
                <article className='mb-8'>
                    <img className='mb-6' src={project6} alt="" />
                    <h3 className='mb-4 heading-m'>ART GALLERY SHOWCASE</h3>
                    <div className='flex flex-row mb-4' >
                        <p className='mr-4 body-text'>HTML</p>
                        <p className='body-text'>CSS</p>
                        <p className='body-text ml-4'>JAVASCRIPT</p>
                    </div>
                    <div className='body-text underline decoration-2 underline-offset-14 decoration-[#4EE1A0]'>
                        <a className='mr-6' href="">VIEW PROJECT</a>
                        <a href="">VIEW CODE</a>
                    </div>
                </article>
            </section>
        </section>
        </>
    )
}

export default Body 