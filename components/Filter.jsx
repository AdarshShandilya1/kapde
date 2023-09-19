export default function Filter(props) {
  return (
    <div className="w-1/3 px-4 py-6">
      <div>
        <h1 className=" font-semibold text-2xl">Filters</h1>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Price</h2>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Product Type</h2>
        <div className="flex">
          <input type="checkbox" />
          <p className="ml-2">Shirts</p>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <p className="ml-2">T-Shirts</p>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <p className="ml-2">Bottoms</p>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <p className="ml-2">Sweatshirts</p>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <p className="ml-2">Hoodies</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Size</h2>
        <div className="grid grid-cols-3 gap-2">
          <div
            className={
              props.isSizeSelected
                ? " py-2 border-2 rounded-md text-center border-black bg-neutral-200  opacity-"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer"
            }
          >
            S
          </div>
          <div
            className={
              props.isSizeSelected
                ? " py-2 border-2 rounded-md text-center border-black bg-neutral-200  opacity-"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer"
            }
          >
            M
          </div>
          <div
            className={
              props.isSizeSelected
                ? " py-2 border-2 rounded-md text-center border-black bg-neutral-200  opacity-"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer"
            }
          >
            L
          </div>
          <div
            className={
              props.isSizeSelected
                ? " py-2 border-2 rounded-md text-center border-black bg-neutral-200  opacity-"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer"
            }
          >
            XL
          </div>
          <div
            className={
              props.isSizeSelected
                ? " py-2 border-2 rounded-md text-center border-black bg-neutral-200  opacity-"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer"
            }
          >
            XXL
          </div>
        </div>
      </div>
    </div>
  )
}
