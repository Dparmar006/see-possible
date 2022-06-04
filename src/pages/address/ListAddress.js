import React from 'react'
import AddressCard from '../../components/AddressCard'
import Button from '../../components/Button'
import Input from '../../components/Input'
const addressList = [
  {
    addressId: 'ABC123',
    firstName: 'Hello',
    lastName: 'World',
    addressLine1: 'Mota varacha',
    addressLine2: 'XY Road',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',

    pincode: 394120
  },
  {
    addressId: 'ABC123',
    firstName: 'Hello',
    lastName: 'World',
    addressLine1: 'Mota varacha',
    addressLine2: 'XY Road',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',

    pincode: 394120
  },
  {
    addressId: 'ABC123',
    firstName: 'Hello',
    lastName: 'World',
    addressLine1: 'Mota varacha',
    addressLine2: 'XY Road',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',

    pincode: 394120
  },
  {
    addressId: 'ABC123',
    firstName: 'Hello',
    lastName: 'World',
    addressLine1: 'Mota varacha',
    addressLine2: 'XY Road',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',

    pincode: 394120
  },
  {
    addressId: 'ABC123',
    firstName: 'Hello',
    lastName: 'World',
    addressLine1: 'Mota varacha',
    addressLine2: 'XY Road',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',

    pincode: 394120
  }
]
const ListAddress = () => {
  return (
    <React.Fragment>
      <div className='column-flex'>
        <h2>Address Book</h2>

        <Input />
        <div className='address__list'>
          {addressList.map(address => (
            <AddressCard address={address} />
          ))}
        </div>

        <Button>Add new Address</Button>
      </div>
    </React.Fragment>
  )
}

export default ListAddress
