import ItemList from './ItemList'
import FetchData from './FetchData'
import { withLog } from '../hoc/withLog'

const ItemListWithLog = withLog(ItemList)

function ItemListContainer () {
  return (
    <FetchData>
      {(items) => <ItemListWithLog products={items} />}
    </FetchData>
  )
}

export default ItemListContainer
