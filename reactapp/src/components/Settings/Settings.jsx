import React from "react";
import c from './Settings.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../Validators/validators";
import {renderField} from "../Validators/FormsControls";

const maxLength30 = maxLength(30);
const minLength1 = minLength(1);

const Settings = (props) => {

    let myHandleSubmit = (e) => {
        props.sendProfileFormThunk(e);
    }
    return (
        <div className={c.settingsCont}>
            <form onSubmit={props.handleSubmit(myHandleSubmit)}>
                <Field type="number"
                       label="userId"
                       validate={[required, maxLength30, minLength1]}
                       component={renderField}
                       name={'userId'}/>
                <div> About Me :
                    <Field type="text"
                           label="About Me"
                           validate={[required, maxLength30, minLength1]}
                           component={renderField}
                           name={'aboutMe'}/>
                </div>
                <div> Full Name :
                    <Field type="text"
                           component={renderField}
                           value = {props.id}
                           name={'fullName'}/>
                </div>
                <div>lookingForAJob :
                    <Field type="checkbox"
                           validate={[required]}
                           component={renderField}
                           name={'lookingForAJob'}/>
                </div>
                <div>Description :
                    <Field type="textarea"
                           label="Job Description"
                           validate={[required, maxLength30, minLength1]}
                           component={renderField}
                           name={'lookingForAJobDescription'}/>
                </div>
                {Object.keys(props.profile.contacts).map((keyName, i) => (
                    <div key={i}> {keyName}
                        <Field type="url"
                               label={keyName}
                               component={renderField}
                               name={`contacts.${keyName}`}/>
                    </div>
                ))}
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
};
export default reduxForm({form: 'settingsForm'})(Settings);
