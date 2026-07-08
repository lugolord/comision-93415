import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getDetail } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [detail, setDetail] = useState()
  const { id } = useParams()

  useEffect(() => {
    getDetail(id)
      .then(prod => setDetail(prod))
  }, [id])

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer
