import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField as FormikTextField } from "formik-mui";

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
  onFilter: (filters: any) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  open,
  onClose,
  onFilter,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Filtrar Usuarios</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            gender: "",
            name: "",
            email: "",
            country: "",
          }}
          onSubmit={(values) => {
            onFilter(values);
            onClose();
          }}
        >
          {() => (
            <Form>
              <Field
                component={FormikTextField}
                name="gender"
                label="Genero"
                fullWidth
                margin="dense"
              />
              <Field
                component={FormikTextField}
                name="name"
                label="Nombre"
                fullWidth
                margin="dense"
              />
              <Field
                component={FormikTextField}
                name="email"
                label="Correo"
                fullWidth
                margin="dense"
              />
              <Field
                component={FormikTextField}
                name="country"
                label="Pais"
                fullWidth
                margin="dense"
              />
              <DialogActions>
                <Button onClick={onClose} color="secondary">
                  Cancelar
                </Button>
                <Button type="submit" color="primary">
                  Filtrar
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
