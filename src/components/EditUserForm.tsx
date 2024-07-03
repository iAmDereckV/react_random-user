import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField as FormikTextField } from "formik-mui";
import { User } from "./../UserModel";

const UserSchema = Yup.object().shape({
  gender: Yup.string().required("Required"),
  name: Yup.object().shape({
    title: Yup.string().required("Required"),
    first: Yup.string().required("Required"),
    last: Yup.string().required("Required"),
  }),
  location: Yup.object().shape({
    street: Yup.object().shape({
      number: Yup.number().required("Required"),
      name: Yup.string().required("Required"),
    }),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    postcode: Yup.number().required("Required"),
  }),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  cell: Yup.string().required("Required"),
});

const EditUserModal: React.FC<{
  user: User;
  onClose: () => void;
  onSave: (user: User) => void;
}> = ({ user, onClose, onSave }) => (
  <Dialog open onClose={onClose}>
    <DialogTitle>Editar Usuario</DialogTitle>
    <DialogContent>
      <Formik
        initialValues={user}
        validationSchema={UserSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          onSave(values);
          onClose();
        }}
      >
        {({ isSubmitting }) => (
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
              name="name.title"
              label="Titulo"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="name.first"
              label="Primer Nombre"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="name.last"
              label="Segundo Nombre"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="location.street.number"
              label="Numero de Calle"
              type="number"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="location.street.name"
              label="Nombre de Calle"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="location.city"
              label="Ciudad"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="location.state"
              label="Estado"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="location.country"
              label="Pais"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="location.postcode"
              label="Codigo Postal"
              type="number"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="email"
              label="Correo"
              type="email"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="phone"
              label="Telefono"
              fullWidth
              margin="dense"
            />
            <Field
              component={FormikTextField}
              name="cell"
              label="Celular"
              fullWidth
              margin="dense"
            />
            <DialogActions>
              <Button onClick={onClose} color="info">
                Cancelar
              </Button>
              <Button type="submit" color="success" disabled={isSubmitting}>
                Guardar cambio
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </DialogContent>
  </Dialog>
);
export default EditUserModal;
