import { groq } from "next-sanity";





export const allproducts = groq  `*[__type == products]`


export const four  = groq `*[__type == "products"][0..3]`