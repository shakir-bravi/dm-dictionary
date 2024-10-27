import React, { useState, useEffect } from 'react';
import "./Error.css";
import "./Dic_Content_Grid.css";
import Loading_skelton from './Loading_skelton';

export function Dic_Body_Content({ loading, data, error }) {
    const [meaningIndex, setMeaningIndex] = useState(0);
    const [synonymIndex, setSynonymIndex] = useState(0);
    const [antonymIndex, setAntonymIndex] = useState(0);
    const [exampleIndex, setExampleIndex] = useState(0);

    const handlePrev = (index, setIndex, length) => {
        setIndex((index - 1 + length) % length);
    };

    const handleNext = (index, setIndex, length) => {
        setIndex((index + 1) % length);
    };

    const renderContent = (content, index, setIndex) => {
        return (
            <div className="content-wrapper">
                <button className="nav-button" onClick={() => handlePrev(index, setIndex, content.length)}>❮</button>
                <div className="content-div">
                    <span>{content[index]}</span>
                </div>
                <button className="nav-button" onClick={() => handleNext(index, setIndex, content.length)}>❯</button>
            </div>
        );
    };

    useEffect(() => {
        setMeaningIndex(0);
        setSynonymIndex(0);
        setAntonymIndex(0);
        setExampleIndex(0);
    }, [data, error]);

    if (loading) {
        return <Loading_skelton/>
    }

    if (error && !loading) {
        return (
<>

            <div className="ErrorBody">
                <p className="the">The</p><br />
                <p className="word">Word</p><br />
                <p className="word"><i className="fa-solid fa-chevron-up"></i></p><br />
                <p className="Which_notFound"><i className="fa-solid fa-chevron-left"></i> <mark>{error}</mark> <i className="fa-solid fa-chevron-right"></i></p><br />
                <p className="word"><i className="fa-solid fa-chevron-down"></i></p><br />
                <p className="not">Not</p><br />
                <p className="Found">Found</p><br />
            </div>
            </>
        );
    }

    if (data && !loading) {
        const meanings = data.meanings.map(meaning => meaning.definitions.map(def => def.definition)).flat();
        const synonyms = data.meanings.map(meaning => meaning.synonyms).flat();
        const antonyms = data.meanings.map(meaning => meaning.antonyms).flat();
        const examples = data.meanings.map(meaning => meaning.definitions.map(def => def.example)).flat().filter(example => example);

        return (
            <>
            <div className="content_body">
                <div className="Word">
                    <h2><sup className="Sup_word">word:</sup> {data.word.toUpperCase()}</h2>
                </div>
                <div className="parent">
                    <fieldset>
                        <legend>Meaning <span className="legend-count">({meaningIndex + 1}/{meanings.length})</span></legend>
                        {meanings.length > 0 ? renderContent(meanings, meaningIndex, setMeaningIndex) :
                            <div className="content-wrapper">
                                <button className="nav-button disabled" disabled>❮</button>
                                <div className="content-div">
                                    <p className='Disbale_meaning'> The Meanings of {data.word} Not Found ! <br /> :)</p>
                                    <mark className='markOf_index disable_mark'>0/0</mark>
                                </div>
                                <button className="nav-button disabled" disabled>❯</button>
                            </div>}
                    </fieldset>
                    <fieldset>
                        <legend>Synonym <span className="legend-count">({synonymIndex + 1}/{synonyms.length})</span></legend>
                        {synonyms.length > 0 ? renderContent(synonyms, synonymIndex, setSynonymIndex):
                            <div className="content-wrapper">
                                <button className="nav-button disabled" disabled>❮</button>
                                <div className="content-div">
                                    <p className='Disbale_meaning'>
                                        The Synonyms of {data.word.toUpperCase()} are Not Found !
                                    </p>
                                </div>
                                <button className="nav-button disabled" disabled>❯</button>
                            </div>
                        }
                    </fieldset>
                    <fieldset>
                        <legend>Antonym <span className="legend-count">({antonymIndex + 1}/{antonyms.length})</span></legend>
                        {antonyms.length > 0 ? renderContent(antonyms, antonymIndex, setAntonymIndex) :
                            <div className="content-wrapper">
                                <button className="nav-button disabled" disabled>❮</button>
                                <div className="content-div">
                                    <p className='Disbale_meaning'> The Antonyms of {data.word.toUpperCase()} are Not Found !</p>
                                </div>
                                <button className="nav-button disabled" disabled>❯</button>
                            </div>
                        }
                    </fieldset>
                    <fieldset>
                        <legend>Example <span className="legend-count">({exampleIndex + 1}/{examples.length})</span></legend>
                        {examples.length > 0 ? renderContent(examples, exampleIndex, setExampleIndex) :
                            <div className="content-wrapper">
                                <button className="nav-button disabled" disabled>❮</button>
                                <div className="content-div">
                                    <p className='Disbale_meaning'> The Examples of {data.word.toUpperCase()} are Not Found !</p>
                                </div>
                                <button className="nav-button disabled" disabled>❯</button>
                            </div>
                        }
                    </fieldset>
                </div>
                </div>
            </>
        );
    }

    return null;
}
