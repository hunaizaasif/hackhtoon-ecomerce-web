import { groq } from "next-sanity";



export const allProducts = groq `*[--type == "products"]`
export const four = groq `*[--type == "products"][0..3]`