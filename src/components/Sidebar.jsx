function Sidebar () {
  return (
    <aside className='py-5 px-3 flex flex-col justify-between bg-[#201f1f] w-2/12 h-screen'>
      <header>
        <h1 className='text-2xl text-[#d0bcff]'>Luxe Boutique</h1>
        <p className='text-gray-400 mb-5'>Premium Tech Store</p>
        <ul>
          <li className='text-white'>Home</li>
          <li className='text-white'>Categories</li>
          <li className='text-white'>New Arrivals</li>
          <li className='text-white'>My Orders</li>
          <li className='text-white'>Profile</li>
        </ul>
      </header>
      <button className='bg-[#d0bcff] text-purple-900 font-bold w-4/5 px-3 py-2 rounded'>
        Shop Now
      </button>
    </aside>
  )
}

export default Sidebar
