export interface Rating {
    rate: number;
    count: number;
}

export type Category = string | null | undefined;

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export type ItemList = Product[]

export interface FetchResult {
    items: ItemList,
    loading: boolean,
    error: string | null
}

export interface Order {
    id: string
    products: ItemList,
    totalProducts: number,
    totalPrice: string,
    date: string
  }

export interface CartState {
    error: string | null,
    loading: boolean,
    filteredProducts: ItemList
    cartProducts: ItemList
    openDetail: boolean
    openCheckout: boolean
    productDetails: Product | null
    orders: Order[]
    search: string
    setCategory: (category: Category) => void
    setSearch: (input: string) => void
    setOrders: (orders: Order[]) => void
    setOpenCheckout: (bool:boolean) => void
    setCartProducts: (items:ItemList) => void
    openProductDetail: () => void
    closeProductDetail: () => void
    setProductDetails: (item: Product) => void
}

export interface FilterProps {
    items: Product[]
    search: string
}
