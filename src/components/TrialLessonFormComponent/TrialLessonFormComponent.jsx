import css from './TrialLessonFormComponent.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  reason: '',
  name: '',
  email: '',
  phone: '',
};

const schema = Yup.object({
  reason: Yup.string().required(),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
});

const TrialLessonFormComponent = ({ teacher }) => {
  const { avatar_url, name, surname } = teacher;

  const onFormSubmit = ({ name }, { resetForm }) => {
    console.log('SUMBIT');
    alert(
      `${name}, your request for a trial lesson has been accepted. Our manager will contact you soon.`
    );

    resetForm();
  };

  return (
    <>
      <h2>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div>
        <img src={avatar_url} alt={`${name} ${surname}`} />
        <div>
          {' '}
          <p>Your teacher</p>
          <p>
            {name} {surname}
          </p>{' '}
        </div>
        <h3>What is your main reason for learning English?</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onFormSubmit}
        >
          <Form autoComplete="off" className={css.trialLessonForm}>
            <div className={css.formRadioBox}>
              <label>
                <Field type="radio" name="reason" value="carier" checked />
                Career and business
              </label>
              <label>
                <Field type="radio" name="reason" value="kids" />
                Lesson for kids
              </label>
              <label>
                <Field type="radio" name="reason" value="abroad" />
                Living abroad
              </label>
              <label>
                <Field type="radio" name="reason" value="coursework" />
                Exams and coursework
              </label>
              <label>
                <Field type="radio" name="reason" value="hobby" />
                Culture, travel or hobby
              </label>
            </div>

            <Field type="text" name="name" placeholder="Full Name" />
            <ErrorMessage name="name" component="span" />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <Field type="tel" name="phone" placeholder="Phone number" />
            <ErrorMessage name="phone" component="span" />

            <button type="submit">Book</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default TrialLessonFormComponent;
