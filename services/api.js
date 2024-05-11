import axios from 'axios';

const rapidApiKey = '1541aaadf9msh6c5432cdbe45d17p183a95jsn94566509c5fd';

export const fetchEvents = async (leagueId) => {
  const options = {
    method: 'GET',
    url: 'https://pinnacle-odds.p.rapidapi.com/kit/v1/markets',
    params: {
      sport_id: '1',
      is_have_odds: 'true',
      league_ids: leagueId
    },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'pinnacle-odds.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
