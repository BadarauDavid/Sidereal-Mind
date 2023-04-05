import React, { useState } from "react";


function StoryContainer({ id, name, story, onDelete, onSave, date, likes}) {
    const [number, setNumber] = useState(20);
    const [show, setShow] = useState(true);
    const [pressEdit, setPressEdit] = useState(true);
    const [nameEdit, setNameEdit] = useState(name);
    const [storyEdit, setStoryEdit] = useState(story);
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

    const handleSave = async () => {
        setPressEdit(!pressEdit);
        try {
            await fetch(`http://localhost:3001/api/story-sharing/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: nameEdit, story: storyEdit }),
            });
            onSave(id);
            // onSave(name);
            // onSave(story);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLike = async () =>{
        likes ++;
        try {
            await fetch(`http://localhost:3001/api/story-sharing/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ like:likes}),
            });
            onSave(id);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="card-story">
            {pressEdit ? (
                <div >
                    <h2>{name}</h2>
                    <p>{story.slice(0, number)}</p>
                    <p>{date}</p>
                    <button onClick={() => setPressEdit(!pressEdit)} className="story-button">
                    <i className="fa fa-scissors"></i>
                    </button>
                    <button onClick={handleDelete} className="story-button">
                    <i className="fa fa-trash-o"></i>
                    </button>
                    <button onClick={handleLike}>{likes} <i className="fa fa-thumbs-up"></i></button>
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
                    <input value={nameEdit} onChange={(e) => {setNameEdit(e.target.value)}}/>
                    <input value={storyEdit} onChange={(e) => {setStoryEdit(e.target.value)}} />
                    <button onClick={handleSave} className="story-button">
                        Save
                    </button>
                </div>
            )}
        </div>
    );
}

export default StoryContainer;