import React, { useEffect, useState, useRef } from "react";
import "../styles/modal-single-photo.css";
// import { CloseButton } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";

export const SinglePhotoView = ({ photo, closeModal }) => {

    const [currentPhoto, setCurrentPhoto] = useState(photo.photo_url);
    const [openModal, setOpenModal] = useState(false);

    const buttonStyle = {

        position: "absolute",
        top: 20,
        right: 20,
    }

    return (
        <dialog
            className="singlePhotoView"
            open={openModal}
        >
            <div className="singlePhotoView__imageContainer">
                <img src={currentPhoto} alt="single photo" height={'100px'} width={'100px'} />
            </div>

            <button className="parent-button" onClick={closeModal} style={buttonStyle}>
                <CloseButton aria-label="Hide" size='lg' />
            </button>
        </dialog>
    )
}