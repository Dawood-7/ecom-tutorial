import ProductsContainer from "@/components/products/ProductsContainer"

const ProductsPage = ({searchParams}:{searchParams:{layout?:string, search?:string}}) => {
  const layout = searchParams.layout || 'grid'
  const searchTerm = searchParams.search || ''
  console.log(searchParams)

  return (
    <ProductsContainer layout={layout} search={searchTerm} />
  )
}
export default ProductsPage