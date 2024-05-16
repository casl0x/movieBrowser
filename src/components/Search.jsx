import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';

let API_URL = "https://api.themoviedb.org/3/";
let API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
let ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
};

export default function Search() {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSearch = async (e) => {
        const value = e.target.value;
        setSearch(value);
        try {
            const response = await fetch (`${API_URL}search/multi?query=${value}&api_key=${API_KEY}`, options)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSuggestions(data.results)
        } catch (error) {
            console.error(error);
            setSuggestions([])
        }
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}search/multi?query=${search}&api_key=${API_KEY}`, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setModalContent(data.results);
            openModal();
        } catch (error) {
            console.error(error);
            throw new Error("Can't fetch the datas");
        }
    };

  return (
    <div>
        <form className='search' onSubmit={handleSearchSubmit}>
            <input 
            type="search" 
            name="search-form" 
            placeholder='Search movie' 
            value={search} 
            onChange={handleSearch}
            />
            <button type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </form>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
        >
            <div>
                {modalContent.map((result, index) => (
                    <div key={index}>
                        <p>{result.title || result.name}</p>
                    </div>
                ))}
            </div>
        </Modal>     
    </div>
  )
}
