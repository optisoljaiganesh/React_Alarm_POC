import React from "react";
import { useFileUpload } from "use-file-upload";
import { connect } from "react-redux";
import { setAlarmMusic, setDefaultAlarmMusic } from "../Action";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
        popup: "colored-toast",
        icon: "white-toast-icon",
    },
    timer: 3000,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const FileUploadComponent = (props) => {
    const [file, selectFile] = useFileUpload();
    return (
        <div>
            <button className="btn btn-success"
                onClick={() => {
                    selectFile({ accept: "audio/mp3" }, ({ source, name, size, file }) => {
                        props.setAlarmMusic(source)
                        ToastAlert("success", "Your Alarm Music set Successfully");
                    });
                }}
            >
                Select Your Favorite Music
            </button> &nbsp;

            <button className="btn btn-primary" onClick={() => setDefaultAlarmSound(props)}>Set Default Music</button>
        </div>
    );

};
const setDefaultAlarmSound = (props) =>{
    props.setDefaultAlarmMusic();
    ToastAlert("success", "Default Music set Successfully");
}

const ToastAlert = (icon, title) => {
    return Toast.fire({
        target: document.getElementById("form-modal"),
        icon: `${icon}`,
        title: `${title}`,
    });

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {
    setAlarmMusic,
    setDefaultAlarmMusic
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FileUploadComponent);