import { useEffect, useState } from 'react'
import { FetchResult, type Product } from '../types'

interface Props {
    url: string
}

export const useFetch = ({ url }: Props): FetchResult => {
  const [items, setItems] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    const abortController = new AbortController()

    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) throw new Error('something went wrong')

        return res.json()
      })
      .then(data => setItems(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [url])

  return { items, loading, error }
}
