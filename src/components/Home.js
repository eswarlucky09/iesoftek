import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCardDetails } from '../actions'
import CreditForm from './CreditForm';
import { Form } from 'react-bootstrap';

const Home = (props) => {
    const [cities, setCities] = useState('');
    const [card, setCard] = useState('');
    const [salary, setSalary] = useState('');
    const [initVal, setinitVal] = useState({});
    const getCardVal = (val) => {
        setCard(val);
        let cities = props.creditDetailsList.filter((data, i) => data.card === val);
        setCities(cities);
        setinitVal({});
        setSalary('')
    }
    const getCityVal = (val) => {
        let salary = props.creditDetailsList.find((data, i) => data.city === val && data.card === card);
        if (salary) { setSalary(salary.salary);setinitVal(salary) }
        else { setSalary('');setinitVal({}) }
    }
    const showCards = () => {
        const arr = [];
        props.creditDetailsList.map((data, i) => arr.push(data.card));
        return Array.from(new Set(arr)).map((data, i) => <option key={data} value={data}>{data}</option>);
    }
    return (
        <div className="container w-50">
            
            <div className="text-left">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Credit Card</Form.Label>
                    <Form.Control as="select" onChange={(e) => getCardVal(e.target.value)}>
                        <option value="">--Select Card --</option>
                        {showCards()}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Select City</Form.Label>
                    <Form.Control as="select" onChange={(e) => getCityVal(e.target.value)}>
                        <option value="">--Select City --</option>
                        {cities && cities.map((data, i) => <option key={'city' + i} value={data.city}>{data.city}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" disabled value={salary} />
                </Form.Group>
            </div>
            <CreditForm initialValues={initVal}/>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        creditDetailsList: state.reducer.creditDetailsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCardDetails: () => { dispatch(fetchCardDetails()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);