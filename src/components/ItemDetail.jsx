import Counter from './Counter'

function ItemDetail ({ detail }) {
  return (
    <div className='flex'>
      <img src={detail?.image} className='w-1/2 border rounded border-gray-700' />
      <div className='px-4 gap-5 flex flex-col'>
        <h2 className='text-3xl font-medium'>{detail?.name}</h2>
        <p className='text-yellow-300'>rating: {detail?.rating}/5</p>
        <p className='text-[#d0bcff] text-2xl font-medium'>${detail?.price}</p>
        <p>{detail?.description}</p>
        <Counter item={detail} />
      </div>
    </div>
  )
}

export default ItemDetail
