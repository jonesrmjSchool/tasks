import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState("Your name");
    const [isStudent, setIsStudent] = useState(true);

    const switchChanged = () => {
        setEditMode(!editMode);
    };

    const nameChanged = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setUsername(event.target.value);
    };

    const studentChanged = (event: {
        target: { checked: boolean | ((prevState: boolean) => boolean) };
    }) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <p>Edit Mode</p>
            <div className="form-switch">
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={switchChanged}
                    role="checkbox"
                />
            </div>
            {!editMode ? (
                <p>
                    {username} {isStudent ? "is a student" : "is not a student"}
                </p>
            ) : (
                <form>
                    <label>
                        Your Name:
                        <input
                            type="text"
                            value={username}
                            onChange={nameChanged}
                        />
                    </label>
                    <label>
                        Are you a student?
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={studentChanged}
                            role="checkbox"
                        />
                    </label>
                </form>
            )}
        </div>
    );
}
