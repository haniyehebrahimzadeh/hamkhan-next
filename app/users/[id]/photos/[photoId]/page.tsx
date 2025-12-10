import React from 'react'

interface Props{
    params: Promise<{id:number; photoId :number}>
}
const  photopage= async ( {params} :Props) => {
    const {id} = await params
  return (
    <div>photopage{id}
         
    </div>
  )
}
export default photopage
