import "./Backdrop.css";

const Backdrop = ({ show, click }) => {
    return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;

// import "./Backdrop.css";

// const Backdrop = ({ show, click }) => {
//     return show && <div className="backdrop" onClick={click}></div>;
// };

// export default Backdrop;