import { useEffect, useState } from 'react'
import Product from './Product'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)

  function handleClick() {
    setLoaded(true)
  }

  useEffect(() => {
    console.info('Ini yus ifek dari line 13 :v')
  }, [])

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch('/products.json')
      const data = await response.json()
      setProducts(data)
    }

    if (loaded) {
      fetchProduct()
    }

    return () => {
      console.info('Component unmounted')
    }
  }, [loaded])

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  )
}
