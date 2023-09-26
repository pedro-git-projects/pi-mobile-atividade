import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, TextInput, Button } from 'react-native-paper';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text>Name</Text>
      <TextInput
        {...register('name', {
          required: true,
        })}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        value={formData.name}
      />
      {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}

      <Text>Email</Text>
      <TextInput
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        value={formData.email}
      />
      {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
