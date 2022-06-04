import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddressCard from '../../components/AddressCard'
import Button from '../../components/Button'
import Input from '../../components/Input'
import api from '../../util/api'

const ListAddress = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [addressList, setAddressList] = useState([])

  const fetchData = async () => {
    try {
      const response = await api.get('/address')
      setAddressList(response.data)
    } catch (error) {
      console.log(error)
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
          {addressList
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
            ))}
        </div>

        <Link to='/manage-address'>
          <Button>Add new Address</Button>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default ListAddress
