import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import sustainability from '../../assets/images/sustainability.webp'

function Sustainability() {
  return (
    <div>
        <WrapperCard className='relative h-screen flex items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full z-0'
                src={sustainability}
                alt="About confab"
            />
            <WrapperCard className='z-10 text-white'>
                <h2 className=' text-2xl lg:text-6xl font-semibold lg:w-1/2 '>Confab's drive for sustainability</h2>
                <p className='w-2/3 text-lg mt-8'>Energy infrastructure is the most important driver for sustainable development. Confab wants to be at the forefront of this evolution, playing an enabling role in the energy transition.</p>
            </WrapperCard>
            
        </WrapperCard>

        <WrapperCard className=' '>
           <div className=' py-12 lg:px-48 grid gap-6 text-lg'>
                <h2 className=' text-4xl font-semibold'>OUR SUSTAINABLE JOURNEY</h2>
                <p>
                    In our pursuit of excellence as a catalyst for positive change in the workforce, our unwavering commitment is to generate sustainable value for all stakeholders, integrating environmental, social, and governance (ESG) considerations into our core business strategies and processes.
                </p>
                <p>
                    <span className=' font-bold text-gray-700 text-xl'>"Empowering Careers for a Sustainable Future" is our brand purpose:</span>  We aim to position our commitment at the heart of our identity, dedicated to serving ESG priorities in the staffing and recruitment industry.
                </p>
                <p>
                    Leveraging our expertise in talent acquisition and cutting-edge technologies, we not only contribute to fostering sustainable employment practices but also actively engage in promoting diversity, inclusion, and ethical governance within organizations.
                </p>
                <p>
                    Our goal is to minimize our environmental footprint and that of our clients by providing innovative talent solutions. We are committed to reducing both our operational emissions and those of our clients, incorporating eco-friendly design, technology, and recruitment processes. We are also working diligently to promote sustainability in our supply chain by collaboratively involving our partners and suppliers.
                </p>
                <p>
                    This transformative journey towards sustainability is already underway within our organization.
                </p>
                <p>
                    Our sustainability plan, "Our Journey to a Sustainable Workforce," reflects the integration of our business strategy with a resolute commitment to environmental consciousness and social responsibility.
                </p>
           </div>
           <div className=' pb-12 lg:px-48 grid gap-6 text-lg'>
                <h2 className=' text-4xl font-semibold'>2024-2027 Sustainability Plan:<br/><span className=' text-lg font-semibold'> "Empowering Careers for a Sustainable Future: Operations at the Service of Social and Environmental Resilience."</span></h2>
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
  )
}

export default Sustainability