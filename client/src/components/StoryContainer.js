import React, { useState } from "react";


function StoryContainer({ id, name, story, onDelete }) {
    const [number, setNumber] = useState(20);
    const [show, setShow] = useState(true);
    const [editUser, setEditUser] = useState(null);
    const [pressEdit, setPressEdit] = useState(true);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/story-sharing/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            onDelete(id);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="card-story">
            {pressEdit ? (
                <div>
                    <h2>{name}</h2>
                    <p>{story.slice(0, number)}</p>
                    <button onClick={() => setPressEdit(!pressEdit)} className="story-button">
                        Edit
                    </button>
                    <button onClick={handleDelete} className="story-button">
                        Delete
                    </button>
                    {show ? (
                        <button
                            className="story-button"
                            onClick={() => {
                                setNumber(story.length);
                                setShow(!show);
                            }}
                        >
                            Read More
                        </button>
                    ) : (
                        <button
                            className="story-button"
                            onClick={() => {
                                setNumber(20);
                                setShow(!show);
                            }}
                        >
                            Read less
                        </button>
                    )}
                </div>
            ) : (
                <div>
                    <input value={name} />
                    <input value={story} />
                    <button onClick={() => setPressEdit(!pressEdit)} className="story-button">
                        Save
                    </button>
                </div>
            )}
        </div>
    );
}

export default StoryContainer;