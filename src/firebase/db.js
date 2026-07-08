import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  where, 
  doc, 
  getDoc,
  addDoc 
} from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)

export async function getProducts () {
  const collRef = collection(db, "products")

  try {
    const docs = await getDocs(collRef)
    const products = []

    docs.forEach((doc) => {
      products.push({...doc.data(), id: doc.id})
    })

    return products
  } catch (error) {
    console.error("Error al obtener los documentos: ", error)
    return []
  }
}

export async function getCategories () {
  const collRef = collection(db, "categories")

  try {
    const docs = await getDocs(collRef)
    const categories = []

    docs.forEach((doc) => {
      categories.push(doc.data().name)
    })

    return categories
  } catch (error) {
    console.error("Error al obtener los documentos: ", error)
    return []
  }
}

export async function getProductsByCategory (category) {
  const productsRef = collection(db, "products")
  const q = query(productsRef, where("category", "==", category))
  const docs = await getDocs(q)
  const products = []
  
  docs.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
  })

  return products
}

export async function getDetail (id) {
  const docRef = doc(db, "products", id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return {...docSnap.data(), id: docSnap.id}
  } else {
    console.log("¡El documento especificado no existe!")
    return null
  }
}

export async function createOrder (order) {
  try {
    const docRef = await addDoc(collection(db, "orders"), order)
    
    console.log("Documento creado exitosamente con ID:", docRef.id)
  } catch (error) {
    console.error("Error al añadir el documento: ", error)
  }
}

