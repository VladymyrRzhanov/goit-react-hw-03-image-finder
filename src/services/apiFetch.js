import axios from 'axios';
// import React from 'react'

const API_KEY = "21924211-a56ef8093bc4c324081574229";
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export const fetchImg = (searchName, page) => (
    axios.get(
        `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchName}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`
    )
)
