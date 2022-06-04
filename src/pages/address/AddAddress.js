import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../components/Button'
import Input from '../../components/Input'
import api from '../../util/api'

const AddAddress = () => {
  const [fields, setFields] = useState({})
  const { id } = useParams()
  const nevigate = useNavigate()
  const fieldChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const fetchData = async () => {
    try {
      const response = await api.get(`/address/${id}`)
      setFields({ ...response.data })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [])

  const handleEditAddress = async e => {
    e.preventDefault()
    try {
      const response = await api.put(`/address/${id}`, { ...fields })
      if (response.status === 200) {
        toast.success('Address edited successfully')
        nevigate('/')
      }
    } catch (error) {
      toast.error(
        'Something bad happened, Make sure you are connected to internet'
      )
    } finally {
      setFields({})
    }
  }

  const handleAddAddress = async e => {
    e.preventDefault()
    try {
      const response = await api.post('/address', { ...fields })
      if (response.status === 201) {
        toast.success('Address added successfully')
      }
    } catch (error) {
      toast.error(
        'Something bad happened, Make sure you are connected to internet'
      )
      console.log({ ...error })
    } finally {
      setFields({})
    }
  }

  return (
    <React.Fragment>
      <div className='column-flex'>
        <h2>{id ? 'Edit' : 'Add'} Address</h2>
        <form
          method='POST'
          onSubmit={e => {
            id ? handleEditAddress(e) : handleAddAddress(e)
          }}
          className='addressform'
        >
          <Input
            wrapperClass='d_w-45'
            onChange={fieldChange}
            value={fields.firstName}
            name='firstName'
            label='First name'
            required
          />
          <Input
            wrapperClass='d_w-45'
            onChange={fieldChange}
            value={fields.lastName}
            name='lastName'
            label='First name'
            required
          />
          <Input
            wrapperClass='d_w-95'
            onChange={fieldChange}
            value={fields.addressLine1}
            name='addressLine1'
            label='Address'
            required
          />
          <Input
            wrapperClass='d_w-95'
            onChange={fieldChange}
            value={fields.addressLine2}
            name='addressLine2'
            required
          />

          <Input
            wrapperClass='d_w-45'
            onChange={fieldChange}
            value={fields.city}
            name='city'
            label='City'
            required
          />
          <Input
            wrapperClass='d_w-45'
            onChange={fieldChange}
            value={fields.state}
            name='state'
            label='State'
            required
          />

          <Input
            wrapperClass='d_w-45'
            onChange={fieldChange}
            value={fields.country}
            name='country'
            label='Country'
            required
          />
          <Input
            wrapperClass='d_w-45'
            onChange={fieldChange}
            value={fields.telephone}
            name='telephone'
            label='Telephone'
            type='number'
            required
          />

          <Button type='submit' className='d_w-95'>
            Save Address
          </Button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddAddress
