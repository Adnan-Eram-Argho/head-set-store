import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1>
                how react works?
            </h1>
            <p>React is a very popular js Library.It works using a syntactic sugar named jsx..React makes a copy of your dom and makes a virtual copy to compare the changes.If any value is changed in the main website then react compares it with the virtual one and remakes the changes</p>

            <div>
                <h1>how use state works</h1>
                <p>
                    Use state is a kind of react hook.Use state is a way of saving datas in js..You can take two parameters one to save the data and the other one is to set data.You can change the values if you like using the same keywords
                </p>
            </div>
        </div>

    );
};

export default Questions;
