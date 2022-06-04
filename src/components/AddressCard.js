import React from 'react'
import { BiEditAlt, BiTrash } from 'react-icons/bi'
const AddressCard = ({ address }) => {
  return (
    <React.Fragment>
      <div className='addresscard'>
        <p className='addresscard__content'>{address.addressId}</p>
        <BiEditAlt className='addresscard__edit' />
        <BiTrash className='addresscard__delete' />
        <p className='addresscard__content'>
          {address.firstName + ' ' + address.lastName}
        </p>
        <p className='addresscard__content'>{address.addressLine1}</p>
        <p className='addresscard__content'>{address.addressLine2}</p>
        <p className='addresscard__content'>{address.city}</p>
        <p className='addresscard__content'>{address.state}</p>
        <p className='addresscard__content'>{address.country}</p>
        <p className='addresscard__content'>
          {address.telephone || 'No Telephone'}
        </p>
      </div>
    </React.Fragment>
  )
}

export default AddressCard
