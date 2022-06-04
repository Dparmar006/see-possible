import React from 'react'
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../util/api'
const AddressCard = ({ address, fetchData }) => {
  const nevigate = useNavigate()

  const handleDelete = async id => {
    try {
      const response = await api.delete(`/address/${id}`)
      toast.success('Address deleted successfully.')
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <div className='addresscard'>
        <p className='addresscard__content'>{address.addressId}</p>
        <BiEditAlt
          onClick={() => {
            toast.success('Address added successfully')

            //   nevigate('/manage-address')}
          }}
          className='addresscard__edit'
        />
        <BiTrash
          onClick={() => {
            handleDelete(address.id)
          }}
          className='addresscard__delete'
        />
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
