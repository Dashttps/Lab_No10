import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






// import React from "react";
// import * as ReactDOM from "react-dom";
// // import { createRoot } from 'react-dom/client';

// const SectionFirstTitle = ({title}) => {
//     return (
//         <div className="section-firsttitle">
//             <h1 className="title animateanimated animatepulse animateinfinite">
//                 {title}
//             </h1>
//         </div>
//     );
// };
// const SectionFirstBlock = ({ imageSrc, title, text }) => {
//     return (
//         <div className="section-firstcontainer-block">
//             <img
//                 src={imageSrc}
//                 alt=""
//                 className="section-firstcontainer-img"
//             />
//             <h2>{title}</h2>
//             <p>{text}</p>
//         </div>
//     );
// };

// const SectionFirst = () => {
//     return (
//         <section className="section-first">
//             <SectionFirstTitle title="Что Вам необходимо?"/>
//             <div className="section-first__container">
//                 <SectionFirstBlock
//                     imageSrc="img/f3.png"
//                     title="Первый блок"
//                     text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
//                 />
//                 <SectionFirstBlock
//                     imageSrc="img/f4.png"
//                     title="Второй блок"
//                     text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
//                 />
//                 <SectionFirstBlock
//                     imageSrc="img/f5.png"
//                     title="Третий блок"
//                     text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
//                 />
//             </div>
//         </section>
//     );
// };



// const app = document.getElementById("app");

// ReactDOM.render(<SectionFirst/>, app);

// // const app = document.getElementById('app');
// // const root = createRoot(app);

// // root.render(<SectionFirst />);

// export default SectionFirst;