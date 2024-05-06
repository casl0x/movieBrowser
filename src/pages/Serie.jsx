import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FetchSerie } from '../utils/request';

export default function Serie() {
  const [serie, setSerie] = useState(null);
  const { tvId } = useParams();

  useEffect(() => {
    const fetchSerieDetails = async () => {
      const serieData = await FetchSerie(tvId);
      setSerie(serieData);
    };

    fetchSerieDetails();
  }, [tvId]);

  return (
    <div>
      {serie ? (
        <div>
          <h2>{serie.name}</h2>
          <p>{serie.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

