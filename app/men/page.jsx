import Card from "@/components/Card"
import Filter from "@/components/Filter"
const getItems = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/items", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch items")
    }
    return res.json()
  } catch (error) {
    console.log("Error loading items: ", error)
  }
}
export default async function Men() {
  const { items } = await getItems()
  return (
    <div>
      <div className=" grid grid-cols-2 text-center pt-[calc(81.6px)]">
        <div className="border p-2">Filters</div>
        <div className="border p-2 ">Sort By</div>
      </div>

      <h1 className="text-5xl text-center font-bold mt-11">Men</h1>
      <p className="text-center mt-6">{items.length} products</p>

      <div className="flex ">
        <Filter isSizeSelected={true} />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 py-6  pr-6 gap-4">
          {items.map((product) => {
            return (
              <Card
                id={product._id}
                title={product.title}
                price={product.price}
                img={product.img}
                category={product.category}
                gender={product.gender}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
