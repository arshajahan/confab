import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import sustainability from '../../assets/images/sustainability.webp'
import { Helmet } from 'react-helmet-async'

function Sustainability() {
  return (
    <>
        <Helmet>
            <title>Sustainability at Confab International</title>
            <meta 
            name='description'
            content="Discover our sustainability efforts and initiatives at Confab International, promoting environmental responsibility and social equity."
            />
            <link rel='canonical' href='/sustainability'/>
        </Helmet>

        <div className=' text-main'>
            <div className='flex relative h-screen items-center'>
                <img
                    className='absolute top-0 left-0 object-cover  w-full h-full z-0'
                    src={sustainability}
                    alt="About confab"
                />
                <WrapperCard className='z-10 text-white mt-60'>
                    <h2 className=' text-5xl lg:text-6xl font-semibold lg:w-1/2 '>Confab's drive for sustainability</h2>
                    <p className='lg:w-2/3 text-lg mt-8'>Energy infrastructure is the most important driver for sustainable development. Confab wants to be at the forefront of this evolution, playing an enabling role in the energy transition.</p>
                </WrapperCard>
            </div>

            <WrapperCard className=' '>
            <div className=' py-12 lg:px-48 grid gap-6 text-lg'>
                    <h2 className=' text-4xl font-semibold'>OUR SUSTAINABLE JOURNEY</h2>
                    <p>
                        We are dedicated to positioning our commitment at the core of our identity, focusing on serving ESG priorities in the staffing, recruitment, and integrated facility management industries.
                    </p>
                    <p>
                        By harnessing our expertise in talent acquisition and cutting-edge technologies, we not only contribute to fostering sustainable employment practices but also actively engage in promoting diversity, inclusion, and ethical governance within organizations.                </p>
                    <p>
                        Our goal is to minimize our environmental footprint and that of our clients by providing innovative talent and facility management solutions. We are committed to reducing both our operational emissions and those of our clients, incorporating eco-friendly design, technology, and recruitment processes. Additionally, we are diligently working to promote sustainability in our supply chain by collaboratively involving our partners and suppliers.
                    </p>
                    <p>
                        This transformative journey towards sustainability is already underway within our organization.
                    </p>
                    <p>
                        Presenting our sustainability plan, " Our Journey to a Sustainable Workforce," it reflects the integration of our business strategy with a resolute commitment to environmental consciousness and social responsibility.
                    </p>
            </div>
            <div className=' pb-12 lg:px-48 grid gap-6 text-lg'>
                    <h2 className=' text-4xl font-semibold'>2024 2027 Sustainability Plan:<br/><span className=' text-lg font-semibold'> Empowering Careers for a Sustainable Future: Operations at the Service of Social and Environmental Resilience.</span></h2>
                    <p>
                        Sustainability has evolved into a strategic priority guiding our talent development initiatives, aligning seamlessly with our corporate brand purpose, "Empowering Careers for a Sustainable Future."
                    </p>
                    <p>
                        The plan encompasses 10 strategic areas: Path to Net-Zero Employment, Biodiversity and Pollution Prevention in Talent Acquisition, Carbon Neutral Hiring Projects, Sustainable Employment Practices, Diversity and Inclusion in the Workplace, Health and Safety of the Workforce, Local Community Impact, Fair and Responsible Supply Chain Partnerships, Business Ethics in Talent Management, and Innovation, Digitalization, and Cybersecurity in Recruitment.
                    </p>
                    <p>
                        Our sustainability plan is a comprehensive integration of our business strategy, incorporating clearly defined actions, objectives, and measurable targets. It aims to translate our medium to long-term vision into actionable steps based on stakeholder priorities and our company's strategic plan.
                    </p>
                    <p>
                        Explore with us how we plan to create shared value for all stakeholders, both in the short and long term, by fostering sustainable career paths and ethical recruitment practices.
                    </p>
            </div>
            </WrapperCard>
        </div>

    </>
  )
}

export default Sustainability