import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddressCard from '../../components/AddressCard'
import Button from '../../components/Button'
import Input from '../../components/Input'
import api from '../../util/api'

const ListAddress = () => {
  const [addressList, setAddressList] = useState([])

  const fetchData = async () => {
    try {
      const response = await api.get('/address')
      console.log(response)
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

        <Input />
        <div className='address__list'>
          {addressList.map(address => (
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
