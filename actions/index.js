import {books} from '../data/books';
import {articles} from '../data/articles';
import {organizations} from '../data/organizations';
import {lecture_category} from '../data/lecture_category';
import {lectures} from '../data/lectures';

const BASE_URL ="http://localhost:3000";

export const getlecturcategory= async () =>{
    const url = 'https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyD7v54j77Cm59exRklmX6JjdDYYHF4QEtM&part=snippet&channelId=UC3kG-1vBavgcATRxs0XRFQw&maxResults=100'
    const res = await fetch(url)
    var data = await res.json()
    var items = await data.items
    var playlists = []
    items.forEach(item => {
        let obj = {
            id: item.id,
            title: item.snippet.title,
        }
        playlists.push(obj)
    })

    return playlists


}

export const getlecturs= async (playlistId, token) =>{
    const videosPerPage = 12
    let pageToken = ''
    if (token !== null) {
        pageToken = `&pageToken=${token}`
    }

    const videosURL =`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyD7v54j77Cm59exRklmX6JjdDYYHF4QEtM&part=snippet&playlistId=${playlistId}&maxResults=12`


    const response = await fetch(videosURL)
    const videosData = await response.json()

    const videoItems = await videosData.items
    // const totalVideos = await videosData.pageInfo.totalResults
    // const numberOfPages = Math.ceil(totalVideos / videosPerPage)
    const nextPageToken = await videosData.nextPageToken || null
    const prevPageToken = await videosData.prevPageToken || null

    var videos = []
    var videoIds = ''

    videoItems.forEach(item => {
        //sometimes thumbnails can be missing
        let image = (typeof item.snippet.thumbnails.standard !== 'undefined') ? item.snippet.thumbnails.standard.url : ''
        let obj = {
            id: item.snippet.resourceId.videoId,
            image: image,
            title: item.snippet.title,
            date: item.snippet.publishedAt
        }
        videos.push(obj)
        videoIds += ',' + item.snippet.resourceId.videoId
    })

    return videos;


}


export const getBooks=()=>{
    return books;
}


export const getOrganizations=()=>{
    return organizations;
}

export const getArticles=()=>{
    return articles;
}

export const getArticlesDetails=(slug)=>{
    const articledetails = articles.filter(item => item.slug === slug)
    return articledetails[0];
}

export const getRelatedArticles = (cat) => {
    const relatedarticle = articles.filter(item => item.related === cat)
    return relatedarticle;
}

export const getFeaturedArticle=()=>{
    const feature_article=articles.filter(a=>a.is_feature ==="1")
    return feature_article;
}
