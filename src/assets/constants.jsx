
import sol1 from '../assets/images/sol1.jpg';
import sol2 from '../assets/images/sol2.jpg';
import sol3 from '../assets/images/sol3.jpg';

export const services = [
    {
      id: 0,
      question: "Who We Are",
      answer: [
        "Vessel Handling",
        "Pilotage & Mooring",
        "Jetty & Terminal Management",
        "Vessel Traffic Management"
      ],
      path:'marine',content: (
        <>
        Marine Services of the ENASCO include:
        <br/><br/>
        <ul className='grid gap-1 custom-list'>
          <li><a href="#vessel-handling">Vessel Handling</a></li>
          <li><a href="#pilotage-mooring">Pilotage & Mooring</a></li>
          <li><a href="#jetty-terminal">Jetty & Terminal Management</a></li>
          <li><a href="#vessel-traffic">Vessel Traffic Management</a></li>
        </ul> 
        </>
      ),
      subcontents: [
        <div id='vessel-handling' className='pt-16 md:pt-20'><h2><b><strong>Vessel Handling</strong></b></h2><br/>
        ENASCO has developed a comprehensive vessel management service with the goal of delivering an all-encompassing and cohesive solution. This service is specifically tailored to be included in long-term contracts for Field Operations Services or EPC projects.<br/><br/>
        Within this framework, ENASCO seamlessly integrates offshore support vessels into its array of diving services, tanker pilotage, mooring services, and the PSV fleet for the efficient management of offshore units and logistics.<br/><br/>
        In the realm of engineering and construction services, ENASCO is well-equipped to provide construction or installation support vessels, as well as diving support vessels for various purposes. These include cable layers, diving support vessels for saturated diving and ROV services, and anchor handling tugs, all of which can be chartered for projects requiring such specialized capabilities.
      
        </div>,
        <div id='pilotage-mooring' className='pt-16 md:pt-20'><h2><b><strong>Pilotage & Mooring</strong></b></h2><br/>
        ENASCO delivers secure, effective, and dependable pilotage and mooring services tailored to meet our client's needs, ensuring a swift vessel turnaround in ports. We prioritize a seamless ship-to-shore interface to enhance operational efficiency. Our company is fully dedicated to upholding the highest international standards for training and certification in our pilotage services.<br/><br/>
        Clients can rely on our capable, professional, and thoroughly vetted personnel to execute a wide range of marine activities. Whether it's straightforward port navigation or highly specialized LNG operations, we offer specialized pilot and mooring personnel, available whenever and wherever needed.<br/><br/>
        In terms of vessels and terminals, ENASCO boasts expertise in servicing a variety of vessels, including LNG carriers, bulk carriers, containerships, and tankers up to VLCC/ULCC. We have a proven track record of providing pilotage services for numerous terminals, including SPM terminals, FPSO terminals (berthed in tandem or with associated CALM buoy), in-shore and off-shore jetties, ports and harbors, and Ship-to-Ship (STS) operations for many oil and gas companies.
     
        </div>,
        <div id='jetty-terminal' className='pt-16 md:pt-20'><h2><b><strong>Practical Support</strong></b></h2><br/>
        With over 15 years of operational experience in Kuwait, we possess the expertise to adeptly manage marine operations. Equipped with both skilled personnel and ample resources, we are proficient in the safe operation and control of onshore and offshore terminal facilities. As a service, we aim to extend the advantage of our experience to our clients.<br/><br/>
        When the need arises, we offer hands-on assistance for remote (sub) contr\acted operations, ensuring seamless execution and heightened cost efficiency. ENASCO provides a competent team to operate and manage diverse marine terminal facilities. Acting on behalf of our clients, we can undertake a range of terminal management activities, including shore facility management, warehouse and jetty supervision, materials control, supervision, and scheduling of third-party contracted vessels, as well as export tanker berthing and loading scheduling.<br/><br/>
        Entrusting us with their business, our clients demonstrate confidence in ENASCO's integrity and expertise, allowing us to autonomously run operations. Terminal management, for us, goes beyond being just another assignment; it serves as a token of appreciation and a testament to a robust partnership.
     
        </div>,
        
        <div id='vessel-traffic' className='pt-16 md:pt-20'>
        <h2><b><strong>Traffic Surveillance</strong></b></h2>
        <br/>
        Effective traffic monitoring is crucial for ensuring the safety of vessels and installations. In today's modern and high-volume ports, vessel traffic management systems are employed to map and process vessel calls and movements within their waters. <br/><br/>
        ENASCO offers a comprehensive solution by providing both the system and skilled specialists to operate it as an integrated service for our clients. Alternatively, we can integrate with pre-installed, client-owned vessel traffic systems for seamless port management.<br/><br/>
        Our tug schedulers are highly trained specialists   equipped with extensive local port knowledge and a profound understanding of shipping operations. Each has successfully completed a 6–8-week theoretical course on vessel traffic management complexities and tug scheduling, complemented by hands-on training.<br/><br/>
        One notable example of our vessel management expertise is evident in the ports of Gladstone and Brisbane, where we oversee the SLTA scheduling department. With a dedicated team working 24/7 in two 12-hour shifts, we monitor and control all marine traffic in and around the port from our Tug Management Control Centre. Using shore-based systems, we:<br/><br/>
        <ul className='grid gap-1 custom-list' >
          <li>Maintain communication with tugs maneuvering ships through the port</li>
          <li>Sustain 24/7 VHF radio contact</li>
          <li>Manage a 24/7 crewed emergency standby tug for three LNG plants</li>
          <li>Preserve the integrity of shipping schedules</li>
          <li>Strategically plan tug movements</li>
          <li>Utilize an effective tug scheduling tool tailored to local conditions</li>
          <li>Ensure compliance with relevant statutory requirements (Marine Radio)</li>
          <li>Enhance navigational safety through information exchange with tug crews</li>
          <li>Maximize customer satisfaction with the provided services</li>
        </ul>
        <br/>
        In terms of communication tools, our scheduling department employs various channels such as VHF, mobile phones/SMS, internal domestic radio, email (including non-scheduling purposes), AIS, and privately developed scheduling tools to liaise with individual tugs, provide information, issue weather and safety warnings, and detail the position of other vessels.<br/><br/>
        <br/>
        </div>,

      ]

    },
    {
      id: 1,
      question: "Solutions",
      path:'subsea',
      answer: [
        "SPM Operations and Maintenance",
        "Asset Integrity Management",
        "Pollution control"        
      ],content: (
        <div>
          Subsea Services of the ENASCO include:
          <br/><br/>
          <ul className='grid gap-1 custom-list'>
            <li><a href="#spm">SPM Operations and Maintenance</a></li>
            <li><a href="#asset">Asset Integrity Management</a></li>
            <li><a href="#pollution">Pollution control</a></li>
          </ul> 
        </div>
      ),
      subcontents: [
        <div className='pt-16 md:pt-20' id='spm'>
            <h2 className=' font-bold'>SPM Operations and Maintenance</h2><br/>
            <p>
            ENASCO's Management Inspection Repair Maintenance & Operation (MIRMO) Service Program stands as the exclusive answer for ensuring the complete integrity, reliability, and availability of an offshore buoy terminal for our clients.
            </p><br/>
            <h1 className='font-semibold'>ENASCO's Management Inspection Repair Maintenance & Operation (MIRMO) Service Program</h1><br/>
            <p>ENASCO's MIRMO Service Program stands as the exclusive answer for ensuring the complete integrity, reliability, and availability of an offshore buoy terminal for our clients.</p>
            <br/>
            <h2><b>Our SPM O&M Services</b></h2><br/>
            <ul className=' custom-list'>
                <li><a href="#operations">Operations & Maintenance (O&M)</a></li>
                <li><a href="#single-point">Single Point Mooring Services</a></li>
                <li><a href="#hose-inventory">Hose Inventory Management</a></li>
                <li><a href="#hose-changeout">Hose Changeout</a></li>
                <li><a href="#emergency-pipeline">Emergency Pipeline Repair Services</a></li>
                <li><a href="#pipeline-solutions">Pipeline Solutions</a></li>
                <li><a href="#interface-management">Interface Management</a></li>
                <li><a href="#tanker-operations">Tanker Operations</a></li>
            </ul>
            <h2 id="operations" className='pt-16 md:pt-20'><b>Operations & Maintenance (O&M)</b></h2><br/>
            <p>Our tailored service offering comprises long-term Operation and Maintenance contracts that encompass, but are not limited to, the provision of the following components:</p><br/>
            <ul className=' list-inside list-disc'>
                <li>Diving teams</li>
                <li>Vessels</li>
                <li>Operational crew</li>
            </ul>

            <h2 id="single-point" className='pt-16 md:pt-20'><b>Single Point Mooring Services</b></h2><br/>
            <p>Our primary emphasis is on conducting inspection, repair, and maintenance (IRM) services for Single Point Mooring (SPM) systems, encompassing both their topside and subsea components. The goal is to sustain the facility's reliability and availability at the requisite levels and ensure the retention of Class certification. This service also encompasses the pre- and post-berth inspections of the SPM. Additionally, our service extends to the proactive maintenance of newly installed facilities, starting from the buoy's installation and continuing until its handover to the ultimate user or client.</p>

            <h2 id="hose-inventory" className='pt-16 md:pt-20'><b>Hose Inventory Management</b></h2><br/>
            <p>The ENASCO Hose Inventory Management Solution offers a holistic Life Cycle Management service for Submarine and Floating Marine Hoses utilized in offshore Oil and Gas Terminal Loading and Unloading Facilities. This solution adheres to OCIMF guidelines and is tailored by ENASCO to align with the specific needs and operational conditions of the client's site. It is also backed by our marine hose manufacturing Alliance Partners.</p>

            <h2 id="hose-changeout" className='pt-16 md:pt-20'><b>Hose Changeout</b></h2><br/>
            <p>Hose replacement is necessary in accordance with OCIMF guidelines and also when hoses are damaged, outdated, or subjected to extreme events. This service encompasses:</p><br/>
            <ul className=' custom-list'>
                <li>Installation</li>
                <li>Disassembly or assembly of hose strings</li>
                <li>Flushing</li>
                <li>Removal</li>
                <li>Launch or recovery</li>
                <li>Towing</li>
                <li>In situ testing</li>
            </ul>

            <h2 id="emergency-pipeline" className='pt-16 md:pt-20'><b>Emergency Pipeline Repair Services</b></h2><br/>
            <p>We specialize in delivering emergency response services for the repair of pipelines within the expansive intertidal zone, where traditional open-water and land-based emergency response machinery may struggle to reach or operate effectively. Our primary aim is to reduce the environmental impact and production losses resulting from unforeseen events related to pipeline integrity failures or accidental damages. This is achieved through the use of appropriate machinery and established repair techniques to identify, isolate, contain, expose, repair/replace, restore, and rehabilitate the affected site.</p>
            <p>Our ERS services are organized into the following key categories:</p><br/>
            <ul className=' custom-list'>
                <li>Intertidal Zone</li>
                <li>Deep Water</li>
                <li>Oil Spill Response (OSR)</li>
                <li>Firefighting</li>
                <li>Emergency Towing</li>
            </ul>

            <h2 id="pipeline-solutions" className='pt-16 md:pt-20'><b>Pipeline Solutions</b></h2><br/>
            <p>Our core focus lies in offering a range of pipeline services, including cleaning, dewatering, de-oiling, flushing, and fluid separation, with a particular emphasis on undiggable pipelines and those with sensitive linings. We achieve this using elastic products that are not only environmentally friendly but also easily degradable, breaking down into non-harmful components.</p>
            <p>We are dedicated to ensuring the correct filling of pipelines with preservation fluid and maintaining regular monitoring to safeguard the pipeline during the preservation period. The utilization of elastic pipeline products facilitates the proper filling of the pipeline with initial oil, minimizing the mixing of preservation fluid and initial oil. Additionally, it effectively cleans the pipeline before its first use.</p>
            <p>Our comprehensive pipeline solution services encompass the following key components:</p><br/>
            <ul className=' custom-list'>
                <li>PLEM Integrity Management</li>
                <li>Pipeline Preservation & First Oil</li>
                <li>Cathodic Protection</li>
                <li>Free Span Correction</li>
                <li>Scouring</li>
            </ul>

            <h2 id="interface-management" className='pt-16 md:pt-20'><b>Interface Management</b></h2><br/>
            <p>In the realm of intricate EPCI (Engineering, Procurement, Construction, and Installation) projects, which involve multiple subcontractors, consultants, and stakeholders, our role is to act as the crucial bridge connecting all parties. This connection ensures the successful culmination of projects, particularly during the commissioning phase, by prioritizing the overall project objective rather than just the individual components. This approach fosters efficiency and effectiveness in project completion, ensuring a smooth transition into the operational phase.</p>

            <h2 id="tanker-operations" className='pt-16 md:pt-20'><b>Tanker Operations</b></h2><br/>
            <p>ENASCO offers a comprehensive range of marine vessels and resources dedicated to guaranteeing the safe and efficient mooring and unmooring of tankers at Single Point Mooring (SPM) locations. Our services encompass hose connection and disconnection, product transfer services, and essential tier 1 oil spill response services needed at SPMs.</p><br/>
            <h2><b>Vessel & Crew</b></h2><br/>
            <p>This subset of tanker operations and Single Point Mooring (SPM) Inspection, Repair, and Maintenance (IRM) relies on marine vessels. We supply specialized personnel for maintenance and supervisory positions, such as Buoy Maintenance Supervisor, Mooring Master, and Dive Supervisor, on short and medium-term assignments.</p>
        </div>,


        <div id='asset' className='pt-16 md:pt-20'>
        <h1><b>Asset Integrity Management (AIM)</b></h1><br/>
        Our Asset Integrity Management services:<br/><br/>
        <ul className=' custom-list'>
        <li>(Hose) Integrity Management </li>
        <li>Data Acquisition </li>
        <li>Mooring integrity & hose analysis</li>
        </ul>
        <br/>
        <h1><b>(Hose) Integrity Management </b></h1><br/>
        <p>Marine hoses used in the oil and gas industry play a crucial role in transferring products offshore. These essential components represent a significant investment and often have extended lead times. They are also the most susceptible part of the distribution chain. Oil and gas marine hoses are constantly exposed to challenging environmental and operational conditions, and they must adhere to stringent quality, health, safety, and environmental (QHSE) standards. Oil spills, decreased reliability, compromised asset integrity, and unexpected shutdowns pose substantial QHSE, reputational, and economic risks for the asset owner, as well as all other stakeholders and the environment.</p><br/>
        <p>The ENASCO Hose Integrity Management Solution is specifically designed to prevent such shutdowns, enhance reliability, and increase asset availability, all while emphasizing efficiency and reducing operational costs.</p><br/>
        <h1><b>Data Acquisition</b></h1><br/>
        <p>ENASCO’s Offshore Asset Data Acquisition (DAQ) system plays a vital role in an Asset Owner's endeavors to enhance both RAM (Reliability, Availability, and Maintainability) and asset integrity. It is seamlessly integrated into s's ASIM (Advanced System Integrity Management) Program, enabling the automated and real-time collection of pertinent data from offshore assets. This data is a critical element in achieving improved Asset Availability, Reliability, and the establishment of a well-structured integrity management framework for these offshore assets.</p><br/>
        <h1><b>Mooring integrity & hose analysis</b></h1><br/>
        <p>This represents a highly specialized case involving the Inspection, Repair, and Maintenance (IRM) of SPM (Single Point Mooring) systems, with a primary focus on activities conducted in the pre Front-End Engineering Design (pre FEED) and FEED stages of the project. Based on the data obtained from nearby or similar installations, we can offer tailored recommendations at the design phase to address site-specific requirements.</p>
        <br/>
        </div>,

        <div id='pollution' className='pt-16 md:pt-20'>
        <b>Environmental Protection in the Marine Industry</b><br/><br/>
        <p>As members of the marine industry, it is our collective responsibility to safeguard the environment in which we operate. Efficient utilization of our workspace is paramount.</p><br/>
        <p>In our commitment to environmental protection, ENASCO prioritizes combating oil spills. Despite stringent adherence to safety and maintenance standards, accidents may occur. To address this, we offer a range of pollution and oil spill response equipment designed to mitigate environmental impact. Primarily employing mechanical containment, we capture and store spills until proper disposal can be executed.</p><br/>
        <h2><b>Tailored Response</b></h2><br/>
        <p>The crux of effective environmental emergency response lies in utilizing the right equipment. Drawing on years of experience in managing oil spills, we discern the precise requirements to tackle each situation. Considering variables such as the type of oil and local wind and water conditions, we meticulously select machines and materials to control the situation, minimizing damage to shorelines and wildlife.</p><br/>
        <h2><b>Integrated Spill Response Assets</b></h2><br/>
        <p>ENASCO vessels are strategically designed for rapid response. Many of our tugs are equipped with oil dispersant systems, featuring extended spraying booms. Larger vessels are furnished with integrated recovered oil tanks (ranging from 50m3 to 100m3), collaborating with oil skimmers to collect and store sea surface contamination. Depending on client needs, we can integrate additional 'environmental response assets' into our operational plan, including containing booms, boom towing daughter craft, containerized oil skimmers, and containerized pumping systems.</p><br/>
        <h1><b>Skilled Crew</b></h1><br/>
        <p>Our crews are extensively trained in environmental protection. As first responders, they understand their responsibility and are equipped to act accordingly. Highly qualified and experienced in spill control and recovery techniques, our crews are on standby 24/7. Ready to deploy floating booms, spray dispersants, pump out remaining fuel, transfer hazardous materials to recycling centers, clean water surfaces with skimmers, and treat pollution in settling tanks, our crew is prepared for any environmental challenge.</p>
        <br/>
        </div>,
      ],
      
    },

    {
      id: 2,
      question: "Sectors",
      path:'workshop',
      answer: [
        "Welding and Fabrication",
        "Well Control Testing ",
        "Down Hole Tools Services",
        "Hydro Testing",
        "Heat Treatment" 

      ],
    content: (
        <>
             <div>
                Workshop Facility of ENASCO include:
                <br/><br/>
                <ul className='grid gap-1 custom-list'>
                  <li><a href="#welding">Welding and Fabrication</a></li>
                  <li><a href="#wellcontrol">Well Control Testing</a></li>
                  <li><a href="#downhole">Down Hole Tools Services</a></li>
                  <li><a href="#hydro">Hydro Testing</a></li>
                  <li><a href="#heat">Heat Treatment</a></li>
                </ul> 
              </div>
              
        
        </>
      ),
      subcontents: [
        <div className='pt-16 md:pt-20' id='welding'>
        <p>Our team of highly skilled designers, welders, inspectors, and painters specializes in fabricating a comprehensive range of equipment, including cargo carrying units (CCUs), tool racks, and tanks.</p><br/>
        <p>The ENASCO team prioritizes quality in construction: all structural members are crafted from hot-rolled steel, joints are continuously welded, and lifting point pad eyes are precisely engineered to match the specifications of the employed shackles. Each welded equipment is meticulously designed and fabricated in compliance with British standards, with all welding undergoing a 100% Magnetic Particle Inspection (MPI) process. This inspection is conducted on all lifting points both before and after proof load testing.</p><br/>
        <p>Upon completion, welded equipments can be painted according to the client's specifications and are delivered marked with the correct Safe Working Load (SWL). Additionally, each welded equipment is accompanied by a comprehensive documentation package, including material details, welding certificates, and load test certificates.</p><br/>
        </div>,

        <div className='pt-16 md:pt-20' id='wellcontrol'>
        <p><b>Oilfield Pressure Control Services</b></p><br/>
        <p>ENASCO provides equipment, instruments, and facilities conforming to international standards for conducting pressure control operations in alignment with API procedures. Specialist welding, heat treatment, and full stress relieving are applied alongside machining processes when necessary. The Pressure Control Facility offers a range of services including:</p><br/>
        <ul className='custom-list' >
          <li>Repair and maintenance of Pressure Control Equipment.</li>
          <li>Comprehensive overhaul, including machining, welding, post-weld heat treatment (PWHT), and pressure testing.</li>
          <li>Servicing of well control equipment.</li>
          <li>Repair and recertification of Blowout Preventers.</li>
          <li>Hydrostatic testing capabilities up to 15,000 PSI.</li>
          <li>Possession of a Certified API 6A License.</li>
          <li>Refurbishment of Wellhead/choke components.</li>
          <li>Weld overlays, inlays, and hard facing services.</li>
      </ul>
<br/>
        </div>,

        <div className='pt-16 md:pt-20' id='downhole'>
        <h2 className=' font-bold'>We supply a full range of equipment and services, including:</h2><br/>
        <ul className=' list-disc grid gap-4 text-justify'>
        <li>Reamers and stabilizers in a wide range of sizes, in chromium molybdenum solid alloy steel, to the requirements of AISI 4145H modified</li>
        <li>Double action drilling jars from the world’s leading suppliers, with full maintenance, overhaul and testing support</li>
        <li>Shock tools both standard and non-standard, from top suppliers, suitable for the most testing tasks and environments</li>
        <li>Fishing tools a comprehensive range of top-quality standard tools.</li>
        </ul>

        </div>

        ,

        <div className='pt-16 md:pt-20' id='hydro'>
            <p>
                Every ENASCO inspection base is equipped with a hydro test bay. Test bays in each location are designed for safe and efficient testing. Hydro testing at remote locations can be serviced readily with our mobile hydro testing containers, built to the highest standard steel/wood walls for optimum safe operations. The p-test lines are fed through the wall to the test area with the operator working safely at the built-in operator safe cabin. The test unit is equipped with lifting hoist, barriers, warning devices, and SSHE signs. Tests are performed by experienced technicians and crew, equipped with all of the required training/certification for the profession. The test equipment such as pumps, gauges & chart recorders are all of international brands, duly calibrated and certified. Hydro tests are performed in accordance with ASME standards, ENASCO Hydro testing IOP, manufacturers, or client specifications. As a safety aspect, ENASCO recommends that applicable NDT be performed prior to hydro testing on any pressurized equipment.
            </p>
            <br />
            <h2 className=' font-bold'>TESTS:</h2>
            <br />
            <p>
                Chiksan / Flow line, Oil / Water / Air /Gas Tank, Pressure Relief Valve, Riser Spool, X-mas tree, BOP, Blind Flange, Pressurized flow lines, Kill/Choke Manifolds, Well Control Equipment, etc.
            </p>
            <br />
            <h2 className=' font-bold'>ADDITIONAL SERVICES:</h2>
            <br />
            <ul className='grid gap-4 custom-list'>
                <li>Seal / O-ring replacement</li>
                <li>Re-dressing</li>
                <li>Iron repair & maintenance</li>
                <li>Tagging with permanent identification band</li>
                <li>Cleaning & painting</li>
                <li>Borescope Inspection</li>
            </ul><br/><br/>
        </div>


        ,

        <div className='pt-16 md:pt-20' id='heat'>
        <p><b>Inspects:</b></p><br/>
        <p>Rig structure, handling tools, lifting/hoisting equipment and accessories, Blowout Preventer (BOP), pressure lines, travelling block, links, skids, swivels, containers, pumps, and various other rig accessories.</p><br/>
        <p><b>Scope of Services:</b></p><br/>
        <p>Conducting inspections in accordance with relevant API specifications, API RP8B Category I to V. This includes the disassembly and replacement of defective components, cleaning and re-greasing movable parts, repainting, minor repairs, and other related tasks.</p><br/>
        <p><b>Tagging System:</b></p><br/>
        <p>Our tagging system was devised in adherence to the API RP8B recommendation, which stipulates that "inspection frequency applies to the equipment in use during the specified period." Equipment that successfully undergoes an API RP 8B inspection will be appropriately tagged, indicating its readiness for the next scheduled inspection. Equipment with intact seals implies that it has not been in service during the specified period, and consequently, the result of the last inspection is deemed valid, alleviating the need for re-inspection.</p>
        <br/><br/>
        </div>,

      ]
    },

    {
      id: 3,
      question: "Services",
      path:'inspection',
      answer: [
        "OCTG / Tubular Inspection",
        "Non-Destructive Testing",
        "Rig Equipment Inspection",
        "Lifting and Drop Survey",
        "Calibration Service"
      ],
    content: (
        <>
            <div>
                Inspection Services of ENASCO include:
                <br/><br/>
                <ul className='grid gap-1 custom-list'>
                  <li><a href="#octg">OCTG / Tubular Inspection</a></li>
                  <li><a href="#ndt">Non-Destructive Testing</a></li>
                  <li><a href="#rei">Rig Equipment Inspection</a></li>
                  <li><a href="#lds">Lifting and Drop Survey</a></li>
                  <li><a href="#cs">Calibration Service</a></li>
                </ul> 
              </div>
        
        </>
      ),
      subcontents: [
        <div className='pt-16 md:pt-20' id='octg' >
          
            <p>We have a team of highly qualified and certified professional inspectors who specialize in the task at hand. These inspectors undergo thorough training to ensure they possess the necessary skills and knowledge for the job. Whether it's inspection, management, inventory, maintenance, or repair, our processes strictly adhere to the guidelines set forth by API, the manufacturer, or our client, depending on what is applicable and required.</p><br/>
            <p>Our comprehensive approach covers the inspection of various tubing and casing types, including pup joints of all sizes. This means that our team is well-equipped to handle the examination and assessment of different components with precision and in accordance with industry standards. We prioritize the meticulous inspection and maintenance of equipment to ensure optimal performance and compliance with specifications.</p><br/>
            <p>By entrusting us with these tasks, you can be confident that our team of professionals will carry out their responsibilities with the utmost expertise and dedication. We are committed to meeting and exceeding your expectations in all aspects of inspection, management, inventory, maintenance, and repair activities.</p><br/>
            <b>Inspections are conducted in compliance with either API RP 5A5, 5C1, 5CT, or as specified by the client or manufacturer, depending on the relevant and applicable standards.</b><br/>
            <br/><p>The range of services encompasses, but is not restricted to: Visual Thread Inspection, Visual Body Inspection, Full-Length Drift Test, UT Wall Thickness Test, Optional Full-Length EMI 1, Hydrostatic Testing, and Storage and Management.</p><br/>
            <b>Maintenance work is performed in accordance with API standards or client specifications, including the selection of the coating product to be applied.</b><br/>
            <br/><p>The services provided cover, but are not limited to: Cleaning and re-doping connections, Full-Length Internal/External Cleaning and Coating, Re-stenciling pipe specifications, Re-painting coupling and pipe color code identification, as well as Storage and Management.</p>
            <br/>
            <ul className='custom-list'>
              <li>Drill pipe inspection according to DS-1 inspection.</li>
              <li>Casing/Tubing inspection.</li>
              <li>BHA components according to DS-1.</li>
              <li>Various subs inspection.</li>
            </ul>
            <br/>
        </div>,

        <div className='pt-16 md:pt-20' id='ndt'>
        <p>Inspection Services extends its comprehensive services to cover a broad spectrum of locations, including both onshore and offshore environments. Our NDT inspectors are distinguished by their high level of expertise, holding certifications at Level II and III. These professionals undergo rigorous training, equipping them with the skills necessary for their roles. Importantly, our inspectors are readily available for short-notice assignments, whether they be onshore or offshore.</p><br/>
        <p>At Inspection Services, we prioritize the adherence to specific procedures and the highest standards of Safety, Security, Health, and Environment (SSHE). This commitment ensures that all inspections and tests conducted by our skilled professionals meet stringent criteria for safety and environmental responsibility. Clients can have confidence in the reliability and proficiency of ENASCO Inspection Services, whether in onshore or offshore settings, with the assurance that inspections and tests are carried out to the highest industry standards.</p>
        </div>,

        <div className='pt-16 md:pt-20' id='rei'>
        <h2 className=' font-bold'>ENSACO INSPECTS:</h2><br/>
        <p>
        Rig Structure, handling tools, lifting/hoisting equipment and accessories, BOP, pressure lines, travelling block, links, skids, swivels, containers, pumps, and other rig accessories.
        </p><br/>
        <h2 className=' font-bold'>SCOPE OF SERVICES:</h2><br/>
        <p>
        Inspection in accordance related API specifications, API RP8B Category I to V, Disassembly Replacement of defective components, Cleaning & re-greasing movable parts, Repainting, Mino repair, etc.
        </p><br/>
        <h2 className=' font-bold'>ENASCO TAGGING SYSTEM:</h2><br/>
        <p>
        This tagging system was developed in compliance with API RP8B recommendation which states that “inspection frequency applies to the equipment in use during the specified period”. Equipment that has passed an API RP 8B inspection will be tagged and in time for the due date of next inspection, equipment found to have intact seals indicates that the equipment has not been put in service during the specified period and therefore the result of the last inspection will be considered valid and the equipment don’t have to be re-inspected.
        </p>

        </div>
        ,

        <div className='pt-16 md:pt-20' id='lds'>
        <h2><b>LIFTING EQUIPMENT INSPECTION AND TESTING</b></h2><br/>
        <p>Our surveys offer a precise register and database reporting system that comprehensively covers all onboard hoisting and lifting equipment, ranging from shackles and slings to lifeboats and offshore cranes.</p><br/>
        <ul className='custom-list text-left grid gap-2' >
          <li>All inspections adhere strictly to manufacturers' guidelines and relevant API, BS, Euro norms, in conjunction with LOLER SI 2307/1998.</li>
          <li>CD-ROMS are supplied, featuring a complete database containing identification numbers, descriptions, safe working loads, test certificate numbers, and details of previous inspections.</li>
          <li>Surveys are typically consolidated with those for hoisting and lifting equipment, ensuring comprehensive inspection coverage of all such equipment.</li>
          <li>Internet-based reporting provides clients with convenient and full access to the status of all equipment.</li>
        </ul>

        <br/>
        <h2><b>DROPS SERVICES INSPECTION</b></h2><br/>
        <p>Dropped objects considerations are fundamental to every aspect of our supply chain, encompassing design, construction, delivery, and installation.</p>
        <p>We prioritize maintaining the highest standards throughout the entire process, adopting an early and proactive approach to eliminate as many faults or failures as possible onsite. This strategy aims to minimize the necessity for subsequent remedial actions.</p>
        </div>,

        <div className='pt-16 md:pt-20' id='cs'>
        <p>Our team possesses extensive expertise in calibrating weight indicators and various types of pressure gauges. We employ approved methods to ensure calibration aligns with industry standards, including:</p><br/>
        <ul className='custom-list' >
          <li>DKD R-6-1, ASME B40, ASME B40.1, and ASME B40.7 for gauges</li>
          <li>ISO 4126-1/2004, Safety valves Part 1 – General Requirements, ISO 14313:2007, and API Recommended Practice 576 Second Edition for safety valves</li>
          <li>Standard API Specification 6A, Eighteenth Edition, May 2002, ISO 10423:2003 for manifolds</li>
        </ul>
        <br/>
        </div>
            
      ]
    },
    
    {
      id: 4,
      question: `Sustainability`,
      path:'training',
      answer: [
        "Training",
        "Consultancy",
      ],
      imacontent: (
        <>
            
            <div>
                Training & Consultancy at ENASCO include:
            </div><br/>
        
        </>
      ),
      subcontents: [
        <div>
            <h2><b>IADC</b></h2><br/>
            <ul className=' custom-list'>
                <li>IADC Well CAP - Workover & Completion Coiled Tubing Wireline Snubbing</li>
                <li>IADC DIT - Stuck Pipe Prevention</li>
                <li>IADC HSE Rig Pass-Land & Offshore</li>
                <li>IADC DIT - H2S</li>
                <li>IADC Well Sharp - Drilling</li>
            </ul><br/>
            
            <h2><b>IBOEHS</b></h2><br/>
            <ul className=' custom-list'>
                <li>RSP- Registered Safety Professional</li>
                <li>RSM-Registered Safety Manager</li>
                <li>RSO-Registered Safety Officer</li>
                <li>Diploma in Oil & Gas Safety</li>
                <li>ICRP - International Certificate in Roustabout Program</li>
            </ul><br/>
            
            <h2><b>IMIST</b></h2><br/>
            <ul className=' custom-list'>
                <li>IMIST</li>
            </ul><br/>
            
            <h2><b>IOSH</b></h2><br/>
            <ul className=' custom-list'>
                <li>Working Safely</li>
                <li>Managing Safely</li>
            </ul><br/>
            
            <h2><b>HSE (Health, Safety, and Environment):</b></h2><br/>
            <ul className=' custom-list text-left grid gap-1'>
            <li>H2S and SCBA.</li>
            <li>Fire Fighting.</li>
            <li>Confined Space Entry and Rescue.</li>
            <li>NASP 10-hour Course for General Industry NASP 30-hour Course for General Industry NASP 10-hour Course for Construction NASP 30-hour Course for Construction</li>
            <li>Occupational Safety and Health Basic Diploma Occupational Safety and Health Advanced Diploma Occupational Safety and Health Supervisor Diploma</li>
            <li>Egress/Fire Safety Protection</li>
            <li>Electrical Safety Ergonomics</li>
            <li>Hazard Communication (GHS) Hazardous Materials HAZWOPER Awareness Lockout Tagout</li>
            <li>Machine Guarding</li>
            <li>PPE Personal Protective Equipment (PPE) H2S Hydrogen sulfide</li>
            <li>BBS Behavior-based safety (Changing Safety Behavior)</li>
            <li>Hazard Identification and Risk Assessment Manual Handling</li>
            </ul><br/>

            <p><b>Quality, HSE and Environment MS Training Courses:</b></p><br/>

            <ul className=' custom-list'>
            <li>API Q1 9TH Edition Awareness</li>
            <li>API Q2 1ST Edition Awareness</li>
            <li>ISO 9001 Foundation and Internal Auditor Training course</li>
            <li>ISO 9001 Foundation and Implementer Training course</li>
            <li>ISO 45001 Foundation and Internal Auditor Training course</li>
            <li>ISO 45001 Foundation and Implementer Training course</li>
            <li>ISO 14001 Foundation and Internal Auditor Training course</li>
            </ul><br/>
        </div>,

        <div>
            <h2><b>Environmental Monitoring & Testing:</b></h2><br/>
            <ul className=' custom-list'>
            <li>Indoor Air Quality</li>
            <li>Ambient Air Quality</li>
            <li>Dust Monitoring</li>
            <li>Gaseous Emission Testing</li>
            <li>Light Intensity Monitoring</li>
            <li>Noise Monitoring</li>
            <li>Water Quality Monitoring</li>
            <li>Soil Quality Monitoring</li>
            </ul><br/>

            <h2><b>Waste Management:</b></h2><br/>
            <ul className=' custom-list'>
            <li>Development of waste management plan</li>
            <li>Conduct waste management survey</li>
            <li>Implement waste management system</li>
            <li>Recycling, disposal, and monitoring of waste materials</li>
            </ul><br/>

            <h2 className=' text-xl'><b>ISO & Audit Certification:</b></h2><br/>
            <b>Accredited Programs:</b>
            <ul className=' custom-list'>
            <li>ISO 9001 Certification – Quality Certified</li>
            <li>ISO 14001 Certification – Environmentally Certified</li>
            <li>ISO 22000 Certification – Food Safety Certified</li>
            <li>HACCP Certification – HACCP Certified</li>
            <li>ISO 27001 Certification – Information Security Certified</li>
            <li>ISO 31000 Certification – Risk Certified</li>
            <li>ISO 50001 Certification – Energy Certified</li>
            </ul><br/>
            <b>International Certification Body:</b>
            <ul className=' custom-list'>
            <li>Bureau Veritas (BV) - France</li>
            <li>TQCS International (TQCSI) – Australia</li>
            <li>TUV Rheinland (TUV) – Germany</li>
            <li>Quality Registrar Systems (QRS) – Abu Dhabi, UAE</li>
            </ul><br/>
        </div>

      ]
    },
  ]

export const solutions = [
  {
      id: 0,
      image: sol1,
      title: 'STAFFING & WORKFORCE MANAGEMENT',
      content: 'Advance STEM workforce management strategies.',
      path: 'staffing-workforce',
      tag: 'Confab - Empowering STEM Excellence',
      page: (
        <div className='py-12 lg:px-48'>
            <h2 className=' text-4xl font-semibold'>Confab - Empowering STEM Excellence</h2><br/>
            <p className='font-semibold'>
                At Confab, we understand that the Science, Technology, Engineering, and Mathematics (STEM) sector demands precision, expertise, and innovation. As a leading staffing and workforce management service provider, we specialize in delivering tailored solutions to meet the unique challenges faced by STEM organizations.
            <br/><br/>Our Comprehensive Offerings:
            </p><br/>
            <ul className='custom-list'>
                <li>
                    <span className='font-semibold text-black text-lg'>Temporary Staffing:  </span>
                    Providing skilled professionals on a temporary basis to meet short-term project needs or cover temporary workforce gaps.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Permanent Placement:  </span>
                    Assisting organizations in the recruitment and placement of full-time, permanent employees for various roles within the company.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Contract-to-Hire:  </span>
                    Offering a flexible arrangement where candidates are initially hired on a temporary basis with the option to convert to a permanent role after a specified period.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Executive Search:  </span>
                    Specialized services focused on identifying, recruiting, and placing top-level executives and leaders within an organization.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Project-Based Staffing:  </span>
                    Assembling teams with specific skill sets to work on short-term or long-term projects, providing a cost-effective and flexible solution.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Outsourced Recruitment:  </span>
                    Managing the end-to-end recruitment process on behalf of the client, from sourcing and screening to interviewing and onboarding.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>RPO (Recruitment Process Outsourcing):  </span>
                    Handling all aspects of the recruitment process, including technology, methodology, and reporting, as an extension of the client's HR department.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Volume Hiring Solutions:  </span>
                    Managing large-scale recruitment initiatives for clients with high-volume hiring needs, such as during expansions or seasonal demands.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Specialized Industry Staffing:  </span>
                    Offering industry-specific staffing solutions tailored to the unique requirements of sectors like healthcare, finance, IT, engineering, and more.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Skill-Based Staffing:  </span>
                    Focusing on specific skill sets or technical expertise, ensuring that candidates have the precise qualifications needed for specialized roles.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>International Recruitment:  </span>
                    Assisting organizations in recruiting talent from a global pool, navigating immigration processes, and ensuring compliance with international hiring regulations.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Workforce Diversity Programs:  </span>
                    Implementing strategies to promote diversity and inclusion in the workforce, including targeted recruitment initiatives and training programs.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Customized Training Programs:  </span>
                    Developing and delivering training programs to upskill and reskill employees, aligning their capabilities with evolving industry demands.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Employer Branding Services:  </span>
                    Helping organizations build a positive employer brand to attract top talent, including online presence, reputation management, and employee value proposition development.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Payroll Services:  </span>
                    Managing payroll functions for temporary or contract workers, handling tax withholdings, benefits administration, and compliance.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Compliance Management:  </span>
                    Ensuring that all staffing and workforce processes adhere to relevant labor laws, industry regulations, and compliance standards.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Vendor Management Services (VMS):  </span>
                    Assisting organizations in managing multiple staffing vendors, streamlining processes, and optimizing costs.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Employee Onboarding and Offboarding:  </span>
                    Facilitating the seamless integration of new hires into the organization and managing the offboarding process for departing employees.
                </li>
            </ul>

            <p className='font-semibold mt-12'>
                By offering a comprehensive range of staffing services, providers can address the diverse needs of clients across various industries and help them build agile, efficient, and high-performing workforces.
            </p>
        </div>
      )
      
  },
  {
      id: 1,
      image: sol2,
      title: 'CREWING MANAGEMENT',
      content: 'Offshore platforms, a project springboard.',
      path: 'crewing-management',
      tag: 'Confab - Your Trusted Partner in Offshore Crew Management',
      page: (
        <div className='py-12 lg:px-48'>
            <h2 className=' text-4xl font-semibold'>Confab - Your Trusted Partner in Offshore Crew Management</h2><br/>
            <p className='font-semibold'>
                At Confab, we understand the unique challenges and complexities associated with offshore oil rig operations. Our dedicated team is committed to providing end-to-end crew management solutions, ensuring that your offshore projects are staffed with highly qualified professionals, including rig crews, and supported by a range of essential services.
            <br/><br/>Our Services Include:
            </p><br/>
            <ul className=' custom-list'>
                <li>
                    <span className='font-semibold text-black text-lg'>Rig Crew Recruitment Excellence:  </span>
                    <br/>
                    Our recruitment process is meticulous and designed to identify the most skilled and competent individuals for all roles on your offshore rigs. From drillers to derrickhands, our rigorous screening procedures ensure that our candidates exceed the technical and safety standards required for offshore environments.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Tailored Training Programs:  </span>
                    <br/>
                    Safety and efficiency are paramount in offshore operations. Our customized training programs equip your entire rig crew with the skills and knowledge essential for their respective roles. From safety protocols to technical competencies, our training ensures that your personnel are well-prepared for the challenges of working on offshore oil rigs.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Comprehensive Support Services:  </span>
                    <br/>
                    We go beyond recruitment and training. Our support services cover everything from payroll management to seamless transportation logistics and comfortable accommodation arrangements for your entire rig crew. We understand that a well-supported crew leads to enhanced productivity and a positive working environment.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Compliance and Certification Management:  </span>
                    <br/>
                    Navigating the complex landscape of industry regulations is crucial. We take the responsibility of ensuring that your entire rig crew is compliant with all necessary certifications and adheres to industry standards. Our proactive approach minimizes risks and ensures that your operations run smoothly.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>24/7 Support and Emergency Response:  </span>
                    <br/>
                    Offshore operations don't adhere to a 9-to-5 schedule, and neither do we. Our dedicated support teams are available 24/7 to address any concerns or emergencies that may arise during your projects. Your peace of mind is our priority.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Performance Monitoring and Continuous Improvement:  </span>
                    <br/>
                    We believe in accountability. Regular performance monitoring and feedback mechanisms allow us to continually assess and improve our services. Our commitment is not just to meet your expectations but to exceed them consistently.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Customized Solutions for Your Unique Needs:  </span>
                    <br/>
                    Offshore projects differ, and we recognize the importance of flexibility. Our team collaborates closely with yours to understand your specific requirements, tailoring our crew management solutions to suit the unique aspects of each project, including the specific needs of your rig crew.
                </li>
            </ul>

            <p className='font-semibold mt-12'>
                At Confab, we don't just provide services; we forge partnerships. Your success is our success, and we are dedicated to contributing to the efficiency and safety of your offshore operations. 
            </p><br/>
            <p className=' font-medium'>
                Partner with us for a seamless crew management experience that allows you to focus on what you do best – delivering exceptional results in the offshore oil and gas industry.
            </p>
        </div>
      )
  },
  {
      id: 2,
      image: sol3,
      title: 'INTEGRATED FACILITY MANAGEMENT',
      content: 'Objective: to reduce environmental impact to the minimum.',
      path: 'facility-management',
      tag: 'Delivering Exemplary Integrated Facilities Management Services',
      page: (
        <div className='py-12 lg:px-48'>
            <h2 className=' text-4xl mb-4 font-semibold'>DELIVERING EXEMPLARY INTEGRATED FACILITIES MANAGEMENT SERVICES</h2><br/>
            <p className='font-semibold'>
                Confab stands as a distinguished provider, offering a comprehensive suite of cutting-edge integrated facilities management services through a highly adaptable and fully integrated platform. Our unwavering commitment to excellence ensures that services are not only delivered at the highest standards but are also designed to provide clients with a flexible, complete solution for their diverse facility management needs.
            <br/><br/>At Confab, our commitment to flexibility in service offerings allows clients to tailor solutions that align seamlessly with their unique requirements and operational models. Whether clients are seeking services for their in-house facility management team or require a total facility management solution, Confab is poised to deliver precisely what is needed.
            </p><br/>
            <p className='font-semibold mt-4'>
                Our integrated facility management services extend beyond conventional offerings to include specialized services tailored for diverse industries. These services encompass:
            </p><br/>
            <ul className='custom-list'>
                <li>
                    <span className='font-semibold text-black text-lg'>Refinery Facilities Management:  </span>
                    Confab specializes in managing the unique challenges posed by refinery environments. Our expertise ensures optimal performance, safety, and compliance in these critical sectors. From machinery maintenance to regulatory adherence, our team navigates the intricacies of refinery facilities to ensure seamless operations.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Infrastructure Project Management:  </span>
                    Recognizing the complexity of large-scale infrastructure projects, Confab offers specialized facility management services. We oversee the intricacies of project management, ensuring compliance with regulatory standards, efficient maintenance protocols, and optimal functionality of the infrastructure.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Environmental Sustainability Services:  </span>
                    Confab is committed to integrating environmentally sustainable practices into our facility management solutions. We provide services to optimize energy efficiency, reduce environmental impact, and enhance overall sustainability, aligning with the growing focus on eco-friendly operations.
                </li>
                <li>
                    <span className='font-semibold text-black text-lg'>Smart Building Solutions:  </span>
                    Embracing the era of smart technology, Confab offers integrated solutions for smart buildings. Our services include the implementation of IoT devices, automation systems, and advanced analytics to enhance building efficiency, security, and occupant comfort.
                </li>
            </ul><br/>
            <p className='font-semibold mt-4'>
                Confab's dedication to providing services that seamlessly align with the unique operational environments of our clients sets us apart. By understanding the intricacies of each facility and industry, we ensure that our integrated facility management solutions not only meet but exceed expectations. Our team is committed to delivering a level of excellence that fosters reliability, efficiency, and overall satisfaction.
            </p><br/>
            <p className='font-semibold mt-4'>
                Choose Confab for a partnership that goes beyond conventional facility management services. Experience the difference as we elevate your facility management, offering specialized solutions that cater to the unique needs of your industry and ensuring a seamless integration into your operational ecosystem.
            </p>
        </div>
      )
  }
];