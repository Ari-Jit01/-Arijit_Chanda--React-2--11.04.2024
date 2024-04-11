import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Post() {
    const[post,setpost] = useState()
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then((result)=>setpost(result.data))
        .catch((error)=>console.log(error)) 
    
    },[])
    console.log(post)
    return (
        <div>
            <h1 className='bg-danger text-white container mt-2'>hii</h1>
            <div className="col-md-12">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">SYMBOL</th>
      <th scope="col">NAME</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
{ post ?
post.map((posts)=>(
  <tr key={post.id}>
    <td>{post.id}</td>
    <td>{post.symbol}</td>
    <td>{post.name}</td>
    <td>{post.current_price}</td>
  </tr>
)):(<tr>
  <td>No data</td>
</tr>)}
  </tbody>
</table>
            </div>
        </div>
    )
}
