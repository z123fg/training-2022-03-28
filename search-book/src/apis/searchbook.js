import axios from "axios";

export function searchbook(keyword, currentPage, itemsPerPage) {
    //0~4
    //5~9
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${keyword}&startIndex=${(currentPage-1)*itemsPerPage}&maxResults=${itemsPerPage}`)
        .then(res => {return res});
}