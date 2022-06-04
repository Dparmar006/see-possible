import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../components/Button'
import Input from '../../components/Input'
import api from '../../util/api'

const AddAddress = () => {
  const [fields, setFields] = useState({})

  const fieldChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
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
    } finally {
      setFields({})
    }
  }

  return (
    <React.Fragment>
      <div className='column-flex'>
        <h2>Add / Edit Address</h2>
        <form
          method='POST'
          onSubmit={e => handleSubmit(e)}
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
