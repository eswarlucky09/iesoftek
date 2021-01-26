import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { sendCreditForm } from '../actions';
import { Form } from 'react-bootstrap';


const RenderTextField = ({ input, type, label, rows, meta: { touched, error } }) => {
    return (
        <div>
            <Form.Group className="text-left">
                <Form.Label>{label}</Form.Label>
                <Form.Control {...input} label={label} className="form-control" type={type} placeholder={label} />
                <Form.Text className="text-danger">
                    {touched && error ? error : ''}
                </Form.Text>
            </Form.Group>
        </div>
    )
}

const CreditForm = (props) => {
    const sendSignUpData = (val) => {
        props.sendCreditForm(val);
    }
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="card p-4 m-3">
            <h5 className="text-primary">Credit Card Apply</h5>
            <form onSubmit={handleSubmit(sendSignUpData)}>
                <Field
                    name="name"
                    label="Your Name"
                    type="text"
                    component={RenderTextField} />
                <Field
                    name="city"
                    label="Your city"
                    type="text"
                    component={RenderTextField} />
                <Field
                    name="salary"
                    label="Your salary"
                    type="number"
                    component={RenderTextField} />
                <Field
                    name="card"
                    label="Your card number"
                    type="text"
                    component={RenderTextField} />
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
            </form>
        </div>
    );
};
const validate = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = "Please enter your name"
    }
    if (!values.city) {
        errors.city = "Please enter city"
    }
    if (!values.salary) {
        errors.salary = "Please enter salary"
    }
    if (!values.card) {
        errors.card = "Please enter card"
    }
    return errors
}
const mapStateToProps = state => {
    return {}
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('CreditForm'));
const mapDispatchToProps = dispatch => {
    return {
        sendCreditForm: (payload) => { dispatch(sendCreditForm(payload)) }
    }
}

const CreditFormRedux = reduxForm({
    form: 'CreditForm',
    validate,
    onSubmitSuccess: afterSubmit,
    enableReinitialize: true,
    destroyOnUnmount: true,
})(CreditForm)
export default connect(mapStateToProps, mapDispatchToProps)(CreditFormRedux);