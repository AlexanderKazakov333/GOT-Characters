import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './charecters.css';
const Charecters = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const getC = async () => {

        setIsLoading(true)
        const response = await axios.get('https://thronesapi.com/api/v2/Characters')
        console.log(response.data);
        try{
            setData(response.data)
        }
        catch (e) {
            console.log(e);
        }
        finally{
            setIsLoading(false)
        }
    }


    useEffect(() => {
        getC()
    }, [])


    const goToDetailChar = (id) => {
        navigate(`/charecters/${id}`)
    }

    return (
        <div className='allCharacters' >
            {isLoading ? <div></div> : <div>{data.map((item, idx) => {
                return(
                    <div onClick={() => goToDetailChar(item.id)} className='div-charec' key={idx}>
                        <div>
                            {item.id}
                        </div>
                        <div>
                            {item.fullName}
                        </div>
                    </div>
                    
                )
            })}</div>}
        </div>
    )
}

export default Charecters