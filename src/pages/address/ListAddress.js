import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import AddressCard from '../../components/AddressCard'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import api from '../../util/api'

const ListAddress = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [addressList, setAddressList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await api.get('/address')
      setAddressList(response.data)
    } catch (error) {
      toast.error("Couldn't retrive addresses.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <div className='column-flex'>
        <h2>Address Book</h2>

        <Input
          type='search'
          value={searchTerm}
          wrapperClass='d_w-30'
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className='address__list'>
          {addressList.length !== 0 ? (
            addressList
              .filter(ele => {
                return Object.values(ele)
                  ?.join('')
                  ?.toLowerCase()
                  ?.includes(searchTerm?.toLowerCase())
              })
              .map(address => (
                <AddressCard
                  address={address}
                  key={address.id}
                  fetchData={fetchData}
                />
              ))
          ) : (
            <Loading data={addressList.length} isLoadig={isLoading} />
          )}
        </div>

        <Link to='/manage-address'>
          <Button>Add new Address</Button>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default ListAddress
