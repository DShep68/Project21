import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SettingsForm = () => {

    let settingsDefault = {
        displayLabel: true,
        displayTime: false,
        displayDate: false,
        displayImage: true,
        displayTimer: false
    }

    const [settings, setSettings] = useState(settingsDefault)
    let [test, setTest] = useState("hello")

    function handleFormToggles(event) {
        let inputName = event.target.name
        console.log(inputName)
        console.log(event.target.checked)
        setTest("world")
        setSettings(prevSettings => {
            return {
                ...prevSettings,
                displayLabel: !event.target.checked
            }

        })
    }

    function form() {
        return (
            <form>
                <input id="displayLabel" type="checkbox" name="displayLabel" checked={settings.displayLabel} onChange={handleFormToggles}/>
                <label htmlFor="displayLabel">Display Labels</label>
            </form>
        )
    }

    return (
        <>
            {form()}
        </>
    )

}

export default SettingsForm;