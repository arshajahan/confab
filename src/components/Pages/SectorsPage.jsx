import React, { useEffect, useState } from 'react';
import WrapperCard from '../UI/WrapperCard';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { sectorsData } from '../../assets/constants';

function SectorsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialSelectedSector = id || 'Infrastructure';
  const [selectedSector, setSelectedSector] = useState(initialSelectedSector);

  useEffect(() => {
    const sectorExists = sectorsData.some((sector) => sector.id === id);

    if (id && sectorExists) {
      setSelectedSector(id);
    } else {
      // If the requested sector is not found, redirect to the default sector
      navigate(`/sectors/${initialSelectedSector}`);
    }
  }, [id, initialSelectedSector, navigate]);
  

  const currentSectorData = sectorsData.find((sector) => sector.id === selectedSector);

  return (
    <div className='pt-32 lg:pt-48 pb-6 text-main'>
      <WrapperCard className='flex flex-col lg:flex-row justify-between'>
        <div className='mb-8'>
          <h2 className='text-4xl font-semibold mb-4'>Sectors</h2>
          <ul className='custom-list '>
            {sectorsData.map((sector) => (
              <li key={sector.id}>
                <Link to={`/sectors/${sector.id}`} className='font-semibold '>
                  {sector.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:w-2/3 p-8 bg-gray-100'>
          {/* Add the image here */}
          <img src={currentSectorData.image} alt={currentSectorData.title} className='mb-8' />

          <h2 className='text-3xl'>{currentSectorData.title}</h2>
          <p>{currentSectorData.content}</p>
        </div>
      </WrapperCard>
    </div>
  );
}

export default SectorsPage;
