import axios from 'axios'
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
    // if (e.target.name === 'pincode' && e.target.value.length === 6) {
    //   fetchAddressSuggetions(e.target.value)
    // }
  }

  const fetchAddressSuggetions = async e => {
    e.preventDefault()
    if (e.target.value.length !== 6) {
      return
    }
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      )

      if (response.status === 200) {
        let sugg = response.data[0]?.PostOffice?.[0]
        setFields({
          ...fields,
          state: sugg?.State,
          city: sugg?.Division,
          country: sugg?.Country
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    try {
      const response = await api.get(`/address/${id}`)
      setFields({ ...response.data })
    } catch (error) {
      toast.error('Something bad happened on server')
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
        nevigate('/')
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
          autoComplete='off'
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
            value={fields.pincode}
            name='pincode'
            onBlur={e => fetchAddressSuggetions(e)}
            label='Pincode / Zip code'
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
            type='tel'
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
