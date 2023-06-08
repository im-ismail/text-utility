import React, { useEffect, useState } from 'react';

const TextUtils = () => {

    const [text, setText] = useState('');
    const [sentenceLength, setSentenceLength] = useState(0)
    const [wordLength, setWordLength] = useState(0)
    const [textLength, setTextLength] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    // converting all text to uppercase
    const convertToUpperCase = (e) => {
        setText(text.toUpperCase());
    };

    // converting all text to lowercase
    const convertToLowerCase = (e) => {
        setText(text.toLowerCase());
    };

    // not using
    const handleCapitalizes = () => {
        // Spliting all the sentence from text string to sentences array
        // Converting to lower case incase some letters or words are in upper case
        let sentences = text.toLowerCase().split('. ');
        // Removing '.' from last sentence if it is present
        for (let x = sentences.length - 1; x <= sentences.length - 1; x++) {
            // spliting last sentence if more than one '.' inside sentence and filtering for dot present on last of the sentence
            let last = sentences[x].split('.').filter(item => item.length !== 0);
            // converting to a single sentence
            last = last.map(item => item + '.').join('');
            // removing '.' from last part of the sentence
            last = last.slice(0, last.length - 1);
            sentences[x] = last;
        }
        // Capitalising every sentence and converting the sentences array to the sentences string and adding a '.' after every sentences
        sentences = sentences.map(item => item.charAt(0).toUpperCase() + item.substring(1) + '.').join(' ');
        setText(sentences);
    };

    // capitalizing sentences
    const capitalizeEachSentense = () => {
        // text.replace(/.+?[.?!](\s|$)/g, function (txt){
        //     txt = txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        //     console.log(txt);
        // })
        // let s = text.split(/[.?!](\s+)/)
        // console.log(s)

        //It's working perfectly
        var txt = text.split(/(.+?[.?!](\s|$))/g);
        for (let i = 0; i < txt.length; i++) {
            if (txt[i].length > 1) {
                txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].substring(1)//.toLowerCase();
            } else {
                txt[i] = txt[i].charAt(0).toUpperCase();
            };
        };
        txt = txt.join('').replace(/\s\s/g, ' ');
        setText(txt);
    };

    // removing unnecessary spaces
    const removeExtraSpaces = (e) => {
        let newText = text.split(/[ ]+/).join(' ');
        setText(newText);
    };

    // copying text to clipboard
    const copyText = () => {
        navigator.clipboard.writeText(text);
    }

    // clearing text field
    const clearTextField = () => {
        setText('');
    };

    useEffect(() => {
        // Setting sentence length
        setSentenceLength(text.split(/[.?!]\s/).filter(item => item.length !== 0).length);

        //setting word length
        let words = text.split(/\s+/).filter(item => item.length !== 0).length;
        setWordLength(words);

        // setting text length
        setTextLength(text.split(' ').join('').length);

        // Calculating reading time in seconds
        setSeconds(Math.round((words * 0.24) * 100) / 100
            + ' - ' + Math.round((words * 0.3) * 100) / 100);

        // Calculating reading time in minutes
        setMinutes(Math.round((words * 0.004) * 100) / 100
            + ' - ' + Math.round((words * 0.005) * 100) / 100);
    }, [text]);


    return (
        <>
            <div className='container'>
                <h1 className='title'>Text Utility App</h1>
                <div>
                    <textarea name="text" id="text" cols="50" rows="15" placeholder='Start typing here to see the results...' onChange={handleChange} value={text}></textarea>
                </div>
                <button className='btn' onClick={convertToUpperCase}>Uppercase</button>
                <button className='btn' onClick={convertToLowerCase}>Lowercase</button>
                <button className='btn' onClick={capitalizeEachSentense}>Capitalize</button>
                <button className='btn' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn' onClick={copyText}>Copy</button>
                <button className='btn' onClick={clearTextField}>Clear</button>
                <div className='analyze'>
                    <h3>Paragraph Analizer</h3>
                    <p>
                        <span>
                            This paragraph contains <b>{sentenceLength}</b> sentences,
                        </span> <span>
                            <b>{wordLength}</b> words
                        </span>&nbsp;
                        <span>
                            and <b>{textLength}</b> letters.
                        </span>
                    </p>
                    <p>
                        Approximate time needed to read this paragraph is <b>{seconds}</b> Seconds or <b>{minutes}</b> Minutes.
                    </p>
                </div>
                <div className='preview'>
                    <h4>Preview</h4>
                    <p>{text ? text : <i>Enter something to preview here...</i>}</p>
                </div>
            </div>
        </>
    )
};

export default TextUtils;