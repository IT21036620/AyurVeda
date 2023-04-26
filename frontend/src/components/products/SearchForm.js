import React from 'react'
import { useGlobalContext } from '../../pages/products/context'
import './component.css'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchProduct = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your product</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchProduct}
          ></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
