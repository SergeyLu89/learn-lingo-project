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
    <div className={css.lessonFormWrapper}>
      <h2>Book trial lesson</h2>
      <p className={css.lessonFormWrapperDescr}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={css.teacherInfoBox}>
        <img
          src={avatar_url}
          alt={`${name} ${surname}`}
          className={css.teacherAvatar}
        />
        <div className={css.teacherNameBox}>
          {' '}
          <p>
            <span>Your teacher</span>
          </p>
          <h4>
            {name} {surname}
          </h4>{' '}
        </div>
      </div>
      <h3>What is your main reason for learning English?</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onFormSubmit}
      >
        <Form autoComplete="off" className={css.trialLessonForm}>
          <div className={css.formRadioBox}>
            <label className={css.customRadio}>
              <Field type="radio" name="reason" value="carier" checked />
              <span>Career and business</span>
            </label>
            <label className={css.customRadio}>
              <Field type="radio" name="reason" value="kids" />
              <span>Lesson for kids</span>
            </label>
            <label className={css.customRadio}>
              <Field type="radio" name="reason" value="abroad" />
              <span>Living abroad</span>
            </label>
            <label className={css.customRadio}>
              <Field type="radio" name="reason" value="coursework" />
              <span>Exams and coursework</span>
            </label>
            <label className={css.customRadio}>
              <Field type="radio" name="reason" value="hobby" />
              <span>Culture, travel or hobby</span>
            </label>
          </div>
          <div className={css.userInfoWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Full Name"
              className={css.formInput}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.inputError}
            />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.formInput}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.inputError}
            />

            <Field
              type="tel"
              name="phone"
              placeholder="Phone number"
              className={css.formInput}
            />
            <ErrorMessage
              name="phone"
              component="span"
              className={css.inputError}
            />
          </div>
          <button type="submit" className={css.formBtn}>
            Book
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TrialLessonFormComponent;
