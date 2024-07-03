import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Button } from "@mui/material";

interface FilterFormProps {
  onFilter: (filters: any) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  return (
    <Formik
      initialValues={{
        gender: "",
        name: "",
        email: "",
        country: "",
      }}
      onSubmit={(values) => {
        onFilter(values);
      }}
    >
      {() => (
        <Form>
          <Field
            component={TextField}
            name="gender"
            label="Genero"
            fullWidth
            margin="dense"
          />
          <Field
            component={TextField}
            name="name"
            label="Nombre"
            fullWidth
            margin="dense"
          />
          <Field
            component={TextField}
            name="email"
            label="Correo"
            fullWidth
            margin="dense"
          />
          <Field
            component={TextField}
            name="country"
            label="Pais"
            fullWidth
            margin="dense"
          />
          <Button type="submit" color="primary" variant="contained">
            Filtrar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
