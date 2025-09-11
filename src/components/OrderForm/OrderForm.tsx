import { useId } from "react";
import css from "./OrderForm.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
// Namespace import
import * as Yup from "yup";

interface FormData {
  username: string;
  email: string;
  delivery: "pickup" | "courier" | "drone";
  restrictions: ("vegan" | "gluten-free" | "nut-free")[];
  deliveryTime: "" | "morning" | "afternoon" | "evening";
  message: string;
}

const defaultFormData: FormData = {
  username: "",
  email: "",
  delivery: "pickup",
  restrictions: [],
  deliveryTime: "",
  message: "",
};

const OrderSchema = Yup.object().shape({
  username: Yup.string().min(2, "Min length 2").required("Required filed"),
  email: Yup.string().email("Invalid email").required("Required filed"),
  delivery: Yup.string()
    .oneOf(["pickup", "courier", "drone"])
    .required("Required filed"),
  restrictions: Yup.array().of(
    Yup.string().oneOf(["vegan", "gluten-free", "nut-free"])
  ),
  deliveryTime: Yup.string()
    .oneOf(["morning", "afternoon", "evening"])
    .required("Required filed"),
  message: Yup.string().max(200, "To long"),
});

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: FormData,
    formikHelpers: FormikHelpers<FormData>
  ) => {
    console.log("values", values);
    formikHelpers.resetForm();
  };
  return (
    <Formik
      initialValues={defaultFormData}
      onSubmit={handleSubmit}
      validationSchema={OrderSchema}
    >
      {/* Render Prop */}
      {(values) => {
        console.log("values", values);
        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label htmlFor={`${fieldId}-username`} className={css.label}>
                Name
              </label>
              <Field
                type="text"
                name="username"
                id={`${fieldId}-username`}
                className={css.input}
              />
              <ErrorMessage
                name="username"
                component="span"
                className={css.error}
              />
              <label htmlFor={`${fieldId}-email`} className={css.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id={`${fieldId}-email`}
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
              <ErrorMessage
                name="delivery"
                component="span"
                className={css.error}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
              <ErrorMessage
                name="restrictions"
                component="span"
                className={css.error}
              />
            </fieldset>

            <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
              Preferred delivery time
            </label>
            <Field
              as="select"
              name="deliveryTime"
              id={`${fieldId}-deliveryTime`}
              className={css.input}
            >
              <option value="">-- Choose delivery time --</option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>
            <ErrorMessage
              name="deliveryTime"
              component="span"
              className={css.error}
            />

            <label htmlFor={`${fieldId}-message`} className={css.label}>
              Additional message
            </label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              id={`${fieldId}-message`}
              className={css.textarea}
            />
            <ErrorMessage
              name="message"
              component="span"
              className={css.error}
            />

            <button type="submit" className={css.button}>
              Place order
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
