import { useState, useEffect } from "react";
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY
import search from '../data/search.json'
import jobDetail from '../data/jobDetail.json'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '7f39ab51edmsh49fa464f24a3aacp189a6fjsncd9640b70a85',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };
    // { query: 'Python developer in Texas, USA', page: '1', num_pages: '1' }

    const fetchData = async () => {
        setIsLoading(true)
        try {
            // const response = await axios.request(options)
            // setData(response.data.data);

            if(endpoint === 'search') {
                setData(search.data);
            }
            if(endpoint === 'job-details') {
                setData(jobDetail.data);
            }
            
        } catch (error) {
            setError(error)
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const refetch = () => {
        setLosetIsLoadingading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }

}

export default useFetch;