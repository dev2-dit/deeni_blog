import {books} from '../data/books';
import {articles} from '../data/articles';
import {organizations} from '../data/organizations';
import {lecture_category} from '../data/lecture_category';
import {lectures} from '../data/lectures';

const BASE_URL ="http://localhost:3000";

export const getlecturcategory=()=>{
   return lecture_category ;
}

export const getlecturs=()=>{
   return lectures;
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
