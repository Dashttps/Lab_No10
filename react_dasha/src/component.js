import React from "react";
import f3 from "./img/f3.png";
import f4 from "./img/f4.png";
import f5 from "./img/f5.png";


const SectionFirstBlock = ({ ImageSource, Title, Text }) => {
    return (
        <div className="position-one">
            <img
                src={ImageSource}
                alt=""
                className="animate__animated animate__bounce animate__delay-2s"
            />
            <h2>{Title}</h2>
            <p>{Text}</p>
        </div>
    );
};


const SectionFirstTitle = ({Title}) => {
    return (
        <div className="section-first__title">
            <h1 className="title">
                {Title}
            </h1>
        </div>
    );
};


const SectionFirst = () => {
    return (
        <section className="section-first">
            <SectionFirstTitle Title="Что Вам необходимо?"/>
            <div className="section-first__container">
                <SectionFirstBlock
                    ImageSource={f3}
                    Title="Первый блок"
                    Text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <SectionFirstBlock
                    ImageSource={f4}
                    Title="Второй блок"
                    Text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <SectionFirstBlock
                    ImageSource={f5}
                    Title="Третий блок"
                    Text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
            </div>
        </section>
    );
};

export default SectionFirst;