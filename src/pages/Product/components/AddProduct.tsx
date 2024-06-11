import { Box, Button, CardMedia, FormControl, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface IFormInput {
  name: string;
  image: object;
  price: number;
}

export const AddProduct = () => {
  const schema = yup
    .object({
      name: yup.string().required('Please enter a name'),
      image: yup.mixed().required('Please upload an image'),
      price: yup.number().required('Please enter a price'),
    })
    .required()
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  }

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    }
  }, [imageUrl]);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ maxWidth: '500px', margin: '0 auto' }}>
        <Typography variant="h3" marginBottom={2}>Add product Form</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControl>
            <TextField {...register("name")} id="outlined-basic" label="Product Name" variant="outlined" type="text" />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          </FormControl>
          <FormControl>
            <TextField {...register("image")} id="outlined-basic" variant="outlined" type="file" onChange={handleChangeImage} />
            {imageUrl && <CardMedia
              sx={{ width: 100, height: 100, mr: 2 }}
              image={imageUrl}
            />}
            {errors.image && <p style={{ color: "red" }}>{errors.image.message}</p>}
          </FormControl>
          <FormControl>
            <TextField {...register("price")} id="outlined-basic" label="Product Price" variant="outlined" type="number" />
            {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
          </FormControl>
          <FormControl>
            <Button type="submit" variant='contained' size="large" color="primary">Add product</Button>
          </FormControl>
        </Box>
      </Box>
    </form>
  )
}
